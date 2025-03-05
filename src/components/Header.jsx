import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const online = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex justify-between shadow-lg">
      <div className="logo-container  h-40 w-40 mb-2.5">
        <Link to="/">
          <img
            className="logo h-full w-full overflow-hidden transition-all duration-300 ease-in-out hover:scale-110 rounded-full"
            src={LOGO_URL}
          />
        </Link>
      </div>
      <div className="nav-items mt-14">
        <ul className="flex flex-row mx-[50px] space-x-[20px] text-[20px]">
          <li>
            Online status:{" "}
            <span className="animate-pulse">{online ? "🟢" : "🔴"}</span>{" "}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="transition-all  duration-300 ease-in-out mx-[30px] font-bold mt-[-10px] p-[10px] px-[15px] text-green-500 hover:bg-green-500 hover:text-white rounded-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="me-[30px] mt-[-10px] p-[10px] px-[15px] bg-yellow-300 hover:bg-yellow-400 cursor-pointer rounded-xl">
            <Link to={"/cart"}>Cart - ({cartItems.length}) items</Link>
            
          </li>
          <button
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className="login-btn mt-[-10px] p-[10px] px-[15px] bg-blue-300 hover:bg-blue-400 cursor-pointer rounded-xl"
          >
            {btnName}
          </button>
          <li> {loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
