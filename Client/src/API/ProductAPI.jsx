import axiosClient from "./axiosClient";

const ProductAPI = {
  getProducts: () => {
    const url = "http://localhost:5000/api/product";
    return axiosClient.get(url);
  },

  getDetail: (id) => {
    const url = `http://localhost:5000/api/product/get-detail/${id}`;
    return axiosClient.get(url);
  },
};

export default ProductAPI;
