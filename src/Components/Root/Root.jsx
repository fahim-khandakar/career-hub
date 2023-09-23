import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <div className="relative w-full bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
