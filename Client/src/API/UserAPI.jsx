import axios from "axios";
import axiosClient from "./axiosClient";

const UserAPI = {
  signUp: (query) => {
    const url = "http://localhost:5000/api/auth/signup";
    return axiosClient.post(url, query);
  },

  signIn: (query) => {
    const url = "http://localhost:5000/api/auth/signin";
    return axiosClient.post(url, query);
  },

  logout: () => {
    const url = "http://localhost:5000/api/auth/logout";
    return axiosClient.get(url);
  },
};

export default UserAPI;
