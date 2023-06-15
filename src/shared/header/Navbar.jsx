import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/art-school-logo.png";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import UseInstructor from "../../hooks/UseInstructor";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [cart] = useCart();
  const [darkMode, setDarkMode] = useState(false);
  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire({
        icon: "success",
        title: "Done!",
        text: "Logout Successfully!",
      });
    });
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [isAdmin] = useAdmin()
  const [isInstructor] = UseInstructor()
  const navItems = (
    <>
      <NavLink
        className="btn btn-outline bg-white border-0 border-b-4 btn-primary m-1"
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className="btn btn-outline bg-white border-0 border-b-4 btn-primary m-1"
        to="/instructors"
      >
        Instructors
      </NavLink>

      <NavLink
        className="btn btn-outline bg-white border-0 border-b-4 btn-primary m-1"
        to="/class"
      >
        Class
      </NavLink>

      {!user || isAdmin || isInstructor|| loading?'': (
        <NavLink to="/dashboard/mycart" className="btn btn-outline bg-white border-0 border-b-4 btn-primary m-1">
          Dashboard
        </NavLink>
      
      )}
      {isAdmin && (
        <NavLink to="/dashboard/allusers" className="btn btn-outline bg-white border-0 border-b-4 btn-primary m-1">
          Dashboard
        </NavLink>
      )}
      {isInstructor && (
        <NavLink to="/dashboard/addclass" className="btn btn-outline bg-white border-0 border-b-4 btn-primary m-1">
          Dashboard
        </NavLink>
      )}

      <button
        className="btn btn-outline bg-white border-0 border-b-4 btn-primary m-1"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </>
  );

  return (
    <div className=" navbar fixed z-10 text-white bg-gray-600 bg-opacity-50 max-w-screen-xl">
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
        <div className="flex items-center mr-2">
          <div>
            {user && isAdmin || isInstructor ? '' : (
              <>
                <button className="btn btn-xm btn-neutral mr-2 border-b-4 btn-outline bg-white border-0">
                  <FaShoppingCart/>
                  <div className="badge-md rounded badge-secondary">+{cart?.length || 0}</div>
                </button>
              </>
            )}
          </div>
          <div
            className=" tooltip  tooltip-primary font-bold tooltip-bottom"
            data-tip={user?.displayName}
          >
            {user ? (
              <>
                <img
                  className="w-12 mr-3 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </>
            ) : (
              ""
            )}
          </div>
          <div>
            {user ? (
              <NavLink
                onClick={handleLogout}
                className="btn btn-xs lg:btn btn-warning lg:btn-outline lg:border-0 lg:bg-white lg:border-b-4 text-white m-1"
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                className="btn lg:btn btn-outline bg-white border-b-4 border-0 btn-primary m-1"
                to="/sign-in"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;