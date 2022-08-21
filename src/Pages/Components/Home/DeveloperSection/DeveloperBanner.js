import React from "react";
import InterviewImg from "../../../../Assets/icons/interview.png";
import CoddingSkills from "../../../../Assets/icons/coding.png";
import { useNavigate } from "react-router-dom";

const DeveloperBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="hero pt-36 px-5 bg-[#F1F1F1] text-justify">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="flex flex-col lg:flex-row">
          <div className="grid flex-grow w-full px-5 lg:px-0 lg:w-1/2 mx-auto card rounded-lg ">
            <img
              className="w-[80px] mx-auto"
              src={CoddingSkills}
              alt="CoddingSkills"
            />
            <h3 className="text-lg font-bold text-center text-[#adafad] mt-6">
              FOR DEVELOPERS
            </h3>
            <h3 className="text-4xl font-bold text-slate-800">
              Improve your coding skills.
            </h3>
            <p className="py-6 text-[#626363]">
              As a developer we need to improve our coding skills. And to
              increase this skill we need different skill assessment. You can
              improve your assessment by clicking the button below. assessment
              by clicking the button belowlicking the button
            </p>
            <button
              className="btn btn-glass w-[200px]"
              onClick={() => {
                navigate("/settings");
              }}
            >
              7 day's free trial
            </button>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow w-full px-5 lg:px-0 lg:w-1/2 mx-auto card rounded-lg  ">
            <img
              className="w-[80px] mx-auto"
              src={InterviewImg}
              alt="InterviewImg"
            />
            <h3 className="text-lg font-bold text-center text-[#adafad] mt-6">
              FOR INTERVIEWER
            </h3>
            <h3 className="text-4xl font-bold text-slate-800">
              Interview Preparation.
            </h3>
            <p className="py-6 text-[#8b8d8d]">
              As a developer we need to improve our coding skills. And to
              increase this skill we need different skill assessment. You can
              improve your assessment by clicking the button below. assessment
              by clicking the button belowlicking the button
            </p>
            <button
              className="btn btn-glass w-[200px]"
              onClick={() => {
                navigate("/quiz");
              }}
            >
              Take Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperBanner;
