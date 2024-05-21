import axiosClient from "./axiosClient";

const UserAPI = {
  postSignIn: (query) => {
    const url = "http://localhost:5000/api/auth/signinadmin";
    return axiosClient.post(url, query);
  },
  logout: () => {
    const url = "http://localhost:5000/api/auth/logout";
    return axiosClient.get(url);
  },
  getDashboard: () => {
    const url = "http://localhost:5000/api/user/get-dashboard";
    return axiosClient.get(url);
  },
};

export default UserAPI;
