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

export default function RestaurantMarginCalculatorPage() {
  const [price, setPrice] = useState(100);
  const [foodCost, setFoodCost] = useState(35);
  const [packagingCost, setPackagingCost] = useState(5);
  const [platformFeeRate, setPlatformFeeRate] = useState(0);
  const [targetMarginRate, setTargetMarginRate] = useState(60);


  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const searchParams = new URLSearchParams(window.location.search);

      const sharedPrice = getSharedNumberParam(searchParams, "price");
      if (sharedPrice !== null) {
        setPrice(sharedPrice);
      }

      const sharedFoodCost = getSharedNumberParam(searchParams, "foodCost");
      if (sharedFoodCost !== null) {
        setFoodCost(sharedFoodCost);
      }

      const sharedPackagingCost = getSharedNumberParam(searchParams, "packagingCost");
      if (sharedPackagingCost !== null) {
        setPackagingCost(sharedPackagingCost);
      }

      const sharedPlatformFeeRate = getSharedNumberParam(searchParams, "platformFeeRate");
      if (sharedPlatformFeeRate !== null) {
        setPlatformFeeRate(sharedPlatformFeeRate);
      }

      const sharedTargetMarginRate = getSharedNumberParam(searchParams, "targetMarginRate");
      if (sharedTargetMarginRate !== null) {
        setTargetMarginRate(sharedTargetMarginRate);
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
      tool_id: "restaurant_margin",
      field_name: fieldName,
    });
  }

  function applyExampleValues() {
    setPrice(120);
    setFoodCost(42);
    setPackagingCost(8);
    setPlatformFeeRate(0);
    setTargetMarginRate(60);
  }

  function resetCalculator() {
    setPrice(0);
    setFoodCost(0);
    setPackagingCost(0);
    setPlatformFeeRate(0);
    setTargetMarginRate(0);
    trackedFieldsRef.current.clear();
  }

  const result = useMemo(() => {
    const totalCost = foodCost + packagingCost;
    const grossProfit = price - totalCost;
    const marginRate = price > 0 ? (grossProfit / price) * 100 : 0;

    const platformFee = price * (platformFeeRate / 100);
    const profitAfterPlatformFee = price - totalCost - platformFee;
    const marginAfterPlatformFee =
      price > 0 ? (profitAfterPlatformFee / price) * 100 : 0;

    const suggestedPrice =
      targetMarginRate >= 100
        ? 0
        : totalCost / (1 - targetMarginRate / 100);

    let verdict = "可以接受";
    let verdictDetail = "目前毛利率有基本空間，但仍要注意人事、租金、水電與耗損。";

    if (marginRate < 40) {
      verdict = "毛利偏低";
      verdictDetail =
        "這個售價扣掉食材與包材後，毛利空間偏低。若還有租金、人事與外送抽成，可能會很吃緊。";
    } else if (marginRate >= 60) {
      verdict = "毛利不錯";
      verdictDetail =
        "單看食材與包材成本，這個商品毛利率不錯，可以作為主力商品或活動搭配商品。";
    }

    if (platformFeeRate > 0 && marginAfterPlatformFee < 30) {
      verdict = "外送要小心";
      verdictDetail =
        "加入平台抽成後，毛利率明顯下降。若是外送平台販售，建議重新設定外送售價。";
    }

    return {
      totalCost,
      grossProfit,
      marginRate,
      platformFee,
      profitAfterPlatformFee,
      marginAfterPlatformFee,
      suggestedPrice,
      verdict,
      verdictDetail,
    };
  }, [price, foodCost, packagingCost, platformFeeRate, targetMarginRate]);


  const assumptionItems = [
    { label: "商品售價", value: formatMoney(price) },
    { label: "食材成本", value: formatMoney(foodCost) },
    { label: "包材成本", value: formatMoney(packagingCost) },
    { label: "平台抽成", value: formatPercent(platformFeeRate) },
    { label: "目標毛利率", value: formatPercent(targetMarginRate) },
  ];

  const shareLinkParams = [
    { key: "price", value: price },
    { key: "foodCost", value: foodCost },
    { key: "packagingCost", value: packagingCost },
    { key: "platformFeeRate", value: platformFeeRate },
    { key: "targetMarginRate", value: targetMarginRate },
  ];

  const resultSummaryText = [
    "開店小工具箱｜餐飲毛利率試算報告",
    "",
    "一、目前試算假設",
    ...assumptionItems.map((item) => `${item.label}：${item.value}`),
    "",
    "二、試算結果",
    `總直接成本：${formatMoney(result.totalCost)}`,
    `單品毛利：${formatMoney(result.grossProfit)}`,
    `毛利率：${formatPercent(result.marginRate)}`,
    `平台抽成金額：${formatMoney(result.platformFee)}`,
    `抽成後毛利：${formatMoney(result.profitAfterPlatformFee)}`,
    `抽成後毛利率：${formatPercent(result.marginAfterPlatformFee)}`,
    `目標毛利建議售價：${formatMoney(result.suggestedPrice)}`,
    "",
    "三、商品判斷",
    `${result.verdict}：${result.verdictDetail}`,
    "",
    "提醒：本結果由開店小工具箱產生，僅供經營試算參考。實際定價仍需考慮人事、租金、水電、耗損與市場接受度。",
  ].join("\n");

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold text-orange-700">
            餐飲定價試算工具
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            餐飲毛利率計算器
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            輸入商品售價、食材成本、包材成本與平台抽成，
            快速計算餐點毛利、毛利率，以及是否達到你的目標毛利。
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">輸入商品資料</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">欄位右側會標示單位；不適用的金額、比例或數量可以填 0，手機輸入時會優先顯示數字鍵盤。</p>
            <ApplyExampleButton
              toolId="restaurant_margin"
              description="先用一份 120 元餐點的成本範例，快速查看單品毛利率與建議售價。"
              onApply={applyExampleValues}
            />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <NumberInput
                label="商品售價"
                value={price}
                onChange={(value) => {
                  trackCalculatorField("price");
                  setPrice(value);
                }}
                help="例如：一份餐點售價 100 元"
              />

              <NumberInput
                label="食材成本"
                value={foodCost}
                onChange={(value) => {
                  trackCalculatorField("food_cost");
                  setFoodCost(value);
                }}
                help="主食、配料、醬料等直接成本"
              />

              <NumberInput
                label="包材成本"
                value={packagingCost}
                onChange={(value) => {
                  trackCalculatorField("packaging_cost");
                  setPackagingCost(value);
                }}
                help="餐盒、杯子、袋子、封膜等成本"
              />

              <NumberInput
                label="平台抽成"
                value={platformFeeRate}
                onChange={(value) => {
                  trackCalculatorField("platform_fee_rate");
                  setPlatformFeeRate(value);
                }}
                suffix="%"
                help="沒有外送平台就填 0"
              />

              <NumberInput
                label="目標毛利率"
                value={targetMarginRate}
                onChange={(value) => {
                  trackCalculatorField("target_margin_rate");
                  setTargetMarginRate(value);
                }}
                suffix="%"
                help="用來反推建議售價，例如 60%"
              />
            </div>

            <CalculatorResetButton toolId="restaurant_margin" onReset={resetCalculator} />
          </div>

          <aside className="rounded-3xl bg-stone-900 p-6 text-white shadow-sm">
            <h2 className="text-2xl font-bold">試算結果</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">總直接成本</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.totalCost)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">單品毛利</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.grossProfit)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">毛利率</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatPercent(result.marginRate)}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">平台抽成金額</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.platformFee)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">抽成後毛利</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.profitAfterPlatformFee)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">抽成後毛利率</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatPercent(result.marginAfterPlatformFee)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">目標毛利建議售價</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.suggestedPrice)}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-orange-500 p-4 text-stone-950">
                <p className="text-sm font-semibold">商品判斷</p>
                <p className="mt-1 text-3xl font-black">{result.verdict}</p>
                <p className="mt-3 text-sm leading-6">{result.verdictDetail}</p>
              </div>


              <CalculatorAssumptionList items={assumptionItems} />

              <CopyResultButton
                text={resultSummaryText}
                toolId="restaurant_margin"
              />

              <CopyCalculatorLinkButton
                toolId="restaurant_margin"
                params={shareLinkParams}
              />
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">計算公式</h2>

          <div className="mt-5 space-y-3 text-stone-700">
            <p>總直接成本 = 食材成本 + 包材成本</p>
            <p>單品毛利 = 商品售價 − 總直接成本</p>
            <p>毛利率 = 單品毛利 ÷ 商品售價 × 100%</p>
            <p>平台抽成金額 = 商品售價 × 平台抽成比例</p>
            <p>抽成後毛利 = 商品售價 − 總直接成本 − 平台抽成金額</p>
            <p>目標毛利建議售價 = 總直接成本 ÷ 目標成本率</p>
          </div>

          <div className="mt-6 rounded-2xl bg-stone-100 p-5">
            <h3 className="font-bold">範例</h3>
            <p className="mt-3 leading-7 text-stone-700">
              如果一份餐點售價 100 元，食材成本 35 元、包材成本 5 元，
              總直接成本就是 40 元，單品毛利為 60 元，毛利率為 60%。
              如果再加入 30% 的外送平台抽成，抽成金額為 30 元，
              抽成後毛利只剩 30 元，抽成後毛利率為 30%。
            </p>
          </div>

          <p className="mt-6 text-sm leading-6 text-stone-500">
            本工具僅供餐飲商品定價與毛利試算。實際經營仍需考慮人事、租金、
            水電、設備折舊、耗損、稅務與平台合約條件。
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-orange-700">相關文章</p>
          <h2 className="mt-2 text-2xl font-bold">延伸閱讀</h2>
          <p className="mt-4 leading-7 text-stone-700">
            用定價範例了解食材成本、包材成本、平台抽成與目標毛利率如何影響商品售價。
          </p>
          <Link
            href="/blog/restaurant-margin-how-to-calculate"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            餐飲毛利率怎麼算？小吃店、飲料店定價前一定要看的毛利公式
          </Link>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">常見問題</h2>
          <div className="mt-5 grid gap-5">
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q1：餐飲毛利率和淨利率差在哪？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                毛利率只看商品售價扣掉直接成本後的比例；淨利率還要再扣掉人事、租金、水電、設備、行銷與稅務等成本。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q2：包材成本要算進去嗎？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                建議要算。外帶與外送商品常常會用到餐盒、杯子、袋子、封膜與醬料盒，不算包材會高估毛利率。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q3：外送平台抽成要怎麼算？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                可以用商品售價乘上平台抽成比例。若售價 100 元、抽成 30%，平台抽成金額就是 30 元。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q4：毛利率太低怎麼改善？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                可以檢查食材份量、包材規格、菜單定價、套餐搭配與外送售價，不一定只能單純漲價。
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}