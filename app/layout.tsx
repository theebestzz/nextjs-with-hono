import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";

import type { Metadata } from "next";

const font = Raleway({
  subsets: ["latin"],
  weight: "500",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "Next.js 14 with Hono Rest API",
      template: "Next.js 14 with Hono Rest API - %s",
    },
    description: "Next.js 14 with Hono Rest API",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className)}>{children}</body>
    </html>
  );
}
