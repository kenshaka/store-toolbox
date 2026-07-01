"use client";

import { useMemo, useState } from "react";

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
  return (
    <label className="block">
      <span className="text-sm font-medium text-stone-800">{label}</span>
      <div className="mt-2 flex overflow-hidden rounded-xl border border-stone-300 bg-white focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200">
        <input
          type="number"
          value={value}
          min="0"
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

export default function DiscountProfitCalculatorPage() {
  const [originalPrice, setOriginalPrice] = useState(100);
  const [discountPrice, setDiscountPrice] = useState(80);
  const [productCost, setProductCost] = useState(40);
  const [originalDailySales, setOriginalDailySales] = useState(50);
  const [discountDailySales, setDiscountDailySales] = useState(80);

  const result = useMemo(() => {
    const originalProfitPerItem = originalPrice - productCost;
    const discountProfitPerItem = discountPrice - productCost;

    const originalMarginRate =
      originalPrice > 0 ? (originalProfitPerItem / originalPrice) * 100 : 0;

    const discountMarginRate =
      discountPrice > 0 ? (discountProfitPerItem / discountPrice) * 100 : 0;

    const discountRate =
      originalPrice > 0
        ? ((originalPrice - discountPrice) / originalPrice) * 100
        : 0;

    const profitLostPerItem = originalProfitPerItem - discountProfitPerItem;

    const originalDailyProfit = originalProfitPerItem * originalDailySales;
    const discountDailyProfit = discountProfitPerItem * discountDailySales;
    const dailyProfitDifference = discountDailyProfit - originalDailyProfit;

    const breakEvenSales =
      discountProfitPerItem > 0
        ? Math.ceil(originalDailyProfit / discountProfitPerItem)
        : 0;

    const extraSalesNeeded =
      discountProfitPerItem > 0
        ? Math.max(breakEvenSales - originalDailySales, 0)
        : 0;

    let verdict = "可以測試";
    let verdictDetail =
      "活動後仍有毛利，且預估每日毛利沒有明顯下降，可以先小規模測試。";

    if (discountProfitPerItem <= 0) {
      verdict = "不建議";
      verdictDetail =
        "活動價低於或等於成本，每賣一份都沒有毛利。除非是清庫存或引流策略，否則不建議。";
    } else if (dailyProfitDifference < 0) {
      verdict = "可能不划算";
      verdictDetail =
        "即使活動後銷量增加，預估每日毛利仍低於原本狀態。建議提高活動價或重新估算銷量。";
    } else if (dailyProfitDifference > 0) {
      verdict = "有機會";
      verdictDetail =
        "依照目前假設，活動後每日毛利會增加。不過仍要注意備料、人力與尖峰出餐壓力。";
    }

    return {
      originalProfitPerItem,
      discountProfitPerItem,
      originalMarginRate,
      discountMarginRate,
      discountRate,
      profitLostPerItem,
      originalDailyProfit,
      discountDailyProfit,
      dailyProfitDifference,
      breakEvenSales,
      extraSalesNeeded,
      verdict,
      verdictDetail,
    };
  }, [
    originalPrice,
    discountPrice,
    productCost,
    originalDailySales,
    discountDailySales,
  ]);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold text-orange-700">
            商店促銷試算工具
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            折扣活動損益計算器
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            輸入原價、活動價、商品成本與預估銷量，
            快速判斷打折後每日毛利是增加還是減少。
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">輸入活動資料</h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <NumberInput
                label="商品原價"
                value={originalPrice}
                onChange={setOriginalPrice}
                help="例如：原本售價 100 元"
              />

              <NumberInput
                label="活動售價"
                value={discountPrice}
                onChange={setDiscountPrice}
                help="例如：打折後售價 80 元"
              />

              <NumberInput
                label="單品成本"
                value={productCost}
                onChange={setProductCost}
                help="食材、包材等直接成本"
              />

              <NumberInput
                label="原本每日銷量"
                value={originalDailySales}
                onChange={setOriginalDailySales}
                suffix="份"
                help="沒有活動時，每天大約賣幾份"
              />

              <NumberInput
                label="活動後預估每日銷量"
                value={discountDailySales}
                onChange={setDiscountDailySales}
                suffix="份"
                help="活動開始後，預估每天會賣幾份"
              />
            </div>
          </div>

          <aside className="rounded-3xl bg-stone-900 p-6 text-white shadow-sm">
            <h2 className="text-2xl font-bold">試算結果</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">折扣幅度</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatPercent(result.discountRate)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">原本每份毛利</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.originalProfitPerItem)}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-stone-300">活動每份毛利</p>
                <p className="mt-1 text-3xl font-bold">
                  {formatMoney(result.discountProfitPerItem)}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">原本毛利率</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatPercent(result.originalMarginRate)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">活動毛利率</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatPercent(result.discountMarginRate)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">原本每日毛利</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.originalDailyProfit)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">活動每日毛利</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.discountDailyProfit)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">每日毛利差額</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(result.dailyProfitDifference)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-stone-300">打平所需銷量</p>
                  <p className="mt-1 text-2xl font-bold">
                    {result.breakEvenSales} 份
                  </p>
                  <p className="mt-2 text-xs text-stone-300">
                    比原本多賣 {result.extraSalesNeeded} 份才打平
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-orange-500 p-4 text-stone-950">
                <p className="text-sm font-semibold">活動判斷</p>
                <p className="mt-1 text-3xl font-black">{result.verdict}</p>
                <p className="mt-3 text-sm leading-6">{result.verdictDetail}</p>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">計算公式</h2>

          <div className="mt-5 space-y-3 text-stone-700">
            <p>原本每份毛利 = 商品原價 − 單品成本</p>
            <p>活動每份毛利 = 活動售價 − 單品成本</p>
            <p>折扣幅度 = 商品原價與活動售價的差額 ÷ 商品原價 × 100%</p>
            <p>原本每日毛利 = 原本每份毛利 × 原本每日銷量</p>
            <p>活動每日毛利 = 活動每份毛利 × 活動後預估每日銷量</p>
            <p>打平所需銷量 = 原本每日毛利 ÷ 活動每份毛利</p>
          </div>

          <div className="mt-6 rounded-2xl bg-stone-100 p-5">
            <h3 className="font-bold">範例</h3>
            <p className="mt-3 leading-7 text-stone-700">
              如果商品原價 100 元、成本 40 元，原本每份毛利是 60 元。
              活動價改成 80 元後，每份毛利變成 40 元。
              如果原本每天賣 50 份，每日毛利是 3,000 元；
              活動後若每天賣 80 份，每日毛利是 3,200 元，
              代表活動後每日毛利增加 200 元。
            </p>
          </div>

          <p className="mt-6 text-sm leading-6 text-stone-500">
            本工具僅供促銷活動試算。實際結果仍會受到來客數、備料、人力、
            客人回購率、活動曝光、平台抽成與成本變動等因素影響。
          </p>
        </section>
      </section>
    </main>
  );
}