import { Circle } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function GlobalBottomBar() {
  return (
    <footer className="border-t border-white/10 bg-black/85 px-3 py-2 text-[11px] sm:px-4">
      <div className="mx-auto flex w-full max-w-[1700px] flex-wrap items-center gap-2 border-x border-white/10 px-3 text-slate-400 sm:px-4">
        <Badge variant="outline" className="border-indigo-400/35 bg-indigo-500/15 text-[10px] text-indigo-200">
          PRESET 1
        </Badge>
        <span className="inline-flex items-center gap-1">
          <Circle className="h-2.5 w-2.5 fill-emerald-300 text-emerald-300" />
          0.523
        </span>
        <span>Wallet</span>
        <span>Social</span>
        <span>Discover</span>
        <span>Pulse</span>
        <span>Alpha</span>
        <span className="text-amber-300">$67.6K</span>
        <span className="text-sky-300">$1950</span>
        <span className="text-emerald-300">$79.72</span>
        <span className="ml-auto rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-300">Connection is stable</span>
        <span className="font-mono text-slate-500">US-E</span>
      </div>
    </footer>
  );
}
