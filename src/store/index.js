import { configureStore } from "@reduxjs/toolkit";
import productManagement from "./productManagementSlice";
import productList from "../features/product-list/productListSlice";

export default configureStore({
  reducer: {
    productManagement: productManagement,
    productList: productList,
  },
});
