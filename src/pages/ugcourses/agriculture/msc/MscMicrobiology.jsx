import React from 'react'
import Footer from '../../../../components/Footer';
import BtechImg from "../../../../assets/courses/agri.jpeg";
import { Link } from 'react-router-dom';

const MscMicrobiology = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>M.Sc. Microbiology</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={BtechImg} className=' md:w-[40%] rounded-lg object-fill ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >Master of Science (M.Sc.) in Microbiology programme offers advanced instruction and training in the subject of Microbiology . It explores the study of microorganisms, including algae, bacteria, viruses, fungi, and protozoa, as well as how they interact with other living things and the environment.  With the advanced knowledge, abilities, and research experience that the M.Sc. Microbiology programme offers, students are well-prepared for positions in academia, industry, government, research institutions, and the healthcare industry.
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
                        <p>Bachelor’s Degree in B.Sc-PCB/CBZ/Microbiology/Biochemistry/Biotechnology from a recognized university with minimum 45% or equivalent CGPA in aggregate.</p>
                    </div>
                    </div>

                    <div className=' flex flex-col gap-2 mb-10 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Program Outcome</h4>
                        <ul className=' list-disc ' >
                        <li>The Master’s Programme in Microbiology aims to provide students with superior analytical skills and knowledge of biomolecular science.</li>
    <li>The programme has a strong emphasis on applying knowledge gained about higher-order organisms in biological systems and environments, prokaryotic and eukaryotic cellular processes, and interactions between microorganisms and physical and chemical agents.</li>
    <li>In addition to theory, laboratory training is provided so that students can gain the necessary skills for a variety of careers in research, industry, consulting, education, and public administration, as well as for graduate-level study.</li>
    <li>A wide range of subjects, such as molecular biology, food science, environmental biotechnology, microbiology, microbial genetics, and biopolymer chemistry, are covered.</li>
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
                            <td className="whitespace-nowrap  px-6 py-4">Microbiology</td>
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

export default MscMicrobiology