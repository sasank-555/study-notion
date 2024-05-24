import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Toaster, toast } from "sonner";
const SignUp = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPass, setShowpass] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords Dont match");
    } else {
      setIsLoggedIn(true);
      toast.success("Signed Up");
      <Toaster richColors />;
      navigate("/dashboard");
    }
  }

  const [std, setStd] = useState(true);

  return (
    <div>
      <div className="text-white flex flex-col gap-4">
        <div className="text-richblack-200 flex  justify-between bg-richblack-800 px-5 py-1 rounded-full font-poppins text-xl transition-all duration-500">
          <button
            className={`" px-10 py-1 rounded-full " ${
              std
                ? "bg-yellow-50 text-richblack-900"
                : "bg-richblack-800 hover:bg-richblack-700 "
            }`}
            onClick={() => setStd(true)}
          >
            Student
          </button>
          <button
            className={`" px-10 py-1 rounded-full transition-all duration-500" ${
              !std
                ? "bg-yellow-50 text-richblack-900"
                : "bg-richblack-800  hover:bg-richblack-700"
            }`}
            onClick={() => setStd(false)}
          >
            Instructor
          </button>
        </div>
        <form onSubmit={submitHandler} className=" flex flex-col gap-y-4">
          {/* firstname and lastname */}
          <div className="flex gap-x-2">
            <label className="w-1/2 flex flex-col gap-y-2">
              <p>
                First Name <sup>*</sup>
              </p>
              <input
                type="text"
                name="firstname"
                onChange={changeHandler}
                placeholder="Enter First Name"
                id="firstname"
                value={formData.firstname}
                required
                className="border-b-[1px] border-richblack-300 w-[100%] bg-richblack-700 rounded-lg outline-none text-md text-white p-3"
              />
            </label>
            <label className="w-1/2 flex flex-col gap-y-2">
              <p>
                Last Name <sup>*</sup>
              </p>
              <input
                type="text"
                name="lastname"
                onChange={changeHandler}
                placeholder="Enter Last Name"
                id="lastname"
                value={formData.lastname}
                required
                className="border-b-[1px] border-richblack-300 w-[100%] bg-richblack-700 rounded-lg outline-none text-md text-white p-3"
              />
            </label>
          </div>
          {/* email */}
          <label className="flex flex-col gap-y-2">
            <p>
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
          <div className="flex flex-col gap-y-4">
            <label className="flex flex-col gap-y-2">
              <p>
                Create Password <sup>*</sup>
              </p>
              <div className="relative">
                <input
                  required
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={changeHandler}
                  placeholder="Enter Password"
                  className="border-b-[1px] border-richblack-300 w-[100%] bg-richblack-700 rounded-lg outline-none text-md text-white p-3"
                />
                <span
                  type="button"
                  onClick={() => setShowpass(!showPass)}
                  className="absolute right-[1rem] top-[1rem] text-richblack-100"
                >
                  {!showPass ? <IoEye /> : <IoEyeOff />}
                </span>
              </div>
            </label>

            <label className="flex flex-col gap-y-2">
              <p>
                Confirm Password <sup>*</sup>
              </p>
              <div className="relative">
                <input
                  required
                  type={showPass ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={changeHandler}
                  placeholder="Enter Password again"
                  className="border-b-[1px] border-richblack-300 w-[100%] bg-richblack-700 rounded-lg outline-none text-md text-white p-3"
                />
                <span
                  type="button"
                  onClick={() => setShowpass(!showPass)}
                  className="absolute right-[1rem] top-[1rem] text-richblack-100"
                >
                  {!showPass ? <IoEye /> : <IoEyeOff />}
                </span>
              </div>
            </label>
          </div>
          <button
            type="submit"
            className=" mt-8 flex justify-center gap-2 items-center font-medium rounded-md py-3 px-6 shadow-solid hover:shadow-none transition-all duration-200 max-laptop:text-xs  hover:scale-95 bg-yellow-50 text-richblack-900  w-[100%] "
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
