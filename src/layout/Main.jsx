import { Outlet } from "react-router-dom";
// import Nav from "../components/Nav/Nav";
import Fotter from "../components/Fotter/fotter";

const Main = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Outlet></Outlet>
      <Fotter />
    </div>
  );
};

export default Main;
