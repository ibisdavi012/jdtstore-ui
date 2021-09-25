import { createSlice, current } from "@reduxjs/toolkit";

export const productList = createSlice({
  name: "productList",
  initialState: { product_list: { products: [], selected: [] } },
  reducers: {
    load: (state, action) => {
      state = { ...state };
      state.product_list.products = action.payload.products;
    },
    select: (state, action) => {
      state = { ...state };
      state.product_list.products = [...state.product_list.products];
      state.product_list.selected = [...state.product_list.selected];

      if (
        action.payload.checked &&
        !state.product_list.selected.includes(action.payload.productId)
      ) {
        state.product_list.selected = [
          ...state.product_list.selected,
          action.payload.productId,
        ];
      } else {
        state.product_list.selected = state.product_list.selected.filter(
          (productId) => {
            return (
              productId !== action.payload.productId && !action.payload.checked
            );
          }
        );
      }
    },
    mass_delete: (state, action) => {
      console.log("Before", current(state.product_list.products));

      state.product_list.products = state.product_list.products.filter(
        (product) => {
          return !action.payload.deleted.includes(product.id);
        }
      );

      console.log("After", state.product_list.products);
    },
  },
});

export const { load, select, mass_delete } = productList.actions;
export default productList.reducer;
