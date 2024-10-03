import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { RouteContextProvider } from "@/contexts/RouteContext";
import { CheckoutContextProvider } from "@/contexts/CheckoutContext";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
}); 

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

const ChampionsBold = localFont({
  src: "./fonts/Champions-Bold.ttf",
  variable: "--font-champions-bold",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "TC Store",
  description: "TC Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CheckoutContextProvider>
      <RouteContextProvider>
        <body
          className={`${ChampionsBold.variable} ${ChampionsBold.variable} antialiased`}
        >
          {children}
        </body>
      </RouteContextProvider>
      </CheckoutContextProvider>
    </html>
  );
}
