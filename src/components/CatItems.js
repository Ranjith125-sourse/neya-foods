import { addItems } from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/constant.js";
import { useDispatch } from "react-redux";

const CatItems = ({ data }) => {
  
  const dispatch = useDispatch();

  const handleCartItems = (data) => {
    dispatch(addItems(data));
  }

  return (
    <div className=" p-10 my-5 rounded-xl border-b-1 border-gray-400 flex justify-between gap-4 transition-all duration-150 ease-in-out">
      <div className="w-3/12 w-60 h-50 order-1">
        <div className="absolute  p-3 px-10 ml-12 mt-45 bg-white transition-all duration-200 ease-in-out hover:bg-orange-300 hover:text-white hover:font-bold rounded-2xl shadow-xl">
            <button onClick={() => handleCartItems(data)}>Add +</button>
        </div>
        <img
          className=" w-full h-full overflow-hidden object-cover rounded-2xl"
          src={CDN_URL + data?.card?.info?.imageId}
        ></img>
        
      </div>
      <div className="w-9/12 text-left">
        <div className="my-4">
          <span className="">
            {data?.card?.info?.isVeg ? (
              <img
                className="w-5 h-5 my-2"
                src="https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg"
              ></img>
            ) : (
              <img
                className="w-5 h-5 my-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"
              ></img>
            )}
          </span>
          <span>{data?.card?.info?.name}</span>
          <span>
            {" "}
            - ₹{" "}
            {data?.card?.info?.price
              ? data?.card?.info?.price / 100
              : data?.card?.info?.defaultPrice / 100}
          </span>
        </div>
        <p className="text-xs">{data?.card?.info?.description}</p>
      </div>
    </div>
  );
};

export default CatItems;
