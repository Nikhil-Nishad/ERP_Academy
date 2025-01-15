import React from "react";
import upcoming from "../assets/upcoming.png";

const UpcomingCourse = () => {
  return (
    <section className="bg-white text-green-800 py-12 px-6  " id="upcoming">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
          Enhance Your SAP Skills with New Modules
        </h2>
        <p className="text-lg text-green-700 leading-relaxed text-center mb-8">
          We’re excited to announce upcoming courses like SAP HANA, SAP FI, and
          more. Expand your expertise and stay ahead in the industry.
        </p>
        <div className="bg-green-800 text-white rounded-lg shadow-md p-6 flex justify-between">
          <ul className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">
              Courses Coming Soon:
            </h3>
            <li className="flex items-start">
              <span className="text-green-400 font-bold mr-3">•</span>
              <div>
                <h4 className="font-semibold text-lg">SAP HANA</h4>
                <p className="text-green-200">
                  Master real-time data analytics.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 font-bold mr-3">•</span>
              <div>
                <h4 className="font-semibold text-lg">SAP FI</h4>
                <p className="text-green-200">
                  Gain financial accounting expertise.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 font-bold mr-3">•</span>
              <div>
                <h4 className="font-semibold text-lg">SAP SD</h4>
                <p className="text-green-200">
                  Learn sales and distribution processes.
                </p>
              </div>
            </li>
          </ul>
          <div className="">
            <img src={upcoming} alt="Upcoming Courses" className="w-36 " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingCourse;
