import UserBar from "../../components/UserBar/UserBar";
import CartBar from "../../components/CartBar/CartBar";
import SubmitBox from "../../components/SubmitBox/SubmitBox";
import s from "./ShoppingCartPage.module.css";

function ShoppingCart({ cart, setCart }) {
  console.log(cart);
  return (
    <form>
      <div className={s.boxCart}>
        <UserBar />
        <CartBar cart={cart} setCart={setCart} />
      </div>
      <SubmitBox cart={cart} />
    </form>
  );
}

export default ShoppingCart;
