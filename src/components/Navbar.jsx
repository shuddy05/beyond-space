import React from "react";
import myLogo from "../assets/image1.svg";
const Navbar = () => {
  return (
    <header className="herob sticky top-0 bg-black text-white border-b-1 border-b-white">
      <nav id="toTop" className="layout ">
        <div className="flex justify-between ">
          <div className="flex justify-between gap-20 ">
            <div className=" border border-[#4B4B4B] py-3 px-3 rounded-xl">
              <img src={myLogo} alt="" />
            </div>
            <div className="hidden md:flex justify-between items-center gap-5 lg:gap-15 border border-[#4B4B4B] py-2 px-3 rounded-xl">
              <a href="#">Home</a>
              <a href="#">Projects</a>
              <a href="#">Resources</a>
              <a href="#">Blogs</a>
              <a href="#">About</a>
            </div>
          </div>
          <div>
            <button className="text-black bg-white rounded-xl py-3 px-5">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
