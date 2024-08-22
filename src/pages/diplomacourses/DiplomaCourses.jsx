import React from 'react'
import Footer from '../../components/Footer'
import DiplomaImg from "../../assets/courses/diploma.jpg";
import { Link } from 'react-router-dom';

const diplomacourses = [
    {
        name:'Diploma in Pharmacy',
        description:'School of Pharmacy is running a two year full time diploma course divided into two annual sessions approved by Pharmacy Council of India, New Delhi.',
        path:'diploma-in-pharmacy'
    },
    {
        name:'Diploma in Front Office',
        description:'The Diploma in Front Office is an extensive 1 ½ year program aimed at equipping students for fulfilling careers in the hospitality sectors.',
        path:'diploma-in-front-office'
    },
    {
        name:'Diploma in Food Production',
        description:'The Diploma in Food Production is an extensive 1 ½ year program aimed at equipping students for fulfilling careers in the hospitality sectors.',
        path:'diploma-in-food-production'
    },
    {
        name:'Diploma in Housekeeping',
        description:'The Diploma in Bakery & Confectionary is an extensive 1 ½ year program aimed at equipping students for fulfilling careers in the hospitality sectors.',
        path:'diploma-in-housekeeping'
    },
    {
        name:'Diploma in Food & Beverage Service & Bar Tending',
        description:'The Diploma in F&B Service and Bartending and an extensive 1 ½ year program aimed at equipping students for fulfilling careers in the hospitality sector.',
        path:'diploma-in-food-and-beverage'
    },
    {
        name:'Diploma in Aviation Management',
        description:'The Diploma in Aviation Management program at Maya Devi University is designed to equip students with the knowledge and skills necessary to thrive in the dynamic aviation industry.',
        path:'diploma-in-aviation-management'
    },
    {
        name:'Diploma in Confectionary',
        description:'The Diploma in Bakery and  Confectionary is an extensive 1 ½ year program aimed at equipping students for fulfilling careers in the hospitality sectors.',
        path:'diploma-in-confectionary'
    },
]

const DiplomaCourses = () => {
  return (
    <div className=' w-full relative font-poppins ' >
        <h2 className={` mb-4 text-4xl md:text-6xl tracking-tight font-bold text-center mt-[100px]  md:mt-[150px] `}>Diploma Courses</h2>
        <div className=' w-11/12 mx-auto mb-[50px] flex flex-col gap-10 ' >
            <div className=' flex flex-col gap-5 md:gap-[100px] md:flex-row justify-between items-center ' >
            <img src={DiplomaImg} className=' block w-[60%] mx-auto md:hidden ' />
                <img src={DiplomaImg} className=' hidden md:block ' />
                <p className=' text-justify ' >Maya Devi University offers a wide array of diploma courses designed to equip students with practical skills and in-depth knowledge in various fields. These diploma programs are tailored to meet the demands of the industry, ensuring that graduates are well-prepared for the job market. The university focuses on providing a hands-on learning experience, combining theoretical knowledge with real-world applications.
                <br/><br/>
                The diploma courses at Maya Devi University cover a broad spectrum of disciplines, including Business Management, Information Technology, Hospitality Management, Healthcare, Engineering, and more. Each program is designed by industry experts, ensuring that the curriculum is up-to-date with the latest trends and technologies. This approach not only enhances the educational experience but also improves the employability of graduates.
                <br/><br/>
                Students enrolled in these diploma programs benefit from state-of-the-art facilities, experienced faculty, and a supportive learning environment. Maya Devi University also places a strong emphasis on placement support, helping students secure positions in leading companies across various sectors. Through partnerships with industry leaders and a dedicated placement cell, the university ensures that its graduates are well-positioned to start successful careers. Whether you are looking to enhance your current skills or embark on a new career path, Maya Devi University's diploma courses provide the education and opportunities you need to succeed.</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] ' >
                {
                    diplomacourses.map((course,index)=>(
                        <div key={index} className=' bg-[#249138] px-10 py-8 rounded-lg flex flex-col gap-4 justify-center items-center ' >
                            <p className=' text-white font-bold text-lg md:text-2xl text-center ' >{course.name}</p>
                            <p className=' text-white text-sm md:text-[16px] text-center ' >{course.description}</p>
                            <Link to={`/programmes/diploma-courses/${course.path}`} onClick={() => window.scrollTo(0, 0)}  >
                                <button className=' mt-5 md:mt-8 bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] '
                                >Read More</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default DiplomaCourses