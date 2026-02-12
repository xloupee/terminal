import Link from "next/link";
import {
  ChartNoAxesCombined,
  Gauge,
  ShieldCheck
} from "lucide-react";

import { marketColumns } from "@/components/terminal/data";
import { MarketColumn } from "@/components/terminal/market-column";
import { TerminalTopNavbar } from "@/components/terminal/top-navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.08]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1700px] flex-col border-x border-white/10">
        <TerminalTopNavbar />

        <div className="border-b border-white/10 px-3 py-2 sm:px-4">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/"
              className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-slate-200 transition-colors hover:bg-white/20"
            >
              Pulse
            </Link>
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
      </div>
    </main>
  );
}
