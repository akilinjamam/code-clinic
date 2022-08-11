import React from 'react';
import "./Banner.css";
import img from "../../../../Assets/img/coding.gif"

const Banner = () => {
  return (
    <div className="hero min-h-screen hero-sec text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2" >
          <img src={img} className="rounded-lg h-[300px] w-[450px] mx-auto justify-item-end " alt=''/>
        </div>
        <div className='w-1/2 px-2'>
          <h1 className="text-5xl font-bold ">Learn To Code With Us</h1>
          <p className="py-6">Learn to code with our beginer friendly learning environment. We provide simple and easy tuturials. You can learn different lamguages, frameworks and can compile your code on our platform. We prodive A to Z guidelines of MERN developers.</p>
          <button className="btn btn-glass w-[180px]">Get Started</button>

        </div>
      </div>
    </div>
  );
};

export default Banner;