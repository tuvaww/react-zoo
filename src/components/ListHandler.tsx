import { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { IAnimalsState } from "../redux/models/IAnimalsState";
import { IAnimal } from "../models/IAnimal";
import { setList } from "../redux/features/AnimalsSlice";
export const ListHandler = () => {
  const animals = useSelector((state: IAnimalsState) => state.animals.value);

  const dispath = useDispatch();

  useEffect(() => {
    if (animals.length <= 0) {
      const getAPI = async () => {
        const response = axios
          .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
          .then(async (response) => {
            let apiList = response.data;

            apiList.map((a: IAnimal) => {
              a.canBeFed = true;
            });
            dispath(setList(apiList));
          });
      };
      getAPI();
    }
  }, []);

  return <></>;
};
