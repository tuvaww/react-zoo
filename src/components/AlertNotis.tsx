import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IAlertHungryProps {
  isHungry: IAnimal;
}

export const AlertHungry = (props: IAlertHungryProps) => {
  return (
    <section className="alertContainer">
      <h1>{props.isHungry.name} is hungry</h1>
      <Link to="/">Click here to feed {props.isHungry.name}</Link>
    </section>
  );
};
