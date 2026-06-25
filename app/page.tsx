import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { Collection } from "@/components/sections/Collection";
import { Heritage } from "@/components/sections/Heritage";
import { StorytellingStrip } from "@/components/sections/StorytellingStrip";
import { WhyMakhana } from "@/components/sections/WhyMakhana";
import { Gifting } from "@/components/sections/Gifting";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Fourever Makhana | Buy Premium Roasted Makhana Online | Best Foxnuts from Bihar",
  description:
    "Buy premium roasted makhana (foxnuts) online from Fourever Makhana. Hand-harvested from Mithila, Bihar. Shop Classic, Himalayan Salt, Turmeric, Chaat Masala & Rose Cardamom makhana. 100% natural, zero preservatives. Best makhana brand in India.",
  alternates: {
    canonical: "https://fourevermakhana.com",
  },
};

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full" role="main" id="main-content">
      <Hero />
      <MarqueeStrip />
      <Collection />
      <Heritage />
      <StorytellingStrip />
      <WhyMakhana />
      <Gifting />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
