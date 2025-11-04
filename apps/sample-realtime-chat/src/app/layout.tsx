import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import { FlameProvider } from '@flame-js/core/client'

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flame.js | Real-Time Chat Example",
  description: "A real-time chat application built with Flame.js, Next.js, and Prisma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <FlameProvider>
          {children}
        </FlameProvider>
      </body>
    </html>
  );
}





