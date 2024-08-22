import React from 'react'
import Footer from '../../../../components/Footer';
import BtechImg from "../../../../assets/courses/agri.jpeg";
import { Link } from 'react-router-dom';

const MscHorticulture = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>M.Sc. Horticulture</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={BtechImg} className=' md:w-[40%] rounded-lg object-fill ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >The Master of Science in Horticulture programme offers students with advanced knowledge, skills, and research experience in horticultural science and practice, enabling them to pursue careers in horticultural fields such as ornamental plant production, landscaping, nursery management, fruit and vegetable production, research institutions, extension services, and education.. Through interdisciplinary studies and hands-on training, students explore innovative methods in fruit and vegetable production, landscaping, and urban farming.  Expert faculty and state-of-the-art facilities ensure a holistic understanding of horticulture’s role in environmental conservation and food security. It grants students the skills and knowledge required to tackle challenging horticultural opportunities and challenges and have a positive impact on food security, environmental stewardship, and sustainable plant production.
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
                        <p>Minimum 50% aggregate marks in B.Sc. Horticulture /Agriculture or equivalent from a recognized University.</p>
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
                            <td className="whitespace-nowrap  px-6 py-4 font-semibold ">Master of Science (M.Sc.)</td>
                            <td className="whitespace-nowrap  px-6 py-4">Horticulture</td>
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

export default MscHorticulture