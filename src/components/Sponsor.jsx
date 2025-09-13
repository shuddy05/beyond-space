import React from "react";
import Space1 from "../assets/Space1.svg";
import Space2 from "../assets/Space2.svg";
import Space3 from "../assets/Space3.svg";
import Space4 from "../assets/Space4.svg";
import Space5 from "../assets/Space5.svg";
import Space6 from "../assets/Space6.svg";
import Space7 from "../assets/Space7.svg";
const Sponsor = () => {
  const sponpors = [
    Space1,
    Space7,
    Space3,
    Space5,
    Space7,
    Space5,
    Space3,
    Space6,
    Space7,
  ];
  return (
    <section>
      <div className="my-20  flex justify-between gap-2 overflow-x-scroll">
        {sponpors.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              alt="sponsors"
              className=" border-1 border-[#4B4B4B] rounded-[10px] md:rounded-[20px]"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Sponsor;
