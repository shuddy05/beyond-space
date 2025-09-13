import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Subscribe = () => {
  return (
    <section>
      <div className=" layout ">
        <div className="text-white  text-center">
          <div className="max-w-[727px] mx-auto">
            <h1 className="herofont  my-5 text-4xl md:text-[44px]">
              Stay in the Loop, Beyond Earth
            </h1>
            <p className="text-[#B1B1B1]  text-[18px] ">
              Join our cosmic circle — get the latest mission updates,
              behind-the-scenes insights, and discoveries sent straight to your
              inbox. No spam, just pure space magic.
            </p>
          </div>
          <div className="mx-auto border  border-[#B1B1B1] rounded-[30px] max-w-[558px] py-3 px-4 mt-[30px]">
            <form
              action="
            "
              className="flex items-center justify-between "
            >
              <input
                type="email"
                placeholder="Enter email "
                className="text-[#B1B1B1] w-[120px] md:w-auto outline-none "
              />
              <button
                type="submit"
                className="flex justify-between items-center bg-white gap-2  text-black py-2 px-4 rounded-[18px] "
              >
                Get Started{" "}
                <MdArrowOutward
                  size={30}
                  className={
                    "text-white bg-gradient-to-br from-[#393939] to-black border-1 border-white shadow-lg rounded-[14px] p-2  "
                  }
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
