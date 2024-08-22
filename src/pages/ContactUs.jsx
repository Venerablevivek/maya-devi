import React from 'react'
import Footer from "../components/Footer";
import MayaImg from "../assets/maya-bg.png";

const ContactUs = () => {
  return (
    <div className=' w-full relative ' >
        <img src={MayaImg} className='mt-[50px] md:mt-[100px] ' />
        <div className=' w-11/12 mx-auto font-poppins mb-10 ' >
        <h2 className={` mb-4 text-2xl md:text-6xl tracking-tight font-bold text-center mt-5 md:mt-10 `}>Contact Us</h2>
    {/* 436850 */}
    <p className={`mb-8 lg:mb-10 font-light text-center text-[#23376c] sm:text-xl `}>We'd love to hear from you !</p>
    <div className=' md:flex-row flex-col flex justify-between items-center gap-[100px] mt-5 ' > 
    <div className=" w-[80%] md:w-[40%] flex flex-col gap-10 " >
          <div className=" flex flex-col  gap-1 " >
              <p className={`sm:text-xl font-bold `} >Address:-</p>
              <p className={` text-lg font-semibold `} >NH-72, Near Hotel The Competent Palace Chakrata Road, Selaqui, Dehradun (Uttarakhand) -248011</p>
          </div>
          <div className=" flex flex-col gap-1 " >
              <p className={`sm:text-xl font-bold `} >Email:-</p>
              <p className={` text-lg font-semibold `} >info@maya.edu.in</p>
          </div>
          <div className=" flex flex-col gap-1 " >
              <p className={`sm:text-xl font-bold `} >Phone:-</p>
              <p className={` text-lg font-semibold `} >Call us 0135 – 2698602</p>
          </div>
      </div>
    <section className=' w-[100%] md:w-[60%] ' >
            <div class="py-8 lg:py-16 px-4 mx-auto">
    <form class="space-y-2">
          <div>
            <label for="name" className={`block mb-2 text-sm font-semibold `}> Name</label>
            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
             outline-none " placeholder="Ram Sharma" required />
        </div>
        <div>
            <label for="email" className={`block mb-2 text-sm font-semibold `}> Email</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
             outline-none " placeholder="xyz@gmail.com" required />
        </div>
        <div>
            <label for="subject" className={`block mb-2 text-sm font-semibold `}>Subject</label>
            <input type="text" id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light
             outline-none " placeholder="Enter your Subject" required />
        </div>
        <div>
            <label for="yourmessage" className={`block mb-2 text-sm font-semibold `}>Your Message</label>
            <textarea type="text" id="yourmessage" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light outline-none " placeholder="Enter your message" required rows={5} ></textarea>
        </div>
        <div className=' flex items-center justify-center ' >
          <button type="submit" className=" mt-5 font-semibold px-4 py-2 rounded-lg bg-[#436850] transition-all duration-300
              border-2 text-white cursor-pointer hover:bg-[#12372A] ">Send message</button>
        </div>
    </form>
        </div>
      </section>
    </div>
  </div>
  <Footer/>
    </div>
  )
}

export default ContactUs