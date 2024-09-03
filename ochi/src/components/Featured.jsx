import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {

  const cards = [useAnimation(),useAnimation()]

  const handleHover = (index) => {
    cards[index].start({y:"0"})
  }
 
  const handleHoverEnd = (index) => {
    cards[index].start({y:"100%"})
  }
  
  return (
    <div className='w-full py-10'>
       <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-10">
         <h1 className='text-[4vw] tracking-2 NeueMontreal '>Featured projects</h1>
       </div>
       <div className="px-[4vw]">
          <div className="cards w-full flex gap-5 mt-5">
           
            <motion.div 
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardcontainer relative w-1/2 h-1/2 "
            >
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-[10vw] FounderGrostesk '>
                    {"FYDE".split("").map((item,index) => (
                        <motion.span
                         initial = {{y:"100%"}}
                         animate={cards[0]}
                         transition={{ease : [0.22,1,0.36,1] , delay : index*0.05}}
                         className='inline-block'
                        >
                          {item}
                        </motion.span>
                    ))}
                </h1>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"  />
                </div>
            </motion.div>

            <motion.div 
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="cardcontainer relative w-1/2 h-1/2">
             <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-[10vw] FounderGrostesk '>
                {"PLANETLY".split("").map((item,index) => (
                    <motion.span
                    initial = {{y:"100%"}}
                    animate={cards[1]}
                    transition={{ease : [0.22,1,0.36,1] , delay : index*0.05}}
                    className='inline-block'
                   >
                     {item}
                   </motion.span>
                ))}
            </h1>
                <div className="w-full h-full rounded-2xl overflow-hidden">
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/10-663x550.png"  />
                </div>
            </motion.div>

          </div>
        </div>
       
    </div>
  )
}

export default Featured
