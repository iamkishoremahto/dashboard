
import { Outlet } from 'react-router'

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
      
      {<Outlet />}
    </div>
  )
}
