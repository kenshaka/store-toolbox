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
import { AdSenseSlot } from "@/components/adsense-slot";
import { adsenseSlots } from "@/lib/adsense-slots";

const tool = getToolByKey("laborCostRatioCalculator");

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

export default function LaborCostRatioCalculatorPage() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(600000);
  const [fullTimeStaff, setFullTimeStaff] = useState(2);
  const [fullTimeSalary, setFullTimeSalary] = useState(38000);
  const [partTimeHours, setPartTimeHours] = useState(120);
  const [partTimeHourlyWage, setPartTimeHourlyWage] = useState(190);
  const [ownerSalary, setOwnerSalary] = useState(45000);
  const [extraBurdenRate, setExtraBurdenRate] = useState(8);
  const [targetLaborRatio, setTargetLaborRatio] = useState(30);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const searchParams = new URLSearchParams(window.location.search);

      const sharedMonthlyRevenue = getSharedNumberParam(
        searchParams,
        "monthlyRevenue",
      );
      if (sharedMonthlyRevenue !== null) {
        setMonthlyRevenue(sharedMonthlyRevenue);
      }

      const sharedFullTimeStaff = getSharedNumberParam(
        searchParams,
        "fullTimeStaff",
      );
      if (sharedFullTimeStaff !== null) {
        setFullTimeStaff(sharedFullTimeStaff);
      }

      const sharedFullTimeSalary = getSharedNumberParam(
        searchParams,
        "fullTimeSalary",
      );
      if (sharedFullTimeSalary !== null) {
        setFullTimeSalary(sharedFullTimeSalary);
      }

      const sharedPartTimeHours = getSharedNumberParam(
        searchParams,
        "partTimeHours",
      );
      if (sharedPartTimeHours !== null) {
        setPartTimeHours(sharedPartTimeHours);
      }

      const sharedPartTimeHourlyWage = getSharedNumberParam(
        searchParams,
        "partTimeHourlyWage",
      );
      if (sharedPartTimeHourlyWage !== null) {
        setPartTimeHourlyWage(sharedPartTimeHourlyWage);
      }

      const sharedOwnerSalary = getSharedNumberParam(
        searchParams,
        "ownerSalary",
      );
      if (sharedOwnerSalary !== null) {
        setOwnerSalary(sharedOwnerSalary);
      }

      const sharedExtraBurdenRate = getSharedNumberParam(
        searchParams,
        "extraBurdenRate",
      );
      if (sharedExtraBurdenRate !== null) {
        setExtraBurdenRate(sharedExtraBurdenRate);
      }

      const sharedTargetLaborRatio = getSharedNumberParam(
        searchParams,
        "targetLaborRatio",
      );
      if (sharedTargetLaborRatio !== null) {
        setTargetLaborRatio(sharedTargetLaborRatio);
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
      tool_id: "labor_cost_ratio",
      field_name: fieldName,
    });
  }

  function applyExampleValues() {
    setMonthlyRevenue(600000);
    setFullTimeStaff(2);
    setFullTimeSalary(38000);
    setPartTimeHours(120);
    setPartTimeHourlyWage(190);
    setOwnerSalary(45000);
    setExtraBurdenRate(8);
    setTargetLaborRatio(30);
  }

  function resetCalculator() {
    setMonthlyRevenue(0);
    setFullTimeStaff(0);
    setFullTimeSalary(0);
    setPartTimeHours(0);
    setPartTimeHourlyWage(0);
    setOwnerSalary(0);
    setExtraBurdenRate(0);
    setTargetLaborRatio(0);
    trackedFieldsRef.current.clear();
  }

  const result = useMemo(() => {
    const fullTimeCost = fullTimeStaff * fullTimeSalary;
    const partTimeCost = partTimeHours * partTimeHourlyWage;
    const baseLaborCost = fullTimeCost + partTimeCost + ownerSalary;
    const extraBurden = baseLaborCost * (extraBurdenRate / 100);
    const totalLaborCost = baseLaborCost + extraBurden;
    const laborRatio =
      monthlyRevenue > 0 ? (totalLaborCost / monthlyRevenue) * 100 : 0;
    const targetLaborCost = monthlyRevenue * (targetLaborRatio / 100);
    const laborBudgetGap = targetLaborCost - totalLaborCost;
    const requiredRevenueForTarget =
      targetLaborRatio > 0 ? totalLaborCost / (targetLaborRatio / 100) : 0;
    const revenueGap = requiredRevenueForTarget - monthlyRevenue;

    let verdict = "可以觀察";
    let verdictDetail =
      "依照目前假設，人事成本占比可以和目標占比比較，再回頭檢查排班、人力配置與營業額是否匹配。";

    if (monthlyRevenue <= 0) {
      verdict = "資料不足";
      verdictDetail = "月營業額必須大於 0，才能計算人事成本占比。";
    } else if (laborRatio > targetLaborRatio + 8) {
      verdict = "人事壓力偏高";
      verdictDetail =
        "目前人事成本占比明顯高於目標。建議檢查尖離峰排班、出餐流程、兼職時數或是否需要提高營業額。";
    } else if (laborRatio > targetLaborRatio) {
      verdict = "略高於目標";
      verdictDetail =
        "目前人事占比略高於目標，可以先從排班效率與營收提升兩邊同時檢查。";
    } else if (laborRatio < 18) {
      verdict = "占比較低";
      verdictDetail =
        "人事占比偏低不一定代表最好，也可能表示人手過緊、老闆工時未被完整計入，或尖峰服務品質有壓力。";
    } else {
      verdict = "接近目標";
      verdictDetail =
        "目前人事成本占比接近設定目標。建議持續追蹤每月營業額與排班時數，避免淡季占比快速上升。";
    }

    return {
      fullTimeCost,
      partTimeCost,
      baseLaborCost,
      extraBurden,
      totalLaborCost,
      laborRatio,
      targetLaborCost,
      laborBudgetGap,
      requiredRevenueForTarget,
      revenueGap,
      verdict,
      verdictDetail,
    };
  }, [
    monthlyRevenue,
    fullTimeStaff,
    fullTimeSalary,
    partTimeHours,
    partTimeHourlyWage,
    ownerSalary,
    extraBurdenRate,
    targetLaborRatio,
  ]);

  const assumptionItems = [
    { label: "每月營業額", value: formatMoney(monthlyRevenue) },
    { label: "正職人數", value: `${fullTimeStaff} 人` },
    { label: "正職平均月薪", value: formatMoney(fullTimeSalary) },
    { label: "兼職每月總時數", value: `${partTimeHours} 小時` },
    { label: "兼職時薪", value: formatMoney(partTimeHourlyWage) },
    { label: "老闆每月基本薪資", value: formatMoney(ownerSalary) },
    { label: "額外人事負擔比例", value: formatPercent(extraBurdenRate) },
    { label: "目標人事成本占比", value: formatPercent(targetLaborRatio) },
  ];

  const shareLinkParams = [
    { key: "monthlyRevenue", value: monthlyRevenue },
    { key: "fullTimeStaff", value: fullTimeStaff },
    { key: "fullTimeSalary", value: fullTimeSalary },
    { key: "partTimeHours", value: partTimeHours },
    { key: "partTimeHourlyWage", value: partTimeHourlyWage },
    { key: "ownerSalary", value: ownerSalary },
    { key: "extraBurdenRate", value: extraBurdenRate },
    { key: "targetLaborRatio", value: targetLaborRatio },
  ];

  const resultSummaryText = [
    "開店小工具箱｜人事成本占比試算報告",
    "",
    "一、目前試算假設",
    ...assumptionItems.map((item) => `${item.label}：${item.value}`),
    "",
    "二、試算結果",
    `正職成本：${formatMoney(result.fullTimeCost)}`,
    `兼職成本：${formatMoney(result.partTimeCost)}`,
    `每月人事成本合計：${formatMoney(result.totalLaborCost)}`,
    `人事成本占比：${formatPercent(result.laborRatio)}`,
    `符合目標所需月營業額：${formatMoney(result.requiredRevenueForTarget)}`,
    `與目標預算差距：${formatMoney(result.laborBudgetGap)}`,
    "",
    "三、判斷建議",
    `${result.verdict}：${result.verdictDetail}`,
    "",
    "提醒：本結果由開店小工具箱產生，僅供經營試算參考。實際排班仍需考慮尖峰時段、勞健保、獎金與法規成本。",
  ].join("\n");

  return (
    <main className="min-h-screen bg-[#fffaf3] text-stone-950">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <p className="brand-eyebrow">
            人事成本試算工具
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
            <h2 className="text-2xl font-bold">輸入人事資料</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              欄位右側會標示單位；不適用的金額、比例或數量可以填
              0，手機輸入時會優先顯示數字鍵盤。
            </p>
            <ApplyExampleButton
              toolId="labor_cost_ratio"
              description="先用月營收 60 萬、正職加兼職的人事範例，快速查看薪資占比是否偏高。"
              onApply={applyExampleValues}
            />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <NumberInput
                label="每月營業額"
                value={monthlyRevenue}
                onChange={(value) => {
                  trackCalculatorField("monthly_revenue");
                  setMonthlyRevenue(value);
                }}
                help="用實際月營收或目標月營收估算"
              />

              <NumberInput
                label="正職人數"
                value={fullTimeStaff}
                onChange={(value) => {
                  trackCalculatorField("full_time_staff");
                  setFullTimeStaff(value);
                }}
                suffix="人"
                help="包含店長、內外場正職"
              />

              <NumberInput
                label="正職平均月薪"
                value={fullTimeSalary}
                onChange={(value) => {
                  trackCalculatorField("full_time_salary");
                  setFullTimeSalary(value);
                }}
                help="每位正職平均每月薪資"
              />

              <NumberInput
                label="兼職每月總時數"
                value={partTimeHours}
                onChange={(value) => {
                  trackCalculatorField("part_time_hours");
                  setPartTimeHours(value);
                }}
                suffix="小時"
                help="全部兼職人員加總時數"
              />

              <NumberInput
                label="兼職時薪"
                value={partTimeHourlyWage}
                onChange={(value) => {
                  trackCalculatorField("part_time_hourly_wage");
                  setPartTimeHourlyWage(value);
                }}
                help="每小時薪資"
              />

              <NumberInput
                label="老闆每月基本薪資"
                value={ownerSalary}
                onChange={(value) => {
                  trackCalculatorField("owner_salary");
                  setOwnerSalary(value);
                }}
                help="建議把老闆工時也當成成本估算"
              />

              <NumberInput
                label="額外人事負擔比例"
                value={extraBurdenRate}
                onChange={(value) => {
                  trackCalculatorField("extra_burden_rate");
                  setExtraBurdenRate(value);
                }}
                suffix="%"
                help="勞健保、獎金、制服、餐費等粗估"
              />

              <NumberInput
                label="目標人事成本占比"
                value={targetLaborRatio}
                onChange={(value) => {
                  trackCalculatorField("target_labor_ratio");
                  setTargetLaborRatio(value);
                }}
                suffix="%"
                help="可先用 25% 到 35% 做情境試算"
              />
            </div>

            <CalculatorResetButton
              toolId="labor_cost_ratio"
              onReset={resetCalculator}
            />
          </div>

          <aside className="rounded-3xl bg-gradient-to-br from-stone-950 via-stone-900 to-orange-950 p-6 text-white shadow-sm shadow-orange-950/10">
            <h2 className="text-2xl font-bold">試算結果</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">每月人事成本合計</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.totalLaborCost)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">人事成本占比</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatPercent(result.laborRatio)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">符合目標所需月營業額</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.requiredRevenueForTarget)}
                </p>
              </div>

              <CalculatorAssumptionList items={assumptionItems} />

              <CopyResultButton
                text={resultSummaryText}
                toolId="labor_cost_ratio"
              />

              <CopyCalculatorLinkButton
                toolId="labor_cost_ratio"
                params={shareLinkParams}
              />
            </div>
          </aside>
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
            <p className="text-sm text-stone-500">正職成本</p>
            <p className="mt-2 text-2xl font-bold">
              {formatMoney(result.fullTimeCost)}
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              正職人數 × 平均月薪。
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
            <p className="text-sm text-stone-500">兼職成本</p>
            <p className="mt-2 text-2xl font-bold">
              {formatMoney(result.partTimeCost)}
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              兼職時數 × 時薪。
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
            <p className="text-sm text-stone-500">與目標預算差距</p>
            <p className="mt-2 text-2xl font-bold">
              {formatMoney(result.laborBudgetGap)}
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              正數代表仍有預算空間，負數代表已超過目標。
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-orange-100/80 bg-white/95 p-6 shadow-sm shadow-orange-950/5">
          <h2 className="text-2xl font-bold">判斷建議：{result.verdict}</h2>
          <p className="mt-4 leading-7 text-stone-700">
            {result.verdictDetail}
          </p>
          <p className="mt-4 text-sm leading-6 text-stone-500">
            若要維持 {formatPercent(targetLaborRatio)}{" "}
            的人事占比，依照目前人事成本， 月營業額約需達到{" "}
            {formatMoney(result.requiredRevenueForTarget)}。
            目前與目標營業額差距約 {formatMoney(result.revenueGap)}。
          </p>
        </section>


        <AdSenseSlot
          slot={adsenseSlots.toolAfterContent}
          className="mt-8"
        />
        <section className="mt-8 rounded-3xl border border-orange-100 bg-orange-50/80 p-6 shadow-sm shadow-orange-950/5">
          <h2 className="text-2xl font-bold text-orange-950">
            也可以搭配其他工具
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/tools/break-even-calculator"
              className="rounded-full bg-white px-5 py-3 text-sm font-bold text-orange-700 transition hover:bg-orange-100"
            >
              開店損益兩平試算器
            </Link>
            <Link
              href="/tools/restaurant-margin-calculator"
              className="rounded-full bg-white px-5 py-3 text-sm font-bold text-orange-700 transition hover:bg-orange-100"
            >
              餐飲毛利率計算器
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
