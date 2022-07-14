// import { useState, useEffect } from "react";
// import { fetchProducts } from "../../api/api";
import ListProducts from "../ListProducts/ListProducts";

function Products({ idShop, IdProductHandler, products }) {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetchProducts()
  //     .then((products) => setProducts(products))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <ListProducts
      products={products}
      idShop={idShop}
      onClick={IdProductHandler}
    />
  );
}

export default Products;
