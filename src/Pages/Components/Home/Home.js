import React from "react";
import ScrollBtn from "../../SharedPage/ScrollBtn/ScrollBtn";
import FreeCourses from "../FreeCourses/FreeCourses";
import Banner from "./Banner/Banner";
import CompilerHome from "./CompilerHome/CompilerHome";
import DeveloperBanner from "./DeveloperSection/DeveloperBanner";
import OthersSaying from "./OthersSaying/OthersSaying";
import Summary from "./OthersSaying/Summary";
import PaidCourse from "./PaidCourse/PaidCourse";

const Home = ({ activate, setActivate }) => {
  return (
    <div>
      <Banner activate={activate} setActivate={setActivate} />
      <DeveloperBanner />
      <FreeCourses />
      <PaidCourse />

      <CompilerHome />
      <OthersSaying />
      <Summary />

      <CompilerHome/>
      <OthersSaying/>
      <Summary/>
      <ScrollBtn/>

    </div>
  );
};

export default Home;
