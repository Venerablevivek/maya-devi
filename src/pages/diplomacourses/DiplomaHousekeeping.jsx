import React from 'react'
import Footer from '../../components/Footer'
import PharmacyImg from "../../assets/courses/diploma-course.jpeg";
import { Link } from 'react-router-dom';

const DiplomaHousekeeping = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>Diploma in Housekeeping</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={PharmacyImg} className=' md:w-[40%] rounded-lg ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >The Diploma in Bakery & Confectionary is an extensive 1 ½ year program aimed at equipping students for fulfilling careers in the hospitality sectors. It has been designed to cater to a wide array of housekeeping functions needed in the hospitality industry. This course imparts training wherein the students would develop comprehensive skills to become professional House Keepers. This professional diploma course provides a solid foundation in housekeeping operations, including practical training in cleaning techniques, room maintenance, and guest satisfaction.</p>
                    <Link to="/apply-now" >
                    <button className=' mt-5 md:mt-0 bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] '
                    >Register Now</button>
                </Link>
                </div>
            </div>

            {/* table */}
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm font-light">
                        <thead
                            className="border-b bg-[#23376c] font-medium text-white rounded-md ">
                            <tr>
                            <th scope="col" className=" px-6 py-4">Programme</th>
                            <th scope="col" className=" px-6 py-4">Branch/ Specialization</th>
                            <th scope="col" className=" px-6 py-4">Duration (Years)</th>
                            <th scope="col" className=" px-6 py-4">No. of Seats</th>
                            <th scope="col" className=" px-6 py-4">One time Charges including Registration</th>
                            <th scope="col" className=" px-6 py-4">Yearly Fee (All India Quota)</th>
                            <th scope="col" className=" px-6 py-4">Yearly Fee (UK Domicile)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 font-semibold ">Diploma</td>
                            <td className="whitespace-nowrap  px-6 py-4">Bakery & Confectionary</td>
                            <td className="whitespace-nowrap  px-6 py-4">1</td>
                            <td className="whitespace-nowrap  px-6 py-4">20</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.11000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.60000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.45000/-</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>

            <div className=' flex flex-col gap-10 mt-5 mb-[100px] ' >
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Eligibility Criteria</h4>
                        <p>10+2 (In any Stream)</p>
               </div>

               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Programme Outcomes</h4>
                        <ul className=' list-disc ' >
                            <li>Understand effective cleaning methods, including proper handling of cleaning agents, equipment usage, and sanitation protocols to maintain high standards of cleanliness and hygiene.</li>
                            <li>Focuses on maintaining guest rooms and public areas, covering tasks such as bed making, linen management, furniture arrangement, and floor care to ensure a welcoming environment for guests.</li>
                            <li>Understanding of guest expectations and learn strategies for providing exceptional service, including communication skills, problem-solving techniques, and conflict resolution.</li>
                            <li>Develop managerial skills related to staffing, scheduling, budgeting, and inventory control, preparing them for leadership roles in housekeeping departments.</li>
                            <li>Emphasizes the importance of safety and security in housekeeping operations, covering topics such as fire safety, emergency procedures, and theft prevention to ensure the well-being of guests and staff.</li>
                        </ul>
               </div>

               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Prospects of the Course </h4>
                        <ul className=' list-disc ' >
                            <li>Hotels</li>
                            <li>Hospital</li>
                            <li>Airline</li>
                            <li>Cruise Industry</li>
                        </ul>
               </div>
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Options</h4>
                        <ul className=' list-disc ' >
                            <li>Housekeeping Supervisor</li>
                            <li>Room Attendant</li>
                            <li>Executive Housekeeper</li>
                            <li>Housekeeping Manager</li>
                            <li>Facility Manager</li>
                            <li>Hotel Operations Manager</li>
                        </ul>
               </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default DiplomaHousekeeping