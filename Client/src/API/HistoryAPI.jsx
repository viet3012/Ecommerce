import axiosClient from "./axiosClient";

const HistoryAPI = {
  getHistoryAPI: (query) => {
    const url = `http://localhost:5000/api/user/order/${query}`;
    return axiosClient.get(url);
  },

  getDetail: (id, detail) => {
    const url = `http://localhost:5000/api/user/order/${id}/${detail}`;
    return axiosClient.get(url);
  },
};

export default HistoryAPI;
