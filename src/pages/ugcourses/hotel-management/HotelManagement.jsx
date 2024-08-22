import React from 'react'
import Footer from '../../../components/Footer';
import AgriImg from "../../../assets/courses/diploma-course.jpeg";
import { Link } from 'react-router-dom';

const diplomacourses = [
    {
        name:'Diploma in Food Production',
        path:'diploma-in-food-production'
    },
    {
        name:'Diploma in Bakery and Confectionary',
        path:'diploma-in-bakery-and-confectionary'
    },
    {
        name:'Diploma in Food & Beverage Service & Bar Tending',
        path:'diploma-in-food-and-beverage'
    },
    {
        name:'Diploma in Front Office',
        path:'diploma-in-front-office'
    },
    {
        name:'Diploma in Housekeeping',
        path:'diploma-in-housekeeping'
    },
]

const courses = [
    {
        name:'Diploma in Aviation Management (DAM)',
        path:'diploma-in-aviation-management'
    },
    {
        name:'Bachelor of  Hotel Management (BHM)',
        path:'bachelor/hotel-management'
    },
    {
        name:'Bachelor of Science – Hotel Management (B.Sc. – HM)',
        path:'bsc/hotel-management'
    },
    {
        name:'Master of Hotel Management (MHM)',
        path:'masters/hotel-management'
    },
    {
        name:'Master of Tourism and Travel Management (MTTM)',
        path:'masters/tourism-and-travel-management'
    },
]


const HotelManagement = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>School of Hotel Management and Tourism</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={AgriImg} className=' md:w-[40%] rounded-lg ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About School of Hotel  Management and Tourism</h4>
                    <p className=' text-justify md:text-lg ' >Welcome to the esteemed School of Hotel Management and Tourism (SOHMT) at Maya Devi University, a premier institution renowned for its excellence in hotel management education within Dehradun.
<br/><br/>
Our mission at SOHMT is to provide unparalleled education and training for students seeking success in the Hospitality & Tourism sector. With state-of-the-art infrastructure, a comprehensive curriculum, immersive learning opportunities, and a supportive atmosphere, we are dedicated to nurturing the holistic development of our students. Our goal is to empower individuals to thrive in diverse career paths with confidence.
<br/>
We are committed to delivering a multifaceted and integrated learning experience, continuously updating our curriculum to reflect the latest industry trends and innovations. Join us at SOHMT, where your journey to success in the Hospitality & Tourism industry begins.
</p>
                    <Link to="/apply-now" >
                    <button className=' mt-5 md:mt-0 bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] '
                    >Register Now</button>
                </Link>
                </div>
            </div>

            {/* Departments */}
            <div className=' grid grid-cols-1 gap-[20px] ' >

                <div className=' flex flex-col gap-2 ' >
                    <h4 className={` text-2xl font-semibold text-[#249138] `}>Diploma in Aviation Management (DAM)</h4>
                    <ul className=' list-decimal ' >
                        {
                            diplomacourses.map((course,index)=>(
                                <li key={index} className=' text-blue-700 transition-all duration-200 hover:text-[#249138] ' >
                                    <Link to={`${course.path}`} >
                                            {course.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className=' flex flex-col gap-2 ' >
                    <ul className=' list-disc ' >
                        {
                            courses.map((course,index)=>(
                                <li key={index} className=' text-blue-700 font-semibold transition-all duration-200 hover:text-[#249138] ' >
                                    <Link to={`${course.path}`} >
                                            {course.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                </div>

            </div>

            <div className=' flex flex-col gap-10 mt-5 ' >
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>USPs</h4>
                        <ul className=' list-disc text-justify ' >
                        <li>Renowned Domain Specific & Highly Rich Experienced Faculty</li>
                        <li>Updated syllabus to bridge the Gap between Academia and Industry</li>
                        <li>The curriculum designed as per National and International standards in Hospitality Education.</li>
                        <li>Focusses on multi-dimensional growth of the students in terms of Intellectual, Physical and social aspects of personality</li>
                        <li>Centre of Excellence in Specific Domain & Technology for Experiential Learning</li>
                        <li>360° Advance Course Curriculum designed by Core Academia & Renowned Industry Experts</li>
                        <li>Live Industry Projects based Learning through-out the course</li>
                        <li>LMS based Pedagogy and Innovative Class Room Teaching Methodology</li>
                        <li>One – to – One Progress Monitoring & Mentoring Methodology throughout the course</li>
                        <li>Choice Based Credit System (CBCS) Based Assessments and Evaluation</li>
                        <li>Full Time Industrial Internship after 3rd</li>
                        <li>Advance Diagnostic & Mentoring for Career and Placement throughout the Course</li>
                        <li>Dynamic Programming & Core Skill Guidance throughout the course</li>
                        <li>Start-up & Idea Innovation Lab for Career & Professional Growth</li>
                        </ul>
               </div>
            </div>

            <div className=' flex flex-col gap-10 mt-5 ' >
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Prospects of the Course</h4>
                        <ul className=' list-disc text-justify ' >
                        <li>Hotel Management</li>
                        <li>Tourism Industry</li>
                        <li>Catering Service</li>
                        <li>Management</li>
                        <li>Retail Management</li>
                        <li>Event Management Companies</li>
                        </ul>
               </div>
            </div>

            <div className=' flex flex-col gap-10 mt-5 mb-[100px] ' >
               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Options</h4>
                        <ul className=' list-disc text-justify ' >
                        <li>Hotel Manager</li>
                        <li>Restaurant Manager</li>
                        <li>Bartender</li>
                        <li>Chef</li>
                        <li>Front office Manager</li>
                        <li>Housekeeping Manager</li>
                        <li>Event Manager</li>
                        <li>Marketing Executive</li>
                        <li>Human Resource Executive</li>
                        <li>Sales Executive</li>
                        <li>KST Manager</li>
                        <li>F&B Controller</li>
                        <li>Guest House Manager</li>
                        </ul>
               </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default HotelManagement