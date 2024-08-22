import React from 'react'
import Footer from '../components/Footer'
import ApplyImg from "../assets/appl.jpg"
import AmazonImg from "../assets/amazon.jpg";
import IbmImg from "../assets/ibm.jpg";
import CiscoIMG from "../assets/cicsco.jpg";
import ItImg from "../assets/It.jpg";
import TataIMG from "../assets/tata.jpg";
import GodrejImg from "../assets/godrej.jpg";
import SubFooter from '../components/SubFooter';

const stats = [
    { id: 1, name: 'Highest Package', value: '43.5 Lakh' },
    { id: 2, name: 'Average Package', value: '5.48 Lakh' },
    { id: 3, name: 'Years of Legacy', value: '14' },
  ]

const ApplyNow = () => {
  return (
    <div className=' w-full relative' >
        <div>
            <img src={ApplyImg} className=' mb-[30px] mt-[50px] md:mt-[100px] ' />
        </div>
        <div className=' w-10/12 mx-auto flex flex-col gap-5 mb-[50px] ' >
            <h2 className={` mb-4 text-2xl md:text-5xl tracking-tight font-bold text-center mt-5 md:mt-10 uppercase `}>Ready for a bright future?</h2>
            <div className=' w-[15%] mx-auto h-[4px] bg-[#23376c] mt-[-10px] md:mt-[-5px] ' ></div>
            <p className=' text-center text-xl mt-5 md:mt-8 ' >Complete your <strong>online application</strong> and begin your journey to a college where you truly belong.</p>
            <p className=' text-center md:mt-[-10px] text-lg text-[#23376c] '>Simply create an account or log in to continue a previous application.</p>

            <div className="flex items-center justify-center w-full h-full mt-10 ">
          <div className=' w-full mx-auto flex justify-center rounded-md ' >
          {/* <img src={formImg} className=' w-[36%] rounded-tl-md rounded-bl-md ' loading='lazy' /> */}
          <div className="p-6 bg-white rounded-md border-gray-200 border-2  ">
            <div className=' flex flex-col items-center justify-center mb-4 ' >
                <div className=' flex items-center gap-1 mb-2 ' >
                <img src="https://fancytailwind.com/static/avatar-1-7bc2ffc3e63774cda6a41a4869604ebb.png" className=' w-[30px] ' loading='lazy' />
                <img src="https://fancytailwind.com/static/avatar-2-a0aa9c1384e34144e1a683fed8612642.png" className=' w-[30px] ' loading='lazy' />
                <img src="https://fancytailwind.com/static/avatar-3-005377e606b29854c3ff1c525ddd8ec4.png" className=' w-[30px] ' loading='lazy'/>
                </div>
            <h2 className="mb-2 text-2xl font-semibold ">Registrations Open 2024</h2>
            </div>
            <form >
             <div className='flex flex-col text-sm gap-2 ' >
             <div className=' flex items-center gap-5 ' >
                <label className=" text-gray-700 font-semibold " htmlFor="name">
                    Name:
                </label>
                <input
                    className=" w-full px-2 py-1 border border-gray-300 rounded-md outline-none "
                    type="text"
                    placeholder="Enter Your Name*"
                    id="name"
                    name="name"
                    required
                />
             </div>
             <div className=' flex items-center gap-5 ' >
                <label className=" text-gray-700 font-semibold " htmlFor="email">
                    Email:
                </label>
                <input
                    className=" w-full px-2 py-1 border border-gray-300 rounded-md outline-none "
                    type="email"
                    placeholder="Enter Your Email*"
                    id="email"
                    name="email"
                    required
                />
             </div>

             <div className=' flex items-center gap-3 ' >
                <label className=" text-gray-700 font-semibold " htmlFor="mobile">
                    Mobile:
                </label>
                <input
                    className=" w-full px-2 py-1 border border-gray-300 rounded-md outline-none "
                    type="number"
                    placeholder="Enter Your Mobile Number*"
                    id="mobile"
                    name="mobile"
                    required
                />
             </div>

             <div className=' flex items-center gap-5 ' >
                <label className=" text-gray-700 font-semibold " htmlFor="state">
                    State:
                </label>
                <input
                    className=" w-full px-2 py-1 border border-gray-300 rounded-md outline-none "
                    type="text"
                    placeholder="Enter Your State*"
                    id="state"
                    name="state"
                    required
                />
             </div>

             <div className=' flex items-center gap-2 ' >
                <label className=" text-gray-700 font-semibold " htmlFor="course">
                    Course:
                </label>
                <input
                    className=" w-full px-2 py-1 border border-gray-300 rounded-md outline-none "
                    type="text"
                    placeholder="Enter Course Appyling for* "
                    id="course"
                    name="course"
                    required
                />
             </div>
             </div>
        
        <div class=" mt-5 relative group cursor-pointer">
            <div
                class="absolute -inset-1 bg-gradient-to-r from-green-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                class="relative px-4 py-3 bg-white ring-1 ring-green-900/5 rounded-lg leading-none flex items-center justify-center text-green-700 font-semibold ">
                <button
                type="submit"
              >
                Submit
              </button>
            </div>
        </div>

            </form>

            {/* <button
              className=" absolute px-1  py-1 top-[21%] right-[16%] text-white bg-red-500 rounded-full hover:bg-red-400 text-md font-bold "
              onClick={()=>setShowPopup(!showPopup)}
            >
              <RxCross2 />
            </button> */}
          </div>
          </div>
        </div>

            <div className=' mt-[50px] flex flex-col md:flex-row gap-10 md:gap-[60px] justify-between items-center ' >
                <div className=' md:w-[50%] flex flex-col gap-3 ' >
                    <h4 className=' text-[#249138] text-2xl font-semibold ' >Undergraduate, Degree Completion, and Graduate Programs</h4>
                    <p className=' text-xl ' >For all programs other than the DEMSN, please click the button below to complete your free application.</p>
                    <button className=' self-start bg-[#23376c] px-8 py-4 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] uppercase '
                    >Click here to Apply</button>
                </div>
                <div className=' md:w-[50%] flex flex-col gap-3 ' >
                    <h4 className=' text-[#249138] text-2xl font-semibold' >Direct Entry Master of Science in Nursing Programs</h4>
                    <p className=' text-xl ' >For the DEMSN programs in Milwaukee, WI and Mesa, AZ, please click the button below to complete your application.</p>
                    <button className=' self-start bg-[#23376c] px-8 py-4 text-white rounded-full font-semibold transition-all duration-200 hover:bg-[#4865b3] uppercase '
                    >Click here to Apply - DEMSN</button>
                </div>
            </div>

            <div className=' flex flex-col items-center justify-center gap-2 mt-5 ' >
                    <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
                    <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
                    <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
                    <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
                    <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
                    <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
                    <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
                    <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
                    <div className='bg-[#23376c] w-[5px] h-[5px] rounded-full ' ></div>
            </div>

            <div className=' mt-[50px]' >
            <h2 className={` mb-4 text-[#249138] text-2xl md:text-4xl font-bold text-center mt-5 md:mt-10 uppercase `}>Application Stages</h2>
                <ul className=' list-decimal flex flex-col gap-3 text-lg mt-5 md:mt-10 ' >
                    <li>
                    Please fill in your personal details in the form above and register as a user. Once registered, you can use your Mobile Number to Login.
                    </li>
                    <li>Fill your academic details and upload your documents.</li>
                    <li>Complete your application form and pay the application fee.</li>
                    <li>We will send you confirmation email for Interview Date subject to availability.</li>
                </ul>
            </div>

            <div className=' mt-[50px]' >
            <h2 className={` mb-4 text-[#249138] text-2xl md:text-4xl font-bold text-center mt-5 md:mt-10 uppercase `}>Placement Stats</h2>
            <div className=" py-5 font-poppins ">
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
            </div>

            <div className=' mt-[50px]' >
            <h2 className={` mb-5 md:mb-[80px] text-[#249138] text-2xl md:text-4xl font-bold text-center mt-5 md:mt-10 uppercase `}>Placement Partners</h2>
              <div className=' w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 ' >
                    <img src={AmazonImg} className=' w-[250px] ' />
                    <img src={CiscoIMG} className=' w-[250px] ' />
                    <img src={IbmImg} className=' w-[250px] ' />
                    <img src={TataIMG} className=' w-[250px] ' />
                    <img src={ItImg} className=' w-[250px] ' />
                    <img src={GodrejImg} className=' w-[250px] ' />
              </div>
            </div>


        </div>
        <SubFooter/>
        <Footer/>
    </div>
  )
}

export default ApplyNow