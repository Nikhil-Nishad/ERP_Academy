import React from "react";
import sap from "../assets/sap.webp";

const SapBenefit = () => {
  return (
    <section id="about" className="bg-green-800 py-12 px-6">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto items-center justify-between h-full">
        {/* Text Section */}
        <div className="text-center lg:text-left py-3 flex-1">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            The Power of SAP in the Industry
          </h2>
          <p className="text-base lg:text-xl text-white leading-relaxed max-w-3xl mx-auto lg:mx-0">
            SAP is the backbone of business operations across industries. From
            finance and supply chain to HR and customer relationship management,
            SAP drives efficiency and innovation.
          </p>

          <h2 className="mb-4 text-xl font-semibold text-white text-justify pt-10">
            Benefits Of SAP:
          </h2>
          <ul className="space-y-4 text-white list-inside">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                className="mr-2"
              >
                <circle cx="24" cy="24" r="20" fill="#3ddab4"></circle>
                <polygon
                  fill="#c1f5ea"
                  points="39.091,17.515 35.015,13.604 22.775,26.233 16.679,20.433 12.768,24.509 18.843,30.289 22.92,34.179 26.86,30.119"
                ></polygon>
              </svg>
              High demand in the job market
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                className="mr-2"
              >
                <circle cx="24" cy="24" r="20" fill="#3ddab4"></circle>
                <polygon
                  fill="#c1f5ea"
                  points="39.091,17.515 35.015,13.604 22.775,26.233 16.679,20.433 12.768,24.509 18.843,30.289 22.92,34.179 26.86,30.119"
                ></polygon>
              </svg>
              Lucrative career opportunities
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                className="mr-2"
              >
                <circle cx="24" cy="24" r="20" fill="#3ddab4"></circle>
                <polygon
                  fill="#c1f5ea"
                  points="39.091,17.515 35.015,13.604 22.775,26.233 16.679,20.433 12.768,24.509 18.843,30.289 22.92,34.179 26.86,30.119"
                ></polygon>
              </svg>
              Versatility across industries
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                className="mr-2"
              >
                <circle cx="24" cy="24" r="20" fill="#3ddab4"></circle>
                <polygon
                  fill="#c1f5ea"
                  points="39.091,17.515 35.015,13.604 22.775,26.233 16.679,20.433 12.768,24.509 18.843,30.289 22.92,34.179 26.86,30.119"
                ></polygon>
              </svg>
              Highly Scalable
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex-1">
          <img
            src={sap}
            alt="SAP Benefits"
            className="w-full h-auto max-h-[20vh] object-contain mx-auto lg:max-h-[70vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default SapBenefit;
