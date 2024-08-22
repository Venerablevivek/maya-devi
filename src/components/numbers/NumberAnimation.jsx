import React, {useEffect, useState } from 'react';
import './NumberAnimation.css';
import {FaUtensils, FaSmileBeam,FaList,FaStar} from 'react-icons/fa';

const CountUpAnimation = ({
    iconComponent,
    initialValue,
    targetValue,
    text,
}) => {
    const [count, setCount] = useState(initialValue);
    const duration = 8000; // 10 seconds

    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(
            duration / (targetValue - initialValue));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);

        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);

    return (
        <div className=" flex flex-col items-center justify-center font-poetsenoneregular ">
            {/* <div className="icon">{iconComponent}</div> */}
            <span className=" text-[56px] font-bold text-[#23376c] ">{count}%</span>
            <span className=" text-center ">{text}</span>
        </div>
    );
};

const NumberAnimation = () => {
  return (
    <div>
         <div className='mx-auto flex flex-col gap-5' >
         <div className=' w-8/12 mx-auto flex flex-col gap-10 py-10 px-10 items-center justify-center font-poppins  ' >
         <h2 className=' text-[#24933c] text-center font-bold text-[42px] uppercase ' >Maya Devi Strong</h2>
            <div className=' w-[15%] mx-auto h-[4px] bg-[#23376c] mt-[-15px] ' ></div>

        </div>
        <div className=" w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                <CountUpAnimation
                    iconComponent={<FaUtensils />}
                    initialValue={0}
                    targetValue={95}
                    text="of alums surveyed feel prepared for career expectations"
                />
                <CountUpAnimation
                    iconComponent={<FaSmileBeam />}
                    initialValue={0}
                    targetValue={100}
                    text="NCLEX first-time pass rate for May '23 BSN graduates in WI"
                />
                <CountUpAnimation
                    iconComponent={<FaList />}
                    initialValue={0}
                    targetValue={100}
                    text="internship and clinical placement rate"
                />
                <CountUpAnimation
                    iconComponent={<FaStar />}
                    initialValue={0}
                    targetValue={93}
                    text="of undergraduates receive financial aid"
                />
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
        </div>

    </div>
  )
}

export default NumberAnimation