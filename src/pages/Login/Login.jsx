import { Link, useLocation, useNavigate } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignInUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="bg-[#F3F3F3] md:pr-20">
        <Navbar></Navbar>
      </div>
      <div className="bg-[#F3F3F3] min-h-screen text-[#403F3F]">
        <div className="flex flex-col justify-center items-center px-2">
          <div className="w-full md:w-[500px] bg-base-100 rounded-lg mt-20">
            <div className="text-center mx-10 md:mx-20">
              <h1 className="text-xl md:text-3xl font-bold mt-10">
                Login your account
              </h1>
              <div className="divider"></div>
            </div>
            <form onSubmit={handleSignInUser} className="card-body pt-0">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Login</button>
              </div>
            </form>
            <p className="text-center mb-5 text-sm">
              {" "}
              Don&apos;t have an account?{" "}
              <Link to={"/register"} className="text-red-500 font-semibold">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
