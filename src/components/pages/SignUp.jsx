import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const SignUp = () => {

  const {createUser} = useContext(AuthContext)
  console.log(createUser)

  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)

    createUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <div>
      <div className="hero h-[70vh] bg-base-200">
        <div className="">
          <h1 className="text-2xl text-center font-semibold mb-5">
            Please Register Yourself
          </h1>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
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
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Have an account? Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="SignUp" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
