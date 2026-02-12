"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Circle,
  CopyPlus,
  Rocket,
  Search,
  Settings,
  ShieldAlert,
  Upload,
  Wallet
} from "lucide-react";

import { TerminalTopNavbar } from "@/components/terminal/top-navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const launchpadCards = [
  "PumpFun",
  "LetsBonk",
  "Printr",
  "Bags",
  "Anoncoin",
  "Surge"
];

const otherCards = ["Import Token", "Clone Token"];

const walletRows = [
  { rank: 9, name: "Steafasfast", subtitle: "dfafasfasf", status: "Draft" },
  { rank: 8, name: "Testicles", subtitle: "Testicles Guy", status: "Live" },
  { rank: 7, name: "SPumpv", subtitle: "PumpFun MA...", status: "Live" },
  { rank: 6, name: "SGvotinary", subtitle: "Gov Dictio...", status: "Live" },
  { rank: 5, name: "SWUB9000", subtitle: "World Uncer...", status: "Live" },
  { rank: 4, name: "SWUB9000", subtitle: "World Uncer...", status: "Draft" },
  { rank: 3, name: "Sfupa", subtitle: "The Fupa", status: "Live" },
  { rank: 2, name: "SClavicular", subtitle: "Official Clav...", status: "Live", active: true },
  { rank: 1, name: "Stest", subtitle: "test", status: "Draft" }
];

