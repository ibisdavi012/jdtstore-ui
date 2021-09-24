import { createSlice } from "@reduxjs/toolkit";

export const productList = createSlice({
  name: "productList",
  initialState: { products: [], selected: [] },
  reducers: {
    load: (state, action) => {
      state = { ...state, products: action.payload.products, selected: [] };
    },
    select: (state, action) => {
      state = { ...state };
      if (
        action.payload.checked &&
        !state.selected.includes(action.payload.productId)
      ) {
        state.selected = [...state.selected, action.payload.productId];
      } else {
        state.selected = state.selected.filter((productId) => {
          return (
            productId !== action.payload.productId && !action.payload.checked
          );
        });
      }
    },
    mass_delete: (state, action) => {
      state = { ...state };
      if (action.payload.deleted) {
        state.products = state.products.filter((productId) => {
          return !action.payload.deleted.includes(productId);
        });
      }
    },
  },
});

export const { load, select, mass_delete } = productList.actions;
export default productList.reducer;
