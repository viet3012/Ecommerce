import axiosClient from "./axiosClient";

const HistoryAPI = {
  getOrder: () => {
    const url = `http://localhost:5000/api/user/orders`;
    return axiosClient.get(url);
  },
};

export default HistoryAPI;
