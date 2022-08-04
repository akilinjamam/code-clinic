import React from "react";
import Github from "../../Assets/icons/github.svg";
import Linkedin from "../../Assets/icons/linkedin.svg";
import Facebook from "../../Assets/icons/facebook.svg";

const ContactCard = ({ developer }) => {
  const { name, describe, about, git, faceBook, linkedin, img } = developer;
  return (
    <div className="card w-90 bg-slate-100 shadow-xl mt-10">
      <div className="flex p-5 mt-5">
        <figure className="w-28">
          <img
            className="border-4 border-lime-400 rounded-full w-[150px] h-[110px]"
            src={img}
            alt={name}
          />
        </figure>
        <div className="ml-5 mt-5">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p>{describe}</p>
        </div>
      </div>
      <div className="card-body pt-0">
        <h2 className="card-title">About</h2>
        <p className="text-justify">{about}</p>
        <div className="card-actions justify-center mt-3">
          <a href={git} target="_blank" rel="noReferrer">
            <img
              className="w-[40px] hover:animate-bounce"
              src={Github}
              alt=""
            />
          </a>
          <a href={faceBook} target="_blank" rel="noReferrer">
            <img
              className="w-[40px] hover:animate-bounce"
              src={Facebook}
              alt=""
            />
          </a>
          <a href={linkedin} target="_blank" rel="noReferrer">
            <img
              className="w-[40px] hover:animate-bounce"
              src={Linkedin}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
