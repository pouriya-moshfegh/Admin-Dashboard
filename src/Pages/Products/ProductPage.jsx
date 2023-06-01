import { useState } from "react";
import ProductsBox from "../../Components/ProductsBox/ProductsBox";
import NewProduct from "../../Components/NewProduct/NewProduct";
export default function ProductPage() {
  const [mainProduct, setMainProduct] = useState();
  return (
    <>
      <NewProduct setMainProduct={setMainProduct}  mainProduct={mainProduct}/>
      <ProductsBox />
    </>
  );
}
