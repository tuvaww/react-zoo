import { configureStore } from "@reduxjs/toolkit";
import animalsReducer from "./features/AnimalsSlice";
import paramsReducer from "./features/ParamsSlice";

export default configureStore({
  reducer: {
    animals: animalsReducer,
    params: paramsReducer,
  },
});
