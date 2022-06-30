import { Link } from "react-router-dom";

interface INavModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavModal = (props: INavModalProps) => {
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
        <Link className="link" to="/">
          ANIMALS
        </Link>
      </article>
    </section>
  );
};
