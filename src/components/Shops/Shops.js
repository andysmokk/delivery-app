// import { useState, useEffect } from "react";
// import { fetchShops } from "../../api/api";
import ListShops from "../ListShops/ListShops";

function Shops({ IdShopHandler, shops }) {
  // const [shops, setShops] = useState([]);

  // useEffect(() => {
  //   fetchShops()
  //     .then((shops) => setShops(shops))
  //     .catch((err) => console.log(err));
  // }, []);

  return <ListShops shops={shops} IdShopHandler={IdShopHandler} />;
}

export default Shops;
