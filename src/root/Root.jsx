import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto space-y-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
