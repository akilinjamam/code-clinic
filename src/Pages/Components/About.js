import React from "react";

const About = () => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-semibold text-sky-700 pl-5">
        About Coder Clinic
      </h1>
      <div className="mt-5 font-semibold">
        <div className="bg-gradient-to-r from-sky-100 to-indigo-100 p-10 text-gray-700 rounded-2xl">
          <p className="font-semibold">
            Code Clinic is a web application built to help you practice
            programming and improve your coding skills. We create simplified and
            interactive learning experiences. Learning web development should be
            easy to understand and available for everyone, everywhere! Code
            Clinic is a learning plartform for web developers, covering the
            aspects of web development.
          </p>
        </div>
      </div>
      <div className="mt-5 text-center p-5">
        <h2 className="text-4xl font-bold lg:text-fuchsia-700">
          A Student Will Learn
        </h2>
        <div className="flex flex-col w-full lg:flex-row mt-5">
          <div className="grid flex-grow card rounded-box place-items-center items-start">
            <h1 className="text-3xl font-bold underline">Back-End</h1>
            <div className="mt-5">
              <ul className="flex flex-col gap-2">
                <li className="btn bg-[#a991f7]">HTML</li>
                <li className="btn bg-[#a991f7]">CSS</li>
                <li className="btn bg-[#a991f7]">Jscript</li>
                <li className="btn bg-[#a991f7]">React</li>
              </ul>
            </div>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow card rounded-box place-items-center items-start">
            <h1 className="text-3xl font-bold underline">Back-End</h1>
            <div className="">
              <ul className="flex flex-col gap-2">
                <li className="btn bg-[#37cdbe]">NodeJS</li>
                <li className="btn bg-[#37cdbe]">ExpressJS</li>
                <li className="btn bg-[#37cdbe]">MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
