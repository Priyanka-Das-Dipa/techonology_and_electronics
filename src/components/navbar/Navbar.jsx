// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = (
        <>
          <li>
            <NavLink className="underline font-medium" to="/">
              Home
            </NavLink>
          </li>
         
          <li>
            <NavLink className="underline font-medium" to="/blogs">
            Add Product
            </NavLink>
          </li>
          <li>
          <NavLink className="underline font-medium" to="/classes">
          My Cart
            </NavLink>
          </li>
        </>
      );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* navlinks */}
              {navLinks}
            </ul>
          </div>
          {/* <FontAwesomeIcon icon="fa-solid fa-laptop-mobile" /> */}
          <a className=" normal-case text-xl font-bold">Technology & Electronics</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* navlinks */}
          {navLinks}
          
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn font-medium" to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
