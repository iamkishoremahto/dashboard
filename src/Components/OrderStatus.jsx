
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
export default function OrderStatus({ status, title, count, percentage, icon, bg_icon_color, icon_color }){
    
    return <>
    <div className=" rounded-lg h-[270px] w-[288px] flex flex-col justify-between bg-neutral-800">
        <div className="p-6 flex flex-col gap-2 ">
            <div className={` ${icon_color} ${bg_icon_color} text-[35px] rounded-lg bg-opacity-15 h-[60px] w-[60px]  flex items-center justify-center`}>
                {icon}
            </div>
            <p className=" text-[20px] capitalize font-semibold">{title}</p>
        </div>
        <div className="flex  items-center justify-between p-3">
            <div>
                <h1 className=" text-[65px] font-bold">{ count} </h1>
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