import { useSelector } from "react-redux";
import productSlice from "../data/productBox";

const ProductPage = () => {
  const goods = useSelector((state) => state.productSlice[1]);
  return <div>{goods}</div>;
};

export default ProductPage;
