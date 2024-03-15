import { FaFacebook, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className=" p-10 bg-black text-white">
      <div className="max-w-7xl  mx-auto footer border-b-2 pb-5 border-stone-500">
        <nav>
          <header className="text-lg font-semibold">Get to Know Us</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Services</a>
          <a className="link link-hover">Stores</a>
          <a className="link link-hover">Contact us</a>
        </nav>
        <nav>
          <header className="text-lg font-semibold">Customer Services </header>
          <a className="link link-hover">My Account</a>
          <a className="link link-hover">Pricing Plans</a>
          <a className="link link-hover">Terms and Conditions </a>
          <a className="link link-hover">Our Team </a>
        </nav>
        <nav>
          <header className="text-lg font-semibold">Quick Links</header>
          <a className="link link-hover">SmartPhones</a>
          <a className="link link-hover">Laptops & Tablets</a>
          <a className="link link-hover">Headphones </a>
          <a className="link link-hover">Gadgets</a>
        </nav>
        <nav>
          <header className="text-lg font-semibold">
            SignUp to Newsletter
          </header>
          <div>
            <label className="input input-bordered flex items-center gap-2 text-black">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <p className="text-xs text-slate-400 pt-2">
              Stay up to date with all the actions that we are <br />
              saved for all our customers.
            </p>
          </div>
          <div className="flex gap-5">
            <FaFacebook  className="text-2xl "/>
            <FaSkype  className="text-2xl "/>
            <FaTwitter  className="text-2xl "/>
            <FaInstagram  className="text-2xl "/>
          </div>
        </nav>
      </div>
      <p className="text-xs text-slate-500 text-center mt-3">
        © 2024 Technology & Electronics, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
