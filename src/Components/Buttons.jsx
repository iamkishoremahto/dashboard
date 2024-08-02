
import { useRef, useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'
import { IoMdLogOut } from "react-icons/io";

function Button1({ icon , onClick}) {
  return (
    <button className="  text-[25px] p-3 rounded-full bg-neutral-100 text-neutral-500 dark:text-white dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all" onClick={onClick && ''}>{ icon }</button>
  )
}

function LogoutBtn(){
  return <>
  <button className=" text-gray-500 dark:text-indigo-100  transition-all hover:text-indigo-500 py-3 text-[35px] flex flex-items justify-center w-full">
  <IoMdLogOut />
  </button>
  </>
}

function MenuButton({ href, hrefText }){
  return (
    <>
      <NavLink to={ href } className={({ isActive }) =>(
      ` transition-all text-[35px] relative py-2 ${isActive ? 'text-indigo-500': ' dark:text-indigo-100 text-gray-500'} hover:text-indigo-500 w-full flex items-center justify-center 
      
      
      before:context[]
      before:absolute
      lg:before:h-full
      lg:before:w-[5px]

      before:left-0
      before:transition-all
      before:bg-indigo-500
      before:opacity-0
      hover:before:opacity-100
      ${isActive ? 'before:opacity-100':'before:opacity-0'}

      
      `)
      }>
      { hrefText }
      </NavLink>
    
    </>
  )
}

function ThemeModeSwitch() {

  const checkBoxField = useRef();

  const [checkbox, setCheckbox] = useState(true);

  const updateClass = () =>{
    setCheckbox((state) => !state)
    const body = document.querySelector('body');
    console.log(body)
    if(checkbox){
      body.classList.add('dark');
    }
    else{
      body.classList.remove('dark');
    }
  }
  
 
  
  return (
    <label htmlFor="switch" onClick={ updateClass }  className={` relative cursor-pointer ${checkbox?'bg-indigo-500':'bg-neutral-600'}  transition-all h-[30px] w-[50px] rounded-[35px] `}>
      <input type="checkbox" onChange={() =>{setCheckbox((state) => !state)}} id="switch" ref={checkBoxField} className="w-0 h-0 opacity-0" />
      <span className={`slider absolute top-[50%]  transition-all ${checkbox?'left-[40%]':'left-[0%]'}   translate-y-[-50%] mx-1  rounded-full  min-h-[20px] min-w-[20px] bg-white`}></span>
    </label>
  )
}

export { Button1,ThemeModeSwitch, MenuButton, LogoutBtn } 
