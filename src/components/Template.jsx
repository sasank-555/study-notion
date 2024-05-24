import React from "react";
import frameImage from "../assets/frame.png";
import Login from "./Login";
import SignUp from "./SignUp";
import { FaGoogle } from "react-icons/fa";
const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className=" w-full  bg-richblack-900 ">
      <div className="h-fit flex pt-16 max-tablet:flex-col max-tablet:h-[116vh] w-11/12 mx-auto">
        <div className="w-[50%] p-16 pt-3 max-tablet:p-4 max-tablet:w-[100%] space-y-4">
          <div className="flex flex-col space-y-2">
            <h1 className="font-poppins font-bold text-2xl text-white">
              {title}
            </h1>
            <div className="flex flex-col">
              <span className="font-poppins text-richblack-100 text-lg">
                {desc1}
              </span>
              <span className="font-poppins text-blue-100 text-lg">
                {desc2}
              </span>
            </div>
          </div>
          {formType === "signup" ? (
            <SignUp setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} />
          )}
          <div>
            <div className="flex justify-between items-center mt-6">
              <div className="bg-richblack-700 h-[2px] w-[40%]"></div>
              <p className="text-richblack-700 text-sm">OR</p>
              <div className="bg-richblack-700 h-[2px] w-[40%] "></div>
            </div>
            <div className="flex  justify-center gap-2 items-center font-medium rounded-md py-3 px-6 shadow-solid hover:shadow-none transition-all duration-200 max-laptop:text-xs  hover:scale-95 bg-yellow-50 text-richblack-900  w-[100%] mt-9 cursor-pointer">
              <FaGoogle />
              <button>
                <p className="font-poppins">Sign Up with Google</p>
              </button>
            </div>
          </div>
        </div>
        <div className="relative mx-auto">
          <div className="relative ">
            <img src={frameImage} width={558} height={504} />
            <div className=" z-50 absolute top-6 left-6">
              <img src={image} width={558} height={504} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
