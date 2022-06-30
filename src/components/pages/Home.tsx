import { useDispatch, useSelector } from "react-redux";
import { IAnimalsState } from "../../redux/models/IAnimalsState";
import "../../styles/home.scss";
import { Nav } from "../header/Nav";

export const Home = () => {
  return (
    <>
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
