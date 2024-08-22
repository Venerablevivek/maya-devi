import React from 'react'
import Footer from '../../../../components/Footer';
import BtechImg from "../../../../assets/courses/agri.jpeg";
import { Link } from 'react-router-dom';

const BscMicrobiology = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>B.Sc. Microbiology (Hons.)</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={BtechImg} className=' md:w-[40%] rounded-lg ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >
                    The Bachelor of Science  in Microbiology concentrates on the study of microorganisms such Bacteria, Viruses, Fungi, Protozoa and Algae. A wide range of industries, including healthcare, agriculture, environmental science, biotechnology, the manufacture of food and beverages, medicines, and research, use Microbiology. According to the New Education Policy 2020, the course  require four years, or eight semesters, to complete. There are Four exit options: One year- certificate, Two-year diploma, Three-year degree, and Four-year – honors with research/without research. It includes both theoretical and applied components covering a range of scientific domains. Students who enroll in a B.Sc. programme in Microbiology will graduate with a solid understanding of the concepts and applications of the field, putting them in a position to pursue positions in government agencies, Industry, Healthcare, Academia and Research. It gives them the information, abilities, and capacity for critical thought necessary to deal with microbiological problems and further the fields of science and technology.
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
                        <p>Passed Higher Secondary (+2) by Gov. of Uttarakhand or equivalent examination conducted by other states of India with Biology/Botany/Zoology min. 45% marks. * To Pursue B.Sc. Microbiology with research, 75% marks and no backlog is mandatory. ith Biology/Botany/Zoology /MDU Entrance Examination</p>
                    </div>
                    </div>
              
            <div className=' flex flex-col gap-2 mb-10 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Program Outcome</h4>
                        <ul className=' list-disc ' >
                        <li>The course aims to provide knowledge and coherent understanding of basic microbiology such as Bacteriology, Virology, Biochemistry, Microbial Physiology, Immunology, Cell Biology, Molecular Biology, Genetics, Systems Biology, Immunology, and Molecular Biology, in addition to becoming aware of the applied aspects of microbiology such as Industrial Microbiology, Food and Dairy Microbiology, Environmental Microbiology, and Medical Microbiology.</li>
                        <li>This course aims to give students a deeper grasp of disciplinary, multidisciplinary, and value-added courses with a practical emphasis, preparing them to be industry leaders with strong moral and human values.</li>
                        <li>Students will learn about the development and evaluation of hypotheses, as well as the planning and carrying out of experiments. Critical thinking skills and the ability to read and evaluate scientific material will be developed in students.</li>
                        <li>Students will study the many biotechnological uses for microbes and the compounds that these organisms make that are crucial to industry. They will become more acquainted with the special function that bacteria play in genetic modification technologies.</li>
                        <li>Students will gain skills in the quantitative abilities required to evaluate biological issues, such as algebra, arithmetic, and statistical techniques in relation to microbiology.</li>
                        <li>Students will develop good communication skills both in writing and speaking through seminars and the effective presentation of experiments.</li>
                        <li>Graduates of the B.Sc. (Honours) Microbiology program will be knowledgeable individuals with the ability to comprehend and assess the implications of novel discoveries in the life sciences. They will also be prepared to pursue a broad range of careers, such as positions in scientific writing, public and global health, pharmaceutical, food, and biotechnology industries, as well as biological and medical research in higher education.</li>

                        </ul>
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
                            <td className="whitespace-nowrap  px-6 py-4 font-semibold ">Bachelor of Science with Hons. (B.Sc – Hons.)</td>
                            <td className="whitespace-nowrap  px-6 py-4">Microbiology</td>
                            <td className="whitespace-nowrap  px-6 py-4">4</td>
                            <td className="whitespace-nowrap  px-6 py-4">20</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.16000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.60000/-</td>
                            <td className="whitespace-nowrap  px-6 py-4">Rs.45000/-</td>
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

export default BscMicrobiology