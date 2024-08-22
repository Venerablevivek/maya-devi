import React from 'react'
import Footer from '../../../../components/Footer';
import BtechImg from "../../../../assets/courses/agri.jpeg";
import { Link } from 'react-router-dom';

const MscNutrition = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>M.Sc. Nutrition and Dietetics</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={BtechImg} className=' md:w-[40%] rounded-lg object-fill ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >Master of Science (M.Sc.) in Nutrition emphasis on dietetics, human nutrition, and the interrelationships between food, nutrients, and health. It offers advanced instruction and training in a range of nutrition science subjects, such as food policy, clinical nutrition, public health nutrition, nutritional assessment, dietary guidelines, and nutrient metabolism. Students in the M.Sc. Nutrition programme are prepared for jobs in a variety of fields, including public health, healthcare, the food business, research, education, policy, and advocacy, by receiving advanced knowledge, skills, and hands-on experience in nutrition science and practice.
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
                        <p>50% in the Bachelor’s Degree of Science in Nutrition and Dietetics Or Biosciences (Biotech, Microbiology, Biochemistry, Bioinformatics, Genetics) Or Medical Science and Allied Medical Science (MBBS, BAMS, BDS, BHMS, Nursing, MLT) Or Home Science or Medical or Non-Medical or Food Technology or Veterinary Microbiology and Parasitology or Genetic Engineering and Biotechnology or Clinical Nutrition or Public Health and Allied Sciences, Agriculture, Horticulture or equivalent (45% in case of candidate belonging to reserved category).</p>
                    </div>
                    </div>

                    <div className=' flex flex-col gap-2 mb-10 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Program Outcome</h4>
                        <ul className=' list-disc ' >
                        <li>To enable students to learn the methods of assessing nutritional requirements, assessment, and diet planning.</li>
                        <li>To apply theoretical concepts in a laboratory setting as per standard methods.</li>
                        <li>To enhance skills for planning, management, and monitoring of public health nutrition programs.</li>
                        <li>To acquire skills to undertake systematic research in the area of Nutrition.</li>
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
                            <td className="whitespace-nowrap  px-6 py-4">Nutrition and Dietetics</td>
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

export default MscNutrition