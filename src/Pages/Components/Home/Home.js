import React from "react";
import FreeCourses from "../FreeCourses/FreeCourses";
import Banner from "./Banner/Banner";
import CompilerHome from "./CompilerHome/CompilerHome";
import DeveloperBanner from "./DeveloperSection/DeveloperBanner";
import EnrollSection from "./EnrollSection/EnrollSection";
import PaidCourse from "./PaidCourse/PaidCourse";

const Home = () => {
  return (
    <div>
      <Banner/>
      <DeveloperBanner />
      <FreeCourses/>
      <PaidCourse />
      <CompilerHome/>
    </div>
  );
};

export default Home;
