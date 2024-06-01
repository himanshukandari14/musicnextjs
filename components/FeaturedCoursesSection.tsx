import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import Image from 'next/image'
import { BackgroundGradient } from './ui/background-gradient'
import BackgroundGradientDemo from './BackgroundGradientDemo'


interface Course{
            id: number,
            title: string,
            slug: string,
            description: string,
            price: number,
            instructor: string,
            isFeatured: boolean
}



          
const FeaturedCoursesSection = () => {
  const featuredCourses = courseData.courses.filter(course => course.isFeatured);

  return (
    <div className="py-12 mt-[10%] bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-[#276499] text-xl">Featured Courses</h2>
          <p className="text-white text-3xl font-semibold">Learn with the best</p>
        </div>
      </div>

      {/* Wrap the map logic in a flex container with flex-wrap */}
      <div className="flex flex-wrap mt-20 md:gap-4">
        {featuredCourses.map((course) => (
  <div className=" mx-auto" key={course.id}>
    <BackgroundGradientDemo course={course} />  {/* Pass the course prop */}
  </div>
))}

      </div>

      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          View all courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCoursesSection
