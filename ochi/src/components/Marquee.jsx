import React from 'react'
import {motion} from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 rounded-t-3xl bg-[#004D43]'>
       <div className=" text border-t-[1px] border-b-[1px] border-zinc-500 flex whitespace-nowrap overflow-hidden">
          <motion.h1 
            initial={{x:0}} 
            animate={{x:"-100%"}} 
            transition={{repeat:Infinity,ease:"linear" , duration:5}}
            className=' text-[33vw] uppercase leading-none -mb-[2.9vw] -mt-[6.5vw] FounderGrostesk pr-20 '> 
            we are ochi
          </motion.h1>

          <motion.h1 
            initial={{x:0}} 
            animate={{x:"-100%"}} 
            transition={{repeat:Infinity,ease:"linear" , duration:5}}
            className=' text-[33vw] uppercase leading-none -mb-[2.9vw] -mt-[6.5vw] FounderGrostesk pr-20'> 
            we are ochi
          </motion.h1>          
         
       </div>
    </div>
  )
}

export default Marquee


// initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity,duration:0.5}}
// initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity,duration:0.5}}