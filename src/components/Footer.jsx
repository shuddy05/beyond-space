import React from "react";
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";
import Icon3 from "../assets/icon3.svg";
import Icon4 from "../assets/icon4.svg";
import myLogo from "../assets/image1.svg";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="layout ">
        <div className="text-[#898989] flex flex-col lg:flex-row justify-between items-center gap-9">
          <div className="max-w-[459px] h-[385px] border border-[#4B4B4B] rounded-[30px] flex flex-col justify-between p-5 ">
            <div>
              <img src={myLogo} alt="" />
              <p>
                Our unparalleled voyages transform the dream of space travel
                into a tranquil reality, inviting you to discover the universe
                with peace and wonder.
              </p>
            </div>
            <div>
              <p>Location:</p>
              <p>35, Austin bridge, Lagos, Nigeria.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-9 items-center max-w-[742px] ">
            <div className="flex flex-col items-center gap-2">
              {" "}
              <a
                href="#"
                className="border border-[#4B4B4B] py-8  rounded-[30px]  w-[222px] text-center"
              >
                Home
              </a>
              <a
                href="#"
                className="border border-[#4B4B4B] py-8  rounded-[30px]  w-[222px] text-center"
              >
                Projects
              </a>
              <a
                href="#"
                className="border border-[#4B4B4B] py-8  rounded-[30px]  w-[222px] text-center"
              >
                Blogs
              </a>
              <a
                href="#"
                className="border border-[#4B4B4B] py-8  rounded-[30px] w-[222px] text-center"
              >
                About
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              {" "}
              <a
                href="#"
                className="border border-[#4B4B4B] py-8  rounded-[30px]  w-[222px] text-center"
              >
                Terms
              </a>
              <a
                href="#"
                className="border border-[#4B4B4B] py-8  rounded-[30px]  w-[222px] text-center"
              >
                Privacy Notice
              </a>
              <a
                href="#"
                className="border border-[#4B4B4B] py-8  rounded-[30px]  w-[222px] text-center"
              >
                Legal Policies{" "}
              </a>
              <a
                href="#"
                className="border border-[#4B4B4B] py-8  rounded-[30px]  w-[222px] text-center"
              >
                Partnership
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="border border-[#4B4B4B] py-8  rounded-[30px]  w-[222px] ">
                {" "}
                <img src={Icon1} alt="twitter" className="block mx-auto" />
              </div>
              <div className="border border-[#4B4B4B] py-8  rounded-[30px]  w-[222px] ">
                <img src={Icon2} alt="facebook" className="block mx-auto" />
              </div>
              <div className="border border-[#4B4B4B] py-8  rounded-[30px]  w-[222px] ">
                <img src={Icon3} alt="linkdin" className="block mx-auto" />
              </div>
              <div className="border border-[#4B4B4B] py-8  rounded-[30px]  w-[222px]  ">
                <img src={Icon4} alt="reddit" className="block mx-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#4B4B4B]  rounded-[12px] text-center py-2 mt-5">
          <p className="text-[#4B4B4B]">{`Copyright Quickrooms ${year}`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
