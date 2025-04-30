import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar/navbar";

const industry = localFont({
  variable: "--font-industry",
  src: [
    {
      path: "../assets/fonts/IndustryTest-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/IndustryTest-Demi.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/IndustryTest-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

const tungsten = localFont({
  variable: "--font-tungsten",
  src: [
    {
      path: "../assets/fonts/tungsten-narrow-book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/tungsten-narrow-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/tungsten-narrow-black.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const neuehaas = localFont({
  variable: "--font-neuehaas",
  src: [
    {
      path: "../assets/fonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeueHaasDisplayLight.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeueHaasDisplayMedium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eletorade",
  description: "Healthy Electrolyte Sports Drink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${industry.variable} ${neuehaas.variable} ${tungsten.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-foreground`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
