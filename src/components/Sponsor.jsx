import React from "react";
import space1 from "../assets/space1.svg";
import space2 from "../assets/space2.svg";
import space3 from "../assets/space3.svg";
import space4 from "../assets/space4.svg";
import space5 from "../assets/space5.svg";
import space6 from "../assets/space6.svg";
import space7 from "../assets/space7.svg";
const Sponsor = () => {
  const sponpors = [
    space1,
    space7,
    space3,
    space5,
    space7,
    space5,
    space3,
    space6,
    space7,
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
