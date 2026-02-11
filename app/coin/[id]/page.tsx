import Link from "next/link";
import { ArrowLeft, CandlestickChart, CircleDot, Cpu, Timer } from "lucide-react";
import { notFound } from "next/navigation";

import { getTokenById } from "@/components/terminal/data";
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
        <header className="border-b border-white/10 bg-slate-950/70 px-3 py-3 backdrop-blur-md sm:px-4">
          <Button asChild variant="outline" className="border-white/15 bg-white/5 text-slate-200 hover:bg-white/10">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Pulse
            </Link>
          </Button>
        </header>

        <div className="flex-1 px-2 py-2 sm:px-3 sm:py-3">
          <section className="h-full rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-md">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-lg font-semibold text-white">{token.name}</p>
                  <p className="text-sm text-slate-400">
                    {token.ticker} • {token.age} • {token.creator}
                  </p>
                </div>
                <Badge variant="outline" className="border-cyan-400/40 bg-cyan-400/10 text-[10px] text-cyan-300">
                  Token Detail
                </Badge>
              </div>

              <div className="mt-4 grid gap-2 text-xs sm:grid-cols-3">
                <div className="rounded-lg border border-white/10 bg-slate-950/70 p-3">
                  <p className="text-slate-500">MC</p>
                  <p className="font-semibold text-slate-100">{token.marketCap}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-slate-950/70 p-3">
                  <p className="text-slate-500">Vol</p>
                  <p className="font-semibold text-slate-100">{token.volume}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-slate-950/70 p-3">
                  <p className="text-slate-500">TX</p>
                  <p className="font-semibold text-slate-100">{token.tx}</p>
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
              <div className="mt-2 flex h-[60vh] min-h-[340px] items-center justify-center rounded-lg border border-dashed border-indigo-300/30 bg-slate-950/60">
                <div className="text-center">
                  <CandlestickChart className="mx-auto h-6 w-6 text-indigo-300" />
                  <p className="mt-1 text-sm text-indigo-100">Chart placeholder for {token.ticker}</p>
                  <p className="text-xs text-slate-400">Hook in your chart API here</p>
                </div>
              </div>
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs text-slate-300">
                <p className="inline-flex items-center gap-1">
                  <Timer className="h-3.5 w-3.5 text-cyan-300" />
                  1m
                </p>
                <p className="mt-1 text-base font-semibold">{token.oneMinute}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs text-slate-300">
                <p className="inline-flex items-center gap-1">
                  <CircleDot className="h-3.5 w-3.5 text-cyan-300" />
                  5m
                </p>
                <p className="mt-1 text-base font-semibold">{token.fiveMinute}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs text-slate-300">
                <p className="inline-flex items-center gap-1">
                  <Cpu className="h-3.5 w-3.5 text-cyan-300" />
                  1h
                </p>
                <p className="mt-1 text-base font-semibold">{token.oneHour}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
