import { useDispatch, useSelector } from "react-redux";
import { IAnimalsState } from "../redux/models/IAnimalsState";
import { AnimalImg } from "./styled-components/AnimalImg";
import "../styles/animals.scss";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { AlertHungry } from "./AlertHungry";
import { AnimalDetails } from "./AnimalDetails";

export const DisplayAnimals = () => {
  const animals = useSelector((state: IAnimalsState) => state.animals.value);
  const dispath = useDispatch();
  const navigate = useNavigate();

  let animalHTML = animals.map((a) => {
    return (
      <article key={a.id} className="animalContainer">
        <div className="notisContainer">
          {a.canBeFed && <AlertHungry isHungry={a} />}
        </div>
        <AnimalImg img={a.imageUrl} />

        <p className="animalName">{a.name}</p>

        <Link className="readMoreButton" to={`/animals/${a.id}`}>
          Read More
        </Link>
      </article>
    );
  });

  return (
    <section className="animalsContainer">
      <Routes>
        <Route path=":id" element={<AnimalDetails />}></Route>
      </Routes>
      {animalHTML}
    </section>
  );
};
