import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import ReduxtProdiver from "@/providers/ReduxtProdiver";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ReduxtProdiver>
          {children}
        </ReduxtProdiver>
      </body>
    </html>
  );
}
