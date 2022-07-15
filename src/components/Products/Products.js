import ListProducts from "../ListProducts/ListProducts";

function Products({ idShop, IdProductHandler, products }) {
  return (
    <ListProducts
      products={products}
      idShop={idShop}
      onClick={IdProductHandler}
    />
  );
}

export default Products;
