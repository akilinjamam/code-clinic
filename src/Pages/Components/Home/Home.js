import React from "react";
import Learn from "../../Learnlanguage/Learn";
import About from "../About";
import Banner from "./Banner/Banner";
import DeveloperBanner from "./DeveloperSection/DeveloperBanner";

const Home = () => {
  return (
    <div>
      <Banner/>
      <DeveloperBanner />
      <Learn />
      <About />
    </div>
  );
};

export default Home;
