"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/svg/logo.svg";
import Image from "next/image";

const links = [
  { href: "/dashboard", label: "Overview", icon: "📊" },
  { href: "/dashboard/projects", label: "Projects", icon: "📁" },
  { href: "/dashboard/posts", label: "Add Post", icon: "➕" },
  { href: "/dashboard/media", label: "Media", icon: "🖼️" },
  { href: "/dashboard/users", label: "Users", icon: "👥" },
  { href: "/dashboard/settings", label: "Settings", icon: "⚙️" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900 md:sticky md:top-0 md:h-screen md:w-60 md:shrink-0 md:overflow-y-auto md:border-b-0 md:border-r md:p-4">
      <div className="flex items-center gap-3 px-2 pb-3 md:pb-6">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600 text-xl text-white">
          <Image src={logo} alt="Logo" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-bold leading-tight">Al Arafat</p>
          <p className="text-xs text-gray-500">Foundation Admin</p>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto md:flex-col">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
                  : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
