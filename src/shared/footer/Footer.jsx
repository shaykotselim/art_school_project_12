import React from "react";
import footer from "../../assets/art-school-logo.png";
import { FaYoutube, FaFacebook, FaInstagram, FaWhatsapp, } from "react-icons/fa";
import {  SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="footer rounded-t mt-10 m p-10 bg-black  text-neutral-content">
      <img src={footer} alt="" />
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Contemporary art</a>
        <a className="link link-hover">Photorealism art</a>
        <a className="link link-hover">Modern art</a>
        <a className="link link-hover">Art Deco</a>
      </div>
      <div>
        <span className="footer-title">Info</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Blog</a>
        
      </div>
      <div>
        <span className="footer-title">Contact US</span>        
        <div>
          <a className="link link-hover text-lg flex gap-2 items-center">
            <FaWhatsapp />  +88015987655
          </a>
        </div>
        <div className="flex items-center gap-2">
        <span className="text-xl"><SiGmail/></span>
            <input type="email" className="w-full px-2 h-8 rounded" placeholder="Type Your Mail Here" />
            <span className="absolute bg-blue-500 h-8 rounded-none rounded-r p-1 right-[100px] lg:right-[312px]">Send</span>
        </div>
        
        <div className="flex gap-4">
          <a className="link link-hover text-3xl">
            <FaFacebook />
          </a>
          <a className="link link-hover text-3xl">
            <FaYoutube />
          </a>
          <a className="link link-hover text-3xl">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
