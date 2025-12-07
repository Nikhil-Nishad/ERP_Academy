'use client'

/**
 * SAP Benefits Section Component for Next.js
 * Showcases the benefits of SAP training
 */

import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const BenefitsSection = () => {
  // Removed useInView hook as we use whileInView prop directly

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Accelerate your career with in-demand SAP skills that companies actively seek.",
      highlights: ["Higher salary potential", "Leadership opportunities", "Career stability"]
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "SAP skills open doors to international career opportunities and remote work.",
      highlights: ["Work with global companies", "Remote work options", "International exposure"]
    },
    {
      icon: Shield,
      title: "Industry Recognition",
      description: "Gain certified expertise that's recognized and valued across industries.",
      highlights: ["Official certifications", "Industry credibility", "Professional validation"]
    },
    {
      icon: Zap,
      title: "Practical Skills",
      description: "Learn hands-on skills with real-world scenarios and live project experience.",
      highlights: ["Real project work", "Practical scenarios", "Industry best practices"]
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from experienced professionals with years of SAP implementation experience.",
      highlights: ["One-on-one guidance", "Industry insights", "Career counseling"]
    },
    {
      icon: Award,
      title: "Placement Support",
      description: "Comprehensive job placement assistance with interview preparation and resume building.",
      highlights: ["Job placement assistance", "Interview preparation", "Resume optimization"]
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-gradient-to-br from-green-50 to-green-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-max"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium mb-4">
            Why Choose SAP Training?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Career with{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              SAP Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of professionals choose SAP training to advance their careers 
            and unlock new opportunities in the digital business world.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-green-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>

              {/* Highlights */}
              <ul className="space-y-2">
                {benefit.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg border border-green-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your SAP Journey?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of successful professionals who have transformed their careers with our expert SAP training programs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Today
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BenefitsSection;