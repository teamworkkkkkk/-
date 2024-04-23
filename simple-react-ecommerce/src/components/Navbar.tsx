import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setCartState } from "../redux/features/cartSlice";
import { updateModal } from "../redux/features/authSlice";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import CustomPopup from "./CustomPopup";


const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(
    (state) => state.cartReducer.cartItems.length
  );
  const username = useAppSelector((state) => state.authReducer.username);
  const { requireAuth } = useAuth();

  const showCart = () => {
    requireAuth(() => dispatch(setCartState(true)));
  };

  return (
    <div className="py-4 bg-white top-0 sticky z-10 shadow-lg font-karla">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-5xl text-orange-600 font-bold" data-test="main-logo">
            FreeShop
          </Link>
          <div className="lg:flex hidden w-full max-w-[500px]">
            <input
              type="text"
              placeholder="Пошук товару..."
              className="border-2 border-orange-600 px-6 py-2 w-full"
            />
            <div className="bg-orange-600 text-white text-[26px] grid place-items-center px-4">
              <BsSearch />
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 items-center">
            <Link
              to="/products"
              className="text-2xl text-orange-600 font-bold"
              data-test="main-products"
            >
              Товари
            </Link>
            <div className="flex items-center gap-2">
              {username !== "" ? (
                <img
                  src="https://th.bing.com/th/id/OIP.zkMpT_pzSE9uWU5t1RqQGgHaEK?rs=1&pid=ImgDetMain"
                  alt="avatar"
                  className="w-6"
                />
              ) : (
                <FaUser className="text-orange-600 text-3xl font-bold" />
              )}
              <div className="text-orange-600 text-3xl">
                {username !== "" ? (
                  <CustomPopup />
                ) : (
                  <span
                    className="cursor-pointer hover:opacity-85"
                    onClick={() => dispatch(updateModal(true))}
                    data-test="login-btn"
                  >
                    Увійти
                  </span>
                )}
              </div>
            </div>
            <div
              className="text-orange-600 text-[42px] relative hover:cursor-pointer hover:opacity-80"
              onClick={showCart}
              data-test="cart-btn"
            >
              <AiOutlineShoppingCart />
              <div
                className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center"
                data-test="cart-item-count"
              >
                {cartCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
