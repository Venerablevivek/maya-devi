import React from 'react'
import Footer from '../../../../components/Footer';
import BtechImg from "../../../../assets/courses/agri.jpeg";
import { Link } from 'react-router-dom';

const FoodTechnology = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>B.Tech in Food Technology</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={BtechImg} className=' md:w-[40%] rounded-lg ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >The science and technology underlying the manufacturing, processing, preservation, packaging, and distribution of food items are the main topics of a Bachelor of Technology (B.Tech) programme in Food Technology. It integrates elements of microbiology, nutrition, engineering, and food science to guarantee the functionality, safety, and quality of food items. Students enrolled in the B.Tech programme in Food Technology are prepared for positions in a variety of food industry sectors, such as research facilities, regulatory agencies, quality assurance labs, product development corporations, and food service organisations. It gives students the technical know-how, scientific background, and comprehension of regulations required to meet the opportunities and difficulties in the fast-paced industry of food technology.
                    <br/><br/>
                    Program  Outcome:
                    <br/><br/>
                    <ul className=' list-disc text-[14px] ' >
                    <li>To impart knowledge in various aspects of Food Technology through theory and practicals.</li>
                    <li>Profound understanding of various scientific and technological aspects of raw food products.</li>
                    <li>Inbuilt the knowledge of properties of food components and their reactions.</li>
                    <li>Understanding of analytical instruments to process and analyze food safety problems.</li>
                    <li>To understand the physiochemical properties for extending the shelf life of food products.</li>
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
                        <p>Intermediate /10+2 with PCMB/PCM (P- Physics, C-Chemistry, M-Mathematics, B-Biology) from a recognized Board/ University with min. 45% marks (40% in case of candidate belonging to reserved category).</p>
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
                            <td className="whitespace-nowrap  px-6 py-4">Food Technology</td>
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

export default FoodTechnology