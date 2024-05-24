import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
const Login = ({ setIsLoggedIn }) => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function changeHandler(event) {
    setformData({ ...formData, [event.target.name]: event.target.value });
  }

  function submitHandler(event) {
    event.preventDefault();

    setIsLoggedIn(true);
    toast.success("Logged In Successfully");
    <Toaster position="top-center" richColors />;
    navigate("/dashboard");
  }

  const [showPass, setShowpass] = useState(false);

  return (
    <div className="login-container">
      <form onSubmit={submitHandler} className="space-y-6">
        <label className="flex flex-col items-start">
          <p className="text-white text-sm pb-2">
            Email Address <sup>*</sup>
          </p>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter your email"
            required
            className="border-b-[1px] border-richblack-300 w-[100%] bg-richblack-700 rounded-lg outline-none text-md text-white p-3"
          />
        </label>
        <label className="flex flex-col gap-y-2">
          <p className="text-white text-sm pb-2">
            Password <sup>*</sup>
          </p>
          <div className="text-white relative flex">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter your password"
              required
              className="border-b-[1px] border-richblack-300 w-[100%] bg-richblack-700 rounded-lg outline-none text-md text-white p-3"
            />
            <span
              onClick={() => setShowpass(!showPass)}
              className="absolute right-[1rem] top-[1rem] text-richblack-100"
            >
              {showPass ? <IoEyeOff /> : <IoEye />}
            </span>
          </div>
          <Link to="#" className="text-blue-100 text-sm text-right">
            Forgot Password
          </Link>
        </label>
        <button
          type="submit"
          className=" flex justify-center gap-2 items-center font-medium rounded-md py-3 px-6 shadow-solid hover:shadow-none transition-all duration-200 max-laptop:text-xs  hover:scale-95 bg-yellow-50 text-richblack-900  w-[100%] "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
