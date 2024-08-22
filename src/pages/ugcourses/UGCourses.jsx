import React from 'react'
import Footer from '../../components/Footer'
import DiplomaImg from "../../assets/courses/diploma.jpg";
import { Link } from 'react-router-dom';

const ugCourses = [
    {
        name:'School of Engineering -  B.Tech',
        description:'School of Engineering under Maya Devi University provides Science & Technology based Education that is required to develop high calibre Engineers suitable for Industry.',
        path:'engineering'
    },
    {
        name:'School of Agriculture',
        description:'School of Agriculture at Maya Devi University is a dedicated centre for Research, Post Graduate and Undergraduate course.',
        path:'agriculture'
    },
    {
        name:'School of Hotel Management and Tourism',
        description:'Welcome to the esteemed School of Hotel Management and Tourism (SOHMT) at Maya Devi University, a premier institution renowned for its excellence in hotel management education within Dehradun.',
        path:'hotel-management-and-tourism'
    },
    {
        name:'School of Management and Commerce',
        description:'Our school prides itself on providing a dynamic and innovative learning environment that equips students with the knowledge and skills needed to excel in the ever-evolving world of business and commerce.',
        path:'commerce'
    },
    {
        name:'School of Sciences',
        description:'School of Sciences at the Maya Devi University is an exclusive hub for undergraduate, postgraduate, and research studies. It houses department of physics, chemistry, botany, zoology, mathematics, and environmental sciences.',
        path:'sciences'
    },
    {
        name:'School of Pharmacy',
        description:'It has established itself as a premier institute within a few years from its inception in 2019 with two years diploma (Diploma in Pharmacy) and four years Degree (Bachelor of Pharmacy) courses.',
        path:'pharmacy'
    }
]

const UGCourses = () => {
  return (
    <div className=' w-full relative font-poppins ' >
        <h2 className={` mb-4 text-4xl md:text-6xl tracking-tight font-bold text-center mt-[100px]  md:mt-[150px] `}>Undergraduate Courses</h2>
        <div className=' w-11/12 mx-auto mb-[50px] flex flex-col gap-10 ' >
            <div className=' flex flex-col gap-5 md:gap-[100px] md:flex-row justify-between items-center ' >
            <img src={DiplomaImg} className=' block w-[60%] mx-auto md:hidden ' />
                <img src={DiplomaImg} className=' hidden md:block ' />
                <p className=' text-justify ' >Maya Devi University offers a comprehensive range of undergraduate (UG) courses designed to provide students with a strong foundation in various disciplines. The university is committed to delivering high-quality education that blends theoretical knowledge with practical skills, ensuring students are well-prepared for their future careers.
                <br/> <br/>
                The UG programs at Maya Devi University span across key fields such as Technology, Science, Business Administration, Humanities, and more. These courses are carefully structured to meet industry standards, incorporating the latest advancements and trends. Whether you are pursuing a degree in Engineering, Computer Science, Biotechnology, or Business Administration, you will benefit from a curriculum that is both challenging and relevant.
                <br/> <br/>
                Students at Maya Devi University have access to state-of-the-art facilities, experienced faculty, and a vibrant campus life that fosters intellectual growth and personal development. The university places a strong emphasis on research, innovation, and critical thinking, equipping students with the skills needed to excel in their chosen fields.
                <br/> <br/>
                In addition to academic excellence, Maya Devi University offers robust placement support, with a dedicated team working tirelessly to connect students with top employers. Through industry partnerships and campus recruitment drives, the university ensures that its graduates are well-prepared to enter the job market with confidence.
                </p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] ' >
                {
                    ugCourses.map((course,index)=>(
                        <div key={index} className=' bg-[#249138] px-10 py-8 rounded-lg flex flex-col gap-4 justify-center items-center ' >
                            <p className=' text-white font-bold text-lg md:text-2xl text-center ' >{course.name}</p>
                            <p className=' text-white text-sm md:text-[16px] text-center ' >{course.description}</p>
                            <Link to={`/programmes/ug-courses/${course.path}`} onClick={() => window.scrollTo(0, 0)}  >
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

export default UGCourses