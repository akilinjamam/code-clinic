import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/VNqcxYK/hero-img.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Learn To Code With Us</h1>
            <p className="py-6">Learn to code with our beginer friendly learning environment. We provide simple and easy tuturials. You can learn different lamguages, frameworks and can compile your code on our platform. We prodive A to Z guidelines of MERN developers.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;