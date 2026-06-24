import type { Metadata } from "next";
import { Cormorant_Garamond, IM_Fell_English, Crimson_Pro, Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import { ScrollTicker } from "@/components/sections/ScrollTicker";
import { Nav } from "@/components/sections/Nav";

const cormorant = Cormorant_Garamond({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const imFell = IM_Fell_English({
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-subheading",
});

const crimsonPro = Crimson_Pro({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

const cinzel = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "Fourever Makhana | Authentic Foxnuts from Bihar",
  description: "Hand-harvested from the lotus ponds of Mithila. Roasted over wood fires. Carried by the same hands for six generations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${imFell.variable} ${crimsonPro.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body selection:bg-mithila-crimson selection:text-mithila-ivory bg-mithila-ivory">
        <ScrollTicker />
        <Nav />
        {children}
      </body>
    </html>
  );
}
