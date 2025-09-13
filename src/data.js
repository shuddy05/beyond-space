// import power1 from "../assets/power1.svg";
// import power2 from "../assets/power2.svg";
// import power3 from "../assets/power3.svg";
import Astro1 from "../src/assets/astro1.svg";
import Astro2 from "../src/assets/astro2.svg";
import Astro3 from "../src/assets/astro3.svg";
import Astro4 from "../src/assets/astro4.svg";

export const astronauts = [
  {
    id: 1,
    image: Astro1,
    title: "Lizarius Ghuna",
    para: "Cosmos head & Co founder",
  },
  {
    id: 2,
    image: Astro2,
    title: "Mehek Chopra",
    para: "Lead satellite",
  },
  {
    id: 3,
    image: Astro3,
    title: "Fred Thomas",
    para: "Bio-tech specialist",
  },

  {
    id: 4,
    image: Astro4,
    title: "Harry James",
    para: "Lead quantum processor",
  },
];

// export const technologies = [
//   {
//     id: 1,
//     image: power1,
//     title: "Space & Satellite Tech",
//     para: "Connecting earth through advanced space tech",
//   },
//   {
//     id: 2,
//     image: power2,
//     title: "Quantum Processing",
//     para: "Next-gen speed through quantum breakthroughs.",
//   },
//   {
//     id: 3,
//     image: power3,
//     title: "BioTech Integration",
//     para: "Where biology meets intelligent technology.",
//   },
// ];

//   {
//     technologies.map((data) => {
//       return (
//         <div
//           key={data.id}
//           className="text-start border border-[#4B4B4B] p-3 rounded-tl-[20px]
//                 "
//         >
//           <img src={data.image} alt={data.title} />
//           <h1 className="text-[24px]">{data.title} </h1>
//           <p className="text-[18px] text-[#B1B1B1]">{data.para}</p>
//         </div>
//       );
//     });
//   }
