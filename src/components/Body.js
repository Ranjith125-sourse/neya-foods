import ResCard, {withPromotedLabel} from "./ResCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import MindCard from "./MindCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfMind, setListOfMind] = useState([]);
  const [listOfRes, setlistOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantWithPromoted = withPromotedLabel(ResCard);


  console.log(listOfRes);


  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4410483&lng=78.3856447&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfMind(
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info
    );

    setlistOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return <h1>Your deviceis offline please check your internet connection</h1>;
  }

  const {loggedInUser, setUserName} = useContext(UserContext);

  return !listOfRes || listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-container">
      <h1 className="text-3xl mt-10 ml-12 text-gray-500">What's on your mind?"</h1>
      <div className="flex mt-5 h-64 overflow-x-auto scroll-smooth hide-scrollbar scrollbar p-2 whitespace-nowrap gap-4">
      {
        listOfMind.map((res) => (
            <MindCard key={res.id} resData={res} />
        ))
      }
      </div>
      <div className="filter p-[10px] m-[25px] flex justify-center ">
        <div className="search me-[40px]">
          <input
            className="search-box me-[5px] p-2 border-1 border-red-300 rounded-xl"
            placeholder="search here"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn bg-red-300 hover:bg-red-400 py-2 px-4 rounded-xl cursor-pointer"
            onClick={() => {
              const filtered = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(filtered, searchText);
              setFilteredRes(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn p-2 rounded-xl hover:border hover:border-red-300 cursor-pointer"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRes(filteredList);
            
          }}
        >
          Top rated restaurants
        </button>
        <button className="filter-btn p-2 rounded-xl hover:border hover:border-red-300 cursor-pointer">
          <input value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </button>
      </div>
      <div className="res-card flex flex-wrap justify-around ">
        {filteredRes.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>

            {
              res.info.promoted? <RestaurantWithPromoted resData={res} /> : <ResCard resData={res} />
            }
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

