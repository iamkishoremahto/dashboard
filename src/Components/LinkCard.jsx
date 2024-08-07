
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";

export default function LinkCard({ icon, title, icon_bg_color, icon_text_color, link}){
    return (
        <>
        <Link className=" flex  items-center justify-between w-full" to={link}>
            <div className=" flex items-center gap-3">
                <div className={`icon text-[30px] xl:text-[40px] p-5 rounded-full ${icon_bg_color} bg-opacity-15 ${icon_text_color}`}>
                    {icon}
                </div>
                <p className=" xl:text-[25px] text-[18px] font-bold">{title}</p>

            </div>
           
            <div>
                <div className=" xl:text-[30px] text-[20px] p-2 dark:bg-neutral-600 bg-indigo-100 bg-opacity-55  rounded-full">
                    <MdOutlineKeyboardArrowRight />
                </div>
            </div>
        </Link>
        </>
    )
}