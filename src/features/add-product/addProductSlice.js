import { createSlice } from "@reduxjs/toolkit";

export const addProductSlice = createSlice({
  name: "addProduct",
  initialState: {
    formStatus: "WAITING_FOR_USER_INPUT",
  },
  reducers: {
    save: (state) => {
      state.formStatus = "SAVED";
    },
    cancel: (state) => {
      state.formStatus = "CANCEL";
    },
  },
});

export const { save, cancel } = addProductSlice.actions;

export default addProductSlice.reducer;
