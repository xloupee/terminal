import { CandlestickChart, SlidersHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { TokenRow } from "@/components/terminal/token-row";
import type { MarketColumn as MarketColumnType } from "@/components/terminal/data";

type MarketColumnProps = {
  column: MarketColumnType;
};

export function MarketColumn({ column }: MarketColumnProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md">
      <header className="flex items-center justify-between border-b border-white/10 px-3 py-2.5">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold tracking-wide text-slate-100">{column.title}</h2>
          <Badge variant="outline" className="border-cyan-400/40 bg-cyan-400/10 text-[10px] text-cyan-300">
            {column.stage}
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <CandlestickChart className="h-3.5 w-3.5" />
          <span>{column.tokens.length}</span>
          <SlidersHorizontal className="h-3.5 w-3.5" />
        </div>
      </header>

      <div className="space-y-2 p-2">
        {column.tokens.map((token, index) => (
          <TokenRow key={token.id} token={token} index={index} />
        ))}
      </div>
    </section>
  );
}
