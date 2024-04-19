import { useAppSelector } from "../redux/hooks";
import ProductList from "./ProductList";

const LatestProducts = () => {
  const newProducts = useAppSelector(
    (state) => state.productReducer.newProducts
  );

  return <ProductList title="Новинки" products={newProducts} />;
};

export default LatestProducts;
