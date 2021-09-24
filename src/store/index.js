import { configureStore } from "@reduxjs/toolkit";
import addProduct from "../features/add-product/addProductSlice.js";
import productList from "../features/product-list/productListSlice";

export default configureStore({
  reducer: {
    addProduct: addProduct,
    productList: productList,
  },
});
