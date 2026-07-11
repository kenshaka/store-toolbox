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
import { getToolByKey } from "@/lib/tools";

const tool = getToolByKey("menuPriceIncreaseCalculator");

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
  const placeholder = suffix === "%" ? "請輸入百分比" : `請輸入${suffix}數值`;

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

export default function MenuPriceIncreaseCalculatorPage() {
  const [currentPrice, setCurrentPrice] = useState(100);
  const [currentCost, setCurrentCost] = useState(45);
  const [newCost, setNewCost] = useState(52);
  const [increaseAmount, setIncreaseAmount] = useState(10);
  const [currentDailySales, setCurrentDailySales] = useState(80);
  const [estimatedDailySales, setEstimatedDailySales] = useState(72);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const searchParams = new URLSearchParams(window.location.search);

      const sharedCurrentPrice = getSharedNumberParam(
        searchParams,
        "currentPrice",
      );
      if (sharedCurrentPrice !== null) {
        setCurrentPrice(sharedCurrentPrice);
      }

      const sharedCurrentCost = getSharedNumberParam(
        searchParams,
        "currentCost",
      );
      if (sharedCurrentCost !== null) {
        setCurrentCost(sharedCurrentCost);
      }

      const sharedNewCost = getSharedNumberParam(searchParams, "newCost");
      if (sharedNewCost !== null) {
        setNewCost(sharedNewCost);
      }

      const sharedIncreaseAmount = getSharedNumberParam(
        searchParams,
        "increaseAmount",
      );
      if (sharedIncreaseAmount !== null) {
        setIncreaseAmount(sharedIncreaseAmount);
      }

      const sharedCurrentDailySales = getSharedNumberParam(
        searchParams,
        "currentDailySales",
      );
      if (sharedCurrentDailySales !== null) {
        setCurrentDailySales(sharedCurrentDailySales);
      }

      const sharedEstimatedDailySales = getSharedNumberParam(
        searchParams,
        "estimatedDailySales",
      );
      if (sharedEstimatedDailySales !== null) {
        setEstimatedDailySales(sharedEstimatedDailySales);
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
      tool_id: "menu_price_increase",
      field_name: fieldName,
    });
  }

  function applyExampleValues() {
    setCurrentPrice(100);
    setCurrentCost(45);
    setNewCost(52);
    setIncreaseAmount(10);
    setCurrentDailySales(80);
    setEstimatedDailySales(72);
  }

  function resetCalculator() {
    setCurrentPrice(0);
    setCurrentCost(0);
    setNewCost(0);
    setIncreaseAmount(0);
    setCurrentDailySales(0);
    setEstimatedDailySales(0);
    trackedFieldsRef.current.clear();
  }

  const result = useMemo(() => {
    const newPrice = currentPrice + increaseAmount;
    const increaseRate =
      currentPrice > 0 ? (increaseAmount / currentPrice) * 100 : 0;

    const currentProfitPerItem = currentPrice - currentCost;
    const noIncreaseProfitPerItem = currentPrice - newCost;
    const newProfitPerItem = newPrice - newCost;

    const currentMarginRate =
      currentPrice > 0 ? (currentProfitPerItem / currentPrice) * 100 : 0;
    const noIncreaseMarginRate =
      currentPrice > 0 ? (noIncreaseProfitPerItem / currentPrice) * 100 : 0;
    const newMarginRate =
      newPrice > 0 ? (newProfitPerItem / newPrice) * 100 : 0;

    const costIncreaseAmount = newCost - currentCost;
    const currentDailyProfit = currentProfitPerItem * currentDailySales;
    const newDailyProfit = newProfitPerItem * estimatedDailySales;
    const dailyProfitDifference = newDailyProfit - currentDailyProfit;
    const monthlyProfitDifference = dailyProfitDifference * 30;

    const breakEvenDailySales =
      newProfitPerItem > 0
        ? Math.ceil(currentDailyProfit / newProfitPerItem)
        : 0;
    const salesBuffer =
      newProfitPerItem > 0 ? estimatedDailySales - breakEvenDailySales : 0;

    let verdict = "可以測試";
    let verdictDetail =
      "漲價後仍有正毛利，可以先觀察銷量變化，再決定是否擴大到其他品項。";

    if (newProfitPerItem <= 0) {
      verdict = "不建議";
      verdictDetail =
        "漲價後售價仍低於或等於成本，每賣一份都沒有毛利。建議重新檢查成本或調高售價。";
    } else if (dailyProfitDifference < 0) {
      verdict = "要小心";
      verdictDetail =
        "依照目前預估，漲價後每日總毛利仍低於原本狀態。可能是漲幅不夠，或預估銷量下降太多。";
    } else if (newMarginRate < 35) {
      verdict = "毛利偏低";
      verdictDetail =
        "漲價後每日毛利有改善，但單品毛利率仍偏低。建議再檢查食材、包材、份量或外送平台抽成。";
    } else if (dailyProfitDifference > 0) {
      verdict = "有機會";
      verdictDetail =
        "依照目前假設，漲價後每日總毛利會增加。建議先從部分品項或小幅調整開始測試。";
    }

    return {
      newPrice,
      increaseRate,
      currentProfitPerItem,
      noIncreaseProfitPerItem,
      newProfitPerItem,
      currentMarginRate,
      noIncreaseMarginRate,
      newMarginRate,
      costIncreaseAmount,
      currentDailyProfit,
      newDailyProfit,
      dailyProfitDifference,
      monthlyProfitDifference,
      breakEvenDailySales,
      salesBuffer,
      verdict,
      verdictDetail,
    };
  }, [
    currentPrice,
    currentCost,
    newCost,
    increaseAmount,
    currentDailySales,
    estimatedDailySales,
  ]);

  const assumptionItems = [
    { label: "目前售價", value: formatMoney(currentPrice) },
    { label: "目前單品成本", value: formatMoney(currentCost) },
    { label: "成本上漲後單品成本", value: formatMoney(newCost) },
    { label: "預計調漲金額", value: formatMoney(increaseAmount) },
    { label: "目前每日銷量", value: `${currentDailySales} 份` },
    { label: "漲價後預估每日銷量", value: `${estimatedDailySales} 份` },
  ];

  const shareLinkParams = [
    { key: "currentPrice", value: currentPrice },
    { key: "currentCost", value: currentCost },
    { key: "newCost", value: newCost },
    { key: "increaseAmount", value: increaseAmount },
    { key: "currentDailySales", value: currentDailySales },
    { key: "estimatedDailySales", value: estimatedDailySales },
  ];

  const resultSummaryText = [
    "開店小工具箱｜菜單漲價試算報告",
    "",
    "一、目前試算假設",
    ...assumptionItems.map((item) => `${item.label}：${item.value}`),
    "",
    "二、試算結果",
    `漲價後售價：${formatMoney(result.newPrice)}`,
    `漲價幅度：約 ${formatPercent(result.increaseRate)}`,
    `目前每份毛利：${formatMoney(result.currentProfitPerItem)}`,
    `漲價後每份毛利：${formatMoney(result.newProfitPerItem)}`,
    `漲價後毛利率：${formatPercent(result.newMarginRate)}`,
    `目前每日毛利：${formatMoney(result.currentDailyProfit)}`,
    `漲價後每日毛利：${formatMoney(result.newDailyProfit)}`,
    `每日毛利差額：${formatMoney(result.dailyProfitDifference)}`,
    `每月毛利差額：約 ${formatMoney(result.monthlyProfitDifference)}`,
    `打平所需每日銷量：${result.breakEvenDailySales} 份`,
    "",
    "三、漲價判斷",
    `${result.verdict}：${result.verdictDetail}`,
    "",
    "提醒：本結果由開店小工具箱產生，僅供經營試算參考。實際漲價仍需搭配客群接受度、競品價格與菜單結構評估。",
  ].join("\n");

  return (
    <main className="min-h-screen bg-[#fffaf3] text-stone-950">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <p className="brand-eyebrow">
            餐飲定價試算工具
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight text-stone-950">
            {tool.plainTitle}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            {tool.plainDescription}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {tool.searchIntents.map((intent) => (
              <li
                key={intent}
                className="rounded-full border border-orange-100 bg-white/80 px-3 py-2 text-sm font-semibold text-stone-700 shadow-sm shadow-orange-950/5"
              >
                {intent}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
            <h2 className="text-2xl font-bold">輸入漲價資料</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              欄位右側會標示單位；不適用的金額、比例或數量可以填
              0，手機輸入時會優先顯示數字鍵盤。
            </p>
            <ApplyExampleButton
              toolId="menu_price_increase"
              description="先用「100 元餐點漲 10 元」的範例，快速查看漲價後毛利與銷量變化。"
              onApply={applyExampleValues}
            />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <NumberInput
                label="目前售價"
                value={currentPrice}
                onChange={(value) => {
                  trackCalculatorField("current_price");
                  setCurrentPrice(value);
                }}
                help="例如：目前一份餐點賣 100 元"
              />

              <NumberInput
                label="目前單品成本"
                value={currentCost}
                onChange={(value) => {
                  trackCalculatorField("current_cost");
                  setCurrentCost(value);
                }}
                help="漲價前的食材、包材等直接成本"
              />

              <NumberInput
                label="成本上漲後單品成本"
                value={newCost}
                onChange={(value) => {
                  trackCalculatorField("new_cost");
                  setNewCost(value);
                }}
                help="原物料或包材漲價後的新成本"
              />

              <NumberInput
                label="預計調漲金額"
                value={increaseAmount}
                onChange={(value) => {
                  trackCalculatorField("increase_amount");
                  setIncreaseAmount(value);
                }}
                help="例如：從 100 元調漲到 110 元，填 10"
              />

              <NumberInput
                label="目前每日銷量"
                value={currentDailySales}
                onChange={(value) => {
                  trackCalculatorField("current_daily_sales");
                  setCurrentDailySales(value);
                }}
                suffix="份"
                help="漲價前每天大約賣幾份"
              />

              <NumberInput
                label="漲價後預估每日銷量"
                value={estimatedDailySales}
                onChange={(value) => {
                  trackCalculatorField("estimated_daily_sales");
                  setEstimatedDailySales(value);
                }}
                suffix="份"
                help="保守估計漲價後每天大約賣幾份"
              />
            </div>

            <CalculatorResetButton
              toolId="menu_price_increase"
              onReset={resetCalculator}
            />
          </div>

          <aside className="rounded-3xl bg-gradient-to-br from-stone-950 via-stone-900 to-orange-950 p-6 text-white shadow-sm shadow-orange-950/10">
            <h2 className="text-2xl font-bold">試算結果</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">漲價後售價</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.newPrice)}
                </p>
                <p className="mt-2 text-xs text-stone-300">
                  漲幅約 {formatPercent(result.increaseRate)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">漲價後每份毛利</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.newProfitPerItem)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">漲價後毛利率</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatPercent(result.newMarginRate)}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">目前每份毛利</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.currentProfitPerItem)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">不漲價時新毛利</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.noIncreaseProfitPerItem)}
                  </p>
                  <p className="mt-2 text-xs text-stone-300">
                    毛利率 {formatPercent(result.noIncreaseMarginRate)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">目前每日毛利</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.currentDailyProfit)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">漲價後每日毛利</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.newDailyProfit)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">每日毛利差額</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.dailyProfitDifference)}
                  </p>
                  <p className="mt-2 text-xs text-stone-300">
                    每月約 {formatMoney(result.monthlyProfitDifference)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">打平所需每日銷量</p>
                  <p className="mt-1 text-2xl font-bold">
                    {result.breakEvenDailySales} 份
                  </p>
                  <p className="mt-2 text-xs text-stone-300">
                    預估銷量比打平點 {result.salesBuffer >= 0 ? "多" : "少"}{" "}
                    {Math.abs(result.salesBuffer)} 份
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-orange-500 p-4 text-stone-950">
                <p className="text-sm font-semibold">漲價判斷</p>
                <p className="mt-1 text-3xl font-black">{result.verdict}</p>
                <p className="mt-3 text-sm leading-6">{result.verdictDetail}</p>
              </div>

              <CalculatorAssumptionList items={assumptionItems} />

              <CopyResultButton
                text={resultSummaryText}
                toolId="menu_price_increase"
              />

              <CopyCalculatorLinkButton
                toolId="menu_price_increase"
                params={shareLinkParams}
              />
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
          <h2 className="text-2xl font-bold">計算公式</h2>

          <div className="mt-5 space-y-3 text-stone-700">
            <p>漲價後售價 = 目前售價 + 預計調漲金額</p>
            <p>漲價幅度 = 預計調漲金額 ÷ 目前售價 × 100%</p>
            <p>目前每份毛利 = 目前售價 − 目前單品成本</p>
            <p>不漲價時新毛利 = 目前售價 − 成本上漲後單品成本</p>
            <p>漲價後每份毛利 = 漲價後售價 − 成本上漲後單品成本</p>
            <p>漲價後每日毛利 = 漲價後每份毛利 × 漲價後預估每日銷量</p>
            <p>打平所需每日銷量 = 目前每日毛利 ÷ 漲價後每份毛利</p>
          </div>

          <div className="mt-6 rounded-2xl border border-orange-100/80 bg-orange-50/50 p-5">
            <h3 className="font-bold">範例</h3>
            <p className="mt-3 leading-7 text-stone-700">
              如果餐點目前售價 100 元、成本 45 元，每份毛利是 55 元。
              成本上漲後變成 52 元，若不漲價，每份毛利會降到 48 元。 如果調漲 10
              元，漲價後售價變成 110 元，每份毛利會變成 58 元。 即使每日銷量從
              80 份降到 72 份，每日毛利仍會從 4,400 元變成 4,176 元，
              代表這個漲幅可能還不夠補回銷量下降。
            </p>
          </div>

          <p className="mt-6 text-sm leading-6 text-stone-500">
            本工具僅供菜單漲價前的初步試算。實際結果仍會受到顧客接受度、競品價格、
            份量調整、外送平台抽成、人力成本與原物料波動等因素影響。
          </p>
        </section>

        <section className="mt-10 rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
          <p className="brand-eyebrow">相關文章</p>
          <h2 className="mt-2 text-2xl font-bold">延伸閱讀</h2>
          <p className="mt-4 leading-7 text-stone-700">
            搭配菜單漲價情境，了解成本上升、毛利率、銷量變化與客單價調整該怎麼一起評估。
          </p>
          <Link
            href="/blog/menu-price-increase"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            菜單漲價怎麼算？漲價幅度、客單價和毛利率試算
          </Link>
        </section>

        <section className="mt-10 rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
          <h2 className="text-2xl font-bold">常見問題</h2>
          <div className="mt-5 grid gap-5">
            <div className="rounded-2xl border border-orange-100/80 bg-white/60 p-5">
              <h3 className="font-bold text-stone-900">
                Q1：漲價幅度要怎麼抓？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                可以先用成本上漲金額和目標毛利率反推，再用 5 元、10
                元等顧客容易理解的價格級距測試。
              </p>
            </div>
            <div className="rounded-2xl border border-orange-100/80 bg-white/60 p-5">
              <h3 className="font-bold text-stone-900">
                Q2：漲價後銷量下降就代表失敗嗎？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                不一定。要看每日總毛利是否改善。如果每份毛利提高夠多，少賣一些仍可能比原本更賺。
              </p>
            </div>
            <div className="rounded-2xl border border-orange-100/80 bg-white/60 p-5">
              <h3 className="font-bold text-stone-900">
                Q3：所有品項都要一起漲價嗎？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                不一定。可以先調整成本壓力最大、毛利最低或外送影響最大的品項，避免一次改太多造成顧客反彈。
              </p>
            </div>
            <div className="rounded-2xl border border-orange-100/80 bg-white/60 p-5">
              <h3 className="font-bold text-stone-900">
                Q4：漲價可以搭配套餐或加購嗎？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                可以。用套餐、升級份量或加購品項提高客單價，常常比單純調高單品價格更容易被客人接受。
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
