'use client'

/**
 * AboutSection Component for Next.js
 * Migrated from React version with enhanced performance
 */

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, BookOpen, TrendingUp } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { icon: Users, number: "500+", label: "Students Trained" },
    { icon: Award, number: "6+", label: "Years Experience" },
    { icon: BookOpen, number: "15+", label: "Course Modules" },
    { icon: TrendingUp, number: "95%", label: "Success Rate" },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container-max"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <motion.span
                variants={itemVariants}
                className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
              >
                About Akshay Kumar
              </motion.span>

              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
              >
                Meet Your{" "}
                <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  SAP Expert
                </span>
              </motion.h2>
            </div>

            <motion.div variants={itemVariants} className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                With over 6 years of hands-on experience in SAP implementation and training,
                Akshay Kumar has helped transform careers and businesses through expert SAP guidance.
              </p>
              <p>
                As a certified SAP consultant and passionate educator, Akshay combines real-world
                industry experience with effective teaching methodologies to deliver comprehensive
                training programs.
              </p>
              <p>
                His expertise spans across SAP MM, HANA, FI modules, and he has successfully
                trained over 500 students, helping them secure positions in top organizations.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-4 bg-green-50 rounded-xl"
                >
                  <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-8">
              <Image
                src="/assets/new_ProfilePic.webp"
                alt="Akshay Kumar - SAP Expert"
                width={400}
                height={500}
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-600 rounded-full opacity-20 blur-xl" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;