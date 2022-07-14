// import { useState } from "react";
import s from "./Product.module.css";

function Product({ name, img, id, products, onClick }) {
  // const [productsCartId, setProductsCartId] = useState(null);

  // function onClick() {
  //   console.log(id);
  //   console.log(products);
  //   const currentProduct = products.find((product) => product.id === id);
  //   console.log(
  //     "🚀 ~ file: Product.js ~ line 11 ~ handlerClick ~ currentProduct",
  //     currentProduct
  //   );
  //   setProductsCartId(id);
  // }

  return (
    <>
      <img className={s.itemProductsImg} src={img} alt="cat" />
      <div className={s.descriptionBox}>
        <h1>{name}</h1>
        <button
          className={s.buttonProduct}
          type="button"
          onClick={() => onClick()}
        >
          add to Card
        </button>
      </div>
    </>
  );
}

export default Product;
