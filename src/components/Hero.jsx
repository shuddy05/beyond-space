import React from "react";
import myPhoto2 from "../assets/image2.svg";
import myPhoto3 from "../assets/image3.svg";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <section className=" bg-black">
      <div className=" layout flex flex-col lg:flex-row justify-between items-center gap-10 text-white">
        <div className="flex flex-col items-center text-center lg:text-start lg:items-start">
          <div className=" flex gap-5 rounded-xl bg-[#FFFFFF12] w-[300px] py-1">
            <img src={myPhoto2} alt="" />
            <p>Join over 34k happy clients</p>
          </div>
          <h1 className="herofont leading-[100%] my-5 text-4xl md:text-[80px]">
            Beyond Space Beyond Limit.
          </h1>
          <p className="text-[#B1B1B1]  text-[18px] max-w-[423px] mb-5">
            We innovate at the forefront of technology, crafting solutions that
            shape the future.
          </p>
          <div>
            <button className="flex justify-between items-center bg-white text-[18px] w-[185px]  text-black py-2 px-7 rounded-[20px]">
              Get Started{" "}
              <MdArrowOutward
                size={33}
                className={
                  "text-white bg-gradient-to-br from-[#393939] to-black border-1 border-white shadow-lg rounded-[14px] p-2  "
                }
              />
            </button>
          </div>
        </div>
        <img src={myPhoto3} alt="" />
      </div>
    </section>
  );
};

export default Hero;
