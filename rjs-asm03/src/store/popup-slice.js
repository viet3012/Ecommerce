import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isOpen: false,
    selectedProduct: {},
  },
  reducers: {
    SHOW_POPUP(state, action) {
      state.isOpen = true;
      state.selectedProduct = action.payload;
    },
    HIDE_POPUP(state) {
      state.isOpen = false;
      state.selectedProduct = {};
    },
  },
});

export const { SHOW_POPUP, HIDE_POPUP } = popupSlice.actions;
export default popupSlice;
