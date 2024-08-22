import React from 'react'
import EventImg1 from "../assets/event1.jpg";
import EventImg2 from "../assets/event2.jpg";
import EventImg3 from "../assets/event3.jpg";

const UpcomingEvents = () => {
  return (
    <div className=' w-full mt-[80px] flex flex-col gap-5 font-poppins ' >
          <h2 className=' text-[#24933c] text-center font-bold text-[42px] uppercase ' >Maya Devi Today</h2>
            <div className=' w-[15%] mx-auto h-[4px] bg-[#23376c] mb-10 ' ></div>
        <div className=' w-10/12 mx-auto flex flex-col gap-5 rounded-lg shadow-2xl px-10 py-8 ' >
            <h2 className=' text-[#24933c] text-start font-semibold text-[30px]' >Upcoming Events</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ' >
                <div className=' flex flex-col shadow-xl rounded-lg ' >
                    {/* <div className=' absolute bg-[#23376c] px-8 py-2 left-[8%] rounded-br-lg rounded-bl-lg
                    flex flex-col text-white font-bold font-inter items-center justify-center ' >
                        <p>8</p>
                        <p>Aug</p>
                    </div> */}
                    <img loading='lazy' src={EventImg1} className=' w-[350px] rounded-tl-lg rounded-tr-lg ' />
                    <div className=' h-[150px] flex flex-col gap-3 px-6 py-3 ' >
                        <p className=' text-2xl font-semibold ' >Move-In Day</p>
                        <p >We welcome students for the 2024-2025 school year!</p>
                    </div>
                    <button className=' bg-[#23376c] px-4 py-4 text-white rounded-bl-lg rounded-br-lg font-semibold '
                        >Learn More</button>
                </div>
                <div className=' flex flex-col shadow-xl rounded-lg ' >
                    {/* <div className=' absolute bg-[#23376c] px-8 py-2 left-[8%] rounded-br-lg rounded-bl-lg
                    flex flex-col text-white font-bold font-inter items-center justify-center ' >
                        <p>22</p>
                        <p>Dec</p>
                    </div> */}
                    <img loading='lazy' src={EventImg2} className=' w-[350px] rounded-tl-lg rounded-tr-lg ' />
                    <div className=' h-[150px] flex flex-col gap-3 px-6 py-3 ' >
                        <p className=' text-2xl font-semibold ' >First Day of Fall Classes - Graduate</p>
                        {/* <p >We welcome students for the 2024-2025 school year!</p> */}
                    </div>
                    <button className=' bg-[#23376c] px-4 py-4 text-white rounded-bl-lg rounded-br-lg font-semibold '
                        >Learn More</button>
                </div>
                <div className=' flex flex-col shadow-xl rounded-lg ' >
                    {/* <div className=' absolute bg-[#23376c] px-8 py-2 left-[8%] rounded-br-lg rounded-bl-lg
                    flex flex-col text-white font-bold font-inter items-center justify-center ' >
                        <p>8</p>
                        <p>Aug</p>
                    </div> */}
                    <img loading='lazy' src={EventImg3} className=' w-[350px] rounded-tl-lg rounded-tr-lg ' />
                    <div className=' h-[150px] flex flex-col gap-3 px-6 py-3 ' >
                        <p className=' text-2xl font-semibold ' >First Day of Fall Classes - Undergraduate</p>
                        {/* <p >We welcome students for the 2024-2025 school year!</p> */}
                    </div>
                    <button className=' bg-[#23376c] px-4 py-4 text-white rounded-bl-lg rounded-br-lg font-semibold '
                        >Learn More</button>
                </div>
            </div>
            <button className=' self-center mt-10 border-[#23376c] border-[1px] px-8 py-4 text-[#23376c] rounded-full font-semibold transition-all duration-200 hover:bg-[#23376c] hover:text-white '
                >See all Events</button>
        </div>
    </div>
  )
}

export default UpcomingEvents