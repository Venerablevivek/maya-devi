import React from 'react'
import Footer from '../../../../components/Footer';
import BtechImg from "../../../../assets/courses/agri.jpeg";
import { Link } from 'react-router-dom';

const MscAgronomy = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>M.Sc. Agronomy</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={BtechImg} className=' md:w-[40%] rounded-lg object-fill ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >M.Sc. Agronomy centered on advanced education and training in the theory and practice of crop production and management Most of the courses are infused with practicality with emphasis on hands on experience and learning by doing. Applied conservation agronomy, arid zone agronomy, agricultural research organizations, cropping and farming systems, and agro-meteorology are some of the subjects covered in this degree, It offers them the expertise required to tackle challenging agronomic problems and support resilient and sustainable agriculture systems.
                    <br/><br/>
                    Program  Outcome:
                    <br/><br/>
                    <ul className=' list-disc text-[14px] ' >
                    <li>Crop production - It provides a modern concept of crop production with specialization in cereals, pulses, oilseeds, tubers, medicinal, aromatic, and underutilized crops.</li>
    <li>Organic farming - It provides a wide knowledge about different kinds of organic manures and their efficient utilization in various cropping systems.</li>
    <li>Water management - To teach the students about principles of water management of the crops and cropping systems, and practices to enhance water use efficiency.</li>
    <li>Weed management - It enables the students to attain knowledge on basic principles and modern practices of weed management.</li>
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
                        <p>Minimum 50% aggregate marks in B.Sc. Agriculture / Horticulture or equivalent from a recognized University.</p>
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
                            <td className="whitespace-nowrap  px-6 py-4 font-semibold ">Master of Science (M.Sc.)</td>
                            <td className="whitespace-nowrap  px-6 py-4">Agronomy</td>
                            <td className="whitespace-nowrap  px-6 py-4">2</td>
                            <td className="whitespace-nowrap  px-6 py-4">15</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.16000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.80000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.60000/-</td>
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

export default MscAgronomy