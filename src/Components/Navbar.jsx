import { MenuButton, LogoutBtn } from "./Buttons";
import { IoMdHome } from "react-icons/io";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";


export default function Navbar() {
  return (
    <div className=" lg:relative lg:flex flex-row lg:flex-col justify-between  absolute left-0 hidden dark:text-white bg-white dark:bg-neutral-800 lg:min-w-[100px] min-w-full min-h-[100px] border lg:min-h-full">
      <div className=" flex items-center lg:p-5 p-2 justify-center" >
        <img className="max-h-[40px] lg:max-h-[40px]" src="\images\logo.png" alt="" />
      </div>
      <div className="menu lg:h-full ">
          <div className=" flex lg:flex-col flex-row items-center  h-full w-full px-2 lg:px-0 gap-2 lg:gap-5">
            <MenuButton href={'/'} hrefText = {<IoMdHome />} />
            <MenuButton href={'/report'} hrefText = {<BsFileEarmarkBarGraph />} />
            <MenuButton href={'/task'} hrefText = {<BiTask />} />
            <MenuButton href={'/account'} hrefText = {<CiWallet />} />
            <MenuButton href={'/stock'} hrefText = {<BsBagCheck />} />
          </div>
      </div>
      <div className="logoutWrapper  flex items-center px-2">
            <LogoutBtn />
      </div>
    </div>
  )
}
