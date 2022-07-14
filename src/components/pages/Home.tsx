import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAnimal } from "../../models/IAnimal";
import { IAnimalsState } from "../../redux/models/IAnimalsState";
import "../../styles/home.scss";
import { AlertHungry } from "../AlertHungry";
import { Nav } from "../header/Nav";
import { ListHandler } from "../ListHandler";

export const Home = () => {
  const animals = useSelector((state: IAnimalsState) => state.animals.value);
  const dispath = useDispatch();
  const [notis, setNotis] = useState(false);
  let notisAnimal: IAnimal = {
    id: 10000,
    imageUrl: "",
    isFed: false,
    lastFed: "",
    latinName: "",
    longDescription: "",
    medicine: "",
    name: "A animal",
    shortDescription: "",
    yearOfBirth: 0,
    canBeFed: true,
  };

  useEffect(() => {
    if (animals.length <= 0) {
      <ListHandler />;
    } else {
      animals.map((a) => {
        if (a.canBeFed) {
          setNotis(true);
        }
      });
    }
  }, [animals]);
  console.log("animals", animals);

  return (
    <>
      <section className="homeContainer">
        <article className="homeImgContainer">
          {notis && <AlertHungry isHungry={notisAnimal} />}

          <div className="textContainer">
            <p className="homePageText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </article>
      </section>
    </>
  );
};
