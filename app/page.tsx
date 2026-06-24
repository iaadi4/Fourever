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

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full">
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
