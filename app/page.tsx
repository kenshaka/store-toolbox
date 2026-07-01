import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold text-orange-700">
          給小店老闆的實用試算工具
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          開店小工具箱
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
          幫餐飲店、小吃店、飲料店快速試算滿額加購、餐飲毛利率與折扣活動，
          讓你在做促銷前先知道活動會不會賺錢。
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <Link
            href="/tools/add-on-promotion-calculator"
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-xl font-bold">滿額加購活動計算器</h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              輸入滿額門檻、加購價與商品成本，快速試算加購活動是否划算。
            </p>
          </Link>

          <Link
            href="/tools/restaurant-margin-calculator"
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-xl font-bold">餐飲毛利率計算器</h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              輸入售價與成本，計算單品毛利、毛利率與定價是否合理。
            </p>
          </Link>

          <Link
            href="/tools/discount-profit-calculator"
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-xl font-bold">折扣活動損益計算器</h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              試算打折後還剩多少毛利，以及需要多賣幾份才不會虧。
            </p>
          </Link>
        </div>

        <div className="mt-14 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">這個網站可以幫你做什麼？</h2>
          <p className="mt-4 leading-7 text-stone-700">
            商店在做活動時，除了看「客人會不會買」，還要計算「活動做完到底賺不賺」。
            開店小工具箱會把常見的促銷活動變成簡單的計算器，讓你在推出活動前先有基本判斷。
          </p>
        </div>
      </section>
    </main>
  );
}