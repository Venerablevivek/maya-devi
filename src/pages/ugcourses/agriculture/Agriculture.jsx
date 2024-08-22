import React from 'react'
import Footer from '../../../components/Footer';
import AgriImg from "../../../assets/courses/agri.jpeg";
import { Link } from 'react-router-dom';

const btechcourse = [
    {
        name: "Dairy Technology",
        path: "btech/dairy-technology"
    },
    {
        name: "Food Technology",
        path: "btech/food-technology"
    },
]

const bsccourses = [
    {
        name: "Agriculture",
        path: "bsc/agriculture"
    },
    {
        name: "Horticulture",
        path: "bsc/horticulture"
    },
    {
        name: "Microbiology",
        path: "bsc/microbiology"
    },
]

const msccourses = [
    {
        name: "Agronomy",
        path: "msc/agronomy"
    },
    {
        name: "Horticulture",
        path: "msc/horticulture"
    },
    {
        name: "Food Technology",
        path: "msc/food-technology"
    },
    {
        name: "Microbiology",
        path: "msc/microbiology"
    },
    {
        name: "Genetics and Plant Breeding",
        path: "msc/genetics-and-plant-breeding"
    },
    {
        name: "Nutrition and Dietetics",
        path: "msc/nutrition-and-dietetics"
    },
]


const Agriculture = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>School of Agriculture</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={AgriImg} className=' md:w-[40%] rounded-lg ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >School of Agriculture at Maya Devi University is a dedicated centre for Research, Post Graduate and Undergraduate courses. Our school reside  with a team of eminent faculty members with a variety of disciplinary academic backgrounds and equipped with modern infrastructure, the school provides exceptional academic environment and a research atmosphere.
<br/>
We focus a strong emphasis on multidisciplinary learning strategies and encourage students to explore the relationships between varieties of scientific disciplines. This can assist students in gaining a comprehensive understanding of intricate scientific phenomena and prepare them for occupations requiring expertise in several disciplines. The programmes provided by the School of Agriculture offer an ideal harmony between industry, academia, and research, granting students an exceptional opportunity to learn and enhance as professionals.
<br/><br/>
<strong>1. Agronomy  2.Agro-forestry  3. Entomology 4. Horticulture 5.Food Science &Technology 6. Soil Science and Agricultural Chemistry 7.Microbiology  8.Plant Pathology 9.Agriculture Engineering 10.Biochemistry 11. Crop Physiology 12.Genetics & Plant Breeding   13. Seed Science & Technology</strong>
</p>
                    <Link to="/apply-now" >
                    <button className=' mt-5 md:mt-0 bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] '
                    >Register Now</button>
                </Link>
                </div>
            </div>

            {/* Departments */}
            <div className=' grid grid-cols-1 gap-[50px] ' >

                {/* Computer Science Engineering */}
                <div className=' flex flex-col gap-2 ' >
                    <h4 className={` text-2xl font-semibold text-[#249138] `}>Bachelor of Technology (B.Tech.)</h4>
                    <ul className=' list-decimal ' >
                        {
                            btechcourse.map((course,index)=>(
                                <li key={index} className=' text-blue-700 transition-all duration-200 hover:text-[#249138] ' >
                                    <Link to={`${course.path}`} >
                                            {course.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                {/* Civil */}
                <div className=' flex flex-col gap-2 ' >
                    <h4 className={` text-2xl font-semibold text-[#249138] `}>Bachelor of Science with Hons.  (B.Sc – Hons.)</h4>
                    <ul className=' list-decimal ' >
                        {
                            bsccourses.map((course,index)=>(
                                <li key={index} className=' text-blue-700 transition-all duration-200 hover:text-[#249138] ' >
                                    <Link to={`${course.path}`} >
                                            {course.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                {/* Mechanical */}
                <div className=' flex flex-col gap-2 ' >
                    <h4 className={` text-2xl font-semibold text-[#249138] `}>Master of Science (M.Sc.)</h4>
                    <ul className=' list-decimal ' >
                        {
                            msccourses.map((course,index)=>(
                                <li key={index} className=' text-blue-700 transition-all duration-200 hover:text-[#249138] ' >
                                    <Link to={`${course.path}`} >
                                            {course.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                </div>

            </div>

            <div className=' flex flex-col gap-10 mt-5 mb-[100px] ' >
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>USPs</h4>
                        <ul className=' list-disc text-justify ' >
                        <li><strong>Cutting-edge Research:</strong> School of Agriculture is renowned for its commitment to pioneering research in agricultural sciences, fostering innovation, and addressing pressing global challenges in food security and sustainability.</li>
    <li><strong>Industry Integration:</strong> With strong ties to the agricultural industry, School of Agriculture provides students with invaluable opportunities for internships, hands-on training, and industry collaborations, ensuring they are well-prepared for successful careers upon graduation.</li>
    <li><strong>Holistic Curriculum:</strong> The college offers a holistic curriculum that combines theoretical knowledge with practical applications, equipping students with a comprehensive understanding of agricultural practices, agribusiness management, and technological advancements.</li>
    <li><strong>State-of-the-art Facilities:</strong> School of Agriculture boasts state-of-the-art facilities, including modern laboratories, research farms, and agricultural machinery, providing students with a conducive learning environment to enhance their skills and capabilities.</li>
    <li><strong>Focus on Sustainability:</strong> With a strong emphasis on sustainable agricultural practices, School of Agriculture instills in students a sense of environmental stewardship and social responsibility, preparing them to address the challenges of feeding a growing global population while preserving natural resources for future generations.</li>
                        </ul>
               </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Agriculture