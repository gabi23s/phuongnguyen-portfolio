import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phuong Nguyen — Product Team Lead",
  description:
    "10 years in SaaS, HealthTech & B2B Marketplace. Building products with AI.",
  openGraph: {
    title: "Phuong Nguyen — Product Team Lead",
    description:
      "10 years in SaaS, HealthTech & B2B Marketplace. Building products with AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
