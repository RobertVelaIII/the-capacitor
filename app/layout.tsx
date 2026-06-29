import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THE CAPACITOR — Charge Your Potential",
  description:
    "A premium energy drink engineered for focus, performance, and sustained energy. Built for makers, engineers, coders, and creators.",
  keywords: [
    "energy drink",
    "premium",
    "focus",
    "performance",
    "clean energy",
    "makers",
    "engineers",
    "coders",
  ],
  openGraph: {
    title: "THE CAPACITOR — Charge Your Potential",
    description:
      "Clean. Powerful. Sustained Energy. For builders, engineers, and high-performance creators.",
    type: "website",
    // TODO: Replace with your actual domain when deployed
    // url: "https://thecapacitor.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE CAPACITOR — Charge Your Potential",
    description: "Premium energy drink engineered for the builders of tomorrow.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-matte-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
