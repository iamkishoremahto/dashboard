
import SectionLayout from "../../../Components/SectionLayout"
import LinkCard from "../../../Components/LinkCard"
import { MdMyLocation } from "react-icons/md";
import { PiHamburgerBold } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import BarChart from "../../../Components/ProfitChart";
import {useProfitStore} from "../../../Store/useStore"
import { useEffect } from "react"
import {Weekly , Monthly, Yearly} from  "../../../assets/ProfitData"


export default function Section2() {

  const { data, setData } = useProfitStore()

  const handleChartData = (e) => {
    let targetData = e.target.value;
    if(targetData === 'Weekly'){
      setData(Weekly)
    }
    else if(targetData === 'Monthly'){
      setData(Monthly)
    }
    else if( targetData === 'Yearly'){
      setData(Yearly)
    }
  }

  useEffect(() =>{
    setData(Weekly)
  },[])
  return (
    <>
    <SectionLayout>

        <div className=" h-[400px] md:h-[360px] relative p-5 flex items-center justify-center ">

            <div className=" text-black absolute top-10 right-10">
              <select onChange={handleChartData} name="data" className="rounded-full p-1 bg-indigo-50 border dark:bg-neutral-800 dark:text-white dark:border-neutral-500 px-3 border-indigo-400 text-[12px] ">
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <BarChart data = {data} />
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
