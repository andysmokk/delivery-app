import s from "./Product.module.css";

function Product({ name, img, id, products, onClick }) {
  return (
    <>
      <img className={s.itemProductsImg} src={img} alt="cat" />
      <div className={s.descriptionBox}>
        <h2>{name}</h2>
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
