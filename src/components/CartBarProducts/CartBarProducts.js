import { v4 as uuidv4 } from "uuid";
import CartBarProduct from "../CartBarProduct/CartBarProduct";
import s from "./CartBarProducts.module.css";

function CartBarProducts({ cart, setCart }) {
  return (
    <div className={s.cartBox}>
      <ul className={s.listProducts}>
        {cart.map((product) => (
          <li className={s.itemProducts} key={uuidv4()}>
            <CartBarProduct
              cart={cart}
              id={product.product.id}
              name={product.product.name}
              img={product.product.img}
              price={product.product.price}
              quantity={product.quantity}
              setCart={setCart}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartBarProducts;
