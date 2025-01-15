import React from "react";
import profilePic from "../assets/heroPic.png";
import sansera_work_1 from "../assets/sansera_work_1.png";
import liteon_work_2 from "../assets/liteon_work_2.png";
import motherson_work_3 from "../assets/motherson_work_3.png";
import wiredsoft_work_4 from "../assets/wiredsoft_work_4.png";
import arrow from "../assets/arrow.png";
import line from "../assets/line.png";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center relative gap-6">
        <div className="relative flex justify-center md:justify-start">
          <img
            src={arrow}
            alt="arrow"
            className="hidden md:block w-36 absolute left-0 top-0 -rotate-45"
          />
          <img
            src={profilePic}
            alt="Akshay Kumar"
            className="w-3/4 max-w-sm h-auto rounded-full md:scale-125"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            Meet Your Instructor
          </h2>
          <p className="text-lg text-green-800 leading-relaxed max-w-3xl mx-auto md:mx-0">
            Hi, I’m Akshay! With over{" "}
            <span className="font-bold">6+ years</span> of experience in SAP
            consulting and training, I have helped professionals and students
            transform their careers. My hands-on experience with SAP modules
            like <span className="font-bold">Material Management</span> ensures
            you get practical and industry-relevant knowledge.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-green-900 text-center mb-6">
          Companies I Have Worked With
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          <li className="bg-white shadow-lg p-4 rounded-lg border border-gray-200 hover:shadow-xl">
            <a href="https://www.sansera.in" target="_blank" rel="noreferrer">
              <img
                src={sansera_work_1}
                alt="Sansera Limited"
                className="mx-auto mb-2 p-2 w-full h-16 object-contain"
              />
              <p className="text-sm font-semibold text-gray-800">Sansera</p>
            </a>
          </li>
          <li className="bg-white shadow-lg p-4 rounded-lg border border-gray-200 hover:shadow-xl">
            <a href="https://www.liteon.com/" target="_blank" rel="noreferrer">
              <img
                src={liteon_work_2}
                alt="Lite-On"
                className="mx-auto mb-2 p-2 w-full h-16 object-contain"
              />
              <p className="text-sm font-semibold text-gray-800">Lite-On</p>
            </a>
          </li>
          <li className="bg-white shadow-lg p-4 rounded-lg border border-gray-200 hover:shadow-xl">
            <a
              href="https://www.motherson.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={motherson_work_3}
                alt="Motherson"
                className="mx-auto mb-2 p-2 w-full h-16 object-contain"
              />
              <p className="text-sm font-semibold text-gray-800">Motherson</p>
            </a>
          </li>
          <li className="bg-white shadow-lg p-4 rounded-lg border border-gray-200 hover:shadow-xl">
            <a
              href="https://www.wiredsoft.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={wiredsoft_work_4}
                alt="Wiredsoft"
                className="mx-auto mb-2 p-2 w-full h-16 object-contain"
              />
              <p className="text-sm font-semibold text-gray-800">Wiredsoft</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
