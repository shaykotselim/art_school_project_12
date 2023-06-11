import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/art-school-logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire({
        icon: "success",
        title: "Done!",
        text: "Logout Successfully!",
      });
    });
  };
  const navItems = (
    <>
      <NavLink className="btn m-1 p-2" to="/">
        Home
      </NavLink>

      <NavLink className="btn m-1" to="/instructors">
        Instructors
      </NavLink>

      <NavLink className="btn m-1" to="/class">
        Class
      </NavLink>

      {user ? <NavLink className="btn btn-primary m-1">Dashboard</NavLink> : ""}

      {user ? (
        <NavLink
          onClick={handleLogout}
          className="btn btn-warning text-white m-1"
        >
          Logout
        </NavLink>
      ) : (
        <NavLink className="btn btn-primary m-1" to="/sign-in">
          Login
        </NavLink>
      )}
    </>
  );

  return (
    <div className=" navbar fixed z-10 text-white bg-white bg-opacity-50 max-w-screen-xl">
      {/* ----------------- Nav Bar small Area Here------------- */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-base-200 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>

        <div>
          <img className="w-8 h-8 lg:w-16 lg:h-16" src={logo} alt="" />
        </div>
      </div>
      {/*------------------ Nav Bar large Area here------------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      {/* user update Profile pic Area */}
      <div className="navbar-end mr-4 lg:mr-0">
        <div
          className=" tooltip  tooltip-primary font-bold tooltip-bottom"
          data-tip={user?.displayName}
        >
          {user ? (
            <>
              <img className="w-12 rounded-full" src={user.photoURL} alt="" />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
