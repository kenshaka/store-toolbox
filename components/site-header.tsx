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
    <header className="border-b border-orange-100/80 bg-[#fffaf3]/95 shadow-sm shadow-orange-950/5 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-sm font-black text-orange-800 ring-1 ring-orange-200/80">
            店
          </span>
          <span>
            <span className="block text-lg font-black tracking-tight text-stone-950">
              開店小工具箱
            </span>
            <span className="block text-xs text-stone-500 group-hover:text-orange-700">
              給小店老闆的營運試算工具
            </span>
          </span>
        </Link>

        <nav className="flex flex-wrap gap-2 text-sm font-medium text-stone-600">
          {navItems.map((item) => (
            <TrackedLink
              key={item.href}
              href={item.href}
              eventName="click_nav"
              eventParams={{ nav_item: item.label, destination: item.href }}
              className="rounded-full px-3 py-2 transition hover:bg-orange-100/70 hover:text-orange-800"
            >
              {item.label}
            </TrackedLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
