import React from 'react'
import Footer from '../../../components/Footer'
import PharmacyImg from "../../../assets/courses/diploma-course.jpeg";
import { Link } from 'react-router-dom';

const BscHotelManagement = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>Bachelor of Science – Hotel Management (B.Sc. – HM)</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={PharmacyImg} className=' md:w-[40%] rounded-lg ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >The Bachelor of Science (Hotel Management) is an extensive three-year undergraduate program aimed at equipping students for fulfilling careers in the hospitality sector. The curriculum is designed to provide students with the skills and expertise needed to thrive in various sectors of the hospitality industry, including hotels, restaurants, event management, and tourism. With a focus on research-backed information and hands-on training, our program ensures that graduates are well-prepared to make informed decisions and succeed in a fast-paced and dynamic industry.</p>
                    <Link to="/apply-now" >
                    <button className=' mt-5 md:mt-0 bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] '
                    >Register Now</button>
                </Link>
                </div>
            </div>

            <div className=' flex flex-col gap-10 mt-5 mb-[50px] ' >
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Eligibility Criteria</h4>
                        <p>Merit prepared on basis of 10+2 (In any Stream) Percentage shall be eligible to seek admission for the course/ MDU Entrance Examination</p>
               </div>

               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Programme Outcomes</h4>
                        <ul className=' list-disc ' >
                        <li>Display an in-depth comprehension of the hospitality industry, encompassing its diverse sectors, emerging trends, and best practices.</li>
                        <li>Cultivate vital managerial skills to efficiently oversee operations across hotels, resorts, restaurants, and similar hospitality establishments.</li>
                        <li>Encourage both individual and collective performance enhancement through active engagement and collaborative initiatives.</li>
                        <li>Develop proficiency in delivering outstanding customer service, addressing guest requirements, and ensuring optimal customer satisfaction.</li>
                        <li>Uphold ethical standards, legal regulations, and industry norms governing hospitality operations.</li>
                        <li>Undertake detailed problem analysis and devise strategic solutions to organizational challenges within the hospitality domain.</li>
                        <li>Identify and seize innovative opportunities for entrepreneurial endeavors within the hospitality sector.</li>
                        <li>Apply a range of management techniques to tackle business obstacles, assess outcomes, draw appropriate conclusions, and communicate findings effectively.</li>
                        <li>Demonstrate employability and entrepreneurial flair through practical exposure, involvement in industry practices, and adeptness in research.</li>
                        <li>Exhibit dedication to self-directed learning, reflective practice, and information literacy crucial for continuous personal and professional development.</li>
                        </ul>
               </div>

               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Prospects of the Course </h4>
                        <ul className=' list-disc ' >
                        <li>Hospitality & Tourism industry is the largest industry in the world contributing 10% of the world GDP.</li>
                        <li>With hotels like Marriott, Hilton, Hyatt, Wyndham Hotels & Resorts, Taj, Oberai, the growth potential for Hospitality sector is big.</li>
                        <li>Management Trainee in Hotel and allied hospitality industry;</li>
                        <li>Kitchen Management/Housekeeping Management positions in Hotels after initial stint as trainee;</li>
                        <li>Flight Kitchens and on-board flight services;</li>
                        <li>Indian Navy Hospitality services;</li>
                        <li>Guest/Customer Relation Executive in Hotel and other Service Sectors;</li>
                        <li>Management Trainee/Executive in international and national fast food chains;</li>
                        <li>Hospital and Institutional Catering;</li>
                        <li>Railway Hospitality and Catering Services;</li>
                        <li>State Tourism Development Corporations;</li>
                        <li>Shipping and Cruise lines;</li>
                        <li>Resort Management;</li>
                        <li>Self-employment through entrepreneurship and</li>
                        <li>Multinational companies for their hospitality services</li>
                        </ul>
               </div>
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Options</h4>
                        <ul className=' list-disc ' >
                        <li>Hotel Manager</li>
                        <li>Restaurant Manager</li>
                        <li>Bartender</li>
                        <li>Chef</li>
                        <li>Front office Manager</li>
                        <li>Housekeeping Manager</li>
                        <li>Event Manager</li>
                        <li>Marketing Executive</li>
                        <li>Human Resource Executive</li>
                        <li>Sales Executive</li>
                        <li>KST Manager</li>
                        <li>F&B Controller</li>
                        <li>Hospitality Liaisoning Manager</li>
                        <li>Guest House Manager</li>
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
                            <td className="whitespace-nowrap  px-6 py-4 font-semibold ">Bachelor of Science</td>
                            <td className="whitespace-nowrap  px-6 py-4">Hotel Management</td>
                            <td className="whitespace-nowrap  px-6 py-4">3</td>
                            <td className="whitespace-nowrap  px-6 py-4">30</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.-16000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.-80000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.-60000/-</td>
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

export default BscHotelManagement