import Link from "next/link";
import TrackedLink from "@/components/tracked-link";

const navItems = [
  {
    label: "工具",
    href: "/tools",
  },
  {
    label: "文章",
    href: "/blog",
  },
  {
    label: "常見問題",
    href: "/faq",
  },
  {
    label: "關於",
    href: "/about",
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
            <TrackedLink
              key={item.href}
              href={item.href}
              eventName="click_nav"
              eventParams={{ nav_item: item.label, destination: item.href }}
              className="rounded-full px-3 py-2 transition hover:bg-orange-50 hover:text-orange-700"
            >
              {item.label}
            </TrackedLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
