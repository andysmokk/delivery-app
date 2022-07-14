const BASE_URL = "https://62cd6e7d066bd2b69925bcaf.mockapi.io/api/v1/";

function fetchShops() {
  return fetch(`${BASE_URL}/shops`).then((response) => response.json());
}

function fetchProducts() {
  return fetch(`${BASE_URL}/products`).then((response) => response.json());
}

export { fetchShops, fetchProducts };
