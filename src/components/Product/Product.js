import s from "./Product.module.css";

function Product({ name, img, price, onClick }) {
  return (
    <>
      <img className={s.itemProductsImg} src={img} alt="cat" />
      <div className={s.descriptionBox}>
        <div>
          <h2>{name}</h2>
          <p>Price: {price}$</p>
        </div>
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
