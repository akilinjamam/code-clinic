import React from "react";
import InterviewImg from "../../../../Assets/icons/interview.png";
import CoddingSkills from "../../../../Assets/icons/coding.png";
import { useNavigate } from "react-router-dom";

const DeveloperBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="hero mt-10 pt-28 justify-center">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="grid flex-grow w-1/2 mx-auto card rounded-lg place-items-start">
            <img className="w-[80px] mx-auto" src={CoddingSkills} alt="CoddingSkills" />
            <h3 className="text-lg font-bold text-[#a9aaa9] mt-6">
              FOR DEVELOPERS
            </h3>
            <h3 className="text-4xl font-bold">
              Improve Your Coding Skills.
            </h3>
            <p className="py-6 text-[#5c5e5e]">
              As a developer we need to improve our coding skills. And to
              increase this skill we need different skill assessment. (You can
              improve your assessment by clicking the button below.)
            </p>
            <button
              className="btn btn-primary w-3/6"
              onClick={() => {
                navigate("/quiz");
              }}
            >
              Try for free challenge
            </button>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow w-1/2 mx-auto card rounded-lg place-items-start">
            <img className="w-[70px] mx-auto" src={InterviewImg} alt="InterviewImg" />
            <h3 className="text-lg font-bold text-[#a9aaa9] mt-1">
              FOR INTERVIEWER
            </h3>
            <h3 className="text-4xl font-bold ">
              Interview and evaluate candidates.
            </h3>
            <p className="py-6 text-[#5c5e5e]">
              If you are a candidate.You will be asked many types of questions,
              which you can see by clicking on the button below.
            </p>
            <button
              className="btn btn-primary w-3/6"
              onClick={() => {
                navigate("/quiz");
              }}
            >
              7 day's free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperBanner;
