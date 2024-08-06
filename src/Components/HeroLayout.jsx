export default function HeroLayout({ children, heading }){
    return (
        <>
        <div className="lg:p-5 p-3 border">
            <div className="py-5">
                <h1 className=" uppercase text-[35px] font-bold dark:text-white text-black">{ heading }</h1>
            </div>
            <div className=" scrollbar-y-invisible-scroll border calc-h">
                { children }
            </div>
        </div>
        </>
    )
}