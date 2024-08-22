import React from 'react'
import Footer from '../../../../components/Footer';
import BtechImg from "../../../../assets/courses/agri.jpeg";
import { Link } from 'react-router-dom';

const BtechDiaryTechnology = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>B.Tech in Dairy Technology</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={BtechImg} className=' md:w-[40%] rounded-lg ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >Dairy Science is a subfield of agriculture which is study of milk and its products, along with the procedures that go into producing, handling, processing, packaging, and distributing them. Students, who complete a B.Tech programme in Dairy Science, graduate with a thorough understanding of Dairy Management, Quality assurance, Processing, and Production. The goal of the B.Tech programme in Dairy Science is to give students the information and abilities needed for jobs in the dairy industry in Quality control, Research, Management, Processing, Production and Entrepreneurship.
                    <br/><br/>
                    <strong>B.Tech. Dairy Technology:</strong><br/><br/>
                    Program  Outcome:
                    <br/>
                    <ul className=' list-disc text-[14px] ' >
                    <li>To learn about general classification, characteristics, and scope of microbes in dairy technology.</li>
    <li>To know about Pasteurization, Homogenization of milk, and microbiological characteristics.</li>
    <li>Understanding of basic protocols for chemical analysis of dairy products and qualitative tests for detection of adulterants in milk and milk products.</li>
    <li>Conceptualizing dairy needs, awareness of quality, and safety of dairy farm.</li>
    <li>Learning of appropriate techniques, skills, and modern tools in the dairy industry.</li>
                    </ul>
                    </p>
                    <Link to="/apply-now" >
                    <button className=' mt-5 md:mt-0 bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] '
                    >Register Now</button>
                </Link>
                </div>
            </div>

            <div className=' flex flex-col gap-10 mt-5 mb-[50px] ' >
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Eligibility Criteria</h4>
                        <p>Intermediate / 10+2 or its equivalent examination with PCM (Physics, Chemistry, Maths) from a recognized Board/ University with min. 45% marks (40% in case of candidate belonging to reserved category).</p>
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
                            <td className="whitespace-nowrap  px-6 py-4 font-semibold ">Bachelor of Technology (B.Tech.)</td>
                            <td className="whitespace-nowrap  px-6 py-4">Dairy Technology</td>
                            <td className="whitespace-nowrap  px-6 py-4">4</td>
                            <td className="whitespace-nowrap  px-6 py-4">40</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.21000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.100000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.75000/-</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>

                <div className="flex flex-col mt-10 mb-10 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center text-sm font-light">
                        <thead
                            className="border-b bg-[#23376c] font-medium text-white rounded-md ">
                            <tr>
                            <th></th>
                            <th scope="col" className=" px-6 py-4">Hostel Fee</th>
                            <th></th>
                            </tr>
                            <tr>
                            <th scope="col" className=" px-6 py-4">Sr. No</th>
                            <th scope="col" className=" px-6 py-4">Type</th>
                            <th scope="col" className=" px-6 py-4">Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">1</td>
                            <td className="whitespace-nowrap  px-6 py-4">Triple Sharing (Non AC)</td>
                            <td className="whitespace-nowrap  px-6 py-4">75000/-</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">2</td>
                            <td className="whitespace-nowrap  px-6 py-4">Double Sharing (Non Ac)</td>
                            <td className="whitespace-nowrap  px-6 py-4">85000/-</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">3</td>
                            <td className="whitespace-nowrap  px-6 py-4">Triple Sharing (AC)</td>
                            <td className="whitespace-nowrap  px-6 py-4">115000/-</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 ">4</td>
                            <td className="whitespace-nowrap  px-6 py-4">Double Sharing (Ac)</td>
                            <td className="whitespace-nowrap  px-6 py-4">125000/-</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>


        </div>
        <Footer/>
    </div>
  )
}

export default BtechDiaryTechnology