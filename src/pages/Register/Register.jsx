import { Link } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    // console.log(e.currentUser);
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="bg-base-200 md:pr-20">
        <Navbar></Navbar>
      </div>
      <div className="bg-base-200 min-h-screen text-[#403F3F]">
        <div className="flex flex-col justify-center items-center px-2">
          <div className="w-full md:w-[500px] bg-base-100 rounded-lg mt-20">
            <div className="text-center mx-10 md:mx-20">
              <h1 className="text-xl md:text-3xl font-bold mt-10">
                Register your account
              </h1>
              <div className="divider"></div>
            </div>
            <form onSubmit={handleRegister} className="card-body pt-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="bg-[#F3F3F3] outline-0 px-4 py-3 rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your PhotoURL"
                  className="bg-[#F3F3F3] outline-0 px-4 py-3 rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="bg-[#F3F3F3] outline-0 px-4 py-3 rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="bg-[#F3F3F3] outline-0 px-4 py-3 rounded-md"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Register</button>
              </div>
            </form>
            <p className="text-center mb-5 text-sm">
              {" "}
              Already have an account?{" "}
              <Link to={"/login"} className="text-red-500 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
