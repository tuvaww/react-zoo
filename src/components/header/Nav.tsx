import { useState } from "react";
import { Link } from "react-router-dom";
import { NavModal } from "./NavModal";

export const Nav = () => {
  const [showModal, setShowModal] = useState(false);

  const handleMenuModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && <NavModal closeModal={setShowModal} />}
      <section className="navContainer">
        <article className="mobileLinksContainer" onClick={handleMenuModal}>
          <div className="hamburgerContainer">
            <div className="mobileLink"></div>
            <div className="mobileLink"></div>
            <div className="mobileLink"></div>
          </div>
        </article>

        <article className="desktopLinksContainer">
          <Link className="navLink" to="/">
            HOME
          </Link>
          <Link className="navLink" to="/animals">
            ANIMALS
          </Link>
        </article>
        <div className="spaceModifier">
          <h1>ZOO</h1>
        </div>
      </section>
    </>
  );
};
