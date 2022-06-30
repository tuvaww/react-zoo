import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { updateList } from "../redux/features/AnimalsSlice";
import { getParams } from "../redux/features/ParamsSlice";
import { IAnimalsState } from "../redux/models/IAnimalsState";
import { IParams } from "../redux/models/IParams";
import { AnimalImg } from "./styled-components/AnimalImg";

export const AnimalDetails = () => {
  const animals = useSelector((state: IAnimalsState) => state.animals.value);
  const paramID = useSelector((state: IParams) => state.params.value);

  const dispath = useDispatch();
  let params = useParams();
  const [animal, setAnimal] = useState<IAnimal>({
    id: 0,
    imageUrl: "",
    isFed: false,
    lastFed: "",
    latinName: "",
    longDescription: "",
    medicine: "",
    name: "",
    shortDescription: "",
    yearOfBirth: 0,
    canBeFed: true,
  });
  //console.log("i details animal", animal);

  useEffect(() => {
    if (params.id) {
      dispath(getParams(params.id));
    }

    animals.map((a: IAnimal) => {
      /*   console.log("params", params);
      console.log("id", a.id); */
      if (a.id === +paramID) {
        setAnimal(a);
      }
    });
  }, [params, paramID]);

  const FeedAnimal = () => {
    let indexOfAnimal = animal.id - 1;
    dispath(updateList(indexOfAnimal));
  };

  return (
    <section className="animalDetailsContainer">
      <AnimalImg img={animal.imageUrl} />
      <div onClick={FeedAnimal} className="feedButton">
        Feed me
      </div>
    </section>
  );
};
