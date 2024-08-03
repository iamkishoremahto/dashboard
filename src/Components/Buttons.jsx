/* eslint-disable no-unused-vars */

import { useRef, useState, useEffect } from "react"

// eslint-disable-next-line react/prop-types
function Button1({ icon , onClick}) {
  return (
    <button className="  text-[25px] p-3 rounded-full bg-neutral-100 text-neutral-500 dark:text-white dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all" onClick={onClick && ''}>{ icon }</button>
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

export { Button1,ThemeModeSwitch } 
