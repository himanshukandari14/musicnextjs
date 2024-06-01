"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Experts Mentorship",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <Image
          src="https://mbmusicacademy.org/wp-content/uploads/2022/09/Blog-4-1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://www.thehighereducationreview.com/newsimagespl/59ArnWDw.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Free Distribution",
    description:
      "Music distribution is the process that bridges the gap between creating music and getting it to listeners. In today’s digital age, distributing your music effectively can significantly impact your reach and revenue. This guide explores the essentials of music distribution, covering types, major platforms, and strategies for success.",
    content: (
       <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://k7n8p8z5.rocketcdn.me/wp-content/uploads/2020/02/top-digital-distribution-platforms-for-indie-artists-1024x576.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
 
];
export function StickyScrollRevealDemo() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
