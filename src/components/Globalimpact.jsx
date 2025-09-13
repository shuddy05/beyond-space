import React from "react";
import Globe from "../assets/globe.svg";
const Globalimpact = () => {
  return (
    <section>
      <div className="layout">
        <h1 className="herofont text-white text-center text-4xl md:text-[58px]">
          Creating global impact
        </h1>
        <img src={Globe} alt="" />
      </div>
    </section>
  );
};

export default Globalimpact;
