import React from 'react'

function Cards() {
  return ( 
    <div className='w-full h-screen flex items-center gap-5 bg-[#F1F1F1] px-32'>
       <div className="cardcontainer h-[50vh] w-1/2">
         <div className=" relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className="w-32" />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-[#CDEA68] text-[#CDEA68] tracking-tighter font-bold">&copy; 2019-2022</button>
         </div>
       </div>
       <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="relative flex items-center justify-center card rounded-xl w-1/2 h-full bg-[#212121]"> 
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className="w-32" />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-[#CDEA68] text-[#CDEA68] tracking-tighter">RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="card relative flex items-center justify-center  rounded-xl w-1/2 h-full bg-[#212121]">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className="w-32" />
          <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-[#CDEA68] text-[#CDEA68] tracking-tighter text-sm">BUSINESS BOOTCAMP ALUMINI</button>
        </div>
       </div>
    </div>
  )
}

export default Cards
