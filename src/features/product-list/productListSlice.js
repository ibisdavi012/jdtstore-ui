import { createSlice } from "@reduxjs/toolkit";

export const productList = createSlice({
  name: "productList",
  initialState: {  products: []  },
  reducers: {
    load: (state, action) => {
      state.products = action.payload.products;
    },

    mass_delete: (state, action) => {
      state.products = state.products.filter(
        (product) => {
          return (!action.payload.deleted.includes(product.id));                        
        }
      );
    },
  },
});

export const { load, mass_delete } = productList.actions;
export default productList.reducer;
