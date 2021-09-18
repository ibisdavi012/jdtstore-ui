import { configureStore } from "@reduxjs/toolkit";
import addProduct from "../features/add-product/addProductSlice.js";

export default configureStore({
  reducer: {
    addProduct: addProduct,
  },
});
