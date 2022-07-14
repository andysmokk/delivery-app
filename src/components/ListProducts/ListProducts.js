import { v4 as uuidv4 } from "uuid";
import Product from "../Product/Product";
import s from "./ListProducts.module.css";

function ListProducts({ products, idShop, onClick }) {
  const currentProducts = products.filter(
    (product) => product.idShop === idShop
  );

  return (
    <>
      <div className={s.boxProducts}>
        <ul className={s.listProducts}>
          {currentProducts.map((product) => (
            <li className={s.itemProducts} key={uuidv4()}>
              <Product
                name={product.name}
                img={product.img}
                id={product.id}
                products={currentProducts}
                onClick={() => onClick(product.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListProducts;
