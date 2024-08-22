import React from 'react'
import diplomaImg from "../assets/diploma.jpg";
import UGImg from "../assets/ug.jpg";
import PGImg from "../assets/pg.jpg";
import PhdImg from "../assets/phd.jpg";

const Programs = () => {
  return (
    <div className=' w-full mt-[60px] mb-10 flex flex-col gap-10 ' >
        <div className=' w-10/12 mx-auto flex flex-col gap-5 ' >
            <h2 className=' text-[#24933c] text-center font-bold text-[42px] uppercase ' >Explore our programs</h2>
            <div className=' w-[15%] mx-auto h-[3px] bg-[#23376c] mt-[-10px] mb-10 ' ></div>

            <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ' >
            <div className=' flex flex-col shadow-2xl rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer ' >
                    <img loading='lazy' src={diplomaImg}  className=' h-[200px] object-cover rounded-tl-lg rounded-tr-lg ' />
                    <div className=' w-full h-[5px] bg-[#24933c] ' ></div>
                    <div className=' flex flex-col gap-3 px-4 py-4 rounded-bl-lg rounded-br-lg ' >
                        <p className='text-[#24933c] text-2xl font-bold' >Diploma</p>
                        <p>Explore our diploma major and minor programs.</p>
                        <button className=' self-start bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold '
                        >Learn More</button>
                    </div>
                </div>
                <div className=' flex flex-col shadow-2xl rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer ' >
                    <img loading='lazy' src={UGImg} className=' h-[200px] object-cover rounded-tl-lg rounded-tr-lg ' />
                    <div className=' w-full h-[5px] bg-[#24933c] ' ></div>
                    <div className=' flex flex-col gap-3 px-4 py-4 rounded-bl-lg rounded-br-lg ' >
                        <p className='text-[#24933c] text-2xl font-bold' >Undergraduate</p>
                        <p>Explore our undergraduate major and minor programs.</p>
                        <button className=' self-start bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold '
                        >Learn More</button>
                    </div>
                </div>
                <div className=' flex flex-col shadow-2xl rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer ' >
                    <img loading='lazy' src={PGImg} className=' h-[200px] object-cover rounded-tl-lg rounded-tr-lg ' />
                    <div className=' w-full h-[5px] bg-[#24933c] ' ></div>
                    <div className=' flex flex-col gap-3 px-4 py-4 rounded-bl-lg rounded-br-lg ' >
                        <p className='text-[#24933c] text-2xl font-bold' >Postgraduate</p>
                        <p>Explore our postgraduate major and minor programs.</p>
                        <button className=' self-start bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold '
                        >Learn More</button>
                    </div>
                </div>
                <div className=' flex flex-col shadow-2xl rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer ' >
                    <img loading='lazy' src={PhdImg} className=' h-[200px] object-cover rounded-tl-lg rounded-tr-lg ' />
                    <div className=' w-full h-[5px] bg-[#24933c] ' ></div>
                    <div className=' flex flex-col gap-3 px-4 py-4 rounded-bl-lg rounded-br-lg ' >
                        <p className='text-[#24933c] text-2xl font-bold' >Ph.d</p>
                        <p>Explore our Ph.d major and minor programs.</p>
                        <button className=' self-start bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold '
                        >Learn More</button>
                    </div>
                </div>
            </div>

        </div>
        <div className=' flex flex-col items-center justify-center gap-2 mt-5 ' >
            <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
            <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
            <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
            <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
            <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
            <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
            <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
            <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
            <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
        </div>
    </div>
  )
}

export default Programs