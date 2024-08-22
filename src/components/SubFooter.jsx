import React from 'react'
import SubFooterImg from "../assets/bg-last.jpg";

const SubFooter = () => {
  return (
    <div className=' w-full flex flex-col ' >
         <div className=' w-8/12 mx-auto flex flex-col gap-10 py-10 px-10 items-center justify-center  mb-[50px] mt-10 ' >
            <h2 className=' text-[#24933c] text-center font-bold text-2xl md:text-[60px] uppercase ' >Ready for what's next</h2>
           
           <div className=' flex flex-col md:flex-row items-center justify-between gap-10 ' >
                <button className=' bg-[#24933c] px-8 py-3 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#41a757] uppercase '
                            >Request More Info</button>
                    <button className=' bg-[#23376c] px-8 py-3 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] uppercase'
                                >Apply Now</button>
                    <button className=' bg-[#24933c] px-8 py-3 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#41a757] uppercase'
                            >Explore Programs</button>
           </div>
        </div>
        <img loading='lazy' src={SubFooterImg} />
    </div>
  )
}

export default SubFooter