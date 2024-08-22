import React from 'react'
import Footer from '../../components/Footer'
import PharmacyImg from "../../assets/courses/diploma-course.jpeg";
import { Link } from 'react-router-dom';

const DiplomaAviation = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>Diploma in Aviation Management</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={PharmacyImg} className=' md:w-[40%] rounded-lg ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >The Diploma in Aviation Management program at Maya Devi University is designed to equip students with the knowledge and skills necessary to thrive in the dynamic aviation industry. This comprehensive program provides a solid foundation in aviation operations, management principles, and industry-specific regulations, preparing students for rewarding careers in various sectors of the aviation industry.</p>
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
                            <td className="whitespace-nowrap  px-6 py-4 font-semibold ">Diploma in Aviation Management (DAM)</td>
                            <td className="whitespace-nowrap  px-6 py-4">Aviation Management</td>
                            <td className="whitespace-nowrap  px-6 py-4">2</td>
                            <td className="whitespace-nowrap  px-6 py-4">30</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.11000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.80000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.60000/-</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>

                <div className="flex flex-col mt-10 mb-5 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm font-light">
                        <thead
                            className="border-b bg-[#23376c] font-medium text-white rounded-md ">
                            <tr>
                            <th></th>
                            <th scope="col" className=" px-6 py-4">SCHOLARSHIP PROGRAMS (Only One will be applicable)</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            </tr>
                            <tr>
                            <th scope="col" className=" px-6 py-4">Sr. No</th>
                            <th scope="col" className=" px-6 py-4">Particulars</th>
                            <th scope="col" className=" px-6 py-4">Category</th>
                            <th>Percentage</th>
                            <th>Applicable</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">1</td>
                            <td className="whitespace-nowrap  px-6 py-4">Single Girl Child</td>
                            <td></td>
                            <td className="whitespace-nowrap  px-6 py-4">10%</td>
                            <td>All Years</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 " >2</td>
                            <td className="whitespace-nowrap  px-6 py-4" rowSpan={4}>Merit Based</td>
                            <td>75%-80%</td>
                            <td className="whitespace-nowrap  px-6 py-4">20%</td>
                            <td>*</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">3</td>
                            <td className="whitespace-nowrap  px-6 py-4">80%-90%</td>
                            <td className="whitespace-nowrap  px-6 py-4">30%</td>
                            <td>*</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">4</td>
                            <td className="whitespace-nowrap  px-6 py-4">90%-95%</td>
                            <td className="whitespace-nowrap  px-6 py-4">50%</td>
                            <td>*</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">5</td>
                            <td className="whitespace-nowrap  px-6 py-4">95%-100%</td>
                            <td className="whitespace-nowrap  px-6 py-4">70%</td>
                            <td>*</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">6</td>
                            <td className="whitespace-nowrap  px-6 py-4">For Hill States (J&K, Ladakh, Assam, Arunachal Pradesh, Manipur, <br/>Mizoram, Meghalaya, Sikkim, Tripura, HP, Darjeeling, Kalimpong (West Bengal))</td>
                            <td></td>
                            <td className="whitespace-nowrap  px-6 py-4">15%</td>
                            <td>All Years</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">7</td>
                            <td className="whitespace-nowrap  px-6 py-4">Martyrs/Defence Scholarship</td>
                            <td></td>
                            <td className="whitespace-nowrap  px-6 py-4">20%</td>
                            <td>All Years</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 " >8</td>
                            <td className="whitespace-nowrap  px-6 py-4" rowSpan={3}>Sport Quota Scholarship</td>
                            <td>State</td>
                            <td className="whitespace-nowrap  px-6 py-4">25%</td>
                            <td>All Years</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 " >9</td>
                            <td>National</td>
                            <td className="whitespace-nowrap  px-6 py-4">35%</td>
                            <td>All Years</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 " >10</td>
                            <td>International</td>
                            <td className="whitespace-nowrap  px-6 py-4">50%</td>
                            <td>All Years</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">11</td>
                            <td className="whitespace-nowrap  px-6 py-4">Disabled Student Scholarship</td>
                            <td></td>
                            <td className="whitespace-nowrap  px-6 py-4">40%</td>
                            <td>All Years</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">12</td>
                            <td className="whitespace-nowrap  px-6 py-4">Siblings Scholarship</td>
                            <td></td>
                            <td className="whitespace-nowrap  px-6 py-4">25%</td>
                            <td>**</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">13</td>
                            <td className="whitespace-nowrap  px-6 py-4">Early Bird till 8th June</td>
                            <td></td>
                            <td className="whitespace-nowrap  px-6 py-4">40%</td>
                            <td>*</td>
                            </tr>

                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>

            <div className=' flex flex-col gap-10 mt-5 mb-[50px] ' >
               <div className=' flex flex-col gap-2 items-center justify-center px-10 py-8 rounded-lg bg-[#23376c] ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Note</h4>
                        <p className=' text-white italic font-semibold ' > * From 2nd year scholarship will be offered only on 75% attendance in previous year with no back paper and no misconduct.</p>
                        <p className=' text-white font-semibold italic ' > ** applicable on those courses whose fees will be less compared to other siblings.</p>
                    </div>
            </div>

            <div className=' flex flex-col gap-10 mt-5 mb-[100px] ' >
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Eligibility Criteria</h4>
                        <p>Merit prepared on basis of 10+2 (In any Stream) Percentage shall be eligible to seek admission for the course/ MDU Entrance Examination</p>
               </div>

               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Programme Outcomes</h4>
                        <ul className=' list-disc ' >
                            <li>Students will gain an understanding of the global aviation industry, including its history, key players, current trends, and future prospects.</li>
                            <li>This module focuses on the operational aspects of airports, including terminal management, ground handling, air traffic control, and safety and security protocols.</li>
                            <li>Students will learn about airline operations, fleet management, route planning, revenue management, and customer service strategies.</li>
                            <li>The program emphasizes the importance of safety and security in aviation, covering topics such as aviation regulations, risk management, emergency response procedures, and security screening protocols.</li>
                            <li>Students will gain insight into the economic factors influencing the aviation industry, including fuel prices, market demand, competition, and financial management principles.</li>
                        </ul>
               </div>

               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Prospects of the Course </h4>
                        <ul className=' list-disc ' >
                            <li>Airport</li>
                            <li>Hotel Industry</li>
                            <li>Tourism organisation</li>
                            <li>Travel agency & tour operator</li>
                        </ul>
               </div>
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Options</h4>
                        <ul className=' list-disc ' >
                            <li>Airport Operations Manager</li>
                            <li>Airline Operations Coordinator</li>
                            <li>Aviation Safety Inspector</li>
                            <li>Airport Security Manager</li>
                            <li>Aviation Sales and Marketing Specialist</li>
                            <li>Aircraft Fleet Manager</li>
                        </ul>
               </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default DiplomaAviation