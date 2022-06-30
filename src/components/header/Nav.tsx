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
          <div className="mobileLink"></div>
          <div className="mobileLink"></div>
          <div className="mobileLink"></div>
        </article>
        <article className="desktopLinksContainer">
          <Link to="/">HOME</Link>
          <Link to="/">ANIMALS</Link>
        </article>
      </section>
    </>
  );
};
