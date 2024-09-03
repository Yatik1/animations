import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {

  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      
      <div className="textstructure mt-[18vh] px-[4.5vw]">
         {["We Create" , "Eye Opening" , "Presentations"].map((item,index) => (
            <div className="masker">
               <div className="w-fit flex items-end ">
                  {index === 1 && (<motion.div 
                      initial={{width:0}}
                      animate={{width :"9vw"}}
                      transition={{ease : [0.12, 0, 0.39, 0] , duration:1}}
                      className='w-[9vw] h-[6vw] mr-[1vw] bg-red-600 rounded-lg relative'></motion.div>)}
                  <h1 key={index} className="pt-[0.7vw] uppercase text-[9vw] leading-[.7] FounderGrostesk ">
                  {item}
                 </h1>
               </div>
            </div>
         ))}
      </div>

      <div className='border-t-[1px] text-[1vw] border-zinc-800 mt-28 flex justify-between gap-2 items-center py-5 px-20 '>
         
         {["For public and private companies" , "From the first pitch to IPO"].map((item,index) => (
           <p className='font-light tracking-tight leading-none' key={index}>{item}</p>
         ))}

         <div className="start flex gap-2 items-center">
            <div className="px-8 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md uppercase cursor-pointer hover:bg-zinc-300 hover:text-zinc-900">Start the project</div>
            <div className="w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center cursor-pointer hover:bg-zinc-300 hover:text-zinc-900">
                <span className='rotate-[45deg]'>
                <FaArrowUpLong />
                </span>
            </div>
         </div>

      </div>
       
    </div>
  )
}

export default Landing
