import { useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);


    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate(location?.state ? location.state : "/")
        // navigate("/");
        Swal.fire({
          icon: "success",
          title: "Login successful!",
          text: "You can now Browse our website properly.",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/")
        Swal.fire({
          icon: "success",
          title: "Registration successful!",
          text: "You can now log in with your credentials.",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero h-[70vh] ">
        <div className="">
          <h1 className="text-2xl text-center font-semibold mb-5">
            Please Login Yourself
          </h1>
          <div className=" w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/signup" className="label-text-alt link link-hover">
                    Do not have an account? Sign Up
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
                <br />
                <input
                  onClick={handleGoogleSignIn}
                  type="submit"
                  value="Login With Google"
                  className="btn btn-primary"
                />
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


