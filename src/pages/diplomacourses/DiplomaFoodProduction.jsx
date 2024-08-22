import React from 'react'
import Footer from '../../components/Footer'
import PharmacyImg from "../../assets/courses/diploma-course.jpeg";
import { Link } from 'react-router-dom';

const DiplomaFoodProduction = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>Diploma in Food Production</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={PharmacyImg} className=' md:w-[40%] rounded-lg ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >The Diploma in Food Production is an extensive 1 ½ year program aimed at equipping students for fulfilling careers in the hospitality sectors The Food Production Diploma is tailored to cultivate students’ culinary expertise and prepare them for thriving careers in the food service and hospitality industry. This professional diploma program integrates a robust foundation in the food industry with practical and managerial skills, emphasizing adherence to health and safety standards. Students gain comprehensive knowledge of the food transformation process, from raw material procurement to the preparation of delectable, ready-to-serve dishes.</p>
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
                            <td className="whitespace-nowrap  px-6 py-4">Food Production </td>
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
                            <li>Demonstrate advanced culinary skills in food preparation, including proficiency in various cooking techniques, recipe execution, and presentation aesthetics. Explain the diverse nature of tourism, including culture and place, global/local perspectives, and experience design and provision.</li>
                            <li>Design and develop innovative and appealing menus tailored to different cuisines, dietary requirements, and customer preferences.</li>
                            <li>Understand and implement proper food safety and hygiene protocols in compliance with industry regulations, ensuring the health and well-being of both staff and customers.</li>
                            <li>Students will be prepared to enter the food service and hospitality industry with confidence, equipped with the skills, knowledge, and experience necessary for success in various culinary roles</li>
                        </ul>
               </div>

               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Prospects of the Course </h4>
                        <ul className=' list-disc ' >
                            <li>Hotels</li>
                            <li>Airline</li>
                            <li>Administration and Tourism</li>
                            <li>Cruise Industry</li>
                        </ul>
               </div>
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Options</h4>
                        <ul className=' list-disc ' >
                            <li>Chef</li>
                            <li>Kitchen Trainer/Instructor</li>
                            <li>Food Stylist</li>
                            <li>Food Consultant</li>
                            <li>Food Entrepreneur</li>
                            <li>Food Quality Assurance Manager</li>
                        </ul>
               </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default DiplomaFoodProduction