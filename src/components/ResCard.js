import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const ResCard = (props) => {
  const {loggedInUser} = useContext(UserContext);


  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = resData?.info;
  
  return (
    <div className="image-container  p-[10px] pl-7 pt-5 m-5 mb-7 hover:shadow-xl hover:rounded-xl transition-all duration-300 ease-in-out hover:scale-105">
      <div className="w-full h-60 overflow-hidden mb-2 rounded-xl">
        <img className="w-full h-full object-cover" src={CDN_URL + resData.info.cloudinaryImageId} />
      </div>
      <div className="w-70 h-50  ">
        <h2 className="font-bold text-2xl text-gray-500">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating} ⭐</h3>
        <h3>{deliveryTime} mins</h3>
        <h3>{loggedInUser}</h3>
      </div>
    </div>
  );
};

export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return(
      <div>
        <label>Promoted</label>
        <ResCard {...props}/>
      </div>
    )
  }
}

export default ResCard;
