"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

import Image from "next/image";
import Link from "next/link";
interface CourseProps {
  course: {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string; // Assuming you have an image property
  };
}

const BackgroundGradientDemo: React.FC<CourseProps> = ({course}) => {
  return (
   <div className="flex">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={course.image}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
         {course.title}
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {course.description}
        </p>
        
        <Link href={`/course/${course.slug}`} >
          Learn More
        </Link>
      </BackgroundGradient>
    </div>
  )
}

export default BackgroundGradientDemo