export default function DevPage() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const onPickImage = () => {
    fileInputRef.current?.click();
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const nextUrl = URL.createObjectURL(file);
    setPreviewUrl(nextUrl);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.06]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1900px] flex-col border-x border-white/10">
        <TerminalTopNavbar />

        <div className="flex flex-1 overflow-hidden">
          <aside className="flex w-[230px] shrink-0 flex-col border-r border-white/10 bg-black/70">
            <div className="border-b border-white/10 p-3">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
                <Input placeholder="Search" className="h-8 border-white/10 bg-black pl-8 text-xs" />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 rounded bg-indigo-500/25 px-1.5 py-0.5 text-[9px] font-semibold text-indigo-200">
                  9K
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-2 py-2">
              <div className="space-y-1">
                {walletRows.map((row) => (
                  <button
                    key={`${row.rank}-${row.name}`}
                    className={`grid w-full grid-cols-[18px_1fr_auto] items-center gap-2 rounded-md px-2 py-1.5 text-left transition-colors ${row.active ? "bg-slate-800 text-slate-100" : "text-slate-400 hover:bg-white/5"}`}
                  >
                    <span className="text-xs text-slate-500">{row.rank}.</span>
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium">{row.name}</p>
                      <p className="truncate text-[10px] text-slate-500">{row.subtitle}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`h-5 rounded px-1.5 text-[9px] ${row.status === "Live" ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-200" : "border-slate-600 bg-slate-700/40 text-slate-300"}`}
                    >
                      {row.status}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 p-3 text-xs">
              <div className="mb-3 flex items-center justify-between text-slate-400">
                <span>Features</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-2 text-slate-400">
                <button className="flex w-full items-center gap-2 rounded px-1.5 py-1 hover:bg-white/5">
                  <Wallet className="h-3.5 w-3.5" />
                  My Wallets
                  <Badge className="h-4 rounded bg-indigo-500/20 px-1.5 text-[9px] text-indigo-200">20</Badge>
                </button>
                <button className="flex w-full items-center gap-2 rounded px-1.5 py-1 hover:bg-white/5">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Shield
                  <Badge className="h-4 rounded bg-rose-500/20 px-1.5 text-[9px] text-rose-200">Unprotected</Badge>
                </button>
                <button className="flex w-full items-center gap-2 rounded px-1.5 py-1 hover:bg-white/5">
                  <CopyPlus className="h-3.5 w-3.5" />
                  Archived
                </button>
                <button className="flex w-full items-center gap-2 rounded px-1.5 py-1 hover:bg-white/5">
                  <Settings className="h-3.5 w-3.5" />
                  Settings
                </button>
              </div>
              <div className="mt-4 space-y-2">
                <Button
                  variant="outline"
                  className="h-8 w-full border-amber-500/40 bg-amber-500/10 text-[11px] font-semibold text-amber-200 hover:bg-amber-500/20"
                >
                  Switch to BSC
                </Button>
                <Button variant="outline" className="h-8 w-full border-white/10 bg-slate-900 text-[11px] text-slate-200 hover:bg-slate-800">
                  Account
                </Button>
                <Button className="h-8 w-full bg-slate-100 text-[11px] font-semibold text-black hover:bg-white">
                  Create new Launch
                </Button>
              </div>
            </div>
          </aside>

          <section className="flex-1 overflow-y-auto bg-black/30">
            <div className="border-b border-white/10 px-4 py-3 text-sm font-semibold text-slate-100">
              Create Token
            </div>

            <div className="space-y-5 p-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-300">Launchpad</p>
                <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
                  {launchpadCards.map((item) => (
                    <button
                      key={item}
                      className={`flex h-[58px] items-center justify-between rounded-md border px-3 text-sm transition-colors ${item === "PumpFun" ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-200" : "border-white/10 bg-black/40 text-slate-300 hover:border-white/20"}`}
                    >
                      <span>{item}</span>
                      <Circle className="h-2.5 w-2.5 fill-current opacity-60" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-300">Other</p>
                <div className="grid gap-2 md:grid-cols-2 xl:max-w-[600px]">
                  {otherCards.map((item) => (
                    <button
                      key={item}
                      className="flex h-[58px] items-center justify-between rounded-md border border-white/10 bg-black/40 px-3 text-sm text-slate-300 transition-colors hover:border-white/20"
                    >
                      <span>{item}</span>
                      <Circle className="h-2.5 w-2.5 fill-current opacity-40" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 xl:grid-cols-[2fr_1fr]">
                <div>
                  <label className="mb-1 block text-[11px] text-slate-400">Project Name*</label>
                  <Input defaultValue="Proxima" className="h-9 border-white/10 bg-black/50 text-sm" />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-slate-400">Symbol*</label>
                  <Input defaultValue="PXM" className="h-9 border-white/10 bg-black/50 text-sm" />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-[11px] text-slate-400">Description*</label>
                <Input defaultValue="All-in-one Infrastructure layer for digital assets." className="h-9 border-white/10 bg-black/50 text-sm" />
              </div>

              <div className="grid gap-4 xl:grid-cols-[220px_1fr]">
                <div>
                  <label className="mb-1 block text-[11px] text-slate-400">Image*</label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/jpg,image/webp"
                    className="hidden"
                    onChange={onImageChange}
                  />
                  <button
                    type="button"
                    onClick={onPickImage}
                    className="flex h-[130px] w-full flex-col items-center justify-center rounded-md border border-dashed border-white/15 bg-black/50 text-[11px] text-slate-500 transition-colors hover:border-white/30"
                  >
                    <Upload className="mb-2 h-4 w-4" />
                    Drag & Drop or Choose file
                    <span className="mt-1 text-[10px]">.jpg or .png (Max 2 MB)</span>
                  </button>
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-slate-400">Preview</label>
                  <div className="flex items-end gap-3">
                    <div className="flex h-[92px] w-[92px] items-center justify-center overflow-hidden rounded-md border border-white/10 bg-slate-900/70 text-slate-400">
                      {previewUrl ? (
                        <Image
                          src={previewUrl}
                          alt="Token preview 128"
                          width={128}
                          height={128}
                          unoptimized
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Rocket className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-md border border-white/10 bg-slate-900/60 text-slate-500">
                      {previewUrl ? (
                        <Image
                          src={previewUrl}
                          alt="Token preview 64"
                          width={64}
                          height={64}
                          unoptimized
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Rocket className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex h-[38px] w-[38px] items-center justify-center overflow-hidden rounded-md border border-white/10 bg-slate-900/50 text-slate-600">
                      {previewUrl ? (
                        <Image
                          src={previewUrl}
                          alt="Token preview 32"
                          width={32}
                          height={32}
                          unoptimized
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Rocket className="h-3 w-3" />
                      )}
                    </div>
                  </div>
                  <div className="mt-2 flex gap-8 text-[10px] text-slate-500">
                    <span>128x128</span>
                    <span>64x64</span>
                    <span>32x32</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 xl:grid-cols-3">
                <div>
                  <label className="mb-1 block text-[11px] text-slate-400">X/Twitter (optional)</label>
                  <Input defaultValue="x.com/proxima" className="h-9 border-white/10 bg-black/50 text-sm" />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-slate-400">Telegram (optional)</label>
                  <Input defaultValue="t.me/proxima" className="h-9 border-white/10 bg-black/50 text-sm" />
                </div>
                <div>
                  <label className="mb-1 block text-[11px] text-slate-400">Website (optional)</label>
                  <Input defaultValue="proxima.io" className="h-9 border-white/10 bg-black/50 text-sm" />
                </div>
              </div>

              <label className="inline-flex items-center gap-2 text-xs text-slate-400">
                <input type="checkbox" className="h-3.5 w-3.5 rounded border-white/20 bg-black" />
                Custom Token Address (optional)
              </label>
            </div>

            <div className="flex justify-end border-t border-white/10 p-3">
              <Button
                disabled
                className="h-8 rounded-md bg-slate-200/80 px-4 text-[11px] font-semibold text-slate-800 hover:bg-slate-200 disabled:opacity-50"
              >
                Save
              </Button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
