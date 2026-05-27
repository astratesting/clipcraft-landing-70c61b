import type { Metadata } from "next";
import { Archivo_Black, Sora } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

const body = Sora({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "ClipCraft — AI Short-Form Video Editing",
  description:
    "Create scroll-stopping TikToks, Reels, and Shorts with AI auto-captions, smart trim, trending templates, and direct export."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
