"use client";

import Link from "next/link";
import { ApplyExampleButton } from "@/components/apply-example-button";
import { CalculatorAssumptionList } from "@/components/calculator-assumption-list";
import { CalculatorResetButton } from "@/components/calculator-reset-button";
import { CopyResultButton } from "@/components/copy-result-button";
import { useMemo, useRef, useState } from "react";
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

function formatNumber(value: number) {
  return new Intl.NumberFormat("zh-TW", {
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
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

export default function BreakEvenCalculatorPage() {
  const [monthlyRent, setMonthlyRent] = useState(50000);
  const [monthlyLabor, setMonthlyLabor] = useState(90000);
  const [utilities, setUtilities] = useState(15000);
  const [otherFixedCosts, setOtherFixedCosts] = useState(20000);
  const [averageOrderValue, setAverageOrderValue] = useState(180);
  const [grossMarginRate, setGrossMarginRate] = useState(60);
  const [operatingDays, setOperatingDays] = useState(26);
  const [targetMonthlyProfit, setTargetMonthlyProfit] = useState(50000);

  const trackedFieldsRef = useRef<Set<string>>(new Set());

  function trackCalculatorField(fieldName: string) {
    if (trackedFieldsRef.current.has(fieldName)) {
      return;
    }

    trackedFieldsRef.current.add(fieldName);
    trackEvent("use_calculator", {
      tool_id: "break_even",
      field_name: fieldName,
    });
  }

  function applyExampleValues() {
    setMonthlyRent(50000);
    setMonthlyLabor(90000);
    setUtilities(15000);
    setOtherFixedCosts(20000);
    setAverageOrderValue(180);
    setGrossMarginRate(60);
    setOperatingDays(26);
    setTargetMonthlyProfit(50000);
  }

  function resetCalculator() {
    setMonthlyRent(0);
    setMonthlyLabor(0);
    setUtilities(0);
    setOtherFixedCosts(0);
    setAverageOrderValue(0);
    setGrossMarginRate(0);
    setOperatingDays(0);
    setTargetMonthlyProfit(0);
    trackedFieldsRef.current.clear();
  }

  const result = useMemo(() => {
    const fixedCost = monthlyRent + monthlyLabor + utilities + otherFixedCosts;
    const marginRate = grossMarginRate / 100;
    const safeOperatingDays = operatingDays > 0 ? operatingDays : 1;

    const breakEvenMonthlyRevenue =
      marginRate > 0 ? fixedCost / marginRate : 0;
    const breakEvenDailyRevenue = breakEvenMonthlyRevenue / safeOperatingDays;
    const breakEvenDailyOrders =
      averageOrderValue > 0
        ? Math.ceil(breakEvenDailyRevenue / averageOrderValue)
        : 0;

    const targetMonthlyRevenue =
      marginRate > 0 ? (fixedCost + targetMonthlyProfit) / marginRate : 0;
    const targetDailyRevenue = targetMonthlyRevenue / safeOperatingDays;
    const targetDailyOrders =
      averageOrderValue > 0 ? Math.ceil(targetDailyRevenue / averageOrderValue) : 0;

    const fixedCostPerDay = fixedCost / safeOperatingDays;
    const grossProfitPerOrder = averageOrderValue * marginRate;

    let verdict = "可以評估";
    let verdictDetail =
      "依照目前假設，可以用每日打平營業額和每日訂單數，回頭檢查店面位置、座位數與出餐能力是否撐得起來。";

    if (marginRate <= 0) {
      verdict = "資料不足";
      verdictDetail =
        "毛利率必須大於 0，才能計算損益兩平營業額。請先確認平均毛利率。";
    } else if (grossMarginRate < 45) {
      verdict = "壓力偏高";
      verdictDetail =
        "平均毛利率偏低時，打平營業額會被拉高。建議先檢查售價、食材成本、包材成本與外送平台抽成。";
    } else if (breakEvenDailyOrders > 80) {
      verdict = "要小心";
      verdictDetail =
        "每天需要的訂單數偏高。若現場人力、座位數或出餐速度有限，開店前要重新評估固定成本或客單價。";
    } else if (breakEvenDailyOrders <= 40) {
      verdict = "壓力較低";
      verdictDetail =
        "依照目前假設，每日打平訂單數相對可控，但仍要保留淡季、天氣與商圈波動的安全空間。";
    }

    return {
      fixedCost,
      breakEvenMonthlyRevenue,
      breakEvenDailyRevenue,
      breakEvenDailyOrders,
      targetMonthlyRevenue,
      targetDailyRevenue,
      targetDailyOrders,
      fixedCostPerDay,
      grossProfitPerOrder,
      verdict,
      verdictDetail,
    };
  }, [
    monthlyRent,
    monthlyLabor,
    utilities,
    otherFixedCosts,
    averageOrderValue,
    grossMarginRate,
    operatingDays,
    targetMonthlyProfit,
  ]);


  const assumptionItems = [
    { label: "每月租金", value: formatMoney(monthlyRent) },
    { label: "每月人事成本", value: formatMoney(monthlyLabor) },
    { label: "每月水電瓦斯", value: formatMoney(utilities) },
    { label: "其他固定支出", value: formatMoney(otherFixedCosts) },
    { label: "平均客單價", value: formatMoney(averageOrderValue) },
    { label: "平均毛利率", value: `${grossMarginRate.toFixed(1)}%` },
    { label: "每月營業天數", value: `${operatingDays} 天` },
    { label: "目標每月利潤", value: formatMoney(targetMonthlyProfit) },
  ];

  const resultSummaryText = [
    "開店小工具箱｜開店損益兩平試算報告",
    "",
    "一、目前試算假設",
    ...assumptionItems.map((item) => `${item.label}：${item.value}`),
    "",
    "二、試算結果",
    `每月固定成本：${formatMoney(result.fixedCost)}`,
    `損益兩平月營業額：${formatMoney(result.breakEvenMonthlyRevenue)}`,
    `損益兩平每日營業額：${formatMoney(result.breakEvenDailyRevenue)}`,
    `每天至少訂單數：${formatNumber(result.breakEvenDailyOrders)} 筆`,
    `目標月營業額：${formatMoney(result.targetMonthlyRevenue)}`,
    `目標每日營業額：${formatMoney(result.targetDailyRevenue)}`,
    `目標每日訂單數：${formatNumber(result.targetDailyOrders)} 筆`,
    "",
    "三、判斷建議",
    `${result.verdict}：${result.verdictDetail}`,
    "",
    "提醒：本結果由開店小工具箱產生，僅供經營試算參考。實際開店仍需考慮商圈、淡旺季、座位數與出餐能力。",
  ].join("\n");

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold text-orange-700">
            開店損益試算工具
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            開店損益兩平試算器
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            輸入每月租金、人事、水電、固定支出、平均客單價與毛利率，
            快速估算每月要做到多少營業額、每天要賣幾筆訂單才不虧。
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">輸入營運資料</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">欄位右側會標示單位；不適用的金額、比例或數量可以填 0，手機輸入時會優先顯示數字鍵盤。</p>
            <ApplyExampleButton
              toolId="break_even"
              description="先用一間小型餐飲店的固定成本範例，快速估算每月與每日損益兩平門檻。"
              onApply={applyExampleValues}
            />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <NumberInput
                label="每月租金"
                value={monthlyRent}
                onChange={(value) => {
                  trackCalculatorField("monthly_rent");
                  setMonthlyRent(value);
                }}
                help="包含店租、管理費或固定攤位費"
              />

              <NumberInput
                label="每月人事成本"
                value={monthlyLabor}
                onChange={(value) => {
                  trackCalculatorField("monthly_labor");
                  setMonthlyLabor(value);
                }}
                help="員工薪資、老闆基本薪資、勞健保等粗估"
              />

              <NumberInput
                label="每月水電瓦斯"
                value={utilities}
                onChange={(value) => {
                  trackCalculatorField("utilities");
                  setUtilities(value);
                }}
                help="水費、電費、瓦斯、網路等固定營運支出"
              />

              <NumberInput
                label="其他固定支出"
                value={otherFixedCosts}
                onChange={(value) => {
                  trackCalculatorField("other_fixed_costs");
                  setOtherFixedCosts(value);
                }}
                help="系統費、清潔、會計、行銷、雜支等"
              />

              <NumberInput
                label="平均客單價"
                value={averageOrderValue}
                onChange={(value) => {
                  trackCalculatorField("average_order_value");
                  setAverageOrderValue(value);
                }}
                help="每筆訂單平均收入"
              />

              <NumberInput
                label="平均毛利率"
                value={grossMarginRate}
                onChange={(value) => {
                  trackCalculatorField("gross_margin_rate");
                  setGrossMarginRate(value);
                }}
                suffix="%"
                help="營收扣除食材、包材等直接成本後的比例"
              />

              <NumberInput
                label="每月營業天數"
                value={operatingDays}
                onChange={(value) => {
                  trackCalculatorField("operating_days");
                  setOperatingDays(value);
                }}
                suffix="天"
                help="例如每週休一天，可先填 26 天"
              />

              <NumberInput
                label="目標每月利潤"
                value={targetMonthlyProfit}
                onChange={(value) => {
                  trackCalculatorField("target_monthly_profit");
                  setTargetMonthlyProfit(value);
                }}
                help="想在打平之外，每月多留下多少利潤"
              />
            </div>

            <CalculatorResetButton toolId="break_even" onReset={resetCalculator} />
          </div>

          <aside className="rounded-3xl bg-stone-900 p-6 text-white shadow-sm">
            <h2 className="text-2xl font-bold">試算結果</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">每月固定成本</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.fixedCost)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">損益兩平月營業額</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.breakEvenMonthlyRevenue)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">每天至少營業額</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.breakEvenDailyRevenue)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">每天至少訂單數</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatNumber(result.breakEvenDailyOrders)} 筆
                </p>
              </div>


              <CalculatorAssumptionList items={assumptionItems} />

              <CopyResultButton
                text={resultSummaryText}
                toolId="break_even"
              />
            </div>
          </aside>
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">每筆平均毛利</p>
            <p className="mt-2 text-2xl font-bold">
              {formatMoney(result.grossProfitPerOrder)}
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              以平均客單價 × 平均毛利率估算。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">每日固定成本壓力</p>
            <p className="mt-2 text-2xl font-bold">
              {formatMoney(result.fixedCostPerDay)}
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              每月固定成本除以營業天數。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">目標利潤每日訂單</p>
            <p className="mt-2 text-2xl font-bold">
              {formatNumber(result.targetDailyOrders)} 筆
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              若要每月留下 {formatMoney(targetMonthlyProfit)}，每天約需做到
              {formatMoney(result.targetDailyRevenue)}。
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">判斷建議：{result.verdict}</h2>
          <p className="mt-4 leading-7 text-stone-700">
            {result.verdictDetail}
          </p>
          <p className="mt-4 text-sm leading-6 text-stone-500">
            損益兩平公式：每月固定成本 ÷ 平均毛利率 = 打平所需月營業額。
            本工具只做初步估算，實際仍需考慮淡旺季、商圈人流、平台抽成、備料耗損與稅務費用。
          </p>
        </section>

        <section className="mt-8 rounded-3xl bg-orange-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-orange-950">
            也可以搭配其他工具
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/tools/restaurant-margin-calculator"
              className="rounded-full bg-white px-5 py-3 text-sm font-bold text-orange-700 transition hover:bg-orange-100"
            >
              餐飲毛利率計算器
            </Link>
            <Link
              href="/tools/startup-cost-calculator"
              className="rounded-full bg-white px-5 py-3 text-sm font-bold text-orange-700 transition hover:bg-orange-100"
            >
              開店成本試算器
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
