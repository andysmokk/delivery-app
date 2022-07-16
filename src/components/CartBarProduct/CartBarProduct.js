// import { useState } from "react";
import s from "./CartBarProduct.module.css";

function CartBarProduct({ cart, id, name, img, price, quantity, setCart }) {
  const changeQuantity = (id, number) => {
    let currentCart = [...cart];
    let indexProductOfCart = cart.findIndex(
      (product) => product.product.id === id
    );

    currentCart[indexProductOfCart].quantity = number;

    setCart(currentCart);
  };

  const onDeleteProduct = (id) => {
    const currentCart = cart.filter((product) => product.product.id !== id);

    setCart(currentCart);
  };

  return (
    <>
      <img src={img} alt="cat" />
      <div className={s.descriptionBox}>
        <h3>{name}</h3>
        <div>
          <p>Price: {price}$</p>
          <div>
            <label htmlFor="quantity" className={s.label}>
              Quantity:
            </label>
            <input
              className={s.inputQuantity}
              type="number"
              step="1"
              min="1"
              max="30"
              value={quantity}
              name="quantity"
              onChange={(e) => changeQuantity(id, e.target.value)}
            />
          </div>
        </div>
        <button
          type="button"
          className={s.CartBarProductBtn}
          onClick={() => onDeleteProduct(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default CartBarProduct;
