import React from "react";

const Astronauts = ({ image, title, para }) => {
  return (
    <div className="text-center border border-[#B1B1B1] max-w-[289px] max-h-[501px] rounded-[30px] p-5 ">
      <img src={image} alt={title} className={"max-w-[247px]"} />
      <h1 className="herofont text-white text-[24px]">{title}</h1>
      <p className="text-[#B1B1B1] text-[18px]">{para}</p>
    </div>
  );
};

export default Astronauts;
