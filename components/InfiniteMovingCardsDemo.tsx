"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased   dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      
    </div>
  );
}

const testimonials = [
  {
    quote:
      "This academy truly offers the best of both worlds - top-notch instruction and a welcoming community. The wisdom of the instructors is evident in every lesson, providing both inspiration and practical skills.",
    name: "Charles Dickens",
    title: "Piano Student",
  },
  {
    quote:
      "To enroll or not to enroll, that was the question. I'm so glad I chose to join. The challenges and triumphs of learning here have been life-changing, giving me the courage to face any musical 'sea of troubles.'",
    name: "William Shakespeare",
    title: "Vocal Training Student",
  },
  {
    quote: 
      "All that we achieve here seems like a dream within a dream. The academy offers a surreal experience where creativity and technical prowess meet in perfect harmony.",
    name: "Edgar Allan Poe",
    title: "Songwriting Student",
  },
  {
    quote:
      "It is a truth universally acknowledged that this music academy is a must for anyone serious about honing their craft. The supportive environment and skilled teachers have made all the difference in my musical journey.",
    name: "Jane Austen",
    title: "Guitar Student",
  },
  {
    quote:
      "Call me impressed. Some years ago, I embarked on my musical journey with little experience and even less confidence. Thanks to the dedicated instructors here, I have set sail on a rewarding adventure into the vast world of music.",
    name: "Herman Melville",
    title: "Bass Guitar Student",
  },
];

