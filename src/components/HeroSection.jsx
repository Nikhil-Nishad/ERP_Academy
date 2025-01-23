import React from "react";
import profilePic from "../assets/heroPic.webp";

const HeroSection = () => {
  return (
    <section className="bg-green-800 text-white px-12 py-2">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
              ERP Academy
            </h1>
          </div>
          <p className="text-xl mb-4 font-semibold text-yellow-400">Master SAP with Akshay</p>
          <p className="font-bold text-lg">
            Learn from an experienced professional and unlock endless career
            opportunities.
          </p>
          <p className="text-lg">
            SAP (Systems, Applications, and Products) is one of the most
            in-demand skills in the industry. Akshay brings years of expertise
            to guide you on your journey to mastering SAP.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 my-8">
            <a href="#contact">
              <button className="bg-yellow-400 text-green-900 px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition-all">
                Book a Free Call
              </button>
            </a>
            <a href="#course">
              <button className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition-all">
                View Services
              </button>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <img
            src={profilePic}
            alt="Akshay Kumar"
            className="w-full max-w-xs md:max-w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
