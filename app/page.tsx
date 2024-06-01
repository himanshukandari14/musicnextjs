
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import FeaturedCoursesSection from "@/components/FeaturedCoursesSection";
import Footer from "@/components/Footer";
import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";
import HeroSection from "@/components/HeroSection";

import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";




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
