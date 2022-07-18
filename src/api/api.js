const axios = require("axios").default;
const BASE_URL_FETCH = "https://62cd6e7d066bd2b69925bcaf.mockapi.io/api/v1";
const BASE_URL_POST = "https://back-delivery-app.herokuapp.com";

async function fetchShops() {
  try {
    const response = await axios.get(`${BASE_URL_FETCH}/shops`);
    return response;
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchProducts() {
  try {
    const response = await axios.get(`${BASE_URL_FETCH}/products`);
    return response;
  } catch (error) {
    console.error(error.message);
  }
}

async function sendOrder(data) {
  try {
    const response = await axios.post(
      `${BASE_URL_POST}/orders/shopping-cart`,
      data
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
}

export { fetchShops, fetchProducts, sendOrder };
