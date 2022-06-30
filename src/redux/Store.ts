import { configureStore } from "@reduxjs/toolkit";
import animalsReducer from "./features/AnimalsSlice";

export default configureStore({
  reducer: {
    animals: animalsReducer,
  },
});
