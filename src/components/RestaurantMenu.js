import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategories from "./ResCatogories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, areaName, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // const categories = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards
  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu-container text-center">
      <div className="hotel-title  m-5 p-5 shadow-lg bg-orange-300 rounded-2xl">
        <h1 className="font-mono text-3xl mb-4">{name}</h1>
        <p>
          ⭐{avgRating} - {costForTwoMessage}
        </p>
        <p className="text-xl text-black font-bold">{areaName}</p>
      </div>

      <div className="mt-10">
        {categories.map((category, index) => (
          <ResCategories
            key={category?.card?.card?.title}
            catData={category}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
