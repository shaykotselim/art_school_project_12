import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaWallet } from 'react-icons/fa';
import {SiGoogleclassroom } from 'react-icons/si';
import {BiUserPin} from 'react-icons/bi';

import logo from "../assets/art-school-logo.png"

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open max-w-screen-xl mx-auto">
        
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet/>
        <label htmlFor="my-drawer-2" 
        className="btn btn-primary drawer-button lg:hidden">Dashboard</label>

        
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-lg bg-gradient-to-r from-pink-400 to-violet-400 pb-20 text-base-content">
            <img className="w-24 ml-20 mb-12 " src={logo} alt="" />
          <li><Link to="/dashboard/mycart"><SiGoogleclassroom/>My Selected Class</Link></li>
          <li><Link><BiUserPin/>My Enroll Class</Link></li>
          <li><Link><FaWallet/>Payment History</Link></li>
          <div className="divider divide-y-2">OR</div> 

            <li><Link to="/"><FaHome/>Home</Link></li>

        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
