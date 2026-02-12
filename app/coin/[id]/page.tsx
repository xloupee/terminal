import Link from "next/link";
import {
  ArrowLeft,
  CandlestickChart,
  ChartNoAxesCombined,
  ChevronDown,
  Copy,
  ExternalLink,
  Gauge,
  RefreshCw,
  ShieldCheck
} from "lucide-react";
import { notFound } from "next/navigation";

import { getTokenById } from "@/components/terminal/data";
import { TerminalTopNavbar } from "@/components/terminal/top-navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CoinPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CoinPage({ params }: CoinPageProps) {
  const { id } = await params;
  const token = getTokenById(id);

  if (!token) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_20%_-10%,rgba(31,64,175,0.35),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.22),transparent_35%),linear-gradient(180deg,#05070f_0%,#04060c_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.08]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1700px] flex-col border-x border-white/10">
        <TerminalTopNavbar />

        <div className="border-b border-white/10 bg-black/80 px-3 py-2 sm:px-4">
          <div className="flex flex-wrap items-center gap-2">
            <Button asChild variant="outline" size="sm" className="h-8 border-white/15 bg-white/5 text-slate-200 hover:bg-white/10">
              <Link href="/">
                <ArrowLeft className="h-3.5 w-3.5" />
                Back
              </Link>
            </Button>
            <Link
              href="/"
              className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-slate-200 transition-colors hover:bg-white/20"
            >
              Pulse
            </Link>
            <Badge variant="outline" className="rounded-full border-cyan-400/40 bg-cyan-400/15 px-3 py-1 text-[11px] text-cyan-300">
              {token.ticker}
            </Badge>
            <Badge variant="outline" className="rounded-full border-white/15 px-3 py-1 text-[11px] text-slate-300">
              Pumpfun
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
          <section className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="rounded-2xl border border-white/10 bg-black/70 p-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{token.name}</p>
                    <p className="text-sm text-slate-400">
                      {token.ticker} • {token.age} • {token.creator}
                    </p>
                    <Badge variant="outline" className="mt-2 border-cyan-400/40 bg-cyan-400/10 text-[10px] text-cyan-300">
                      Token Detail
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-2 text-xs sm:items-end sm:text-right">
                    <div>
                      <p className="text-slate-500">MC</p>
                      <p className="font-semibold text-slate-100">{token.marketCap}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Volume</p>
                      <p className="font-semibold text-slate-100">{token.volume}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">TXs</p>
                      <p className="font-semibold text-slate-100">{token.tx}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 rounded-xl border border-indigo-300/20 bg-indigo-400/5 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-200">Chart</p>
                  <Badge variant="outline" className="border-indigo-300/30 bg-indigo-500/10 text-[10px] text-indigo-200">
                    API Later
                  </Badge>
                </div>
                <div className="mt-2 flex h-[62vh] min-h-[360px] items-center justify-center rounded-lg border border-dashed border-indigo-300/30 bg-black/70">
                  <div className="text-center">
                    <CandlestickChart className="mx-auto h-6 w-6 text-indigo-300" />
                    <p className="mt-1 text-sm text-indigo-100">Chart placeholder for {token.ticker}</p>
                    <p className="text-xs text-slate-400">Hook in your chart API here</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-black/70 p-3">
              <div className="grid grid-cols-4 gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] p-2">
                <div>
                  <p className="text-[10px] text-slate-500">5m Vol</p>
                  <p className="text-xs font-semibold text-slate-200">$0.657</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500">Buys</p>
                  <p className="text-xs font-semibold text-emerald-300">1 / $0.657</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500">Sells</p>
                  <p className="text-xs font-semibold text-rose-300">0 / $0</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500">Net Vol.</p>
                  <p className="text-xs font-semibold text-emerald-300">+$0.657</p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-[1fr_1fr_36px] gap-1.5">
                <Button className="h-8 bg-emerald-400 text-[12px] font-semibold text-black hover:bg-emerald-300">Buy</Button>
                <Button variant="outline" className="h-8 border-white/15 bg-white/5 text-[12px] text-slate-300 hover:bg-white/10">
                  Sell
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-9 border-white/15 bg-white/5 text-slate-400 hover:bg-white/10">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-2">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-3 text-[12px]">
                    <button className="font-semibold text-slate-100">Market</button>
                    <button className="text-slate-400">Limit</button>
                    <button className="text-slate-400">Adv.</button>
                  </div>
                  <p className="text-[11px] text-slate-400">2 | $0.523</p>
                </div>

                <div className="mt-2 rounded-lg border border-white/10 bg-black/70 p-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>AMOUNT</span>
                    <span>0.0</span>
                  </div>
                  <div className="mt-2 grid grid-cols-4 gap-1">
                    {["0.01", "0.1", "1", "10"].map((value) => (
                      <button
                        key={value}
                        className="h-7 rounded-md border border-white/10 bg-white/[0.02] text-[11px] text-slate-300 transition-colors hover:bg-white/[0.07]"
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                  <span>% 20%</span>
                  <span>|</span>
                  <span className="text-amber-300">0.001 A</span>
                  <span>|</span>
                  <span>0.001</span>
                  <span>|</span>
                  <span>Off</span>
                </div>

                <label className="mt-2 flex items-center gap-2 text-[12px] text-slate-300">
                  <input type="checkbox" className="h-3.5 w-3.5 rounded border-white/20 bg-black" />
                  Advanced Trading Strategy
                </label>
              </div>

              <Button className="mt-3 h-10 w-full rounded-full bg-emerald-400 text-sm font-semibold text-black hover:bg-emerald-300">
                Buy {token.name.split(" ")[0]}
              </Button>

              <div className="mt-3 grid grid-cols-4 gap-1 rounded-xl border border-white/10 bg-white/[0.02] p-2 text-center">
                <div>
                  <p className="text-[10px] text-slate-500">Bought</p>
                  <p className="text-xs font-semibold text-emerald-300">$ 0</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500">Sold</p>
                  <p className="text-xs font-semibold text-rose-300">$ 0</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500">Holding</p>
                  <p className="text-xs font-semibold text-slate-200">$ 0</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500">PnL</p>
                  <p className="text-xs font-semibold text-emerald-300">+0 (+0%)</p>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-3 gap-1 rounded-xl border border-white/10 bg-white/[0.02] p-1">
                <button className="h-8 rounded-md bg-indigo-500/30 text-[11px] font-semibold text-indigo-200">PRESET 1</button>
                <button className="h-8 rounded-md text-[11px] text-slate-300">PRESET 2</button>
                <button className="h-8 rounded-md text-[11px] text-slate-300">PRESET 3</button>
              </div>

              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-100">Token Info</p>
                  <RefreshCw className="h-3.5 w-3.5 text-slate-500" />
                </div>

                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  {[
                    { label: "Top 10 H.", value: "18.79%", tone: "text-rose-300" },
                    { label: "Dev H.", value: "1.54%", tone: "text-emerald-300" },
                    { label: "Snipers H.", value: "1.54%", tone: "text-emerald-300" },
                    { label: "Insiders", value: "73.59%", tone: "text-rose-300" },
                    { label: "Bundlers", value: "0%", tone: "text-emerald-300" },
                    { label: "LP Burned", value: "100%", tone: "text-emerald-300" }
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-white/10 bg-black/70 p-2 text-center">
                      <p className={`text-sm font-semibold ${item.tone}`}>{item.value}</p>
                      <p className="mt-0.5 text-[10px] text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  {[
                    { label: "Holders", value: "4657", tone: "text-slate-200" },
                    { label: "Pro Traders", value: "375", tone: "text-slate-200" },
                    { label: "Dex Paid", value: "Unpaid", tone: "text-rose-300" }
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-white/10 bg-black/70 p-2 text-center">
                      <p className={`text-sm font-semibold ${item.tone}`}>{item.value}</p>
                      <p className="mt-0.5 text-[10px] text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-2 space-y-1.5">
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/70 px-2 py-1.5 text-[11px] text-slate-300">
                    <span className="truncate">CA: 3utLaHKKsfaD7Ka...pump</span>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/70 px-2 py-1.5 text-[11px] text-slate-300">
                    <span className="truncate">DA: GvWEm9wsUYAY...9u8T</span>
                    <div className="flex items-center gap-1.5">
                      <Copy className="h-3.5 w-3.5 text-slate-500" />
                      <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/70 px-2 py-1.5 text-[11px] text-slate-300">
                    <span className="truncate">2h3L...R1FE | 4.00 | 21h</span>
                    <span className="text-slate-500">-</span>
                  </div>
                </div>
              </div>

              <button className="mt-3 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-left text-[12px] text-slate-300">
                <span>Reused Image Tokens (4)</span>
                <span>+</span>
              </button>
            </aside>
          </section>
        </div>      </div>
    </main>
  );
}
