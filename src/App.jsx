import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsor from "./components/Sponsor";
import Empowering from "./components/Empowering";
import QuantumAutomation from "./components/QuantumAutomation";
import K2Launch from "./components/K2Launch";
import Globalimpact from "./components/Globalimpact";
import Ourteam from "./components/Ourteam";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import BacktoTop from "./components/BacktoTop";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sponsor />
      <Empowering />
      <QuantumAutomation />
      <K2Launch />
      <Globalimpact />
      <Ourteam />
      <Subscribe />
      <Footer />
      <BacktoTop />
    </div>
  );
};

export default App;
