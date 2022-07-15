import ListShops from "../ListShops/ListShops";

function Shops({ IdShopHandler, shops }) {
  return <ListShops shops={shops} IdShopHandler={IdShopHandler} />;
}

export default Shops;
