import CartBarProducts from "../CartBarProducts/CartBarProducts";

function CartBar({ cart, setCart }) {
  return <CartBarProducts cart={cart} setCart={setCart} />;
}

export default CartBar;
