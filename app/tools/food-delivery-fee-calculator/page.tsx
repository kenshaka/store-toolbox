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

const tool = getToolByKey("foodDeliveryFeeCalculator");

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

export default function FoodDeliveryFeeCalculatorPage() {
  const [basePrice, setBasePrice] = useState(120);
  const [deliveryPrice, setDeliveryPrice] = useState(150);
  const [foodCost, setFoodCost] = useState(38);
  const [packagingCost, setPackagingCost] = useState(7);
  const [platformFeeRate, setPlatformFeeRate] = useState(30);
  const [shopSubsidy, setShopSubsidy] = useState(0);
  const [dailyOrders, setDailyOrders] = useState(30);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const searchParams = new URLSearchParams(window.location.search);

      const sharedBasePrice = getSharedNumberParam(searchParams, "basePrice");
      if (sharedBasePrice !== null) {
        setBasePrice(sharedBasePrice);
      }

      const sharedDeliveryPrice = getSharedNumberParam(
        searchParams,
        "deliveryPrice",
      );
      if (sharedDeliveryPrice !== null) {
        setDeliveryPrice(sharedDeliveryPrice);
      }

      const sharedFoodCost = getSharedNumberParam(searchParams, "foodCost");
      if (sharedFoodCost !== null) {
        setFoodCost(sharedFoodCost);
      }

      const sharedPackagingCost = getSharedNumberParam(
        searchParams,
        "packagingCost",
      );
      if (sharedPackagingCost !== null) {
        setPackagingCost(sharedPackagingCost);
      }

      const sharedPlatformFeeRate = getSharedNumberParam(
        searchParams,
        "platformFeeRate",
      );
      if (sharedPlatformFeeRate !== null) {
        setPlatformFeeRate(sharedPlatformFeeRate);
      }

      const sharedShopSubsidy = getSharedNumberParam(
        searchParams,
        "shopSubsidy",
      );
      if (sharedShopSubsidy !== null) {
        setShopSubsidy(sharedShopSubsidy);
      }

      const sharedDailyOrders = getSharedNumberParam(
        searchParams,
        "dailyOrders",
      );
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
      tool_id: "food_delivery_fee",
      field_name: fieldName,
    });
  }

  function applyExampleValues() {
    setBasePrice(120);
    setDeliveryPrice(150);
    setFoodCost(38);
    setPackagingCost(7);
    setPlatformFeeRate(30);
    setShopSubsidy(0);
    setDailyOrders(30);
  }

  function resetCalculator() {
    setBasePrice(0);
    setDeliveryPrice(0);
    setFoodCost(0);
    setPackagingCost(0);
    setPlatformFeeRate(0);
    setShopSubsidy(0);
    setDailyOrders(0);
    trackedFieldsRef.current.clear();
  }

  const result = useMemo(() => {
    const totalCost = foodCost + packagingCost;
    const platformFee = deliveryPrice * (platformFeeRate / 100);
    const netRevenueAfterFee = deliveryPrice - platformFee;
    const deliveryProfitPerOrder =
      deliveryPrice - platformFee - totalCost - shopSubsidy;
    const deliveryMarginRate =
      deliveryPrice > 0 ? (deliveryProfitPerOrder / deliveryPrice) * 100 : 0;

    const baseProfitPerOrder = basePrice - totalCost;
    const profitDifferencePerOrder =
      deliveryProfitPerOrder - baseProfitPerOrder;
    const dailyProfit = deliveryProfitPerOrder * dailyOrders;
    const monthlyProfit = dailyProfit * 30;

    const requiredDeliveryPrice =
      platformFeeRate >= 100
        ? 0
        : (baseProfitPerOrder + totalCost + shopSubsidy) /
          (1 - platformFeeRate / 100);

    const priceGap = requiredDeliveryPrice - deliveryPrice;

    let verdict = "可以測試";
    let verdictDetail =
      "外送訂單仍有正毛利，可以先小規模觀察訂單量、出餐壓力與顧客評價。";

    if (deliveryProfitPerOrder <= 0) {
      verdict = "不建議";
      verdictDetail =
        "扣掉平台抽成、食材、包材與店家補貼後，每筆外送訂單已經沒有毛利。建議調整外送售價或活動條件。";
    } else if (deliveryMarginRate < 20) {
      verdict = "毛利偏低";
      verdictDetail =
        "外送抽成後毛利率偏低。若還有廣告費、人力與耗損，實際利潤可能更薄。";
    } else if (profitDifferencePerOrder < 0) {
      verdict = "要小心";
      verdictDetail =
        "外送每筆毛利低於內用或自取毛利。除非外送能帶來明顯新增訂單，否則可能只是變忙但不一定更賺。";
    } else if (deliveryProfitPerOrder >= baseProfitPerOrder) {
      verdict = "毛利接近內用";
      verdictDetail =
        "依照目前設定，外送每筆毛利已接近或高於內用、自取毛利，可以再評估平台曝光與出餐能力。";
    }

    return {
      totalCost,
      platformFee,
      netRevenueAfterFee,
      deliveryProfitPerOrder,
      deliveryMarginRate,
      baseProfitPerOrder,
      profitDifferencePerOrder,
      dailyProfit,
      monthlyProfit,
      requiredDeliveryPrice,
      priceGap,
      verdict,
      verdictDetail,
    };
  }, [
    basePrice,
    deliveryPrice,
    foodCost,
    packagingCost,
    platformFeeRate,
    shopSubsidy,
    dailyOrders,
  ]);

  const assumptionItems = [
    { label: "內用／自取售價", value: formatMoney(basePrice) },
    { label: "外送平台售價", value: formatMoney(deliveryPrice) },
    { label: "食材成本", value: formatMoney(foodCost) },
    { label: "包材成本", value: formatMoney(packagingCost) },
    { label: "平台抽成比例", value: formatPercent(platformFeeRate) },
    { label: "店家負擔折扣／補貼", value: formatMoney(shopSubsidy) },
    { label: "預估每日外送訂單數", value: `${dailyOrders} 單` },
  ];

  const shareLinkParams = [
    { key: "basePrice", value: basePrice },
    { key: "deliveryPrice", value: deliveryPrice },
    { key: "foodCost", value: foodCost },
    { key: "packagingCost", value: packagingCost },
    { key: "platformFeeRate", value: platformFeeRate },
    { key: "shopSubsidy", value: shopSubsidy },
    { key: "dailyOrders", value: dailyOrders },
  ];

  const resultSummaryText = [
    "開店小工具箱｜外送平台抽成試算報告",
    "",
    "一、目前試算假設",
    ...assumptionItems.map((item) => `${item.label}：${item.value}`),
    "",
    "二、試算結果",
    `平台抽成金額：${formatMoney(result.platformFee)}`,
    `抽成後實收金額：${formatMoney(result.netRevenueAfterFee)}`,
    `每筆外送毛利：${formatMoney(result.deliveryProfitPerOrder)}`,
    `外送毛利率：${formatPercent(result.deliveryMarginRate)}`,
    `內用／自取每份毛利：${formatMoney(result.baseProfitPerOrder)}`,
    `外送與內用毛利差：${formatMoney(result.profitDifferencePerOrder)}`,
    `每日外送毛利：${formatMoney(result.dailyProfit)}`,
    `每月外送毛利：約 ${formatMoney(result.monthlyProfit)}`,
    `維持內用毛利的外送價：${formatMoney(result.requiredDeliveryPrice)}`,
    "",
    "三、外送判斷",
    `${result.verdict}：${result.verdictDetail}`,
    "",
    "提醒：本結果由開店小工具箱產生，僅供經營試算參考。實際外送利潤仍需依平台合約、活動補貼與包材成本確認。",
  ].join("\n");

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold text-orange-700">
            外送平台成本試算工具
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
            <h2 className="text-2xl font-bold">輸入外送資料</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              欄位右側會標示單位；不適用的金額、比例或數量可以填
              0，手機輸入時會優先顯示數字鍵盤。
            </p>
            <ApplyExampleButton
              toolId="food_delivery_fee"
              description="先用「內用 120 元、外送 150 元、平台抽成 30%」的範例，快速查看外送單還賺不賺。"
              onApply={applyExampleValues}
            />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <NumberInput
                label="內用／自取售價"
                value={basePrice}
                onChange={(value) => {
                  trackCalculatorField("base_price");
                  setBasePrice(value);
                }}
                help="用來比較原本不經平台抽成時的每份毛利"
              />

              <NumberInput
                label="外送平台售價"
                value={deliveryPrice}
                onChange={(value) => {
                  trackCalculatorField("delivery_price");
                  setDeliveryPrice(value);
                }}
                help="平台上實際販售的餐點價格"
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
                help="餐盒、杯子、袋子、封膜等外送包材"
              />

              <NumberInput
                label="平台抽成比例"
                value={platformFeeRate}
                onChange={(value) => {
                  trackCalculatorField("platform_fee_rate");
                  setPlatformFeeRate(value);
                }}
                suffix="%"
                help="例如平台抽成 30% 就填 30"
              />

              <NumberInput
                label="店家負擔折扣／補貼"
                value={shopSubsidy}
                onChange={(value) => {
                  trackCalculatorField("shop_subsidy");
                  setShopSubsidy(value);
                }}
                help="例如每份折扣、免運補貼或平台活動由店家負擔的金額"
              />

              <NumberInput
                label="預估每日外送訂單數"
                value={dailyOrders}
                onChange={(value) => {
                  trackCalculatorField("daily_orders");
                  setDailyOrders(value);
                }}
                suffix="單"
                help="估算每天外送平台大約會帶來幾筆訂單"
              />
            </div>

            <CalculatorResetButton
              toolId="food_delivery_fee"
              onReset={resetCalculator}
            />
          </div>

          <aside className="rounded-3xl bg-stone-900 p-6 text-white shadow-sm">
            <h2 className="text-2xl font-bold">試算結果</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">平台抽成金額</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.platformFee)}
                </p>
                <p className="mt-2 text-xs text-stone-300">
                  外送售價 × {formatPercent(platformFeeRate)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">抽成後實收金額</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.netRevenueAfterFee)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">每筆外送毛利</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.deliveryProfitPerOrder)}
                </p>
                <p className="mt-2 text-xs text-stone-300">
                  毛利率 {formatPercent(result.deliveryMarginRate)}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">直接成本合計</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.totalCost)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">內用／自取每份毛利</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.baseProfitPerOrder)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">外送與內用毛利差</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.profitDifferencePerOrder)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">每日外送毛利</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.dailyProfit)}
                  </p>
                  <p className="mt-2 text-xs text-stone-300">
                    每月約 {formatMoney(result.monthlyProfit)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">維持內用毛利的外送價</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.requiredDeliveryPrice)}
                  </p>
                  <p className="mt-2 text-xs text-stone-300">
                    目前外送價比建議價 {result.priceGap > 0 ? "低" : "高"}{" "}
                    {formatMoney(Math.abs(result.priceGap))}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-orange-500 p-4 text-stone-950">
                <p className="text-sm font-semibold">外送判斷</p>
                <p className="mt-1 text-3xl font-black">{result.verdict}</p>
                <p className="mt-3 text-sm leading-6">{result.verdictDetail}</p>
              </div>

              <CalculatorAssumptionList items={assumptionItems} />

              <CopyResultButton
                text={resultSummaryText}
                toolId="food_delivery_fee"
              />

              <CopyCalculatorLinkButton
                toolId="food_delivery_fee"
                params={shareLinkParams}
              />
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">計算公式</h2>

          <div className="mt-5 space-y-3 text-stone-700">
            <p>平台抽成金額 = 外送平台售價 × 平台抽成比例</p>
            <p>抽成後實收金額 = 外送平台售價 − 平台抽成金額</p>
            <p>直接成本合計 = 食材成本 + 包材成本</p>
            <p>
              每筆外送毛利 = 外送平台售價 − 平台抽成金額 − 直接成本合計 −
              店家負擔折扣／補貼
            </p>
            <p>外送毛利率 = 每筆外送毛利 ÷ 外送平台售價 × 100%</p>
            <p>每日外送毛利 = 每筆外送毛利 × 預估每日外送訂單數</p>
          </div>

          <div className="mt-6 rounded-2xl bg-stone-100 p-5">
            <h3 className="font-bold">範例</h3>
            <p className="mt-3 leading-7 text-stone-700">
              如果內用售價 120 元、外送平台售價 150 元，食材成本 38 元、包材成本
              7 元， 平台抽成 30%，平台抽成金額是 45 元。扣掉直接成本 45 元後，
              每筆外送毛利是 60 元；內用或自取毛利是 75 元，代表外送每筆少 15
              元毛利。
            </p>
          </div>

          <p className="mt-6 text-sm leading-6 text-stone-500">
            本工具僅供外送平台上架或調整平台售價前的初步試算。實際結果仍會受到平台合約、
            活動補貼、廣告費、備料耗損、出餐人力、顧客評價與各平台規則影響。
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-orange-700">相關文章</p>
          <h2 className="mt-2 text-2xl font-bold">延伸閱讀</h2>
          <p className="mt-4 leading-7 text-stone-700">
            搭配外送平台抽成情境，了解平台抽成、包材成本、外送定價與活動補貼該怎麼一起評估。
          </p>
          <Link
            href="/blog/food-delivery-platform-fee"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
          >
            外送平台抽成怎麼算？餐飲店上架外送前要先知道的成本
          </Link>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">常見問題</h2>
          <div className="mt-5 grid gap-5">
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q1：外送平台抽成要算進成本嗎？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                要。平台抽成是每筆外送訂單都會發生的變動成本，會直接吃掉單品毛利。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q2：外送價格一定要比內用價格高嗎？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                不一定，但如果平台抽成比例高、包材成本也高，外送價完全等同內用價時，毛利通常會明顯下降。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q3：平台活動折扣要另外算嗎？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                要。如果折扣、免運補貼或平台活動費用由店家負擔，就應該在平台抽成之外再扣除。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-5">
              <h3 className="font-bold text-stone-900">
                Q4：外送訂單增加就一定比較賺嗎？
              </h3>
              <p className="mt-2 leading-7 text-stone-700">
                不一定。要比較外送每筆毛利、每日外送總毛利，以及外送是否增加出餐壓力或影響現場服務。
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
