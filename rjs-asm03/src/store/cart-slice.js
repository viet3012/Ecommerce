import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    ADD_CART(state, action) {
      const { products } = action.payload;
      state.data.push(products);
      localStorage.setItem("dataProduct", JSON.stringify(state.data));
    },
    UPDATE_CART(state, action) {
      const { products } = action.payload;
      state.data = products;
      localStorage.setItem("dataProduct", JSON.stringify(state.data));
    },
    REMOVE_CART: (state, action) => {
      const { products } = action.payload;
      state.data = products;
      localStorage.setItem("dataProduct", JSON.stringify(state.data));
    },
  },
});

export const { UPDATE_CART, REMOVE_CART, ADD_CART } = cartSlice.actions;
export default cartSlice;
