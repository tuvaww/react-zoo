import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IAlertHungryProps {
  isHungry: IAnimal;
}

export const AlertHungry = (props: IAlertHungryProps) => {
  const getLink = () => {
    if (props.isHungry.id === 10000) {
      return (
        <Link className="linkToFeed" to="/animals">
          Click here to feed {props.isHungry.name}
        </Link>
      );
    } else {
      return (
        <Link className="linkToFeed" to={`/animals/${props.isHungry.id}`}>
          Click here to feed {props.isHungry.name}
        </Link>
      );
    }
  };

  return (
    <section className="alertContainer">
      <h1>{props.isHungry.name} is hungry</h1>
      {getLink()}
    </section>
  );
};
