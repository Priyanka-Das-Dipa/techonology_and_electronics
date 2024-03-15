// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { CiLight } from "react-icons/ci";
// import './index.css';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logOut");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle("dark-theme");
    const isDarkTheme = body.classList.contains("dark-theme");
    localStorage.setItem("darkTheme", isDarkTheme);
    const toggleButton = document.querySelector(".toggle");
    toggleButton.checked = isDarkTheme;
  };

  useEffect(() => {
    const isDarkTheme = localStorage.getItem("darkTheme") === "true";

    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, []);
  const navLinks = (
    <>
      <li>
        <NavLink className="underline font-medium" to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className="underline font-medium" to="/addProduct">
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink className="underline font-medium" to="/myCart">
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
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="text-xl font-bold">Technology & Electronics</a>
        </div>

        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div>
            <button onClick={toggleTheme}>
              <CiLight className="text-3xl font-extrabold mx-2"/>
            </button>
          </div>
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-center"
                >
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a>{user.email}</a>
                  </li>
                  <li>
                    <Link
                      onClick={handleLogOut}
                      className="text-red-600 font-bold hover:bg-red-300"
                      to="/login"
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link className="btn btn-sm font-medium" to="/login">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
