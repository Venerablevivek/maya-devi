import React from 'react'
import Footer from '../../components/Footer'
import PharmacyImg from "../../assets/courses/pharmacy.jpg";
import { Link } from 'react-router-dom';

const DiplomaPharmacy = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>Diploma in Pharmacy</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={PharmacyImg} className=' md:w-[40%] rounded-lg ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >School of Pharmacy is running a two year full time diploma course divided into two annual sessions approved by Pharmacy Council of India, New Delhi. With industrial and hospital exposure and internship programs, students are emphasized to understand the fundamental concepts underlying each subject area and thus prepare them to effectively deal with sale and distribution of life saving drugs while working as a licensed pharmacists.</p>
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
                            <td className="whitespace-nowrap  px-6 py-4 font-semibold ">Diploma in Pharmacy</td>
                            <td className="whitespace-nowrap  px-6 py-4">N/A</td>
                            <td className="whitespace-nowrap  px-6 py-4">2</td>
                            <td className="whitespace-nowrap  px-6 py-4">60</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.-16000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.-100000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.75000/-</td>
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
                        <p>Intermediate / 10+2  with PCB or PCM  from a recognized Board/ University./ MDU Entrance Examination</p>
               </div>

               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Programme Outcomes</h4>
                        <ul className=' list-disc ' >
                            <li>Students will develop and acquire knowledge, skill and attitude with practice based pharmacy education.</li>
                            <li>They will be able to apply the knowledge to evaluate and access social health and safety as well as understand their social responsibilities as a health care professional.</li>
                            <li>Understand the impact of professional pharmacy solutions in environmental and societal context for sustainable development.</li>
                            <li>Will get aware to the pharmaceutical ethics and apply its principals in professional and social context for the development of pharmacy profession</li>
                        </ul>
               </div>

               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Prospects of the Course </h4>
                        <ul className=' list-disc ' >
                            <li><strong>Industry Demand :</strong> The healthcare sector, pharmaceutical Industries, is witness speedy growth globally. There is expanding demand for eligible pharmacy personals.</li>
                            <li><strong>Community Needs :</strong> Our neighbouring community would advantage from having access to well-trained pharmacy personals who can contribute to enhancing health-care services and improving patient outcomes.</li>
                            <li><strong>Career Opportunities :</strong> A candidate of pharmacy opens up numerous career opportunities in retail pharmacies, hospitals, pharmaceutical companies, and research institutions, offering stable employment and career advancement prospects.</li>
                        </ul>
               </div>

               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Options</h4>
                        <ul className=' list-disc ' >
                            <li>Entrepreneur (Eligible to open his/her own medical retail shop/ whole sale store).</li>
                            <li>Eligible for applying in different Government sectors as registered pharmacist.</li>
                            <li>Continue his/her study in Bachelor in Pharmacy in higher standards; for better carrier.</li>
                            <li>Clinical Pharmacy and Patient Care</li>
                            <li>Pharmaceutical Analysis</li>
                            <li>Pharmacy Practice Management</li>
                        </ul>
               </div>
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>USPs</h4>
                        <ul className=' list-disc ' >
                            <li>Renowned Domain Specific & Highly Rich Experienced Faculty</li>
                            <li>Centre of Excellence in Specific Domain & Technology for Experiential Learning</li>
                            <li>360° Advance Course Curriculum designed by Core Academia & Renowned Industry Experts</li>
                            <li>Live Industry Projects based Learning through-out the course</li>
                            <li>LMS based Pedagogy and Innovative Class Room Teaching Methodology</li>
                            <li>One – to – One Progress Monitoring & Mentoring Methodology throughout the course</li>
                            <li>Choice Based Credit System (CBCS) Based Assessments and Evaluation</li>
                            <li>Advance Diagnostic & Mentoring for Career and Placement throughout the Course</li>
                            <li>Dynamic Programming & Core Skill Guidance throughout the course</li>
                            <li>Start-up & Idea Innovation Lab for Career & Professional Growth.</li>
                        </ul>
               </div>

            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default DiplomaPharmacy