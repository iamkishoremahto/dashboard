
import SectionLayout from "../../../Components/SectionLayout"
import LinkCard from "../../../Components/LinkCard"
import { MdMyLocation } from "react-icons/md";
import { PiHamburgerBold } from "react-icons/pi";
import { BiDish } from "react-icons/bi";

export default function Section2() {
  return (
    <>
    <SectionLayout>

        <div>
            graph
        </div>
        <div className="w-full p-3 ">
            <div className="flex  gap-5 flex-col p-5 rounded-lg shadow-md w-full  bg-indigo-50 text-black dark:text-white dark:bg-neutral-800">
                <LinkCard 
                icon = {<MdMyLocation />}
                title = {'Goals'}
                icon_bg_color = {'bg-red-400'}
                icon_text_color = {'text-red-400'}
                link = {'/'}
                />

                <LinkCard 
                icon = {<PiHamburgerBold />}
                title = {'Popular Dishes'}
                icon_bg_color = {'bg-blue-400'}
                icon_text_color = {'text-blue-400'}
                link = {'/'}
                />  
                <LinkCard 
                icon = {<BiDish />}
                title = {'Menus'}
                icon_bg_color = {'bg-blue-500'}
                icon_text_color = {'text-blue-500'}
                link = {'/'}
                />  

                {/* <LinkCard />
                <LinkCard /> */}
            </div>
        </div>

    </SectionLayout>
    </>
  )
}
