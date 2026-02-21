import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inhuman Gym | Unleash Your Potential",
  description: "Modern high-end premium fitness center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans`}>
      <body className="antialiased text-white overflow-x-hidden bg-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
