import type { Metadata } from "next";

import { GlobalBottomBar } from "@/components/terminal/global-bottom-bar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Meme Terminal UI",
  description: "Pump-style memecoin trading terminal interface."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <GlobalBottomBar />
        </div>
      </body>
    </html>
  );
}
