import React from "react";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

export function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        
      </div>
      <div className="flex flex-col items-center justify-center">
  <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 text-center'>
    Testimonials
  </h1>
  <InfiniteMovingCardsDemo />
</div>

      
    </div>
  );
}
