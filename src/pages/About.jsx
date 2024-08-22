import React from 'react'
import Footer from '../components/Footer'
import SubFooter from '../components/SubFooter'
import Img from "../assets/maya.jpg"

const stats = [
    { id: 1, name: 'Highest Package', value: '43.5 Lakh' },
    { id: 2, name: 'Average Package', value: '5.48 Lakh' },
    { id: 3, name: 'Years of Legacy', value: '14' },
  ]

const About = () => {
  return (
    <div className=' w-full relative ' >
    <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight mt-[100px] md:mt-[200px] font-bold text-center `}>About Us</h2>
    <div className=' w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-[80px] mt-[50px] ' >
        <img src={Img} />
        <p className=' text-justify ' >As MDU transforms into Maya Devi University, it brings with it a proud legacy of close to two decades. It will be built around its core values based on academic excellence, diversity and mutual respect, shared governance, social conscience, environmental responsibility, and more. Being an autonomous university also opens an array of opportunities. As Maya Devi University  it finds itself on a stronger global platform that will expand its international reach. In fact, it will be better placed to forge collaborations and stronger bonds with National and International universities of repute. It will result in student and faculty exchange programs that enhance the learning experience. Students of Maya Devi  University can also expect a more robust curriculum with the latest technological And managerial inputs, as it is now able to streamline and synchronize academic activities across all courses. As an autonomous university, it can exercise more flexibility in setting higher standards for admission and performance evaluation. Maya Devi University is an auspicious new beginning; not just for students but for the entire state too.</p>
    </div>
    <div className=" py-24 sm:py-32 font-poppins ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className=" bg-[#249138] px-10 py-8 rounded-lg mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base font-semibold leading-7 text-gray-100">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-50 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    <SubFooter/>
    <Footer/>
    </div>
  )
}

export default About