'use client'

/**
 * Footer Component for Next.js
 * Simple footer with basic information
 */

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container-max px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ERP Academy by Akshay</h3>
            <p className="text-green-200">
              Transforming careers through expert SAP training and industry-leading education.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-green-200">
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#courses" className="hover:text-yellow-400">Courses</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="text-green-200 space-y-2">
              <p>Email: info@erpacademy.com</p>
              <p>Phone: +91 XXXXX XXXXX</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p>&copy; {currentYear} ERP Academy by Akshay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;