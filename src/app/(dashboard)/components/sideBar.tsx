"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/svg/logo.svg";
import { adminLogout } from "@/service/auth";
import { GiExitDoor } from "react-icons/gi";
const links = [
  { href: "/dashboard", label: "Overview", icon: "📊" },
  { href: "/dashboard/projects", label: "Projects", icon: "📁" },
  { href: "/dashboard/donations", label: "Donations", icon: "💝" },
  { href: "/dashboard/blog", label: "Add Blog", icon: "➕" },
  { href: "/dashboard/activities", label: "Activities", icon: "🎯" },
  { href: "/dashboard/media", label: "Media", icon: "🖼️" },
  // { href: "/dashboard/users", label: "Users", icon: "👥" },
  { href: "/dashboard/settings", label: "Settings", icon: "⚙️" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await adminLogout();
    } finally {
      // error হলেও login page এ পাঠিয়ে দিই
      router.push("/admin-login");
      router.refresh();
    }
  }

  return (
    <aside className="border-b border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900 md:sticky md:top-0 md:flex md:h-screen md:w-60 md:shrink-0 md:flex-col md:overflow-y-auto md:border-b-0 md:border-r md:p-4">
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

      {/* Logout: desktop এ একদম নিচে থাকবে */}
      <div className="mt-3 border-t border-gray-200 pt-3 dark:border-gray-800 md:mt-auto">
        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 outline-none transition hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-red-500/40 disabled:cursor-not-allowed disabled:opacity-60 dark:text-red-400 dark:hover:bg-red-950"
        >
          {loggingOut ? "Logging out..." : "Logout"}
          <GiExitDoor />
        </button>
      </div>
    </aside>
  );
}
