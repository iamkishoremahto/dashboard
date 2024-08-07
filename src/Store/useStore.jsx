import { create } from 'zustand'

const useOrderStatusStore = create((set) => ({
    totalOrder:{count:0, percentage:0,status:true},
    totalDelivered:{count:0, percentage:0, status: true},
    totalCancelled:{count:0, percentage:0, status: true},
    totalRevenue: {count:0, percentage:0, status: true},

    updateOrderStatus: (params) =>{ set(params)}
}))

const useThemeStore = create((set) => ({
    toggleMenu:false,
    setToggleMenu: () => set((state) => ({toggleMenu : !state.toggleMenu}))
}))


const useProfitStore = create((set) =>({
    data:[],
    setData: (newData) => set({data:newData})
}))
export {  useOrderStatusStore, useThemeStore, useProfitStore }