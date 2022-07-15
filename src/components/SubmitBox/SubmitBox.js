import { useState, useEffect } from "react";
import s from "./SubmitBox.module.css";

function SubmitBox({ cart }) {
  const [totalPriceProducts, setTotalPriceProducts] = useState(0);

  const calcTotalPriceProduct = cart.reduce((acc, product) => {
    return (acc += product.product.price * product.quantity);
  }, 0);

  useEffect(() => {
    setTotalPriceProducts(calcTotalPriceProduct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <div className={s.boxBtnSubmit}>
      <p>Total price: {totalPriceProducts}$</p>
      <button type="submit" className={s.btnSubmit}>
        Submit
      </button>
    </div>
  );
}

export default SubmitBox;
