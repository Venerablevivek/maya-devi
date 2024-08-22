import React from 'react'
import News1 from "../assets/news.jpg";
import News2 from "../assets/news2.jpg";

const News = () => {
  return (
    <div className='w-full mt-[80px] flex flex-col gap-5 font-poppins ' >
        <div className='w-10/12 mx-auto flex flex-col gap-5 rounded-lg ' >
            <h2 className=' text-[#24933c] text-start font-semibold text-[30px]' >Maya Devi News</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ' >
            <div className=' flex flex-col shadow-2xl rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer ' >
                    <img loading='lazy' src={News1} className=' h-[200px] object-cover rounded-tl-lg rounded-tr-lg ' />
                    <div className=' w-full h-[5px] bg-[#24933c] ' ></div>
                    <div className=' flex flex-col gap-3 px-4 py-4 rounded-bl-lg rounded-br-lg ' >
                        <p className='text-[#24933c] text-2xl font-bold' >Maya Devi College Reaffirms Commitment to Educational</p>
                        <button className=' self-start bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold '
                        >Read More</button>
                    </div>
                </div>
                <div className=' flex flex-col shadow-2xl rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer ' >
                    <img loading='lazy' src={News2} className='h-[200px] object-cover rounded-tl-lg rounded-tr-lg ' />
                    <div className=' w-full h-[5px] bg-[#24933c] ' ></div>
                    <div className=' flex flex-col gap-3 px-4 py-4 rounded-bl-lg rounded-br-lg ' >
                        <p className='text-[#24933c] text-2xl font-bold' >Maya Devi College Announces Faculty Promotions For 2024</p>
                        <button className=' self-start bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold '
                        >Read More</button>
                    </div>
                </div>
                <div className=' flex flex-col shadow-2xl rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer ' >
                    <img loading='lazy' src={News1} className=' h-[200px] object-cover rounded-tl-lg rounded-tr-lg ' />
                    <div className=' w-full h-[5px] bg-[#24933c] ' ></div>
                    <div className=' flex flex-col gap-3 px-4 py-4 rounded-bl-lg rounded-br-lg ' >
                        <p className='text-[#24933c] text-2xl font-bold' >Donors Offer $1.5 Million Matching Gift to Maya Devi College</p>
                        <button className=' self-start bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold '
                        >Read More</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default News