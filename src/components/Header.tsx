'use client'

/**
 * Header Component for Next.js
 * Modern navigation header with smooth animations and mobile responsiveness
 * Features sticky positioning, scroll-based styling, and optimized performance
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { scrollToElement } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header styling with performance optimization
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.pageYOffset > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  const closeMobileMenu = () => setIsMenuOpen(false);

  // Navigation items configuration
  const navItems = [
    { href: "about", label: "About", type: "scroll" },
    { href: "benefits", label: "Benefits", type: "scroll" },
    { href: "roadmap", label: "Roadmap", type: "scroll" },
    { href: "courses", label: "Courses", type: "scroll" },
    { href: "upcoming", label: "Upcoming", type: "scroll" },
    { href: "/blog", label: "Blog", type: "link" },
  ];

  // Handle navigation with smooth scroll
  const handleNavClick = (e: React.MouseEvent, href: string, type: string) => {
    if (type === "link") {
      // Let Next.js Link handle it
      closeMobileMenu();
      return;
    }
    e.preventDefault();
    scrollToElement(href);
    closeMobileMenu();
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-green-900/95 backdrop-blur-md shadow-lg"
          : "bg-green-900"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 md:px-6">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link
              href="/"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center space-x-2"
            >
              <Image
                src="/assets/logo_fit.png"
                alt="ERP Academy"
                width={48}
                height={48}
                className="h-10 w-auto md:h-12"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.type === 'link' ? (
                    <Link
                        href={item.href}
                        className="text-white font-medium hover:text-yellow-400 transition-colors duration-200 relative group"
                    >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full" />
                    </Link>
                ) : (
                    <a
                        href={`#${item.href}`}
                        onClick={(e) => handleNavClick(e, item.href, item.type)}
                        className="text-white font-medium hover:text-yellow-400 transition-colors duration-200 relative group cursor-pointer"
                    >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full" />
                    </a>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block"
            >
              <Button
                onClick={(e) => handleNavClick(e, "contact", "scroll")}
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold"
                aria-label="Book a free SAP training session"
              >
                Book Free Session
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 rounded-md hover:bg-green-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-green-900/98 backdrop-blur-md border-t border-green-700"
          >
            <nav className="container-max px-4 py-6">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.type === 'link' ? (
                        <Link
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="block text-white font-medium py-2 hover:text-yellow-400 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <a
                            href={`#${item.href}`}
                            onClick={(e) => handleNavClick(e, item.href, item.type)}
                            className="block text-white font-medium py-2 hover:text-yellow-400 transition-colors cursor-pointer"
                        >
                            {item.label}
                        </a>
                    )}
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 border-t border-green-700"
                >
                  <Button
                    onClick={(e) => handleNavClick(e, "contact", "scroll")}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold"
                    aria-label="Book a free SAP training session"
                  >
                    Book Free Session
                  </Button>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;