import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
const BacktoTop = () => {
  const [isVisble, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const height = window.innerHeight;

      setIsVisible(scrollPosition > height);
    };
    // attach Scroll listener
    window.addEventListener("scroll", handleScroll);
    // clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisble) {
    return null;
  }
  return (
    <div>
      <a href="toTop">
        <button className=" w-15 h-15 flex justify-center items-center rounded-full  bg-gradient-to-br from-[#393939] to-black border-1 shadow border-white shadow-white fixed bottom-8 right-6">
          <FaArrowUp size={26} className="text-white" />
        </button>
      </a>
    </div>
  );
};

export default BacktoTop;
