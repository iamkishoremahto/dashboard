import { MenuButton, LogoutBtn } from "./Buttons";
import { IoMdHome } from "react-icons/io";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";

import { useState } from 'react';


export default function NavbarMob({toggleMenu, setToggleMenu}) {
  

  return (
    <div className={` transition-all lg:relative lg:hidden flex-row lg:flex-col justify-between  absolute left-0 top-[150px] md:top-[100px] max-h-[500px] ${toggleMenu?'h-auto':'h-0'} overflow-hidden dark:text-white bg-white dark:bg-neutral-800 lg:min-w-[100px] min-w-[100px]  lg:min-h-full`}>

      <div className="menu lg:h-full ">
          <div className=" flex lg:flex-col flex-col items-center  h-full w-full px-2 lg:px-0 gap-2 lg:gap-5">
            <MenuButton onClick = {() =>{setToggleMenu((state) => !state)}} href={'/'} hrefText = {<IoMdHome />} />
            <MenuButton onClick = {() =>{setToggleMenu((state) => !state)}} href={'/report'} hrefText = {<BsFileEarmarkBarGraph />} />
            <MenuButton onClick = {() =>{setToggleMenu((state) => !state)}} href={'/task'} hrefText = {<BiTask />} />
            <MenuButton onClick = {() =>{setToggleMenu((state) => !state)}} href={'/account'} hrefText = {<CiWallet />} />
            <MenuButton onClick = {() =>{setToggleMenu((state) => !state)}} href={'/stock'} hrefText = {<BsBagCheck />} />
          </div>
      </div>
      <div className="logoutWrapper  flex items-center px-2">
            <LogoutBtn />
      </div>
    </div>
  )
}
