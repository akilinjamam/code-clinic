import React from "react";
import { useNavigate } from "react-router-dom";
import "./Learn.css";

const Learn = () => {
  const navigate = useNavigate();

  return (
    <div className="hero justify-center lg:justify-center py-24 bg-slate-100 learn-sec">
      <div className="hero-content flex-col lg:flex-row lg:fle">
        <div className="lg:pr-10">
          <h1 className="text-5xl text-center lg:text-start">
            Choose What to Learn
          </h1>
          <p className="pt-5 text-center text-[#626363] sm:text-justify ">
            Start learning programming language of your choice.
          </p>
        </div>
        <div className="grid pt-5  sm:grid-cols-2 md:grid-cols-3 gap-8 text-center font-semibold">
          <button
            className="border animate-pulse bg-gray-900 text-white justify-center rounded-3xl p-3 hover:scale-125 hover:duration-500 hover:bg-slate-100 hover:text-black"
            onClick={() => navigate("/courses")}
          >Learn HTML</button>
          <button
            className="border animate-pulse bg-gray-900 text-white justify-center rounded-3xl p-3 hover:scale-125 hover:duration-500 hover:bg-slate-100 hover:text-black"
            onClick={() => navigate("/courses")}
          >Learn CSS</button>
          <button
            className="border animate-pulse bg-gray-900 text-white justify-center rounded-3xl p-3 hover:scale-125 hover:duration-500 hover:bg-slate-100 hover:text-black"
            onClick={() => navigate("/courses/javascriptCourse")}
          >Learn JavaScript</button>
          <button
            className="border animate-pulse bg-gray-900 text-white justify-center rounded-3xl p-3 hover:scale-125 hover:duration-500 hover:bg-slate-100 hover:text-black"
            onClick={() => navigate("/courses")}
          >Learn Python</button>
          <button
            className="border animate-pulse bg-gray-900 text-white justify-center rounded-3xl p-3 hover:scale-125 hover:duration-500 hover:bg-slate-100 hover:text-black"
            onClick={() => navigate("/courses/cpp")}
          >Learn C</button>
          <button
            className="border animate-pulse bg-gray-900 text-white justify-center rounded-3xl p-3 hover:scale-125 hover:duration-500 hover:bg-slate-100 hover:text-black"
            onClick={() => navigate("/courses/cpp")}
          >Learn C++</button>
        </div>
      </div>
    </div>
  );
};
export default Learn;
