import Link from "next/link";
import { ArrowUpRight, Flame, TrendingDown, TrendingUp, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { Token } from "@/components/terminal/data";

type TokenRowProps = {
  token: Token;
  index: number;
};

const accentClassByName: Record<Token["accent"], string> = {
  green: "from-emerald-500/35 to-lime-400/20",
  orange: "from-orange-500/35 to-amber-400/20",
  violet: "from-violet-500/35 to-indigo-400/20",
  blue: "from-cyan-500/35 to-blue-400/20"
};

function changeColor(value: string) {
  return value.startsWith("-") ? "text-rose-400" : "text-emerald-400";
}

export function TokenRow({ token, index }: TokenRowProps) {
  return (
    <Link
      href={`/coin/${token.id}`}
      className={cn(
        "animate-fade-in-up block cursor-pointer rounded-xl border border-white/10 bg-white/[0.02] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-colors hover:border-cyan-400/45 hover:bg-white/[0.04]"
      )}
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div className="flex items-start gap-3">
        <Avatar
          className={cn(
            "h-12 w-12 border border-white/15 bg-gradient-to-br text-slate-100",
            accentClassByName[token.accent]
          )}
        >
          <AvatarFallback className="bg-transparent text-[11px] tracking-wide text-white">
            {token.avatar}
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-100">{token.name}</p>
              <div className="mt-0.5 flex flex-wrap items-center gap-1 text-[11px] text-slate-400">
                <span>{token.ticker}</span>
                <span>•</span>
                <span>{token.age}</span>
                <span>•</span>
                <span className="truncate">{token.creator}</span>
              </div>
            </div>

            <Badge className="h-7 rounded-full bg-indigo-500 px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
              Open
            </Badge>
          </div>

          <div className="mt-2 grid grid-cols-3 gap-2 rounded-lg bg-black/70 p-2 text-[11px]">
            <div>
              <p className="text-slate-500">MC</p>
              <p className="font-semibold text-slate-100">{token.marketCap}</p>
            </div>
            <div>
              <p className="text-slate-500">Vol</p>
              <p className="font-semibold text-slate-100">{token.volume}</p>
            </div>
            <div>
              <p className="text-slate-500">TX</p>
              <p className="font-semibold text-slate-100">{token.tx}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <Badge variant="outline" className="border-white/15 bg-white/5 text-[10px] text-slate-300">
          <Users className="mr-1 h-3 w-3 text-cyan-300" />
          {token.holderPct}
        </Badge>
        <Badge variant="outline" className={cn("border-white/15 bg-white/5 text-[10px]", changeColor(token.oneMinute))}>
          <Flame className="mr-1 h-3 w-3" />
          1m {token.oneMinute}
        </Badge>
        <Badge variant="outline" className={cn("border-white/15 bg-white/5 text-[10px]", changeColor(token.fiveMinute))}>
          <TrendingUp className="mr-1 h-3 w-3" />
          5m {token.fiveMinute}
        </Badge>
        <Badge variant="outline" className={cn("border-white/15 bg-white/5 text-[10px]", changeColor(token.oneHour))}>
          <TrendingDown className="mr-1 h-3 w-3" />
          1h {token.oneHour}
        </Badge>
        <Badge variant="outline" className="border-indigo-400/35 bg-indigo-500/15 text-[10px] text-indigo-200">
          Route
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </Badge>
      </div>
    </Link>
  );
}
