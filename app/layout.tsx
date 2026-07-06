import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Theodoro De Almeida — Full-Stack Engineer",
  description:
    "Full-Stack Software Engineer building scalable web platforms and AI-integrated products with React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AI Engineer",
    "Theodoro De Almeida",
  ],
  authors: [{ name: "Theodoro De Almeida" }],
  openGraph: {
    title: "Theodoro De Almeida — Full-Stack Engineer",
    description:
      "Full-Stack Software Engineer building scalable web platforms and AI-integrated products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
