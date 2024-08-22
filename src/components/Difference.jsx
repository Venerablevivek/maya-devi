import React from 'react'
import Img from "../assets/img1.jpg";

const Difference = () => {
  return (
    <div className=' w-full flex flex-col gap-5 md:flex-row justify-between mt-10 mb-10 ' >
        <div className=' flex flex-col px-10 py-8 gap-5 ' >
            <h2 className=' text-[#24933c] font-bold text-[32px] uppercase ' >The Maya Devi Difference</h2>
            <div className=' w-[35%] h-[4px] bg-[#23376c] mt-[-5px] ' ></div>
            <p className=' text-xl' >We provide students with much more than just a single letter grade. Our feedback identifies strengths and targets areas for growth. Our learning approach is centered around the 8 Abilities – what set our students and alums apart. These are the skills that will help you thrive both personally and professionally.</p>
            <button className=' self-start bg-[#23376c] px-8 py-4 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] uppercase '
                >Our Abilities in Action</button>
        </div>
        <img src={Img} loading='lazy' className=' w-11/12 mx-auto md:w-[60%] ' />
    </div>
  )
}

export default Difference