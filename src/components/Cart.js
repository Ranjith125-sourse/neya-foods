import { useDispatch, useSelector } from "react-redux";
import CatItems from "./CatItems";
import { clearItems, removeItems } from "../utils/cartSlice";
import { data } from "autoprefixer";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItems(data));
  };
  
  const handleRemove = () => {
    dispatch(removeItems());
  }

  return (
    <div className="w-8/12 mx-auto">
      {cartItems.length !== 0 ? (
        <div className="text-center">
          <button
            className="mt-10 text-xl border-red-600 border-1 p-2 rounded-xl hover:bg-red-600 hover:text-white cursor-pointer"
            onClick={() => {
              handleClearCart();
            }}
          >
            Clear Cart
          </button>
          <button className="mt-10 text-xl border-red-600 border-1 p-2 rounded-xl hover:bg-red-600 hover:text-white cursor-pointer"
          onClick={()=>{
            handleRemove();
          }}>
            Remove
          </button>
        </div>
      ) : (
        <h1 className="text-center mt-10 text-2xl ">
          Oops.... Cart is empty please add some items
        </h1>
      )}

      <div>

        {cartItems.map((cart) => (
          <CatItems data={cart} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
