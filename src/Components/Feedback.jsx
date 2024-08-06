import { IoStar } from "react-icons/io5";


export default function Feedback({image,name,review,rating}){
    const rest_rating = 5 - rating
    console.log(rest_rating)
    let ratings = [];
    for( let i = 0; i< rating; i++ ){
        ratings.push(<IoStar className="text-yellow-400" />)
    }
    if( rest_rating !== 0){
        for( let i = 0; i< rest_rating; i++ ){
            ratings.push(<IoStar className="text-neutral-400" />)
        }
    }
   
    return (
        <>
         <div className="flex flex-col gap-2 items-start  px-3 py-5 border-b-2 dark:border-neutral-600 border-neutral-300">
                                    <div className="flex items-center gap-2">
                                        <img className="w-[50px] rounded-full" src={image} alt="" />
                                        <p className=" text-[24px] font-semibold">{name}</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-[24px]">
                                            {
                                                ratings.map((value) => (
                                                    value
                                                ))
                                            }
                                            
                                           
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[14px]">
                                            {review}
        
                                        </p>
                                    </div>
                                </div>
        </>
    )
}