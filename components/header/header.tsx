"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/news", label: "Новости" },
  { href: "/matches", label: "Матчи" },
  { href: "/tournaments", label: "Турниры" },
  { href: "/teams", label: "Команды" },
  { href: "/players", label: "Игроки" },
  { href: "/media", label: "Медиа" },
  { href: "/rules", label: "Правила" },
] as const;

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between gap-6 border-b border-zinc-800 bg-[#1A1A1A] px-4 md:px-6">
      {/* Logo */}
      <Link
        href="/"
        className="flex shrink-0 items-center gap-1.5 text-white transition-opacity hover:opacity-90"
      >
        <span className="text-lg font-bold">GTA5</span>
        <span className="text-lg font-bold text-[#e85d04]">★</span>
        <span className="text-lg font-bold">RP</span>
      </Link>

      {/* Nav */}
      <nav className="hidden flex-1 items-center justify-center gap-6 md:flex" aria-label="Основное меню">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn("text-sm font-normal text-white transition-opacity hover:opacity-80",
              pathname === href && "text-[#e85d04] underline")}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Search */}
      <div className="hidden max-w-[240px] flex-1 md:block lg:max-w-[280px]">
        <label htmlFor="header-search" className="sr-only">
          Поиск по сайту
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" aria-hidden>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            id="header-search"
            type="search"
            placeholder="Поиск по сайту"
            className="h-9 w-full rounded-md border border-zinc-700 bg-zinc-800/80 pl-9 pr-3 text-sm text-[#DEDEDE] placeholder:text-zinc-500 focus:border-[#e85d04] focus:outline-none focus:ring-1 focus:ring-[#e85d04]"
          />
        </div>
      </div>

      {/* Login */}
      <Link
        href="/sign-in"
        className="shrink-0 rounded-md bg-zinc-700 px-4 py-2 text-sm font-medium text-[#DEDEDE] transition-colors hover:bg-zinc-600"
      >
        Войти
      </Link>
    </header>
  );
}
