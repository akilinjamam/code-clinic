import React from "react";
import Learn from "../../Learnlanguage/Learn";
import About from "../About";
import Banner from "./Banner/Banner";
import DeveloperBanner from "./DeveloperSection/DeveloperBanner";
import EnrollSection from "./EnrollSection/EnrollSection";

const Home = () => {
  return (
    <div>
      <Banner/>
      <DeveloperBanner />
      <Learn />
      <EnrollSection />
      <About />
    </div>
  );
};

export default Home;
