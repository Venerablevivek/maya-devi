import React from 'react'
import Footer from '../../../components/Footer';
import PharmacyImg from "../../../assets/courses/engineering.jpeg";
import { Link } from 'react-router-dom';

const engineeringcourses = [
    {
        name: "Master of Technology in Data Science and Engineering",
        path: "mtech/data-science-engineering"
    },
    {
        name: "Master of Technology in Artificial Intelligence Machine Learning and Engineering",
        path: "mtech/ai-ml"
    },
    {
        name: "Master of Technology in Digital Communication Engineering",
        path: "mtech/digital-communication"
    },
    {
        name: "Bachelor of Technology in Computer Science and Engineering",
        path: "btech/computer-science-engineering"
    },
    {
        name: "Bachelor of Technology in Cloud Computing and Engineering",
        path: "btech/cloud-computing-engineering"
    },
    {
        name: "Bachelor of Technology in Data Science and Engineering",
        path: "btech/data-science-engineering"
    },
    {
        name: "Bachelor of Technology in Cyber Security and Engineering",
        path: "btech/cybersecurity-engineering"
    },
    {
        name: "Bachelor of Technology in Artificial Intelligence Machine Learning and Engineering",
        path: "btech/ai-ml"
    }
]

const civilcourses = [
    {
        name: "Master of Technology in Structural Engineering",
        path: "mtech/structural-engineering"
    },
    {
        name: "Master of Technology in Transportation Engineering",
        path: "mtech/transportation-engineering"
    },
    {
        name: "Bachelor of Technology in Civil Engineering",
        path: "btech/civil-engineering"
    },
]

const mechanicalCourses = [
    {
        name: "Master of Technology in Thermal Engineering",
        path: "mtech/thermal-engineering"
    },
    {
        name: "Master of Technology in Production Engineering",
        path: "mtech/production-engineering"
    },
    {
        name: "Master of Technology in Renewable Energy",
        path: "mtech/renewable-energy"
    },
    {
        name: "Master of Technology in Electric Vehicle  Technology",
        path: "mtech/electric-vehicle"
    },
    {
        name: "Bachelor of Technology in Mechanical Engineering",
        path: "btech/mechanical-engineering"
    },
    {
        name: "Bachelor of Technology in Mechatronics and Robotics",
        path: "btech/mechatronics-and-robotics"
    },
]


const Engineering = () => {
  return (
    <div className='  w-full relative font-poppins ' >
        <div className=' w-10/12 mx-auto mt-[100px] md:mt-[150px] flex flex-col gap-5 md:gap-5 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center  `}>School of Engineering</h2>
        <div className=' w-[20%] mx-auto h-[6px] bg-[#23376c] mt-[-10px] md:mt-[-20px] ' ></div>
            <div className=' flex flex-col md:flex-row gap-8 mb-10 md:gap-[80px] mt-5 justify-center md:justify-between ' >
                <img src={PharmacyImg} className=' md:w-[40%] rounded-lg ' />
                <div className=' flex flex-col gap-4 ' >
                    <h4 className=' font-bold text-xl md:text-3xl ' >About the Department</h4>
                    <p className=' text-justify md:text-lg ' >School of Engineering under Maya Devi University provides Science & Technology based Education that is required to develop high calibre Engineers suitable for Industry and Scientific Organization.
                    <br/> <br/>
                    The curriculum focuses on knowledge based course work integrated with skill development as a part of training. It equally helps in inculcating the scientific temper necessary for the Lifelong learning process.
                    <br/> <br/>
                    School of Engineering has three Departments viz. Computer Science & Engineering (CSE), Civil Engineering (CE), Mechanical Engineering (ME) with a range of specialisation in each department. Various educational programmes offered by School of Engineering include Under Graduate (UG), Post Graduate(PG).
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
                    <h4 className={` text-2xl font-semibold text-[#249138] `}>Department of Computer Science Engineering</h4>
                    <ul className=' list-decimal ' >
                        {
                            engineeringcourses.map((course,index)=>(
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
                    <h4 className={` text-2xl font-semibold text-[#249138] `}>Department of Civil Engineering</h4>
                    <ul className=' list-decimal ' >
                        {
                            civilcourses.map((course,index)=>(
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
                    <h4 className={` text-2xl font-semibold text-[#249138] `}>Department of Mechanical Engineering</h4>
                    <ul className=' list-decimal ' >
                        {
                            mechanicalCourses.map((course,index)=>(
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
                        <ul className=' list-disc ' >
                        <li>Industry-Relevant Curriculum designed by Core Academia & Renowned Industry Experts.</li>
                        <li>Renowned Domain Specific & Highly Rich Experienced Faculty.</li>
                        <li>State-of-the-art infrastructure including computer labs equipped with the latest software development tools.</li>
                        <li>Centre of Excellence in Specific Domain & Technology for Experiential Learning.</li>
                        <li>Continuous learning and skill enhancement through workshops, seminars, and guest lectures by industry experts.</li>
                        <li>Hands-On Learning through practical projects, workshops, apply their skills in real-world settings.</li>
                        <li>Live Industry Projects based Learning throughout the course.</li>
                        <li>Global Recognition and accreditation from reputable organizations and industry bodies.</li>
                        <li>LMS based Pedagogy and Innovative Classroom Teaching Methodology.</li>
                        <li>Choice Based Credit System (CBCS) Based Assessments and Evaluation.</li>
                        <li>Industry Collaborations and Internships.</li>
                        <li>Full-Time Industrial Internship in the last semester.</li>
                        <li>Entrepreneurship programs, incubation centres, mentorship, and industry insights to students.</li>

                        </ul>
               </div>

               <div className=' flex flex-col gap-2 ' >
                        <h4 className={` text-2xl font-semibold text-[#249138] `}>Career Options</h4>
                        <ul className=' list-disc ' >
                        <li>Cloud Computing Specialist</li>
                        <li>Data Scientist/Data Analyst</li>
                        <li>Artificial Intelligence/Machine Learning Engineer</li>
                        <li>Cybersecurity Analyst/Engineer</li>
                        <li>Software Developer/Engineer</li>
                        <li>Database Administrator</li>
                        <li>Network Engineer</li>
                        <li>IT Consultant</li>
                        <li>Systems Analyst</li>
                        <li>Web Developer</li>
                        <li>Software Engineer</li>

                        </ul>
               </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Engineering