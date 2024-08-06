
import SectionLayout from "../../../Components/SectionLayout"
import RecentOrderRow from "../../../Components/RecentOrderRow"
import OrderData from "../../../assets/OrderData"

import FeedbackData from "../../../assets/FeedbackData"
import Feedback from "../../../Components/Feedback"


export default function Section3(){
  

    return (
        <>
        <SectionLayout>
            <div className=" p-3 text-black dark:text-white ">
                <div className=" shadow-md p-3 rounded-lg  bg-indigo-50 dark:bg-neutral-800 h-full">
                    <div>
                        <h1 className=" text-[30px] font-semibold">Recent Orders</h1>
                        <div className="w-full relative  scrollbar-y-custom overflow-y-auto min-h-[500px] max-h-[500px]">
                            <table className=" table-auto w-full ">
                                <thead>
                                    <tr className=" sticky top-0 bg-indigo-50 dark:bg-neutral-800 text-[15px] lg:text-[20px]">
                                        <th className="text-start py-2">
                                            Customer
                                        </th>
                                        <th className="text-start py-2">
                                            Order No.
                                        </th>
                                        <th className="text-start py-2">
                                            Amount
                                        </th>

                                        <th className="text-start py-2">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="max-h-[100px]">
                                 
                                    {
                                        OrderData.map((value) =>(
                                            <RecentOrderRow
                                            key={value.id}
                                            image={value.image} 
                                            name = {value.name}
                                            orderNo = {value.orderNumber}
                                            amount = {value.amount}
                                            DeliveryStatus = {value.DeliveryStatus}
                                            /> 
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" p-3 text-black dark:text-white w-full ">
                <div className=" shadow-md p-3 rounded-lg  bg-indigo-50 dark:bg-neutral-800 h-full">
                        <div>
                            <h1 className="text-[30px] font-semibold">Customer's Feedback</h1>
                            <div className="max-h-[500px] overflow-y-auto scrollbar-y-custom">
                               {
                                FeedbackData.map((value) => (
                                        <Feedback 
                                        key={value.id} 
                                        name= {value.name} 
                                        image = {value.image}
                                        review = {value.review}
                                        rating = {value.rating}

                                        
                                        />
                                ))
                               }
                            </div>
                        </div>
                </div>
                </div>
        </SectionLayout>
        </>
    )
}