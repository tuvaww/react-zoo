import { createSlice } from "@reduxjs/toolkit";
import { IAction } from "../models/IAction";

const paramsSlice = createSlice({
  name: "params",
  initialState: {
    value: "",
  },
  reducers: {
    getParams: (state, action: IAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { getParams } = paramsSlice.actions;
export default paramsSlice.reducer;
