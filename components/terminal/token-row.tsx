import Link from "next/link";
import {
  ArrowUpRight,
  CandlestickChart,
  Copy,
  Eye,
  Flame,
  Globe,
  Link2,
  Search,
  Send,
  TrendingDown,
  TrendingUp,
  Trophy,
  Users
} from "lucide-react";

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
  const txCount = Number.parseInt(token.tx.replace(/[^0-9]/g, ""), 10) || 0;
  const watchCount = txCount > 0 ? txCount * 2 + 28 : 28;

  return (
    <Link
      href={`/coin/${token.id}`}
      className={cn(
        "block cursor-pointer rounded-xl border border-white/10 bg-white/[0.02] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-cyan-400/45 hover:bg-white/[0.04]"
      )}
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div className="flex items-start gap-3">
        <Avatar
          className={cn(
            "h-16 w-16 rounded-md border border-cyan-400/55 bg-gradient-to-br text-slate-100",
            accentClassByName[token.accent]
          )}
        >
          <AvatarFallback className="bg-transparent text-[11px] tracking-wide text-white">
            {token.avatar}
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="truncate text-[22px] leading-none font-semibold text-slate-100">{token.name}</p>
                <Copy className="h-3.5 w-3.5 shrink-0 text-slate-500" />
              </div>

              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-slate-400">
                <span className="font-medium text-cyan-300">{token.age}</span>
                <span className="inline-flex items-center gap-1 truncate">
                  <Users className="h-3.5 w-3.5" />
                  {token.creator}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Globe className="h-3.5 w-3.5" />
                </span>
                <span className="inline-flex items-center gap-1">
                  <Send className="h-3.5 w-3.5" />
                </span>
                <span className="inline-flex items-center gap-1">
                  <Link2 className="h-3.5 w-3.5" />
                </span>
                <span className="inline-flex items-center gap-1">
                  <Search className="h-3.5 w-3.5" />
                </span>
                <span className="inline-flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {token.tx}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CandlestickChart className="h-3.5 w-3.5" />
                  {token.holderPct}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" />
                  {watchCount}
                </span>
              </div>
            </div>

            <div className="ml-auto flex shrink-0 flex-col gap-1 text-right">
              <p className="text-[13px] text-slate-400">
                MC <span className="text-[22px] font-semibold text-cyan-300">{token.marketCap}</span>
              </p>
              <p className="text-[13px] text-slate-400">
                V <span className="text-[22px] font-semibold text-slate-100">{token.volume}</span>
              </p>
              <p className="text-[13px] text-slate-400">
                TX <span className="text-[18px] font-semibold text-slate-100">{token.tx}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <Badge variant="outline" className={cn("border-white/15 bg-white/5 text-[10px]", changeColor(token.oneMinute))}>
          <Flame className="mr-1 h-3 w-3" />
          {token.oneMinute}
        </Badge>
        <Badge variant="outline" className={cn("border-white/15 bg-white/5 text-[10px]", changeColor(token.oneMinute))}>
          <Trophy className="mr-1 h-3 w-3" />
          {token.fiveMinute}
        </Badge>
        <Badge variant="outline" className={cn("border-white/15 bg-white/5 text-[10px]", changeColor(token.fiveMinute))}>
          <TrendingUp className="mr-1 h-3 w-3" />
          {token.age}
        </Badge>
        <Badge variant="outline" className={cn("border-white/15 bg-white/5 text-[10px]", changeColor(token.oneHour))}>
          <TrendingDown className="mr-1 h-3 w-3" />
          {token.oneHour}
        </Badge>
        <Badge variant="outline" className="border-white/15 bg-white/5 text-[10px] text-emerald-300">
          <CandlestickChart className="mr-1 h-3 w-3" />
          {token.holderPct}
        </Badge>
        <Badge variant="outline" className="border-indigo-400/35 bg-indigo-500/15 text-[10px] text-indigo-200">
          Route
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </Badge>
      </div>
    </Link>
  );
}
