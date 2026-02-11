import {
  Bell,
  ChartNoAxesCombined,
  ChevronDown,
  Gauge,
  Menu,
  Search,
  ShieldCheck,
  Wallet
} from "lucide-react";

import { marketColumns } from "@/components/terminal/data";
import { MarketColumn } from "@/components/terminal/market-column";
import { Badge } from "@/components/ui/badge";
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
  "Rewards"
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.08]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1700px] flex-col border-x border-white/10">
        <header className="border-b border-white/10 bg-black/85 px-3 py-2 backdrop-blur-md sm:px-4">
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
                <p className="text-[15px] font-bold tracking-[0.12em] text-white">AXIOM</p>
                <p className="-mt-1 text-[10px] uppercase tracking-[0.2em] text-cyan-300">Terminal</p>
              </div>
            </div>

            <nav className="hidden items-center gap-3 xl:flex">
              {topNavItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs font-medium text-slate-400 transition-colors hover:text-slate-100"
                >
                  {item}
                </a>
              ))}
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

        <div className="border-b border-white/10 bg-black/80 px-3 py-2 sm:px-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-slate-200">
              Pulse
            </Badge>
            <Badge variant="outline" className="rounded-full border-cyan-400/40 bg-cyan-400/15 px-3 py-1 text-[11px] text-cyan-300">
              Pumpfun
            </Badge>
            <Badge variant="outline" className="rounded-full border-white/15 px-3 py-1 text-[11px] text-slate-300">
              Preset 1
            </Badge>
            <div className="ml-auto flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-full border-white/15 bg-white/5 px-3 text-[11px] text-slate-300 hover:bg-white/10"
              >
                <Gauge className="h-3.5 w-3.5" />
                Display
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-full border-white/15 bg-white/5 px-3 text-[11px] text-slate-300 hover:bg-white/10"
              >
                <ChartNoAxesCombined className="h-3.5 w-3.5" />
                Volume
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 rounded-full border-emerald-400/30 bg-emerald-500/15 px-3 text-[11px] text-emerald-200 hover:bg-emerald-500/25"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Stable
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 px-2 py-2 sm:px-3 sm:py-3">
          <section className="grid gap-3 xl:grid-cols-3">
            {marketColumns.map((column) => (
              <MarketColumn key={column.id} column={column} />
            ))}
          </section>
        </div>

        <footer className="border-t border-white/10 bg-black/85 px-3 py-2 text-[11px] backdrop-blur-md sm:px-4">
          <div className="flex flex-wrap items-center gap-2 text-slate-400">
            <Badge variant="outline" className="border-white/15 bg-white/5 text-[10px] text-slate-300">
              Wallet: Connected
            </Badge>
            <span>Latency: 14.2k</span>
            <span>•</span>
            <span>Gas: 0.0247</span>
            <span>•</span>
            <span className="text-emerald-400">Connection stable</span>
            <span className="ml-auto font-mono text-slate-500">US-E / v0.1</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
