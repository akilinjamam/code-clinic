import React from "react";
import Learn from "../../Learnlanguage/Learn";
import About from "../About";
import Banner from "./Banner/Banner";
import CompilerHome from "./CompilerHome/CompilerHome";
import DeveloperBanner from "./DeveloperSection/DeveloperBanner";

const Home = () => {
  return (
    <div>
      <Banner/>
      <DeveloperBanner />
      <Learn />
      <About />
      <CompilerHome/>
    </div>
  );
};

export default Home;
