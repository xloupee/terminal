import Link from "next/link";
import {
  CalendarDays,
  ChevronDown,
  Circle,
  EyeOff,
  Gauge,
  ShieldCheck
} from "lucide-react";

import { RealizedPnlChart } from "@/components/terminal/realized-pnl-chart";
import { TerminalTopNavbar } from "@/components/terminal/top-navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const performanceRows = [
  { label: "Total PnL", value: "-$109.12", tone: "text-rose-400" },
  { label: "Realized PNL", value: "-$109.12", tone: "text-rose-400" },
  { label: "Total TXNS", value: "194 83 / 111", tone: "text-slate-300" }
];

const distributionRows = [
  { label: "+500%", value: "0", color: "text-slate-500" },
  { label: "200% - 500%", value: "0", color: "text-slate-500" },
  { label: "0% - 200%", value: "28", color: "text-emerald-300" },
  { label: "0% - -50%", value: "46", color: "text-fuchsia-300" },
  { label: "< -50%", value: "1", color: "text-rose-400" }
];

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.06]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1700px] flex-col border-x border-white/10">
        <TerminalTopNavbar />

        <div className="border-b border-white/10 bg-black/80 px-3 py-2 sm:px-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-4 text-[28px] font-semibold leading-none">
              <span className="text-slate-100">Spot</span>
              <span className="text-slate-500">Wallets</span>
              <span className="text-slate-500">Perpetuals</span>
            </div>
            <div className="ml-auto flex w-full items-center gap-2 sm:w-auto">
              <Input placeholder="Search for other wallets..." className="h-9 rounded-full border-white/10 bg-black text-xs" />
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <Badge variant="outline" className="rounded-full border-white/15 bg-white/5 px-3 py-1 text-slate-200">
              2 Wallets
              <ChevronDown className="ml-1 h-3.5 w-3.5" />
            </Badge>
            <span className="inline-flex items-center gap-1">
              <Circle className="h-3 w-3 fill-emerald-300 text-emerald-300" />
              0.523
            </span>
            <span className="inline-flex items-center gap-1">
              <Circle className="h-3 w-3 fill-slate-500 text-slate-500" />0
            </span>
            <div className="ml-auto flex items-center gap-3 text-slate-400">
              <CalendarDays className="h-3.5 w-3.5" />
              <button>1d</button>
              <button>7d</button>
              <button>30d</button>
              <button className="text-indigo-300">Max</button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-3">
          <section className="overflow-hidden rounded-xl border border-white/10 bg-black/70">
            <div className="grid border-b border-white/10 xl:grid-cols-[300px_minmax(0,1fr)_320px]">
              <div className="border-b border-white/10 p-3 xl:border-b-0 xl:border-r">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-200">Balance</p>
                  <span className="text-xs text-slate-500">USD</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-[11px] text-slate-500">Total Value</p>
                    <p className="text-3xl font-semibold text-slate-100">$41.66</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500">Unrealized PNL</p>
                    <p className="text-xl font-semibold text-slate-100">$0</p>
                  </div>
                  <div className="pt-3">
                    <p className="text-[11px] text-slate-500">Tradeable Balance</p>
                    <p className="text-2xl font-semibold text-slate-100">$41.66</p>
                  </div>
                </div>
              </div>

              <div className="p-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-200">Realized PNL</p>
                  <button className="text-xs text-slate-500">Export</button>
                </div>
                <RealizedPnlChart />
              </div>

              <div className="border-t border-white/10 p-3 xl:border-l xl:border-t-0">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-200">Performance</p>
                  <button className="text-xs text-slate-500">Details</button>
                </div>
                <div className="space-y-1.5 text-xs">
                  {performanceRows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between">
                      <span className="text-slate-500">{row.label}</span>
                      <span className={`font-medium ${row.tone}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-1.5 text-xs">
                  {distributionRows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-2 ${row.color}`}>
                        <Circle className="h-2.5 w-2.5 fill-current" />
                        {row.label}
                      </span>
                      <span className="text-slate-400">{row.value}</span>
                    </div>
                  ))}
                  <div className="mt-3 h-1 rounded-full bg-gradient-to-r from-emerald-300 via-fuchsia-400 to-rose-400" />
                </div>
              </div>
            </div>

            <div className="grid xl:grid-cols-2">
              <div className="border-b border-white/10 xl:border-b-0 xl:border-r">
                <div className="border-b border-white/10 p-3">
                  <div className="flex items-center gap-4 text-sm">
                    <button className="border-b border-slate-100 pb-1 font-semibold text-slate-100">Active Positions</button>
                    <button className="text-slate-500">History</button>
                    <button className="text-slate-500">Top 100</button>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <Input placeholder="Search by name or address" className="h-8 max-w-[260px] border-white/10 bg-black text-xs" />
                    <button className="inline-flex items-center gap-1 text-xs text-slate-400">
                      <EyeOff className="h-3.5 w-3.5" />
                      Show Hidden
                    </button>
                    <button className="text-xs text-slate-400">SOL</button>
                  </div>
                </div>
                <div className="flex h-[330px] items-center justify-center">
                  <div className="text-center">
                    <EyeOff className="mx-auto h-10 w-10 text-slate-700" />
                    <p className="mt-2 text-sm text-slate-500">No active positions</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="border-b border-white/10 p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-100">Activity</p>
                    <span className="text-xs text-slate-500">Live Feed</span>
                  </div>
                  <div className="mt-2 grid grid-cols-4 text-[11px] text-slate-500">
                    <span>Type</span>
                    <span>Token</span>
                    <span>Amount</span>
                    <span>Age</span>
                  </div>
                </div>
                <div className="flex h-[330px] items-center justify-center">
                  <div className="text-center">
                    <Gauge className="mx-auto h-10 w-10 text-slate-700" />
                    <p className="mt-2 text-sm text-slate-500">No activity</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>      </div>
    </main>
  );
}
