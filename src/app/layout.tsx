import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/loaders";

export const metadata: Metadata = {
  title: `${siteConfig.fullName} — ${siteConfig.role}`,
  description: `Portfolio of ${siteConfig.fullName} — ${siteConfig.role} specializing in ${siteConfig.focus}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
