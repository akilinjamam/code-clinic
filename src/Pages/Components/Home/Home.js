import React from "react";
import Learn from "../../Learnlanguage/Learn";
import Banner from "./Banner/Banner";
import CompilerHome from "./CompilerHome/CompilerHome";
import DeveloperBanner from "./DeveloperSection/DeveloperBanner";
import EnrollSection from "./EnrollSection/EnrollSection";

const Home = () => {
  return (
    <div>
      <Banner/>
      <DeveloperBanner />
      <Learn />
      <EnrollSection />
      <CompilerHome/>
    </div>
  );
};

export default Home;
