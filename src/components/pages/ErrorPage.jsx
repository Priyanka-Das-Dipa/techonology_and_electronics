
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
// import error from "../../public/pictures/error.jpg";

const ErrorPage = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="hero h-[70vh] ">
        <div className="hero-content text-center">
          <div className="max-w-md text-center">
            <img className="w-[450px]" src="https://i.ibb.co/qD5tFjL/error-Page.png" alt="" />
            <Link className="btn btn-neutral" to="/">
              Go To Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;