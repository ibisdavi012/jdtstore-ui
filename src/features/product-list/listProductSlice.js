import { createSlice } from "@reduxjs/toolkit";

export const listProductSlice = createSlice({
  name: "listProductSlice",
  initialState: { products: [] },
});
