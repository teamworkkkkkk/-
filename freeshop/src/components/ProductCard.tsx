import { FC } from "react";
import { Product } from "../models/Product";
import RatingStar from "./RatingStar";
import { addToCart } from "../redux/features/cartSlice";
import { useAppDispatch } from "../redux/hooks";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import PriceSection from "./PriceSection";
import useAuth from "../hooks/useAuth";

const ProductCard: FC<Product> = ({
  id,
  price,
  thumbnail,
  title,
  category,
  rating,
  discountPercentage,
}) => {
  const dispatch = useAppDispatch();
  const { requireAuth } = useAuth();

  const addCart = () => {
    requireAuth(() => {
      dispatch(
        addToCart({
          id,
          price,
          title,
          category,
          rating,
          thumbnail,
          discountPercentage,
        })
      );
      toast.success("Товар добавлено до корзини", {
        duration: 3000,
      });
    });
  };

  return (
    <div className="border border-orange-200 font-lato" data-test="product-card">
      <div className="text-center border-b border-orange-200">
        <Link to={{ pathname: `/product/${id}` }}>
          <img src={thumbnail} alt={title} className="inline-block h-60" />
        </Link>
      </div>
      <div className="px-8 pt-4">
        <p className="text-orange-500 text-[14px] font-medium">{category}</p>
        <Link
          className="font-semibold hover:underline"
          to={{ pathname: `/product/${id}` }}
        >
          {title}
        </Link>
      </div>
      <div className="px-8">
        <RatingStar rating={rating} />
      </div>
      <div className="flex items-center justify-between px-8 pb-4">
        {discountPercentage && (
          <PriceSection discountPercentage={discountPercentage} price={price} />
        )}
        <button
          type="button"
          className="flex items-center space-x-2 hover:bg-orange-300 text-white py-2 px-4 rounded bg-orange-600"
          onClick={addCart}
          data-test="add-cart-btn"
        >
          <AiOutlineShoppingCart />
          <span>До корзини</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
