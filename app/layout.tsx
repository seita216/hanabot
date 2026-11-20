import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hana Bot — Discordを、もっと安心で楽しく。",
  description:
    "Hana認証・HanaTicket・Hana管理。コミュニティ運営をやさしく支えるHana Botシリーズ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
