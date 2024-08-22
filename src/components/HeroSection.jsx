import React from 'react'
import Mayabg from "../assets/mayabg.jpg";

const HeroSection = () => {
  return (
    <div className=' w-full mt-[100px] font-inter relative z-0 ' >
      <div className=' pt-6 ' >
      <div
      class="relative w-full overflow-hidden bg-cover bg-[50%] bg-no-repeat">
      <img
        src={Mayabg}
        class="w-full" />
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-70"></div>
    </div>
            <div className=' w-[100%] ml-[20px] top-[-10px] md:ml-[-70px] absolute md:top-[200px]
             md:w-[80%] md:flex flex-col gap-5 items-center justify-center z-100 ' >
                    <p className=' md:text-white text-[#23376c] text-lg md:text-[42px] font-[800] uppercase ' >There's still time to commit</p>
                    <button className=' hidden md:block bg-[#249138] px-4 py-2 md:px-8 md:py-4 text-white rounded-full font-semibold '
                    >Next Steps for Accepted Students</button>
                     <button className=' mt-2 block md:hidden bg-[#249138] px-4 py-2 md:px-8 md:py-4 text-white rounded-full font-semibold '
                    >Apply Now</button>
            </div>
    </div>
    </div>
  )
}

export default HeroSection