import React from "react";
import logo from "../assets/logo_fit.png";

const Header = () => {
  return (
    <header className="bg-green-900 text-white px-4 flex justify-between items-center ">
      <div className="flex flex-col items-center py-3 ml-5">
        {/* <h1 className="text-2xl font-bold">ERP Academy</h1>
        <h2 className="text-sm font-bold text-center">By Akshay</h2> */}
        <div className="w-32 max-h-20 h-auto object-contain text-center ">
          <img src={logo} alt="ERP_Academy" className="" />
        </div>
      </div>

      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-yellow-400">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-400">
              Services
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-yellow-400">
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className="bg-yellow-400 text-green-900 px-4 py-2 rounded-lg">
        Book a Free Session
      </button>
    </header>
  );
};

export default Header;
