export default function SectionLayout({ children }){
        const [children1, children2] = children;
    return (
        <>
            <div className=" flex flex-col  lg:flex-row ">
                <div className="  min-w-[65%]">

                    {children1}
                </div>
                <div className=" flex items-center justify-center w-full">
                    {children2}
                </div>
            </div>
        </>
    )
}