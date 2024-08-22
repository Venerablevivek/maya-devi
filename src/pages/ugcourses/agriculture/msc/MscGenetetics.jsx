import React from 'react'
import Footer from '../../../../components/Footer';
import BtechImg from "../../../../assets/courses/agri.jpeg";
import { Link } from 'react-router-dom';

const MscGenetetics = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>M.Sc. Genetics and Plant Breeding</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={BtechImg} className=' md:w-[40%] rounded-lg object-fill ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >A Master of Science (M.Sc.) programme in Genetics and Plant Breeding is a graduate-level curriculum that emphasises advanced training and education in the domains of genomics, genetics, and plant breeding. Through cutting-edge research and practical application, students delve into the intricate mechanisms of genetic manipulation, plant breeding techniques, and advancements in seed science technology. With state-of-the-art facilities and expert faculty, the department equips aspiring agricultural scientists with the knowledge and skills to revolutionize crop production and contribute to global food security.
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
                        <p>50% aggregate marks in B.Sc. Agriculture (Hons.)or Equivalent courses like Agriculture, Horticulture, Forestry securing at least 50 % marks or equivalent CGPA in Aggregate.</p>
                    </div>
                    </div>

                    <div className=' flex flex-col gap-2 mb-10 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Program Outcome</h4>
                        <ul className=' list-disc ' >
                        <li>Quality education in Agriculture with special reference to Agronomy, Soil Science, Horticulture, Entomology, Plant Pathology, and Seed Science and Technology to address Agriculture-related issues.</li>
                        <li>Understanding of the analysis of complex on- and off-farm problems and their sustainable solutions.</li>
                        <li>Skills to select and apply natural resources, modern techniques, and IT tools for weather forecasting, soil analysis, pest management, and quality seed production of food crops.</li>
                        <li>The methods of experimental design, data analysis, and their presentation.</li>
                        <li>Research-based knowledge of the environment and recognition of the importance of crop biodiversity in the field to preserve the agro-ecosystem.</li>
                        <li>Analytical skills to correlate and integrate viable solutions to solve problems with team spirit.</li>
                        <li>Demonstrate and understand the impact of globalization and diversification of agriculture, including extension programs to disseminate modern technologies for farmers' welfare.</li>
                        <li>Farm management skills for improving the socioeconomic condition of farmers.</li>
                        <li>Skills to recognize and evaluate the relationships between input and output costs, and benefit ratios in their agricultural field to make effective decisions. The program will enhance job opportunities and entrepreneurship development.</li>
                        <li>Self-critical opinion to solve on-farm problems on a sustainable basis. The students will cultivate a culture of lifelong learning in a conducive environment to achieve personal success and professional ethics.</li>
                        <li>Knowledge of recent developments and future possibilities in the agriculture sector. The program provides comprehensive knowledge of agricultural production.</li>
                        <li>The students will cultivate a culture of lifelong learning in a conducive environment to achieve personal success and professional ethics.</li>
                        </ul>
               </div>

            {/* table */}
            <div className="flex flex-col mb-10 ">
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
                            <td className="whitespace-nowrap  px-6 py-4">Genetics and Plant Breeding</td>
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

        </div>
        <Footer/>
    </div>
  )
}

export default MscGenetetics