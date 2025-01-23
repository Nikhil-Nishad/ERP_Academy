import React from "react";
import profilePic from "../assets/heroPic.webp";
import sansera_work_1 from "../assets/sansera_work_1.png";
import liteon_work_2 from "../assets/liteon_work_2.png";
import motherson_work_3 from "../assets/motherson_work_3.png";
import wiredsoft_work_4 from "../assets/wiredsoft_work_4.png";
import arrow from "../assets/arrow.png";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white p-6">
      {/* Profile Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto items-center gap-10">
        {/* Profile Image */}
        <div
          className="relative flex justify-center md:justify-start"
        >
          <img
            src={arrow}
            alt="Decorative arrow pointing to the instructor"
            className="hidden md:block w-32 absolute left-2/3 top-0 -rotate-45 transform -translate-x-1/2 scale-125"
          />
          <img
            src={profilePic}
            alt="Akshay Kumar - SAP Instructor"
            className="w-3/4 max-w-sm h-auto rounded-full md:scale-110"
          />
        </div>

        {/* Profile Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Meet Your Instructor
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Hi, I’m <span className="font-bold">Akshay!</span> With over{" "}
            <span className="font-bold">6+ years</span> of experience in SAP
            consulting and training, I have helped professionals and students
            transform their careers. My expertise in SAP modules like{" "}
            <span className="font-bold">Material Management</span> ensures
            practical and industry-relevant knowledge for all my learners.
          </p>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold text-green-900 text-center mb-8">
          Companies I Have Worked With
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto">
          {/* Company Cards */}
          {[
            {
              name: "Sansera",
              img: sansera_work_1,
              link: "https://www.sansera.in",
            },
            {
              name: "Lite-On",
              img: liteon_work_2,
              link: "https://www.liteon.com/",
            },
            {
              name: "Motherson",
              img: motherson_work_3,
              link: "https://www.motherson.com/",
            },
            {
              name: "Wiredsoft",
              img: wiredsoft_work_4,
              link: "https://www.wiredsoft.org/",
            },
          ].map((company, index) => (
            <li
              key={index}
              className="bg-white shadow-lg p-4 rounded-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform items-center justify-center"
            >
              <a href={company.link} target="_blank" rel="noreferrer">
                <img
                  src={company.img}
                  alt={`${company.name} logo`}
                  className="mx-auto mb-3 p-4 w-full h-16 object-contain"
                />
                <p className="text-sm font-semibold text-gray-800">
                  {company.name}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
