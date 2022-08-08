import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="hero min-h-screen hero-sec  text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/VNqcxYK/hero-img.jpg" className="max-w-sm rounded-lg shadow-2x w-2/5" alt=''/>
          <div className='w-3/5 px-2'>
            <h1 className="text-5xl font-bold ">Learn To Code With Us</h1>
            <p className="py-6">Learn to code with our beginer friendly learning environment. We provide simple and easy tuturials. You can learn different lamguages, frameworks and can compile your code on our platform. We prodive A to Z guidelines of MERN developers.</p>
            <button className="btn btn-primary w-2/6">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;