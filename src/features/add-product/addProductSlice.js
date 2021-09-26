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
    save_request: (state) => {
      state.formStatus = "SAVE_REQUEST";
    },
    cancel: (state) => {
      state.formStatus = "CANCEL";
    },
    abort: (state) => {
      state.formStatus = "STAND_BY";
    },
    reset: (state) => {
      state.formStatus = "STAND_BY";
    },
  },
});

export const { save, cancel, reset, save_request, abort } =
  addProductSlice.actions;

export default addProductSlice.reducer;
