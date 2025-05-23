import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar/Navbar";

const SatoshiFont = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  display: "swap",
  variable: "--font-satoshi",
});

const ZodiakFont = localFont({
  src: "./fonts/Zodiak-Variable.woff2",
  display: "swap",
  variable: "--font-zodiak",
});

export const metadata: Metadata = {
  title: "Katannah – Official Site",
  description:
    "Oficiální web rappera Katannah. Sleduj novinky, koncerty a další obsah. Hudba, energie a styl.",
  keywords: [
    "Katannah",
    "rapper",
    "rap",
    "hudba",
    "český rap",
    "koncerty",
    "novinky",
    "oficiální web",
    "Katannah web",
  ],
  openGraph: {
    title: "Katannah – Official Site",
    description:
      "Oficiální web rappera Katannah. Sleduj novinky, koncerty a další obsah. Hudba, energie a styl.",
    url: "https://katannah.vercel.app",
    siteName: "Katannah",
    locale: "cs_CZ",
    type: "website",
  },
  metadataBase: new URL("https://katannah.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SatoshiFont.className} ${ZodiakFont.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
