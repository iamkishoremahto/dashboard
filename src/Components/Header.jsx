
import { Button1, ThemeModeSwitch } from "./Buttons"
import { MdOutlineEmail, MdNotificationsNone } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import NavbarMob from "./NavbarMob";
import { useThemeStore } from  '../Store/useStore'

export default function Header() {

  // const [toggleMenu , setToggleMenu]= useState(false);
  const {toggleMenu, setToggleMenu} = useThemeStore()
  
  return (
    <div className=" dark:bg-neutral-800 flex relative flex-col-reverse gap-5 md:gap-0 md:flex-row min-h-[100px] w-full items-center justify-between p-5 border-b dark:border-neutral-800 border-gray-200">
      <div className="search flex flex-row items-center lg:justify-between justify-evenly gap-2 w-full">
          <div  className="lg:hidden flex items-center justify-center">
          <img onClick = { () =>{setToggleMenu((state) => !state)} } className="max-h-[40px] lg:max-h-[60px]" src="\images\logo.png" alt="" />
          </div>
        <div className=" flex relative items-center">
          <input type="text" placeholder="Search" className=" max-w-[270px]  text-[20px] pl-11 text-black dark:text-white rounded-lg placeholder:text-gray-400  bg-indigo-50 dark:bg-neutral-700  py-2" />
          <span className=" absolute dark:text-white text-gray-400 text-[30px] px-2"><IoIosSearch /></span>
        </div>
      <NavbarMob toggleMenu = { toggleMenu } setToggleMenu = {setToggleMenu} />

      </div>
      <div className="profile">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5">

            <ThemeModeSwitch />
            <Button1 icon={<MdOutlineEmail />} />
            <Button1 icon={<IoSettingsOutline />} />
            <Button1 icon={<MdNotificationsNone />} />

          </div>
          <div>
            <img className=" max-h-[60px] rounded-full" src="/images/profilePic.jpeg" alt="pic" />
          </div>
        </div>


      </div>

    </div>
  )
}
