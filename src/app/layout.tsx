import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DoodleOS™ | Legacy Companion Software",
  description:
    "Enterprise-grade companion software for golden doodles. Run diagnostics, file incidents, and monitor emotionally distributed chaos.",
  openGraph: {
    title: "DoodleOS™ | Legacy Companion Software",
    description:
      "Run diagnostics on your golden doodle instance. Recall remains in beta.",
    url: "https://doodleos-web.vercel.app",
    siteName: "DoodleOS",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "DoodleOS™ | Legacy Companion Software",
    description:
      "Enterprise-grade companion software for golden doodles. Recall remains in beta.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
