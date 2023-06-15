import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaUsers, FaWallet } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { BiUserPin } from 'react-icons/bi';

import logo from "../assets/art-school-logo.png"
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import UseInstructor from "../hooks/UseInstructor";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {
  // TODO: load data from the server to have dynamic isAdmin
  // const [isAdmin] = useAdmin();
  const {user, loading} = useContext(AuthContext);
  if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
  }
  const [isAdmin] = useAdmin();
  const [isInstructor] = UseInstructor();
  console.log(isInstructor);
  // const isAdmin = 'instructor';
  

  return (
    <div className="drawer lg:drawer-open max-w-screen-xl mx-auto">
      <Helmet>
        <title>Art-School || Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label htmlFor="my-drawer-2"
          className="absolute top-4 right-0 btn-sm btn btn-neutral drawer-button lg:hidden">Menu</label>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-lg bg-gradient-to-r from-pink-400 to-violet-400 pb-20 text-base-content">
          <img className="w-24 ml-20 mb-12" src={logo} alt="" />

          {isAdmin && (
            <>
              {/* <li><Link to="/dashboard/mycart"><FaHome />Admin Home</Link></li> */}
              <li><Link to="/dashboard/manageclass"><SiGoogleclassroom />Manage Classes</Link></li>
              <li><Link to='/dashboard/allusers'><FaUsers />Manage Users</Link></li>
              
              <div className="divider divide-y-2">OR</div>
              <li><Link to="/"><FaHome />Home</Link></li>
            </>
          )}

          { isInstructor && (
            <>
              <li><Link to="/dashboard/home"><FaHome />Instructor Dashboard</Link></li>
              <li><Link to="/dashboard/addclass"><FaUsers />Add Class</Link></li>
              <li><Link to="/dashboard/myclass"><SiGoogleclassroom />My Class</Link></li>
              <div className="divider divide-y-2">OR</div>
              <li><Link to="/"><FaHome />Home</Link></li>
            </>
          )}

          { isAdmin || isInstructor ? '': (
            <>
              <li><Link to="/dashboard/mycart"><FaHome />Student</Link></li>
              <li><Link to="/dashboard/mycart"><SiGoogleclassroom />My Selected Class</Link></li>
              <li><Link to="/dashboard/my-enroll-class"><BiUserPin />My Enroll Class</Link></li>
              <li><Link to='/dashboard/payment-history'><FaWallet />Payment History</Link></li>
              <div className="divider divide-y-2">OR</div>
              <li><Link to="/"><FaHome />Home</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
