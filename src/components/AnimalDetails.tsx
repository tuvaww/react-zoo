import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import {
  alertNotis,
  setFedTime,
  updateList,
} from "../redux/features/AnimalsSlice";
import { getParams } from "../redux/features/ParamsSlice";
import { IAnimalsState } from "../redux/models/IAnimalsState";
import { IParams } from "../redux/models/IParams";
import { ITimeObject } from "../redux/models/ITimeObject";
import { AnimalImg } from "./styled-components/AnimalImg";
import { HungerStatus } from "./styled-components/HungerStatus";

export const AnimalDetails = () => {
  const animals = useSelector((state: IAnimalsState) => state.animals.value);
  const paramID = useSelector((state: IParams) => state.params.value);

  const dispath = useDispatch();
  let params = useParams();
  const navigate = useNavigate();

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

  const [detectChange, setDetectChange] = useState(true);

  const [fed, setFed] = useState(animal.isFed);
  //console.log("i details animal", animal);

  useEffect(() => {
    if (params.id) {
      dispath(getParams(params.id));
    }

    animals.map((a: IAnimal) => {
      if (a.id === +paramID) {
        setAnimal(a);
        setFed(a.isFed);
      }
    });
  }, [params, paramID, detectChange]);

  const FeedAnimal = () => {
    let indexOfAnimal = animal.id - 1;
    changeAbilityToFeed(indexOfAnimal);
    alertFedNotis(indexOfAnimal);
    let fullDateOnClick = new Date();
    let trimDate =
      fullDateOnClick.getDate() +
      "/" +
      (fullDateOnClick.getMonth() + 1) +
      "/" +
      fullDateOnClick.getFullYear() +
      " KL: " +
      fullDateOnClick.getHours() +
      "." +
      fullDateOnClick.getMinutes();
    //console.log("time", trimDate);

    let stringDate = trimDate.toString();
    let timeAndIndex: ITimeObject = { indexOfAnimal, stringDate };

    dispath(setFedTime(timeAndIndex));
    setDetectChange(!detectChange);
    // console.log("animal", animal);
    //console.log("detectChange", detectChange);
  };

  const changeAbilityToFeed = (index: number) => {
    dispath(updateList(index));
    dispath(alertNotis(index));

    setDetectChange(!detectChange);

    const foodTimer = setInterval(() => {
      dispath(updateList(index));
      setDetectChange(!detectChange);

      clearInterval(foodTimer);
    }, 100000);
  };

  const alertFedNotis = (index: number) => {
    const alert = setInterval(() => {
      dispath(alertNotis(index));
      clearInterval(alert);
    }, 120000);
  };
  console.log("animal", animal);

  const navigateRoute = () => {
    navigate("/animals");
  };

  return (
    <section className="animalDetailsContainer">
      <div className="closeButton">
        <i onClick={navigateRoute} className="bi bi-x-lg"></i>
      </div>
      <AnimalImg img={animal.imageUrl} />
      <article className="detailsInfoContainer">
        <div className="centerText">
          <p>{animal.name}</p>
          <p>Hunger status:</p>
          <HungerStatus hunger={fed}></HungerStatus>
        </div>
        <p>Medicine: {animal.medicine}</p>
        <p>Last fed: {animal.lastFed}</p>
        <p>Latin name: {animal.latinName}</p>
        <p>Born: {animal.yearOfBirth}</p>
        <span> Description: {animal.longDescription}</span>
      </article>
      {!fed && (
        <div onClick={FeedAnimal} className="feedButton">
          Feed me
        </div>
      )}
    </section>
  );
};
