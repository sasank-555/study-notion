import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { Toaster, toast } from "sonner";

const Navbar = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;

  return (
    <div className="bg-richblack-900 w-full">
      <div className=" w-11/12 mx-auto flex justify-between bg-richblack-900 items-center py-3 px-6">
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
        <nav>
          <ul className="flex gap-4 font-poppins text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="text-white flex gap-4 items-center">
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button
                  className="py-2 px-4 bg-richblack-800 border-2 border-richblack-700 rounded-md"
                  // onClick={() => {
                  //   setIsLoggedIn(true);
                  //   toast.success("Logged In", {
                  //     position: "top-center",
                  //     autoClose: 3000,
                  //     hideProgressBar: false,
                  //     closeOnClick: true,
                  //     pauseOnHover: false,
                  //     draggable: true,
                  //     progress: undefined,
                  //     theme: "colored",
                  //     transition: Bounce,
                  //   });
                  // }}
                >
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="py-2 px-4 bg-richblack-800 border-2 border-richblack-700 rounded-md">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard">
                <button className="py-2 px-4 bg-richblack-800 border-2 border-richblack-700 rounded-md">
                  Dashboard
                </button>
              </Link>
              <Link to="/">
                <button
                  className="py-2 px-4 bg-richblack-800 border-2 border-richblack-700 rounded-md"
                  onClick={() => {
                    toast.success("Logged Out");
                    <Toaster richColors />;
                    setIsLoggedIn(false);
                  }}
                >
                  Log Out
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
