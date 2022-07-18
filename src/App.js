import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import { fetchShops } from "../src/api/api";
import { fetchProducts } from "../src/api/api";
import ShopPage from "./pages/ShopPage/ShopPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import NotFoundPage from "../src/pages/NotFoundPage/NotFoundPage";
import NavLayout from "./components/NavLayout/NavLayout";
import { sendOrder } from "../src/api/api";

function App() {
  const [idShop, setIdShop] = useState(null);
  // const [idProduct, setIdProduct] = useState(null);
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    setUser({ name: name, phone: phone, email: email, address: address });
  }, [address, email, name, phone]);

  const IdShopHandler = (id) => setIdShop(id);
  // const IdProductHandler = (id) => setIdProduct(id);

  useEffect(() => {
    fetchShops()
      .then((response) => response.data)
      .then((shops) => setShops(shops))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchProducts()
      .then((response) => response.data)
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

  const submitHandler = (e, data) => {
    e.preventDefault();

    sendOrder({ user: user, order: data });
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCart([]);
  };

  const onFormChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "phone":
        setPhone(value);
        break;

      case "address":
        setAddress(value);
        break;

      default:
        return;
    }
  };

  return (
    <section className="container">
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route path="*" element={<NotFoundPage />} />
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
            element={
              <ShoppingCartPage
                cart={cart}
                setCart={setCart}
                onSubmit={submitHandler}
                onFormChange={onFormChange}
                name={name}
                email={email}
                phone={phone}
                address={address}
              />
            }
          />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
