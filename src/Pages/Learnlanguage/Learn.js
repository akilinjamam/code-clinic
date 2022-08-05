import React from "react";
import { useNavigate } from "react-router-dom";
import "./Learn.css";

const Learn = () => {
  const languages = [
    { id: 1, name: "Learn Python" },
    { id: 2, name: "Learn SQL" },
    { id: 3, name: "Learn Java" },
    { id: 4, name: "Learn JavaScript" },
    { id: 5, name: "Learn C++" },
    { id: 6, name: "Learn C" },
    { id: 7, name: "Learn Go" },
    { id: 8, name: "Learn More" },
  ];
  const navigate = useNavigate();
  const navigateServiceDetails = (id) => {
    navigate(`/learn/${id}`);
  };

  return (
    <div className="hero justify-center lg:justify-center py-36 bg-slate-100 learn-sec">
      <div className="hero-content flex-col lg:flex-row lg:fle">
        <div className="lg:pr-10">
          <h1 className="text-5xl text-center lg:text-start">
            Choose What to Learn
          </h1>
          <p className="pt-5 text-center sm:text-justify lg:pr-10">
            Start learning programming language of your choice.
          </p>
        </div>
        <div className="grid pt-5  sm:grid-cols-2 md:grid-cols-3 gap-8 text-center font-semibold">
          {languages.map((language) => (
            <button
              key={language.id}
              className="border animate-pulse bg-gray-900 text-white justify-center rounded-3xl p-3 hover:scale-125 hover:duration-200 hover:bg-slate-100 hover:text-black"
              onClick={() => navigateServiceDetails(language.id)}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Learn;
