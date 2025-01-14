import React from "react";
import profilePic from "../assets/heroPic.png";
import sansera_work_1 from "../assets/sansera_work_1.png";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-12 px-6">
      <div className="grid grid-cols-2 max-w-7xl mx-auto items-center">
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={profilePic}
            alt="Akshay Kumar"
            className="w-full h-auto max-h-96 scale-150"
          />
        </div>
        <div className="text-center py-3">
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            Meet Your Instructor
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Hi, I’m Akshay! With over{" "}
            <span className="font-bold">6+ years</span> of experience in SAP
            consulting and training, I have helped professionals and students
            transform their careers. My hands-on experience with SAP modules
            like
            <span className="font-bold"> Material Management</span> ensures you
            get practical and industry-relevant knowledge.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-green-900 text-center mb-4">
          Companies I Have Worked With
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          <li className="bg-white shadow-lg p-4 rounded-lg border border-gray-200 hover:shadow-xl ">
            <a href="https://www.sansera.in" target="_blank" rel="noreferrer">
              <img
                src={sansera_work_1}
                alt="Sansera Limited"
                className="mx-auto mb-2 p-2 w-auto"
              />
              <p className="text-sm font-semibold text-gray-800">Sansera</p>
            </a>
          </li>
          <li className="bg-white shadow-lg p-4 rounded-lg border border-gray-200 hover:shadow-xl">
            <a href="https://www.liteon.com/" target="_blank" rel="noreferrer">
              <img
                src="/company-logo2.png"
                alt="Company 2"
                className="h-16 mx-auto mb-2"
              />
              <p className="text-sm font-semibold text-gray-800">Company 2</p>
            </a>
          </li>
          <li className="bg-white shadow-lg p-4 rounded-lg border border-gray-200 hover:shadow-xl">
            <img
              src="/company-logo3.png"
              alt="Company 3"
              className="h-16 mx-auto mb-2"
            />
            <p className="text-sm font-semibold text-gray-800">Company 3</p>
          </li>
          <li className="bg-white shadow-lg p-4 rounded-lg border border-gray-200 hover:shadow-xl">
            <img
              src="/company-logo4.png"
              alt="Company 4"
              className="h-16 mx-auto mb-2"
            />
            <p className="text-sm font-semibold text-gray-800">Company 4</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
