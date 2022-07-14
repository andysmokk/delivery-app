import { v4 as uuidv4 } from "uuid";
import Shop from "../Shop/Shop";
import s from "./ListShops.module.css";

function ListShops({ shops, IdShopHandler }) {
  return (
    <>
      <div className={s.boxShops}>
        <ul>
          {shops.map((shop) => (
            <li className={s.itemShops} key={uuidv4()}>
              <Shop
                name={shop.name}
                id={shop.id}
                onClick={() => IdShopHandler(shop.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListShops;
