import { createSlice } from "@reduxjs/toolkit";

export const productManagement = createSlice({
  name: "productManagement",
  initialState: {
    appStatus: "STAND_BY",
  },
  reducers: {
    saved: (state) => {
      state.appStatus = "STAND_BY";
    },
    error: (state) => {
      state.appStatus = "ERROR_SAVING";
    },
    save_request: (state) => {
      state.appStatus = "SAVE_REQUEST";
    },
    delete_request: (state) => {
      state.appStatus = "DELETE_REQUEST";
    },
    cancel: (state) => {
      state.appStatus = "CANCEL";
    },
    abort: (state) => {
      state.appStatus = "STAND_BY";
    },
    reset: (state) => {
      state.appStatus = "STAND_BY";
    },
  },
});

export const { saved, cancel, reset, save_request, delete_request, abort } =
productManagement.actions;

export default productManagement.reducer;
