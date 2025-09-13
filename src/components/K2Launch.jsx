import React from "react";
import Satellite from "../assets/k2satellite.svg";
import Checkcircle from "../assets/checkcircle.svg";
import Moonwatch from "../assets/moonview.svg";

const K2Launch = () => {
  return (
    <main>
      <section className="mt-[170px] text-white layout flex flex-col lg:flex-row justify-between gap-20  items-center">
        <img src={Satellite} alt="" />
        <div>
          <h1 className="herofont text-[58px] leading-20">
            K2-11 Satellite Launch
          </h1>
          <p className="text-[#B1B1B1] my-3 ">
            Lifting the future: K2-11 has launched — unlocking new frontiers in
            space communication and earth observation.
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <img src={Checkcircle} alt="" />
              <p>Over 100,000 viewers participated live</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={Checkcircle} alt="" />
              <p>Led by Liz.co & NASA scientists.</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={Checkcircle} alt="" />
              <p>Lunar surface data for joint research on future missions.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[100px] text-white layout flex flex-col lg:flex-row-reverse justify-between gap-20  items-center">
        <img src={Moonwatch} alt="" />
        <div>
          <h1 className="herofont text-[58px] leading-20">
            Moon watch view with NASA
          </h1>
          <p className="text-[#B1B1B1] my-3 ">
            Under the gaze of the Moon, we partnered with NASA to bring space
            closer than ever — a night of discovery, wonder, and breakthrough
            moments.
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <img src={Checkcircle} alt="" />
              <p>Educational Outreach</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={Checkcircle} alt="" />
              <p>Data Collaboration</p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={Checkcircle} alt="" />
              <p>Real-Time Public Engagement</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default K2Launch;
