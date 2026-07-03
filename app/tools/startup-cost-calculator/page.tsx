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

const tool = getToolByKey("startupCostCalculator");

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

export default function StartupCostCalculatorPage() {
  const [rentDeposit, setRentDeposit] = useState(150000);
  const [renovationCost, setRenovationCost] = useState(300000);
  const [equipmentCost, setEquipmentCost] = useState(250000);
  const [initialInventory, setInitialInventory] = useState(80000);
  const [licenseAndSetup, setLicenseAndSetup] = useState(20000);
  const [openingMarketing, setOpeningMarketing] = useState(30000);
  const [preOpeningLabor, setPreOpeningLabor] = useState(60000);
  const [monthlyOperatingCost, setMonthlyOperatingCost] = useState(180000);
  const [reserveMonths, setReserveMonths] = useState(3);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const searchParams = new URLSearchParams(window.location.search);

      const sharedRentDeposit = getSharedNumberParam(
        searchParams,
        "rentDeposit",
      );
      if (sharedRentDeposit !== null) {
        setRentDeposit(sharedRentDeposit);
      }

      const sharedRenovationCost = getSharedNumberParam(
        searchParams,
        "renovationCost",
      );
      if (sharedRenovationCost !== null) {
        setRenovationCost(sharedRenovationCost);
      }

      const sharedEquipmentCost = getSharedNumberParam(
        searchParams,
        "equipmentCost",
      );
      if (sharedEquipmentCost !== null) {
        setEquipmentCost(sharedEquipmentCost);
      }

      const sharedInitialInventory = getSharedNumberParam(
        searchParams,
        "initialInventory",
      );
      if (sharedInitialInventory !== null) {
        setInitialInventory(sharedInitialInventory);
      }

      const sharedLicenseAndSetup = getSharedNumberParam(
        searchParams,
        "licenseAndSetup",
      );
      if (sharedLicenseAndSetup !== null) {
        setLicenseAndSetup(sharedLicenseAndSetup);
      }

      const sharedOpeningMarketing = getSharedNumberParam(
        searchParams,
        "openingMarketing",
      );
      if (sharedOpeningMarketing !== null) {
        setOpeningMarketing(sharedOpeningMarketing);
      }

      const sharedPreOpeningLabor = getSharedNumberParam(
        searchParams,
        "preOpeningLabor",
      );
      if (sharedPreOpeningLabor !== null) {
        setPreOpeningLabor(sharedPreOpeningLabor);
      }

      const sharedMonthlyOperatingCost = getSharedNumberParam(
        searchParams,
        "monthlyOperatingCost",
      );
      if (sharedMonthlyOperatingCost !== null) {
        setMonthlyOperatingCost(sharedMonthlyOperatingCost);
      }

      const sharedReserveMonths = getSharedNumberParam(
        searchParams,
        "reserveMonths",
      );
      if (sharedReserveMonths !== null) {
        setReserveMonths(sharedReserveMonths);
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
      tool_id: "startup_cost",
      field_name: fieldName,
    });
  }

  function applyExampleValues() {
    setRentDeposit(150000);
    setRenovationCost(300000);
    setEquipmentCost(250000);
    setInitialInventory(80000);
    setLicenseAndSetup(20000);
    setOpeningMarketing(30000);
    setPreOpeningLabor(60000);
    setMonthlyOperatingCost(180000);
    setReserveMonths(3);
  }

  function resetCalculator() {
    setRentDeposit(0);
    setRenovationCost(0);
    setEquipmentCost(0);
    setInitialInventory(0);
    setLicenseAndSetup(0);
    setOpeningMarketing(0);
    setPreOpeningLabor(0);
    setMonthlyOperatingCost(0);
    setReserveMonths(0);
    trackedFieldsRef.current.clear();
  }

  const result = useMemo(() => {
    const setupCost =
      rentDeposit +
      renovationCost +
      equipmentCost +
      initialInventory +
      licenseAndSetup +
      openingMarketing +
      preOpeningLabor;
    const workingCapital = monthlyOperatingCost * reserveMonths;
    const totalStartupCost = setupCost + workingCapital;
    const workingCapitalRate =
      totalStartupCost > 0 ? (workingCapital / totalStartupCost) * 100 : 0;
    const equipmentAndRenovationCost = renovationCost + equipmentCost;

    let verdict = "預算可再細分";
    let verdictDetail =
      "建議把一次性開辦費和周轉金分開看，避免裝潢設備花完後，正式營業時沒有足夠現金撐過磨合期。";

    if (reserveMonths < 2) {
      verdict = "周轉金偏少";
      verdictDetail =
        "周轉金少於 2 個月時，遇到開幕磨合、淡季或裝修追加費用會比較危險。建議至少保留 2 到 3 個月固定支出。";
    } else if (equipmentAndRenovationCost > totalStartupCost * 0.65) {
      verdict = "裝潢設備占比偏高";
      verdictDetail =
        "裝潢與設備占總預算過高時，容易壓縮備料、人事與周轉金。建議檢查是否有可分階段採購的項目。";
    } else if (reserveMonths >= 3) {
      verdict = "較有緩衝";
      verdictDetail =
        "目前周轉金抓得相對保守，較能應付開幕初期來客不穩、備料調整與行銷測試。";
    }

    return {
      setupCost,
      workingCapital,
      totalStartupCost,
      workingCapitalRate,
      equipmentAndRenovationCost,
      verdict,
      verdictDetail,
    };
  }, [
    rentDeposit,
    renovationCost,
    equipmentCost,
    initialInventory,
    licenseAndSetup,
    openingMarketing,
    preOpeningLabor,
    monthlyOperatingCost,
    reserveMonths,
  ]);

  const assumptionItems = [
    { label: "押金與預付租金", value: formatMoney(rentDeposit) },
    { label: "裝潢工程費", value: formatMoney(renovationCost) },
    { label: "設備器具費", value: formatMoney(equipmentCost) },
    { label: "初期備料與包材", value: formatMoney(initialInventory) },
    { label: "登記與開辦雜支", value: formatMoney(licenseAndSetup) },
    { label: "開幕行銷費", value: formatMoney(openingMarketing) },
    { label: "開幕前人事訓練", value: formatMoney(preOpeningLabor) },
    { label: "每月固定營運成本", value: formatMoney(monthlyOperatingCost) },
    { label: "預留周轉金月數", value: `${reserveMonths} 個月` },
  ];

  const shareLinkParams = [
    { key: "rentDeposit", value: rentDeposit },
    { key: "renovationCost", value: renovationCost },
    { key: "equipmentCost", value: equipmentCost },
    { key: "initialInventory", value: initialInventory },
    { key: "licenseAndSetup", value: licenseAndSetup },
    { key: "openingMarketing", value: openingMarketing },
    { key: "preOpeningLabor", value: preOpeningLabor },
    { key: "monthlyOperatingCost", value: monthlyOperatingCost },
    { key: "reserveMonths", value: reserveMonths },
  ];

  const resultSummaryText = [
    "開店小工具箱｜開店成本試算報告",
    "",
    "一、目前試算假設",
    ...assumptionItems.map((item) => `${item.label}：${item.value}`),
    "",
    "二、試算結果",
    `一次性開辦費：${formatMoney(result.setupCost)}`,
    `裝潢設備合計：${formatMoney(result.equipmentAndRenovationCost)}`,
    `預留周轉金：${formatMoney(result.workingCapital)}`,
    `建議準備總資金：${formatMoney(result.totalStartupCost)}`,
    `周轉金占比：約 ${formatPercent(result.workingCapitalRate)}`,
    "",
    "三、判斷建議",
    `${result.verdict}：${result.verdictDetail}`,
    "",
    "提醒：本結果由開店小工具箱產生，僅供經營試算參考。實際開店預算仍需保留報價浮動、追加工程與營運磨合期現金。",
  ].join("\n");

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold text-orange-700">
            開店預算試算工具
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            {tool.plainTitle}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            {tool.plainDescription}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {tool.searchIntents.map((intent) => (
              <li
                key={intent}
                className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-stone-700 shadow-sm"
              >
                {intent}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">輸入開店成本</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              欄位右側會標示單位；不適用的金額、比例或數量可以填
              0，手機輸入時會優先顯示數字鍵盤。
            </p>
            <ApplyExampleButton
              toolId="startup_cost"
              description="先用小型店面開辦成本範例，快速估算裝潢設備、備料與周轉金總需求。"
              onApply={applyExampleValues}
            />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <NumberInput
                label="押金與預付租金"
                value={rentDeposit}
                onChange={(value) => {
                  trackCalculatorField("rent_deposit");
                  setRentDeposit(value);
                }}
                help="店面押金、預付租金、仲介費等"
              />

              <NumberInput
                label="裝潢與招牌"
                value={renovationCost}
                onChange={(value) => {
                  trackCalculatorField("renovation_cost");
                  setRenovationCost(value);
                }}
                help="裝修、招牌、燈具、水電配置等"
              />

              <NumberInput
                label="設備器具"
                value={equipmentCost}
                onChange={(value) => {
                  trackCalculatorField("equipment_cost");
                  setEquipmentCost(value);
                }}
                help="冰箱、爐具、POS、工作台、製冰機等"
              />

              <NumberInput
                label="初期備料與包材"
                value={initialInventory}
                onChange={(value) => {
                  trackCalculatorField("initial_inventory");
                  setInitialInventory(value);
                }}
                help="首批食材、耗材、杯盒、袋子等"
              />

              <NumberInput
                label="登記與開辦雜支"
                value={licenseAndSetup}
                onChange={(value) => {
                  trackCalculatorField("license_and_setup");
                  setLicenseAndSetup(value);
                }}
                help="登記、檢驗、軟體、清潔、雜項採購"
              />

              <NumberInput
                label="開幕行銷費"
                value={openingMarketing}
                onChange={(value) => {
                  trackCalculatorField("opening_marketing");
                  setOpeningMarketing(value);
                }}
                help="開幕活動、印刷物、廣告、試吃等"
              />

              <NumberInput
                label="開幕前人事訓練"
                value={preOpeningLabor}
                onChange={(value) => {
                  trackCalculatorField("pre_opening_labor");
                  setPreOpeningLabor(value);
                }}
                help="試營運、教育訓練、開幕前排班成本"
              />

              <NumberInput
                label="每月固定營運成本"
                value={monthlyOperatingCost}
                onChange={(value) => {
                  trackCalculatorField("monthly_operating_cost");
                  setMonthlyOperatingCost(value);
                }}
                help="租金、人事、水電、系統與固定雜支粗估"
              />

              <NumberInput
                label="預留周轉金月數"
                value={reserveMonths}
                onChange={(value) => {
                  trackCalculatorField("reserve_months");
                  setReserveMonths(value);
                }}
                suffix="個月"
                help="建議至少保留 2 到 3 個月"
              />
            </div>

            <CalculatorResetButton
              toolId="startup_cost"
              onReset={resetCalculator}
            />
          </div>

          <aside className="rounded-3xl bg-stone-900 p-6 text-white shadow-sm">
            <h2 className="text-2xl font-bold">試算結果</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">一次性開辦費</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.setupCost)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">預留周轉金</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.workingCapital)}
                </p>
                <p className="mt-2 text-xs text-stone-300">
                  約占總預算 {formatPercent(result.workingCapitalRate)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">建議準備總資金</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.totalStartupCost)}
                </p>
              </div>

              <CalculatorAssumptionList items={assumptionItems} />

              <CopyResultButton
                text={resultSummaryText}
                toolId="startup_cost"
              />

              <CopyCalculatorLinkButton
                toolId="startup_cost"
                params={shareLinkParams}
              />
            </div>
          </aside>
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">裝潢設備合計</p>
            <p className="mt-2 text-2xl font-bold">
              {formatMoney(result.equipmentAndRenovationCost)}
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              若比例太高，可能壓縮開幕後營運緩衝。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">周轉金月數</p>
            <p className="mt-2 text-2xl font-bold">{reserveMonths} 個月</p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              用每月固定營運成本乘上預留月數估算。
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">每月固定成本假設</p>
            <p className="mt-2 text-2xl font-bold">
              {formatMoney(monthlyOperatingCost)}
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              建議搭配損益兩平工具檢查營業額壓力。
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">判斷建議：{result.verdict}</h2>
          <p className="mt-4 leading-7 text-stone-700">
            {result.verdictDetail}
          </p>
          <p className="mt-4 text-sm leading-6 text-stone-500">
            開店成本容易低估追加工程、設備耗材、試營運損耗與前幾個月來客不穩。
            本工具適合用來做初步預算表，正式投入前仍建議逐項詢價與保留安全預算。
          </p>
        </section>

        <section className="mt-8 rounded-3xl bg-orange-50 p-6 shadow-sm">
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
              href="/tools/labor-cost-ratio-calculator"
              className="rounded-full bg-white px-5 py-3 text-sm font-bold text-orange-700 transition hover:bg-orange-100"
            >
              人事成本占比試算器
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
