import React from "react";

const About = () => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-semibold pl-5">
        About Coders Clinic
      </h1>
      <div className="mt-5 font-semibold leading-6">
        <div className="bg-gradient-to-r from-sky-50 to-indigo-50 p-10 text-gray-700 rounded-2xl">
          <p className="font-semibold">
            Coders Clinic is a web application built to help you practice
            programming and improve your coding skills. We create simplified and
            interactive learning experiences. Learning web development should be
            easy to understand and available for everyone, everywhere! Coders
            Clinic is a learning platform for web developers, covering the
            aspects of web development.
          </p>
          <div className="pl-5 mt-10">
            <h1 className="text-4xl">Easy Learning</h1>
            <p className="mt-5">coders clinic practice easy learning. <br />
              coders clinic uses simple code examples and simple illustrations of how to use it. <br />
              coders clinic tutorials start from the basic level and move to advance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
