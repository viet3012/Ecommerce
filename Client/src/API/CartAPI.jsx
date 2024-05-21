import axiosClient from "./axiosClient";

const CartAPI = {
  getCarts: (query) => {
    const url = `http://localhost:5000/api/user/cart/${query}`;
    return axiosClient.get(url);
  },

  addCart: (query, post) => {
    const url = `http://localhost:5000/api/user/add-cart/${query}`;
    return axiosClient.post(url, post);
  },

  deleteCart: (query, post) => {
    const url = `http://localhost:5000/api/user/delete-cart/${query}`;
    return axiosClient.post(url, post);
  },

  updateCart: (query, post) => {
    const url = `http://localhost:5000/api/user/update-cart/${query}`;
    return axiosClient.put(url, post);
  },
};

export default CartAPI;
