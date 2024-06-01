import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipPreview";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import FeaturedCoursesSection from "@/components/FeaturedCoursesSection";
import Footer from "@/components/Footer";
import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";
import HeroSection from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo";
import { HoverEffect } from "@/components/ui/card-hover-effect";


export default function Home() {
  return (
    <main>
    
    <HeroSection />
    <FeaturedCoursesSection />
    <StickyScrollRevealDemo />
    <GridBackgroundDemo />
   <CardHoverEffectDemo />
 <Footer />
    
 
   
    </main>
  );
}
