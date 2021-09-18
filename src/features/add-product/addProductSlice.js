import { createSlice } from "@reduxjs/toolkit";

export const addProductSlice = createSlice({
  name: "addProduct",
  initialState: {
    formStatus: "STAND_BY",
  },
  reducers: {
    save: (state) => {
      state.formStatus = "SAVING";
    },
    cancel: (state) => {
      state.formStatus = "CANCEL";
    },
    reset: (state) => {
      state.formStatus = "STAND_BY";
    },
  },
});

export const { save, cancel, reset } = addProductSlice.actions;

export default addProductSlice.reducer;
