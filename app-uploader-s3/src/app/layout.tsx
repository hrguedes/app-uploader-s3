"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

// provider
import { AuthProvider } from "@/context/AuthContext";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          inter.className
        )}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
