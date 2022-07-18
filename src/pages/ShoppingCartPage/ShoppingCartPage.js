import UserBar from "../../components/UserBar/UserBar";
import CartBar from "../../components/CartBar/CartBar";
import SubmitBox from "../../components/SubmitBox/SubmitBox";
import s from "./ShoppingCartPage.module.css";

function ShoppingCart({
  cart,
  setCart,
  onSubmit,
  onFormChange,
  name,
  email,
  phone,
  address,
}) {
  return (
    <form id="userForm" onSubmit={(e) => onSubmit(e, cart)}>
      <div className={s.boxCart}>
        <UserBar
          onChange={onFormChange}
          name={name}
          email={email}
          phone={phone}
          address={address}
        />
        <CartBar cart={cart} setCart={setCart} />
      </div>
      <SubmitBox cart={cart} />
    </form>
  );
}

export default ShoppingCart;
