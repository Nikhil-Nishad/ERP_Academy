'use client'

/**
 * HeroSection Component for Next.js
 * Modern hero section with engaging animations and optimized performance
 * Features typing animation, floating elements, and responsive design
 */

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { scrollToElement } from "@/lib/utils";

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Handle CTA clicks
  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement("contact");
  };

  const handleViewCourses = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement("courses");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white relative overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container-max section-padding relative z-10 gpu-accelerated"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 text-sm font-medium"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span>6+ Years of SAP Excellence</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Master</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  SAP Excellence
                </span>
                <span className="block">with Akshay</span>
              </h1>

              <motion.div
                variants={itemVariants}
                className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-green-100 leading-relaxed text-balance"
            >
              Transform your career with industry-leading SAP training.
              Learn from an expert consultant and unlock endless opportunities.
            </motion.p>

            {/* Features */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Users, text: "Expert Instructor" },
                { icon: Award, text: "Industry Certified" },
                { icon: Star, text: "Proven Results" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-green-100">
                  <feature.icon className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleBookCall}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold group"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={handleViewCourses}
                variant="outline"
                size="lg"
                className="border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-green-900"
              >
                Explore Courses
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-green-200">Students Trained</div>
              </div>
              <div className="w-px h-12 bg-green-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">6+</div>
                <div className="text-sm text-green-200">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-green-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">4.9★</div>
                <div className="text-sm text-green-200">Student Rating</div>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="relative"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-green-600/20 rounded-2xl blur-2xl transform rotate-6 scale-110" />

            {/* Profile image */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Image
                src="/assets/new_heroPic.webp"
                alt="Akshay Kumar - SAP Expert & Instructor"
                width={500}
                height={600}
                className="w-full h-auto rounded-xl shadow-2xl"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-green-900 rounded-full p-4 shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;