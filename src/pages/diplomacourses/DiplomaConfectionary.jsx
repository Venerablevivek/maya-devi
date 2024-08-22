import React from 'react'
import Footer from '../../components/Footer'
import PharmacyImg from "../../assets/courses/diploma-course.jpeg";
import { Link } from 'react-router-dom';

const DiplomaConfectionary = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>Diploma in Bakery and  Confectionary</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={PharmacyImg} className=' md:w-[40%] rounded-lg ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >The Diploma in Bakery and  Confectionary is an extensive 1 ½ year program aimed at equipping students for fulfilling careers in the hospitality sectors. The Diploma in Bakery and Confectionary program is a comprehensive and hands-on course designed to provide students with the skills and knowledge necessary to excel in the baking and pastry arts industry. This program combines theoretical learning with practical experience, ensuring that students are well-equipped to pursue a variety of careers in the dynamic world of bakery and confectionary.</p>
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
                            <td className="whitespace-nowrap  px-6 py-4">Bakery and  Confectionary</td>
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
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Prospects of the Course </h4>
                        <ul className=' list-disc ' >
                        <li>Hotel Industry</li>
                        <li>Catering Service</li>
                        <li>Cruise Industry</li>
                        <li>Management</li>
                        <li>Retail Management</li>
                        <li>Event Management Companies</li>

                        </ul>
               </div>
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Options</h4>
                        <ul className=' list-disc ' >
                        <li>Pastry Chef</li>
                        <li>Bakery Manager</li>
                        <li>Cake Decorator</li>
                        <li>Chocolatier</li>
                        <li>Confectionary Artist</li>
                        <li>Entrepreneur (Bakery Owner)</li>

                        </ul>
               </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default DiplomaConfectionary