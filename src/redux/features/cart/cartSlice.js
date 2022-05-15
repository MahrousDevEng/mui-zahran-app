// Main Imports
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  subTotal: 0,
  deliveryCharge: 0,
  tax: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      action.payload.quantity = 1;
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    increaseQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
          return item;
        }
        return item;
      });
    },
    decreaseQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          item.quantity -= 1;
          return item;
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
