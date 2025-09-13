import React from "react";
import power1 from "../assets/power1.svg";
import power2 from "../assets/power2.svg";
import power3 from "../assets/power3.svg";
const QuantumAutomation = () => {
  const technologies = [
    {
      id: 1,
      image: power1,
      title: "Space & Satellite Tech",
      para: "Connecting earth through advanced space tech",
    },
    {
      id: 2,
      image: power2,
      title: "Quantum Processing",
      para: "Next-gen speed through quantum breakthroughs.",
    },
    {
      id: 3,
      image: power3,
      title: "BioTech Integration",
      para: "Where biology meets intelligent technology.",
    },
  ];
  return (
    <div className=" mt-[100px] md:mt-[178px] lg:mt-[100px]  text-white text-center flex flex-col justify-center items-center gap-10">
      <div className="max-w-[600px] flex flex-col justify-center items-center gap-5 ">
        <h1 className="herofont text-[44px] leading-11 ">
          Powering the future with quantum automation
        </h1>
        <p className="text-[#B1B1B1] text-center text-[18px] max-w-[436px]  ">
          We innovate at the forefront of technology, crafting solutions that
          shape the future.
        </p>
      </div>
      <div className=" text-start flex flex-col lg:flex-row justify-between gap- border border-[#4B4B4B] rounded-[20px]">
        <div className="border border-[#4B4B4B] p-5 rounded-l-2xl">
          <img src={power1} alt={technologies[0].title} />
          <h1 className="herofont text-[24px] my-2">{technologies[0].title}</h1>
          <p className="herofont text-[18px] text-[#B1B1B1]">
            {technologies[1].para}
          </p>
        </div>
        <div className="border border-[#4B4B4B] p-5">
          <img src={power2} alt={technologies[1].title} />
          <h1 className="herofont text-[24px] my-2">{technologies[1].title}</h1>
          <p className="herofont text-[18px] text-[#B1B1B1]">
            {technologies[1].para}
          </p>
        </div>
        <div className="border border-[#4B4B4B] p-5 rounded-r-2xl">
          <img src={power3} alt={technologies[2].title} />
          <h1 className="herofont text-[24px] my-2">{technologies[2].title}</h1>
          <p className="herofont text-[18px] text-[#B1B1B1]">
            {technologies[2].para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuantumAutomation;
