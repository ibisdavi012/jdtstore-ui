import { configureStore } from "@reduxjs/toolkit";
import addProduct from "./add-product/addProductSlice.js";

export default configureStore({
  reducer: {
    addProduct: addProduct,
  },
});
