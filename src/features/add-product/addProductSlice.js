import { createSlice } from "@reduxjs/toolkit";

export const addProductSlice = createSlice({
  name: "addProduct",
  initialState: {
    formStatus: "STAND_BY",
  },
  reducers: {
    saved: (state) => {
      state.formStatus = "STAND_BY";
    },
    error: (state) => {
      state.formStatus = "ERROR_SAVING";
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

export const { saved, cancel, reset, save_request, abort } =
  addProductSlice.actions;

export default addProductSlice.reducer;
