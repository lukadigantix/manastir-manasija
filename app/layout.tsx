import type { Metadata } from "next";
import { Caveat, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HomeMobileNav from "@/components/HomeMobileNav";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Manasija",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={cn("font-sans", geist.variable)}>
      <body className={caveat.variable}>
        <Navbar />
        <HomeMobileNav />
        {children}
      </body>
    </html>
  );
}
