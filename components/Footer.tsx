import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12'>
        <div className='max-w-6xl mx-auto grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 mt-[10%]'>
            <div className='flex flex-col'>
                <h1 className='text-white font-semibold text-2xl'>About us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum consectetur voluptates dignissimos, quaerat doloribus optio?</p>

            </div>
        <div className='flex flex-col'>
                <h1 className='text-white font-semibold text-2xl'>Quick Links</h1>
                <ul>
                    <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Contact</li>
                </ul>
                

            </div>
         <div className='flex flex-col'>
                <h1 className='text-white font-semibold text-2xl'>Contact</h1>
                <ul>
                    <li>Facebook</li>
                <li>About</li>
                <li>Instagram</li>
               
                </ul>
                

            </div>
         <div className='flex flex-col'>
                <h1 className='text-white font-semibold text-2xl'>Contact us</h1>
               <p>New Delhi, India Delhi 1001</p>
                

            </div>
        </div>
        
      <p className='text-center text-white mt-5'>All copyright reserved to Music Production</p>
    </footer>
  )
}

export default Footer
