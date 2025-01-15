import React, { useState } from "react";
import logo from "../assets/logo_fit.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-green-900 text-white px-4 py-3 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <div className="w-32 max-h-20 h-auto object-contain">
          <img src={logo} alt="ERP_Academy" className="object-contain" />
        </div>
      </div>

      {/* Navigation Section */}
      <div className="hidden md:flex space-x-6">
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#roadmap" className="hover:text-yellow-400">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#course" className="hover:text-yellow-400">
                Courses
              </a>
            </li>
            <li>
              <a href="#upcoming" className="hover:text-yellow-400">
                Upcoming
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Book a Session Button */}
      <a href="#contact">
        <button className="bg-yellow-400 text-green-900 px-4 py-2 rounded-lg hover:bg-yellow-500">
          Book a Free Session
        </button>
      </a>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-green-900 text-white px-6 py-4 md:hidden">
          <nav>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-yellow-400">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#course" className="hover:text-yellow-400">
                  Courses
                </a>
              </li>
              <li>
                <a href="#upcoming" className="hover:text-yellow-400">
                  Upcoming
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
