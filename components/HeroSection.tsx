import Link from 'next/link'
import React from 'react'
import SpotlightPreview from './SpotlightPreview'
import { Button } from "@/components/ui/moving-border";

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
         <SpotlightPreview />
      <div className='p-4 relative z-10 w-full text-center'>
       
        <h1 
        className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of music</h1>
        <p 
        className='mt-4 font-normal text-base md:text-lg to-neutral-300 max-w-lg mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam earum minima architecto quam sint facilis possimus facere iste, molestias nisi.</p>
        <div  className='mt-4'>
            <Link href={"/courses"}>
               <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white "
      >
        Explore Now
      </Button>
            </Link>
        </div>

      </div>
    </div>
  )
}

export default HeroSection
