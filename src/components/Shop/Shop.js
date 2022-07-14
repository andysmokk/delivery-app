import s from "./Shop.module.css";

function Shop({ name, onClick }) {
  return (
    <button className={s.buttonShop} type="button" onClick={() => onClick()}>
      {name}
    </button>
  );
}

export default Shop;
