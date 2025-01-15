import React from "react";
import success from "../assets/success.png";

const RoadmapSap = () => {
  return (
    <section id="roadmap" className="bg-white py-12 px-6 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto items-center gap-12">
        {/* Instructor Section */}
        <div className="w-full flex justify-center">
          <img
            src={success}
            alt="Akshay Kumar"
            className="w-auto h-auto max-h-96 object-contain"
          />
        </div>

        {/* Timeline Section */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-6 text-center lg:text-left">
            Follow this roadmap to become an SAP expert:
          </h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-40 lg:left-3 top-0 h-full w-1 bg-green-900"></div>
            <ul className="timeline timeline-vertical space-y-8 pl-8 lg:pl-12">
              {[
                {
                  step: "Step 1",
                  description: "Introduction to SAP and its ecosystem",
                },
                {
                  step: "Step 2",
                  description:
                    "Hands-on learning with core modules (e.g., SAP MM, SAP HANA)",
                },
                {
                  step: "Step 3",
                  description: "Advanced skills and real-world projects",
                },
                {
                  step: "Step 4",
                  description: "Certification preparation and job assistance",
                },
                {
                  step: "Step 5",
                  description:
                    "Learn Advanced topics like SAP Fiori, SAP UI5, and more",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start relative">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full z-10"></div>
                  <div className="ml-8">
                    <h3 className="text-lg lg:text-xl font-semibold text-green-900">
                      {item.step}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSap;
