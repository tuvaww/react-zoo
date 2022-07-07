import { createSlice } from "@reduxjs/toolkit";
import { IAnimal } from "../../models/IAnimal";
import { IAction } from "../models/IAction";
import { ITimeObject } from "../models/ITimeObject";

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
    setFedTime: (state, action: IAction<ITimeObject>) => {
      let timeObject = action.payload;

      state.value[timeObject.indexOfAnimal].lastFed = timeObject.stringDate;
    },
    alertNotis: (state, action: IAction<number>) => {
      // ska ta emot index
      state.value[action.payload].canBeFed =
        !state.value[action.payload].canBeFed;
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

export const { setList, updateList, setFedTime, alertNotis } =
  animalSlice.actions;

export default animalSlice.reducer;
