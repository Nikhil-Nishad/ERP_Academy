import React from "react";
import profilePic from "../assets/heroPic.png";

const HeroSection = () => {
  return (
    <section className="bg-green-800 text-white py-12 px-6 h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">ERP Academy</h2>
          <p className="text-xl mb-4">Master SAP with Akshay</p>
          <p className="mb-6">
            Learn from an experienced professional and unlock endless career
            opportunities.
          </p>
          <p>
            SAP (Systems, Applications, and Products) is one of the most
            in-demand skills in the industry. Akshay brings years of expertise
            to guide you on your journey to mastering SAP.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-yellow-400 text-green-900 px-6 py-2 rounded-lg">
              Book a Free Call
            </button>
            <button className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg">
              View Services
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={profilePic} alt="Akshay Kumar" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
