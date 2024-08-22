import React, { useState, useEffect } from 'react'
import MayaLogo from "../assets/maya.png";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import {Link} from "react-router-dom";
import MayaDoc from "../assets/Maya-devi.pdf";
import { DropDown } from './DropDown';
import { OurSchoolDropDown } from '../pages/ourschools/OurSchoolDropDown';
import { AdmissionDropDown } from '../pages/admissionpages/AdmissionDropDown';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () =>{
        setToggle(!toggle);
    }

    const [isMobile, setIsMobile] = useState(false)
 
    //choose the screen size 
    const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
    }

    // create an event listener
    useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    },[]);

  return (
   <div className=' relative z-50 ' >
     <div className=' fixed top-0 w-full flex bg-white justify-between md:justify-center shadow-xl gap-[50px] font-poppins ' >
        {/* logo container */}
        <div className=' px-8 py-4 flex items-center gap-3 ' >
            <img src={MayaLogo} className=' w-[100px] md:w-[390px] rounded-md ' />
        </div>
        {
            isMobile && (<>
            <div className={` mr-4 md:hidden flex items-center gap-2 cursor-pointer ${ toggle === true ? "hidden" : "block" }  `} 
        onClick={handleClick} >
            <RxHamburgerMenu className=' w-[25px] h-[25px] '  />
            <p>MENU</p>
        </div>
        <div className={` mr-4 md:hidden flex items-center gap-2 cursor-pointer ${ toggle === true ? "block" : "hidden" }  `} 
        onClick={handleClick} >
            <RxCross2 className=' w-[25px] h-[25px] '  />
            <p>Close</p>
        </div>
        <div className={` w-full flex flex-col gap-3  ${ toggle === true ? "block absolute top-[70px] bg-[#249138] px-5 py-3 justify-center items-center " : "hidden" }  `} >
            <div className=' md:bg-[#249138] uppercase rounded-bl-lg flex text-sm  justify-between items-center gap-5 px-4 py-2 text-white ' >
                <div className='flex flex-col md:flex-row items-center justify-between  gap-5 ' >
                <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)} className=" font-semibold transition-all duration-200 hover:text-yellow-300 "   >Contact Us</Link>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className=" font-semibold transition-all duration-200 hover:text-yellow-300 "   >Student Login</Link>
                    <a href={MayaDoc} download="MayaUGCApproval" target='_blank' className=" font-semibold transition-all duration-200 hover:text-yellow-300 "   >UGC Approval</a>
                    <Link to="/apply-now" onClick={() => window.scrollTo(0, 0)} className=" font-semibold transition-all duration-200 hover:text-yellow-300 "   >Apply Now</Link>
                    <p className='hidden md:block bg-yellow-300 px-2 py-1 text-black rounded-md font-[500] ' >+0135 – 2698602  <span className=' ml-2' >For Admission</span> </p>
                </div>
                <IoSearch className=' hidden md:block text-xl ' />
            </div>
            <div className=' flex flex-col md:flex-row justify-between items-center gap-2 px-4 py-2 ' >
                <div className=' text-white flex flex-col md:flex-row items-center justify-center md:justify-between  gap-5 font-semibold md:text-slate-600 ' >
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="transition-all duration-300 hover:text-[#249138] hover:border-b-[3px] hover:border-b-[#249138] "   >Home</Link>
                <Link to="/about-us" onClick={() => window.scrollTo(0, 0)} className="transition-all duration-300 hover:text-[#23376c] hover:border-b-[3px] hover:border-b-[#249138] "   >About Us</Link>
                    <p> <DropDown/></p>
                    <p>Our Schools</p>
                    <p>Admission</p>
                    <p>Placement</p>
                    <p>Maya @ Media</p>
                </div>
                <Link to="/apply-now" >
                    <button className=' mt-5 md:mt-0 bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] '
                    >Apply Now</button>
                </Link>
            </div>
        </div>
            </>)
        }
        {
            !isMobile && (   <div className={` w-full flex flex-col gap-3`} >
            <div className=' md:bg-[#249138] uppercase rounded-bl-lg flex text-sm  justify-between items-center gap-5 px-4 py-2 text-white ' >
                <div className='flex flex-col md:flex-row items-center justify-between gap-5 ' >
                    <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)} className=" font-semibold transition-all duration-200 hover:text-yellow-300 "   >Contact Us</Link>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className=" font-semibold transition-all duration-200 hover:text-yellow-300 "   >Student Login</Link>
                    <a href={MayaDoc} download="MayaUGCApproval" target='_blank' className=" font-semibold transition-all duration-200 hover:text-yellow-300 "   >UGC Approval</a>
                    <Link to="/apply-now" onClick={() => window.scrollTo(0, 0)} className=" font-semibold transition-all duration-200 hover:text-yellow-300 "   >Apply Now</Link>
                    <p className='hidden md:block bg-yellow-300 px-2 py-1 text-black rounded-md font-[500] ' >+0135 – 2698602  <span className=' ml-2' >For Admission</span> </p>
                </div>
                <IoSearch className=' hidden md:block text-xl ' />
            </div>
            <div className=' flex justify-between items-center gap-2 px-4 py-2 ' >
                <div className=' flex items-center md:justify-between text-md gap-5 font-semibold md:text-slate-600 ' >
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="transition-all duration-300 hover:text-[#249138] hover:border-b-[3px] hover:border-b-[#249138] "   >Home</Link>
                <Link to="/about-us" onClick={() => window.scrollTo(0, 0)} className="transition-all duration-300 hover:text-[#249138] hover:border-b-[3px] hover:border-b-[#249138] "   >About Us</Link>
                    <p>
                        <DropDown/>
                    </p>
                    <p>
                        Our Schools
                        {/* <OurSchoolDropDown/> */}
                    </p>
                    <p>
                        Admission
                        {/* <AdmissionDropDown/> */}
                    </p>
                    <p>Placement</p>
                    <p>Maya @ Media</p>
                </div>
                <Link to="/apply-now" >
                    <button className=' mt-5 md:mt-0 bg-[#23376c] px-4 py-2 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] '
                    >Apply Now</button>
                </Link>
            </div>
        </div>)
        }
    </div>
   </div>
  )
}

export default Header