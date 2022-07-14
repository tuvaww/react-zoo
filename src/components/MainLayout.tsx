import { Nav } from "./header/Nav";
import "../styles/mainLayout.scss";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};
