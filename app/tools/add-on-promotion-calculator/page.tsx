"use client";

import Link from "next/link";
import { ApplyExampleButton } from "@/components/apply-example-button";
import { CalculatorAssumptionList } from "@/components/calculator-assumption-list";
import { CalculatorResetButton } from "@/components/calculator-reset-button";
import { CopyCalculatorLinkButton } from "@/components/copy-calculator-link-button";
import { CopyResultButton } from "@/components/copy-result-button";
import { useEffect, useMemo, useRef, useState } from "react";
import { getSharedNumberParam } from "@/lib/calculator-share-params";
import { trackEvent } from "@/lib/gtag";

type NumberInputProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  suffix?: string;
  help?: string;
};

function formatMoney(value: number) {
  return new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

function formatPercent(value: number) {
  if (!Number.isFinite(value)) return "0.0%";
  return `${value.toFixed(1)}%`;
}

function NumberInput({
  label,
  value,
  onChange,
  suffix = "元",
  help,
}: NumberInputProps) {
  const inputMode = suffix === "%" ? "decimal" : "numeric";
  const step = suffix === "%" ? "0.1" : "1";
  const placeholder =
    suffix === "%" ? "請輸入百分比" : `請輸入${suffix}數值`;

  return (
    <label className="block">
      <span className="text-sm font-medium text-stone-800">{label}</span>
      <div className="mt-2 flex overflow-hidden rounded-xl border border-stone-300 bg-white focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
        <input
          type="number"
          value={value}
          min="0"
          inputMode={inputMode}
          step={step}
          placeholder={placeholder}
          aria-label={`${label}，單位：${suffix}`}
          onChange={(event) => onChange(Number(event.target.value))}
          className="w-full px-4 py-3 outline-none"
        />
        <span className="flex items-center bg-stone-100 px-4 text-sm text-stone-600">
          {suffix}
        </span>
      </div>
      {help ? <p className="mt-1 text-xs text-stone-500">{help}</p> : null}
    </label>
  );
}

export default function AddOnPromotionCalculatorPage() {
  const [threshold, setThreshold] = useState(150);
  const [addOnPrice, setAddOnPrice] = useState(40);
  const [addOnCost, setAddOnCost] = useState(18);
  const [averageOrder, setAverageOrder] = useState(120);
  const [addOnRate, setAddOnRate] = useState(30);
  const [dailyOrders, setDailyOrders] = useState(80);


  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const searchParams = new URLSearchParams(window.location.search);

      const sharedThreshold = getSharedNumberParam(searchParams, "threshold");
      if (sharedThreshold !== null) {
        setThreshold(sharedThreshold);
      }

      const sharedAddOnPrice = getSharedNumberParam(searchParams, "addOnPrice");
      if (sharedAddOnPrice !== null) {
        setAddOnPrice(sharedAddOnPrice);
      }

      const sharedAddOnCost = getSharedNumberParam(searchParams, "addOnCost");
      if (sharedAddOnCost !== null) {
        setAddOnCost(sharedAddOnCost);
      }

      const sharedAverageOrder = getSharedNumberParam(searchParams, "averageOrder");
      if (sharedAverageOrder !== null) {
        setAverageOrder(sharedAverageOrder);
      }

      const sharedAddOnRate = getSharedNumberParam(searchParams, "addOnRate");
      if (sharedAddOnRate !== null) {
        setAddOnRate(sharedAddOnRate);
      }

      const sharedDailyOrders = getSharedNumberParam(searchParams, "dailyOrders");
      if (sharedDailyOrders !== null) {
        setDailyOrders(sharedDailyOrders);
      }

    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const trackedFieldsRef = useRef<Set<string>>(new Set());

  function trackCalculatorField(fieldName: string) {
    if (trackedFieldsRef.current.has(fieldName)) {
      return;
    }

    trackedFieldsRef.current.add(fieldName);
    trackEvent("use_calculator", {
      tool_id: "add_on_promotion",
      field_name: fieldName,
    });
  }

  function applyExampleValues() {
    setThreshold(150);
    setAddOnPrice(40);
    setAddOnCost(18);
    setAverageOrder(120);
    setAddOnRate(30);
    setDailyOrders(80);
  }

  function resetCalculator() {
    setThreshold(0);
    setAddOnPrice(0);
    setAddOnCost(0);
    setAverageOrder(0);
    setAddOnRate(0);
    setDailyOrders(0);
    trackedFieldsRef.current.clear();
  }

  const result = useMemo(() => {
    const profitPerAddOn = addOnPrice - addOnCost;
    const marginRate = addOnPrice > 0 ? (profitPerAddOn / addOnPrice) * 100 : 0;
    const estimatedAddOnOrders = dailyOrders * (addOnRate / 100);
    const dailyExtraProfit = estimatedAddOnOrders * profitPerAddOn;
    const monthlyExtraProfit = dailyExtraProfit * 30;
    const gapToThreshold = Math.max(threshold - averageOrder, 0);

    let verdict = "可以測試";
    let verdictDetail = "這個活動有正毛利，可以先用小規模方式測試客人反應。";

    if (profitPerAddOn <= 0) {
      verdict = "不建議";
      verdictDetail = "加購價低於或等於成本，每賣一份都沒有毛利，建議調高加購價或降低成本。";
    } else if (marginRate < 30) {
      verdict = "要小心";
      verdictDetail = "毛利率偏低，除非能明顯提高客單價或帶動回購，否則活動效果可能有限。";
    } else if (marginRate >= 50) {
      verdict = "很適合";
      verdictDetail = "加購商品毛利率不錯，若加購率穩定，這類活動有機會提升每日毛利。";
    }

    return {
      profitPerAddOn,
      marginRate,
      estimatedAddOnOrders,
      dailyExtraProfit,
      monthlyExtraProfit,
      gapToThreshold,
      verdict,
      verdictDetail,
    };
  }, [threshold, addOnPrice, addOnCost, averageOrder, addOnRate, dailyOrders]);


  const assumptionItems = [
    { label: "單筆消費滿額門檻", value: formatMoney(threshold) },
    { label: "加購商品售價", value: formatMoney(addOnPrice) },
    { label: "加購商品成本", value: formatMoney(addOnCost) },
    { label: "原本平均客單價", value: formatMoney(averageOrder) },
    { label: "預估加購率", value: formatPercent(addOnRate) },
    { label: "每日訂單數", value: `${dailyOrders} 單` },
  ];

  const shareLinkParams = [
    { key: "threshold", value: threshold },
    { key: "addOnPrice", value: addOnPrice },
    { key: "addOnCost", value: addOnCost },
    { key: "averageOrder", value: averageOrder },
    { key: "addOnRate", value: addOnRate },
    { key: "dailyOrders", value: dailyOrders },
  ];

  const resultSummaryText = [
    "開店小工具箱｜滿額加購活動試算報告",
    "",
    "一、目前試算假設",
    ...assumptionItems.map((item) => `${item.label}：${item.value}`),
    "",
    "二、試算結果",
    `每份加購毛利：${formatMoney(result.profitPerAddOn)}`,
    `加購商品毛利率：${formatPercent(result.marginRate)}`,
    `預估每日加購單數：${result.estimatedAddOnOrders.toFixed(1)} 單`,
    `預估每日增加毛利：${formatMoney(result.dailyExtraProfit)}`,
    `預估每月增加毛利：${formatMoney(result.monthlyExtraProfit)}`,
    "",
    "三、活動判斷",
    `${result.verdict}：${result.verdictDetail}`,
    "",
    "提醒：本結果由開店小工具箱產生，僅供經營試算參考。實際活動仍需搭配商圈、品項毛利與現場執行能力評估。",
  ].join("\n");

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold text-orange-700">
            餐飲促銷試算工具
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            滿額加購活動計算器
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            輸入滿額門檻、加購商品售價、成本、加購率與每日訂單數，
            快速估算餐飲店、小吃店、飲料店滿額加購活動毛利會不會賺錢。
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">輸入活動資料</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">欄位右側會標示單位；不適用的金額、比例或數量可以填 0，手機輸入時會優先顯示數字鍵盤。</p>
            <ApplyExampleButton
              toolId="add_on_promotion"
              description="先用「滿 150 元、40 元加購」的常見活動範例，快速查看加購率與成本對毛利的影響。"
              onApply={applyExampleValues}
            />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <NumberInput
                label="單筆消費滿額門檻"
                value={threshold}
                onChange={(value) => {
                  trackCalculatorField("threshold");
                  setThreshold(value);
                }}
                help="例如：滿 150 元可以加購"
              />

              <NumberInput
                label="加購商品售價"
                value={addOnPrice}
                onChange={(value) => {
                  trackCalculatorField("add_on_price");
                  setAddOnPrice(value);
                }}
                help="例如：飲料加購價 40 元"
              />

              <NumberInput
                label="加購商品成本"
                value={addOnCost}
                onChange={(value) => {
                  trackCalculatorField("add_on_cost");
                  setAddOnCost(value);
                }}
                help="包含食材、包材等直接成本"
              />

              <NumberInput
                label="原本平均客單價"
                value={averageOrder}
                onChange={(value) => {
                  trackCalculatorField("average_order");
                  setAverageOrder(value);
                }}
                help="用來判斷客人距離滿額還差多少"
              />

              <NumberInput
                label="預估加購率"
                value={addOnRate}
                onChange={(value) => {
                  trackCalculatorField("add_on_rate");
                  setAddOnRate(value);
                }}
                suffix="%"
                help="例如：100 筆訂單中約 30 筆會加購"
              />

              <NumberInput
                label="每日訂單數"
                value={dailyOrders}
                onChange={(value) => {
                  trackCalculatorField("daily_orders");
                  setDailyOrders(value);
                }}
                suffix="單"
                help="估算每日與每月增加毛利"
              />
            </div>

            <CalculatorResetButton toolId="add_on_promotion" onReset={resetCalculator} />
          </div>

          <aside className="rounded-3xl bg-stone-900 p-6 text-white shadow-sm">
            <h2 className="text-2xl font-bold">試算結果</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">每份加購毛利</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.profitPerAddOn)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">加購商品毛利率</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatPercent(result.marginRate)}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">預估每日加購單數</p>
                  <p className="mt-1 text-2xl font-bold">
                    {result.estimatedAddOnOrders.toFixed(1)} 單
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">預估每日增加毛利</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.dailyExtraProfit)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">預估每月增加毛利</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.monthlyExtraProfit)}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-orange-500 p-4 text-stone-950">
                <p className="text-sm font-semibold">活動判斷</p>
                <p className="mt-1 text-3xl font-black">{result.verdict}</p>
                <p className="mt-3 text-sm leading-6">{result.verdictDetail}</p>
              </div>


              <CalculatorAssumptionList items={assumptionItems} />

              <CopyResultButton
                text={resultSummaryText}
                toolId="add_on_promotion"
              />

              <CopyCalculatorLinkButton
                toolId="add_on_promotion"
                params={shareLinkParams}
              />
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">計算公式</h2>

          <div className="mt-5 space-y-3 text-stone-700">
            <p>每份加購毛利 = 加購商品售價 − 加購商品成本</p>
            <p>加購商品毛利率 = 每份加購毛利 ÷ 加購商品售價 × 100%</p>
            <p>預估每日加購單數 = 每日訂單數 × 預估加購率</p>
            <p>預估每日增加毛利 = 預估每日加購單數 × 每份加購毛利</p>
            <p>預估每月增加毛利 = 預估每日增加毛利 × 30 天</p>
          </div>

          <div className="mt-6 rounded-2xl bg-stone-100 p-5">
            <h3 className="font-bold">範例</h3>
            <p className="mt-3 leading-7 text-stone-700">
              如果你設定「滿 150 元，加 40 元可加購一瓶飲料」，
              而每瓶成本是 18 元，代表每瓶加購毛利是 22 元，
              毛利率是 55%。如果每天 80 筆訂單、其中 30% 會加購，
              預估每日可增加 528 元毛利，每月約增加 15,840 元毛利。
            </p>
          </div>

          <p className="mt-6 text-sm leading-6 text-stone-500">
            本工具僅供活動試算，實際結果會受到來客數、商品吸引力、門市動線、
            員工推薦能力、季節與成本變動等因素影響。
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-orange-700">相關文章</p>
          <h2 className="mt-2 text-2xl font-bold">延伸閱讀</h2>
          <p className="mt-4 leading-7 text-stone-700">
            搭配實際活動範例，了解加購商品毛利、加購率與每日增加毛利該怎麼評估。
          </p>
          <Link
            href="/blog/add-on-promotion-example"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            滿 150 元加購 40 元划算嗎？餐飲店滿額加購活動怎麼算
          </Link>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">常見問題</h2>
          <div className="mt-5 grid gap-5">
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q1：滿額加購活動適合所有餐飲店嗎？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                不一定。若加購商品毛利太低、製作流程太複雜，或尖峰時段會拖慢出餐速度，就要先小規模測試。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q2：加購率要怎麼估算？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                剛開始可以用 10%、20%、30% 做保守、中間、樂觀三種情境。活動上線後，再用實際訂單紀錄修正。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q3：加購商品成本要包含哪些？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                建議至少包含食材、杯瓶、包材、封膜、袋子與直接耗材。成本算得越完整，試算結果越接近真實狀況。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q4：滿額門檻要怎麼設定？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                可以從平均客單價往上加一點點。若平均客單價是 120 元，滿 150 元通常比滿 200 元更容易讓客人達成。
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}