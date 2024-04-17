import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    name: "",
  },
  reducers: {
    ON_LOGIN(state, action) {
      state.isLogin = true;
      state.name = action.payload.name;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    ON_LOGOUT(state) {
      state.isLogin = false;
      localStorage.setItem("user", JSON.stringify({}));
    },
  },
});

export const { ON_LOGIN, ON_LOGOUT } = authSlice.actions;
export default authSlice;
