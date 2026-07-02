import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-stone-900">開店小工具箱</p>
            <p className="mt-1 text-sm text-stone-500">
              餐飲毛利、外送抽成、開店成本、損益兩平與促銷活動的簡單試算工具。
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-stone-500">
            <Link href="/about" className="hover:text-orange-700 hover:underline">
              關於本站
            </Link>
            <Link href="/privacy" className="hover:text-orange-700 hover:underline">
              隱私權政策
            </Link>
            <Link href="/terms" className="hover:text-orange-700 hover:underline">
              使用條款
            </Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-stone-400">
          © 2026 開店小工具箱。本網站工具僅供試算參考，實際經營結果仍需依現場狀況判斷。
        </p>
      </div>
    </footer>
  );
}