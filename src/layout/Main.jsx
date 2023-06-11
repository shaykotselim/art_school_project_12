import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('sign-in') || location.pathname.includes('sign-up')
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        {noHeaderFooter || <Navbar />}
        <Outlet />
        {noHeaderFooter || <Footer />}
      </div>
    </div>
  );
};

export default Main;
