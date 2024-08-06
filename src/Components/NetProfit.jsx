import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useThemeStore} from  '../Store/useStore';
import { useEffect } from "react";


export default function NetProfit({ totalProfit, percentage, profitPercentage, isProfit }) {
    const {toggleMenu} = useThemeStore()
    
   
    return (
        <>
            <div className=" dark:bg-neutral-800 shadow-md bg-indigo-50 text-black dark:text-white rounded-lg w-full p-5 min-w-full lg:min-h-[250px] lg:max-h-[250px] flex items-center justify-between">

                <div className=" flex items-start flex-col   p-2">
                    <div>
                        <p className=" font-bold text-[20px]">Net Profit</p>
                    </div>
                    <div className="w-full  flex flex-col gap-5">
                        <div>
                            <h1 className=" text-[40px] lg:text-[60px] font-bold">
                                ${totalProfit}
                            </h1>
                        </div>
                        <div>
                            <p className={`flex text-[20px] lg:text-[30px] font-semibold items-center ${isProfit ? 'text-green-500' : 'text-red-500'}`}>
                                <span>
                                {isProfit?<FaCaretUp />:<FaCaretDown />}
                                </span>
                                {profitPercentage}%
                            </p>
                        </div>
                    </div>

                </div>

                <div className=" w-[250px] flex items-center justify-center">
                    <div className=" h-[130px] w-[130px] lg:h-[170px] lg:w-[170px]  relative">
                        <CircularProgressbar value={percentage}
                            styles={
                                buildStyles({
                                    pathColor: '#818cf8',
                                    trailColor: toggleMenu ? '#e0e7ff':'#334155',
                                    pathTransitionDuration: 0.5,



                                })
                            }
                        />
                        <div className=" absolute flex flex-col items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h1 className=" text-[25px] lg:text-[40px] font-bold">{percentage}%</h1>
                            <p className="flex text-[8px] lg:text-[10px] flex-col items-center"><span>Goal's</span><span>Completed</span></p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}