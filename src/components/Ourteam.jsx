import React from "react";
import { astronauts } from "../data";
import Astronauts from "./Astronauts";

const Ourteam = () => {
  return (
    <section>
      <div className="layout">
        <div className=" text-white text-center">
          <h1 className="herofont text-[44px]">Our incredible team</h1>
          <p className="text-[#B1B1B1] text-[18px] max-w-[607px] mx-auto mb-13 ">
            Meet the people powering innovation, collaboration, and
            extraordinary results every day.
          </p>
        </div>
        <div className="flex flex-col md:flex-wrap md:flex-row lg:flex-nowrap justify-center items-center gap-5 ">
          {astronauts.map((astronaut) => {
            return <Astronauts key={astronaut.id} {...astronaut} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Ourteam;
