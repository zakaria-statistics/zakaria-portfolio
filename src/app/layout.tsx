import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/loaders";

const title = `${siteConfig.fullName} — ${siteConfig.role}`;
const description = `Portfolio of ${siteConfig.fullName} — ${siteConfig.role} specializing in ${siteConfig.focus}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.website),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteConfig.website,
    siteName: siteConfig.fullName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
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
