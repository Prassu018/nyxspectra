import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyxspectra",
  description: "SaaS Landing Page with React, Next.js, TailwindCSS & Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isClient = typeof window !== "undefined";

  return (
    <html lang="en" className={twMerge("relative", isClient ? "hydrated" : "")}>
      <body className={twMerge(dmSans.className, "bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
