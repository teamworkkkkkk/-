import { useAppSelector } from "../redux/hooks";
import ProductList from "./ProductList";

const TrendingProducts = () => {
  const featuredProducts = useAppSelector(
    (state) => state.productReducer.featuredProducts
  );

  return (
    <div className="text-center">
      <h2 className="text-5xl text-black-300 font-bold mb-4 font-mono">Популярні продукти</h2>
      <ProductList title="" products={featuredProducts} />
    </div>
  );
};

export default TrendingProducts;
