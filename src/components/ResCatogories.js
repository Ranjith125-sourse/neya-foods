import { useState } from "react";
import CatItems from "./CatItems";

const ResCategories = ({catData, showItems, setShowIndex}) => {
    const items = catData?.card?.card?.itemCards;

    const handleClick = () => {
        setShowIndex();
    }   

    
    return(
        <div className="w-7/12 m-auto p-5 mb-4  rounded-xl shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={()=>handleClick()}>
                <p className="font-bold">{catData?.card?.card?.title} ({catData?.card?.card?.itemCards.length})</p> 
                <p className="cursor-pointer text-xl w-5" >⬇️</p>
            </div>
            
            <div>
                {
                    showItems && items.map((item) => (
                         <CatItems key={item?.card?.info?.id} data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default ResCategories;