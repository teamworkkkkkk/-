import { useAppSelector } from "../redux/hooks";
import ProductList from "./ProductList";

const LatestProducts = () => {
  const newProducts = useAppSelector(
    (state) => state.productReducer.newProducts
  );

return (
  <div className="text-center">
    <h2 className="text-5xl text-black-300 font-bold mb-4 font-mono">Новинки</h2>
    <ProductList title="" products={newProducts} />
  </div>
);
};

export default LatestProducts;
