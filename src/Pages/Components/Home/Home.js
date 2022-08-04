import React from "react";
import Learn from "../../Learnlanguage/Learn";
import About from "../About";
import DeveloperBanner from "./DeveloperSection/DeveloperBanner";

const Home = () => {
  return (
    <div>
      <DeveloperBanner />
      <Learn />
      <About />
    </div>
  );
};

export default Home;
