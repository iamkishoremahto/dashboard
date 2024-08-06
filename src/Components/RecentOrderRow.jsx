

export default function RecentOrderRow({ image, name, orderNo, amount, DeliveryStatus}) {
  return (
    <>
        <tr className=" border-t-2 border-neutral-300 dark:border-neutral-700">
                                        <td className=" py-3 min-w-[200px]">
                                            <div className="flex items-center gap-2">
                                                <img className="w-[40px] rounded-full" src={image} alt="" />
                                                <p>{name}</p>
                                            </div>
                                        </td>
                                        <td className="min-w-[100px]">
                                            {orderNo}
                                        </td>
                                        <td className="min-w-[100px]">${amount}</td>
                                        <td className="min-w-[100px]">
                                            <span className={DeliveryStatus.toUpperCase() === 'DELIVERED'
                                            ?"text-green-600 bg-green-400 bg-opacity-30 px-3 py-1 rounded-full "
                                            :`${DeliveryStatus.toUpperCase() === 'PENDING'
                                            ?"text-yellow-600 bg-yellow-400 bg-opacity-30 px-3 py-1 rounded-full"
                                            :"text-red-600 bg-red-400 bg-opacity-30 px-3 py-1 rounded-full"
                                            }`}>
                                                {DeliveryStatus}
                                            </span>
                                        </td>
                                    </tr>
    </>
  )
}
