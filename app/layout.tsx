import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bohus Styringsdashboard",
  description: "BI-dashboard for Bohus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full flex" style={{ backgroundColor: '#F5F5F3' }}>
        <Sidebar />
        <main className="ml-60 flex-1 min-h-screen p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
