import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAnimalsState } from "../../redux/models/IAnimalsState";
import "../../styles/home.scss";
import { Nav } from "../header/Nav";

export const Home = () => {
  const animals = useSelector((state: IAnimalsState) => state.animals.value);
  const dispath = useDispatch();
  const [notis, setNotis] = useState(false);

  useEffect(() => {
    animals.map((a) => {
      if (a.canBeFed) {
        setNotis(true);
      }
    });
  }, []);

  return (
    <>
      {notis && <h1>HEEEEEjjjj</h1>}
      <section className="homeContainer">
        <section className="headerContainer">
          <article className="homeImgContainer">
            <Nav />
            <h1>ZOO</h1>

            <div className="textContainer">
              <p className="homePageText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text
              </p>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};
