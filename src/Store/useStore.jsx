import { create } from 'zustand'

const useOrderStatusStore = create((set) => ({
    totalOrder:{count:0, percentage:0,status:true},
    totalDelivered:{count:0, percentage:0, status: true},
    totalCancelled:{count:0, percentage:0, status: true},
    totalRevenue: {count:0, percentage:0, status: true},

    updateOrderStatus: (params) =>{ set(params)}
}))


export {  useOrderStatusStore }