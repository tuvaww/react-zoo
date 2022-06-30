import { useDispatch, useSelector } from "react-redux";
import { IAnimalsState } from "../redux/models/IAnimalsState";
import { AnimalImg } from "./styled-components/AnimalImg";
import "../styles/animals.scss";
import { useNavigate } from "react-router-dom";
import { AlertHungry } from "./AlertNotis";

export const DisplayAnimals = () => {
  const animals = useSelector((state: IAnimalsState) => state.animals.value);
  const dispath = useDispatch();
  const navigate = useNavigate();

  console.log("i display", animals);

  const navigateToDetails = () => {
    navigate("/animals/:id");
  };

  let animalHTML = animals.map((a) => {
    return (
      <article key={a.id} className="animalContainer">
        <AnimalImg img={a.imageUrl} />
        {a.canBeFed && <AlertHungry isHungry={a} />}

        <p className="animalName">{a.name}</p>
        <div className="readMoreButton" onClick={navigateToDetails}>
          Read More
        </div>
      </article>
    );
  });

  return <section className="animalsContainer">{animalHTML}</section>;
};
