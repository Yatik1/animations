import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed="-0.05" className='NeueMontreal w-full p-24 bg-[#CDEA68] rounded-t-3xl text-zinc-800'>
      <h1 className='NeueMontreal text-[4vw] leading-[3.5vw] tracking-none '>
         Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
      </h1>

      <div className="flex gap-5 w-full border-t-[1px] pt-3 mt-12 border-[#a1b562]">
         
          <div className='w-1/2'>
             <h1 className='text-5xl  '>Our approach :</h1>
             <button className='flex items-center gap-5 px-[1.5vw] py-[1vw] mt-[1.47vw] uppercase bg-zinc-800 rounded-full text-sm text-white'>
                Read more
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
             </button>
          </div>

          <div className=' flex justify-items-end w-1/2 h-[70vh]'>
          <img src='https://images.pexels.com/photos/262713/pexels-photo-262713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image' className='w-[37vw] h-[30vw] object-cover rounded-xl' />

          </div>
      </div>
    </div>
  )
} 

export default About
