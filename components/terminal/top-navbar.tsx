"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, Menu, Search, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const topNavItems = [
  "Discover",
  "Pulse",
  "Trackers",
  "Perpetuals",
  "Yield",
  "Vision",
  "Portfolio",
  "Dev",
  "Rewards"
];

export function TerminalTopNavbar() {
  const pathname = usePathname() ?? "";

  return (
    <header className="border-b border-white/10 bg-black/85 px-3 py-2 sm:px-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-lg border border-white/10 text-slate-300 hover:bg-white/10"
          >
            <Menu className="h-4 w-4" />
          </Button>
          <div>
            <p className="text-[15px] font-bold tracking-[0.12em] text-white">Terminal</p>
            <p className="-mt-1 text-[10px] uppercase tracking-[0.2em] text-cyan-300">Terminal</p>
          </div>
        </div>

        <nav className="hidden items-center gap-3 lg:flex">
          {topNavItems.map((item) => {
            if (item === "Pulse") {
              const isActive = pathname === "/";
              return (
                <Link
                  key={item}
                  href="/"
                  className={`text-xs font-medium transition-colors hover:text-slate-100 ${isActive ? "text-slate-300" : "text-slate-400"}`}
                >
                  {item}
                </Link>
              );
            }

            if (item === "Portfolio") {
              const isActive = pathname.startsWith("/portfolio");
              return (
                <Link
                  key={item}
                  href="/portfolio"
                  className={`text-xs font-medium transition-colors hover:text-slate-100 ${isActive ? "text-slate-300" : "text-slate-400"}`}
                >
                  {item}
                </Link>
              );
            }

            if (item === "Dev") {
              const isActive = pathname.startsWith("/dev");
              return (
                <Link
                  key={item}
                  href="/dev"
                  className={`text-xs font-medium transition-colors hover:text-slate-100 ${isActive ? "text-slate-300" : "text-slate-400"}`}
                >
                  {item}
                </Link>
              );
            }

            return (
              <a
                key={item}
                href="#"
                className="text-xs font-medium text-slate-400 transition-colors hover:text-slate-100"
              >
                {item}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex min-w-[280px] flex-1 items-center gap-2 sm:min-w-[420px] lg:max-w-[620px]">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <Input placeholder="Search token, contract, trader..." className="h-9 border-white/10 bg-black pl-9 text-xs" />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-9 border-emerald-400/25 bg-emerald-500/15 text-xs text-emerald-200 hover:bg-emerald-500/25"
          >
            SOL
            <ChevronDown className="h-3.5 w-3.5" />
          </Button>
          <Button className="h-9 rounded-lg bg-indigo-500 px-3 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-indigo-400">
            Deposit
          </Button>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-slate-400 hover:bg-white/10">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-slate-400 hover:bg-white/10">
            <Wallet className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
