import React from 'react'

const Belong = () => {
  return (
    <div className='w-full flex items-center justify-center font-poppins ' >
    <div className=' w-11/12 md:w-8/12 flex flex-col gap-5 py-10 px-10 items-center justify-center  mb-[50px] mt-10 ' >
            <h2 className=' text-[#24933c] text-center font-bold text-[42px] uppercase ' >Where all belong</h2>
            <div className=' w-[15%] mx-auto h-[3px] bg-[#23376c] mt-[-10px] ' ></div>

        <p className=' text-center text-xl ' >We believe education is enriched by the unique perspectives and experiences each student brings, and we are committed to fostering an environment that celebrates and values diversity in all its forms. It is central to our mission to embrace and encourage diversity, equity and inclusion (DE&I).</p>
        <button className=' bg-[#23376c] px-8 py-3 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] '
                >Apply Now</button>
    </div>
</div>
  )
}

export default Belong