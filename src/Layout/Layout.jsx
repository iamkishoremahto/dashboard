
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'

export default function Layout() {
  return (
    <div
    className='
    flex
    border
    dark:bg-neutral-900 
    bg-white 
    min-h-screen 
    min-w-screen
    relative'
    
    >

<Navbar />
    <div className=" text-white dark:border-none border w-full ">
      <Header />
      <div>
      {<Outlet />}
      </div>
    </div>
      
     
    </div>
  )
}
