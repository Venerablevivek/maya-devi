import React from 'react'
import Footer from '../../../components/Footer'
import PharmacyImg from "../../../assets/courses/diploma-course.jpeg";
import { Link } from 'react-router-dom';

const MastersTourism = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>Master of Tourism and Travel Management (MTTM)</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={PharmacyImg} className=' md:w-[40%] rounded-lg ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >The Master of Tourism and Travel Management is a two-year postgraduate program specializing in the field of Travel and Tourism. It is designed to provide eligible students with a comprehensive understanding of all aspects of the tourism and hospitality industry. The primary objective of this program is to equip students with the essential skills needed for success in the travel and tourism sector.</p>
                    <Link to="/apply-now" >
                    <button className=' mt-5 md:mt-0 bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] '
                    >Register Now</button>
                </Link>
                </div>
            </div>

            <div className=' flex flex-col gap-10 mt-5 mb-[50px] ' >
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Eligibility Criteria</h4>
                        <p>Graduation in any stream</p>
               </div>

               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#7f9283] `}>Programme Outcomes</h4>
                        <ul className=' list-disc ' >
                        <li>Recognize the diverse nature of the travel and tourism industry, encompassing various forms and facets of business operations.</li>
                        <li>Explain the diverse nature of tourism, including culture and place, global/local perspectives, and experience design and provision.</li>
                        <li>Apply relevant technology for the production and management of tourism experiences.</li>
                        <li>Plan, lead, organize and control resources for effective and efficient tourism operations.</li>
                        <li>Create, apply, and evaluate marketing strategies for tourism destinations and organizations.</li>
                        </ul>
               </div>

               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Prospects of the Course </h4>
                        <ul className=' list-disc ' >
                        <li>Hotels</li>
                        <li>Airline</li>
                        <li>Administration and Tourism</li>
                        <li>Education</li>
                        </ul>
               </div>
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Options</h4>
                        <ul className=' list-disc ' >
                        <li>Tourism marketing manager</li>
                        <li>Destination management organization (DMO) representative</li>
                        <li>Travel agency manager</li>
                        <li>Hotel manager</li>
                        <li>Cruise line representative</li>
                        <li>Event planner</li>
                        <li>Airline representative</li>
                        <li>Tourism board representative</li>
                        <li>Ecotourism planner</li>
                        </ul>
               </div>
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>USPs</h4>
                        <ul className=' list-disc ' >
                        <li>Renowned Domain Specific & Highly Rich Experienced Faculty</li>
                        <li>Updated syllabus to bridge the Gap between Academia and Industry</li>
                        <li>The curriculum designed as per National and International standards in Hospitality Education.</li>
                        <li>Focusses on multi-dimensional growth of the students in terms of Intellectual, Physical and social aspects of personality</li>
                        <li>Centre of Excellence in Specific Domain & Technology for Experiential Learning</li>
                        <li>360° Advance Course Curriculum designed by Core Academia & Renowned Industry Experts</li>
                        <li>Live Industry Projects based Learning through-out the course</li>
                        <li>LMS based Pedagogy and Innovative Class Room Teaching Methodology</li>
                        <li>One – to – One Progress Monitoring & Mentoring Methodology throughout the course</li>
                        <li>Choice Based Credit System (CBCS) Based Assessments and Evaluation</li>
                        <li>Full Time Industrial Internship after 5th semester</li>
                        <li>Full Time Specialized Job Training after 7th semester</li>
                        <li>Advance Diagnostic & Mentoring for Career and Placement throughout the Course</li>
                        <li>Dynamic Programming & Core Skill Guidance throughout the course</li>
                        <li>Start-up & Idea Innovation Lab for Career & Professional Growth</li>
                        </ul>
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
                            <td className="whitespace-nowrap  px-6 py-4 font-semibold ">Masters</td>
                            <td className="whitespace-nowrap  px-6 py-4">Tourism and Travel Management</td>
                            <td className="whitespace-nowrap  px-6 py-4">2</td>
                            <td className="whitespace-nowrap  px-6 py-4">20</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.-16000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.-100000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.-75000/-</td>
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

            <div className=' flex flex-col gap-10 mt-5 mb-[100px] ' >
               <div className=' flex flex-col gap-2 items-center justify-center px-10 py-8 rounded-lg bg-[#23376c] ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Note</h4>
                        <p className=' text-white italic font-semibold ' > * From 2nd year scholarship will be offered only on 75% attendance in previous year with no back paper and no misconduct.</p>
                        <p className=' text-white font-semibold italic ' > ** applicable on those courses whose fees will be less compared to other siblings.</p>
                    </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default MastersTourism