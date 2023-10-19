import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password validation checks
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one capital letter.");
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      setPasswordError("Password must contain at least one special character.");
    } else {
      // Reset password error if it's valid
      setPasswordError("");

      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          Swal.fire({
            icon: "success",
            title: "Registration successful!",
            text: "You can now log in with your credentials.",
          });
          console.log(Swal.fire)
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex justify-center h-[70vh] bg-base-200">
        <div className="">
          <h1 className="text-2xl text-center font-semibold mb-5">
            Please Register Yourself
          </h1>
          <div className="card my-10 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="your name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Have an account? Login
                  </Link>
                </label>
              </div>
              <div className="form-control">
                <input type="submit" value="SignUp" className="btn btn-primary" /> <br />
                <input
                  onClick={handleGoogleSignIn}
                  type="submit"
                  value="SignUp With Google"
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

export default SignUp;
