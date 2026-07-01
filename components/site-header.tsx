import Link from "next/link";

const navItems = [
  {
    label: "滿額加購",
    href: "/tools/add-on-promotion-calculator",
  },
  {
    label: "餐飲毛利",
    href: "/tools/restaurant-margin-calculator",
  },
  {
    label: "折扣試算",
    href: "/tools/discount-profit-calculator",
  },
  {
    label: "文章",
    href: "/blog",
  },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="group">
          <p className="text-lg font-black tracking-tight text-stone-900">
            開店小工具箱
          </p>
          <p className="text-xs text-stone-500 group-hover:text-orange-700">
            給小店老闆的營運試算工具
          </p>
        </Link>

        <nav className="flex flex-wrap gap-3 text-sm font-medium text-stone-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-orange-50 hover:text-orange-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}