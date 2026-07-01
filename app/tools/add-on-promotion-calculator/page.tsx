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

export default function AddOnPromotionCalculatorPage() {
  const [threshold, setThreshold] = useState(150);
  const [addOnPrice, setAddOnPrice] = useState(40);
  const [addOnCost, setAddOnCost] = useState(18);
  const [averageOrder, setAverageOrder] = useState(120);
  const [addOnRate, setAddOnRate] = useState(30);
  const [dailyOrders, setDailyOrders] = useState(80);

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
            快速估算這個滿額加購活動會不會賺錢。
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">輸入活動資料</h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <NumberInput
                label="單筆消費滿額門檻"
                value={threshold}
                onChange={setThreshold}
                help="例如：滿 150 元可以加購"
              />

              <NumberInput
                label="加購商品售價"
                value={addOnPrice}
                onChange={setAddOnPrice}
                help="例如：飲料加購價 40 元"
              />

              <NumberInput
                label="加購商品成本"
                value={addOnCost}
                onChange={setAddOnCost}
                help="包含食材、包材等直接成本"
              />

              <NumberInput
                label="原本平均客單價"
                value={averageOrder}
                onChange={setAverageOrder}
                help="用來判斷客人距離滿額還差多少"
              />

              <NumberInput
                label="預估加購率"
                value={addOnRate}
                onChange={setAddOnRate}
                suffix="%"
                help="例如：100 筆訂單中約 30 筆會加購"
              />

              <NumberInput
                label="每日訂單數"
                value={dailyOrders}
                onChange={setDailyOrders}
                suffix="單"
                help="估算每日與每月增加毛利"
              />
            </div>
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
      </section>
    </main>
  );
}