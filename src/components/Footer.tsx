'use client'

/**
 * Footer Component for Next.js
 * Enhanced footer with social media links and internal navigation
 */

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/erpacademy", ariaLabel: "Visit our Facebook page" },
    { name: "Instagram", icon: Instagram, url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/erpacademy", ariaLabel: "Follow us on Instagram" },
    { name: "YouTube", icon: Youtube, url: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/@erpacademy", ariaLabel: "Subscribe to our YouTube channel" },
    { name: "LinkedIn", icon: Linkedin, url: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/erpacademy", ariaLabel: "Connect on LinkedIn" },
  ];

  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container-max px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">ERP Academy by Akshay</h3>
            <p className="text-green-200 mb-4">
              Transforming careers through expert SAP training and industry-leading education.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-200 hover:text-yellow-400 transition-colors"
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-green-200">
              <li><Link href="/#about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/#courses" className="hover:text-yellow-400 transition-colors">SAP Courses</Link></li>
              <li><Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link href="/#contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-4">Our Courses</h4>
            <ul className="space-y-2 text-green-200">
              <li><Link href="/#courses" className="hover:text-yellow-400 transition-colors">SAP MM Training</Link></li>
              <li><Link href="/#courses" className="hover:text-yellow-400 transition-colors">SAP HANA Course</Link></li>
              <li><Link href="/#courses" className="hover:text-yellow-400 transition-colors">SAP FI Training</Link></li>
              <li><Link href="/#courses" className="hover:text-yellow-400 transition-colors">SAP Certification</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="text-green-200 space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@erpacademy.com" className="hover:text-yellow-400 transition-colors">info@erpacademy.com</a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p>&copy; {currentYear} ERP Academy by Akshay. All rights reserved.</p>
          <p className="text-sm mt-2">
            <Link href="/privacy" className="hover:text-yellow-400 transition-colors mx-2">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-yellow-400 transition-colors mx-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;