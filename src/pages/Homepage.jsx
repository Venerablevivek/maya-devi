import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Programs from '../components/Programs'
import Difference from '../components/Difference'
import Belong from '../components/Belong'
import NumberAnimation from '../components/numbers/NumberAnimation'
import UpcomingEvents from '../components/UpcomingEvents'
import News from '../components/News'
import SubFooter from '../components/SubFooter'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className='w-full h-full flex flex-col font-poppins relative ' >
         <HeroSection/>
          <AboutSection/>
          <Programs/>
          <Difference/>
          <Belong/>
          <NumberAnimation/>
          <UpcomingEvents/>
          <News/>
          <SubFooter/>
          <Footer/>
    </div>
  )
}

export default Homepage