import Shops from "../../components/Shops/Shops";
import Products from "../../components/Products/Products";
import s from "./ShopPage.module.css";

function ShopPage({
  IdShopHandler,
  IdProductHandler,
  idShop,
  shops,
  products,
}) {
  return (
    <section className={s.section}>
      <Shops IdShopHandler={IdShopHandler} shops={shops} />
      <Products
        idShop={idShop}
        products={products}
        IdProductHandler={IdProductHandler}
      />
    </section>
  );
}

export default ShopPage;
