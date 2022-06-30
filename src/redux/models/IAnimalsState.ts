import { IAnimal } from "../../models/IAnimal";

export interface IAnimalsState {
  animals: IAnimalsValue;
}

export interface IAnimalsValue {
  value: IAnimal[];
}
