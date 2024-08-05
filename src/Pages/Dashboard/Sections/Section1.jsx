
import OrderStatus from "../../../Components/OrderStatus"
import { useOrderStatusStore } from "../../../Store/useStore"
import { BsBagPlusFill } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsBagXFill } from "react-icons/bs";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { useEffect } from 'react';

export default function Section1(){
    const {totalOrder, totalDelivered, totalCancelled, totalRevenue, updateOrderStatus } = useOrderStatusStore()
    useEffect(() =>{
      updateOrderStatus({
        totalOrder:{count:'75', percentage:3,status:true},
        totalDelivered:{count:'70', percentage:3, status: false},
        totalCancelled:{count:'05', percentage:3, status: true},
        totalRevenue: {count:'12', percentage:3, status: false},
  
    })
    },[])
  
    return (
        <>
        <div className=" flex flex-col lg:flex-row ">
        <div className="  min-w-[60%]">
          <div className="status flex items-center lg:justify-between justify-center gap-3 flex-wrap p-3">
              <OrderStatus 
              key={1} 
              bg_icon_color = {'bg-blue-400'} 
              icon_color={'text-blue-400'}
              icon = {<BsBagPlusFill />} 
              title = {'total orders'} 
              status = {totalOrder.status}
              count = {totalOrder.count}
              percentage = {totalOrder.percentage}
               />
              
              <OrderStatus 
              key={2} 
              bg_icon_color = {'bg-green-400'} 
              icon_color={'text-green-400'} 
              icon = {<BsFillBagCheckFill />} 
              title = {'total delivered'}
              status = {totalDelivered.status}
              count = {totalDelivered.count}
              percentage = {totalDelivered.percentage}
               />
              
              <OrderStatus 
              key={3} 
              bg_icon_color = {'bg-red-400'} 
              icon_color={'text-red-400'}
              icon = {<BsBagXFill/>} 
              title = {'total cancelled'} 
              status = {totalCancelled.status}
              count = {totalCancelled.count}
              percentage = {totalCancelled.percentage}
               />
              
              <OrderStatus 
              key={4} 
              bg_icon_color = {'bg-pink-400'} 
              icon_color={'text-pink-400'}
              icon = {<FaCircleDollarToSlot/>} 
              title = {'total revenue'} 
              status = {totalRevenue.status}
              count = {`$${totalRevenue.count}k`}
              percentage = {totalRevenue.percentage}
               />
              
          </div>
        </div>
        <div>
          status
        </div>
      </div>
        </>
    )
}