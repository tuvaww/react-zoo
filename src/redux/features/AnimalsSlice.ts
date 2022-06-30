import { createSlice } from "@reduxjs/toolkit";
import { IAnimal } from "../../models/IAnimal";
import { IAction } from "../models/IAction";

let defaultValue: IAnimal[] = [];

const animalSlice = createSlice({
  name: "animals",
  initialState: { value: defaultValue },
  reducers: {
    setList: (state, action: IAction<IAnimal[]>) => {
      state.value = action.payload;
    },

    updateList: (state, action: IAction<number>) => {
      // ska ta emot index
      state.value[action.payload].isFed = !state.value[action.payload].isFed;
    },
    /*   addProperty: (state) => {
      let aList = state.value;

      state.value = aList.map((a) => {
        return [...state.value, (a.canBeFed = false)];
      });
      //state.value.push(action.payload)
    }, */
  },
});

export const { setList, updateList } = animalSlice.actions;

export default animalSlice.reducer;
