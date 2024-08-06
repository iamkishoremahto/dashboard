
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
export default function OrderStatus({ status, title, count, percentage, icon, bg_icon_color, icon_color }){
    
    return <>
    <div className=" shadow-md rounded-lg md:h-[200px] md:w-[300px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px]  h-[200px] w-full flex flex-col justify-between dark:bg-neutral-800 bg-indigo-50 ">
        <div className="p-3 flex flex-col gap-2 ">
            <div className={` ${icon_color} ${bg_icon_color} text-[35px] rounded-lg bg-opacity-15 h-[60px] w-[60px]  flex items-center justify-center`}>
                {icon}
            </div>
            <p className=" text-[20px] capitalize font-semibold dark:text-white text-black">{title}</p>
        </div>
        <div className="flex  items-center  justify-between p-3">
            <div>
                <h1 className=" text-[30px] font-bold text-black dark:text-white">{ count} </h1>
            </div>
            <div>
                <div className={`flex text-[28px] items-start ${status ? "text-green-400":"text-red-400"}`}>
                    <span>{status?<FaCaretUp />:<FaCaretDown />}</span>
                    <span>{ percentage } %</span>
                </div>
            </div>
        </div>
    </div>
    </>
}