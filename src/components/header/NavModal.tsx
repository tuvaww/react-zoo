import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

interface INavModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavModal = (props: INavModalProps) => {
  const { pathname } = useLocation();
  const [pathBeforeChange, setPathBeforeChange] = useState(pathname);
  useEffect(() => {
    setPathBeforeChange(pathname);

    if (pathname !== pathBeforeChange) {
      closeModal();
      setPathBeforeChange(pathname);
    }
  }, [pathname, pathBeforeChange]);

  const closeModal = () => {
    props.closeModal(!props.closeModal);
  };
  return (
    <section className="navModalContainer">
      <i className="bi bi-x-lg" onClick={closeModal}></i>
      <article className="linksContainer">
        <Link className="link" to="/">
          HOME
        </Link>
        <Link className="link" to="/animals">
          ANIMALS
        </Link>
      </article>
    </section>
  );
};
