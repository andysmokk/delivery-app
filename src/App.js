import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import { fetchShops } from "../src/api/api";
import { fetchProducts } from "../src/api/api";
import ShopPage from "./pages/ShopPage/ShopPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import NavLayout from "./components/NavLayout/NavLayout";

function App() {
  const [idShop, setIdShop] = useState(null);
  // const [idProduct, setIdProduct] = useState(null);
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const IdShopHandler = (id) => setIdShop(id);
  // const IdProductHandler = (id) => setIdProduct(id);

  useEffect(() => {
    fetchShops()
      .then((shops) => setShops(shops))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }, []);

  const addToCartProductHandler = (id) => {
    let currentCart = [];
    const currentProduct = products.find((product) => product.id === id);
    const indexProductOfCart = cart.findIndex(
      (product) => product.product.id === currentProduct.id
    );

    currentCart = [...cart];

    if (indexProductOfCart === -1) {
      currentCart = [...cart, { product: currentProduct, quantity: 1 }];
      setCart(currentCart);
    } else {
      currentCart[indexProductOfCart].quantity =
        currentCart[indexProductOfCart].quantity + 1;
      setCart(currentCart);
    }
  };

  return (
    <section className="container">
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route
            path="/"
            element={
              <ShopPage
                IdProductHandler={addToCartProductHandler}
                IdShopHandler={IdShopHandler}
                shops={shops}
                products={products}
                idShop={idShop}
              />
            }
          />
          <Route
            path="shopping-cart"
            element={<ShoppingCartPage cart={cart} setCart={setCart} />}
          />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
