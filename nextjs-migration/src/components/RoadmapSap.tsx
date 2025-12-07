'use client'

/**
 * LearningRoadmap Component for Next.js
 * Comprehensive SAP learning roadmap with detailed career progression
 * Features interactive timeline, success metrics, and career guidance
 */

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { 
  CheckCircle, 
  BookOpen, 
  Award, 
  TrendingUp, 
  Users, 
  Clock,
  Star,
  Target,
  Briefcase,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const LearningRoadmap = () => {
  // Removed useInView hook as we use whileInView prop directly

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

  const roadmapSteps = [
    {
      phase: "Foundation Phase",
      duration: "Week 1-2",
      icon: BookOpen,
      title: "SAP Fundamentals & ERP Concepts",
      description: "Master the basics of enterprise resource planning and SAP ecosystem architecture",
      topics: [
        "Introduction to ERP and SAP landscape",
        "SAP navigation and basic transactions",
        "Understanding business processes",
        "SAP terminology and concepts"
      ],
      outcomes: ["ERP fundamentals certified", "SAP navigation mastery", "Business process understanding"]
    },
    {
      phase: "Core Learning",
      duration: "Week 3-8",
      icon: Target,
      title: "SAP MM Material Management Mastery",
      description: "Deep dive into SAP Material Management with hands-on practice and real-world scenarios",
      topics: [
        "Master data creation and maintenance",
        "Procurement processes and purchase orders",
        "Inventory management and stock movements",
        "Vendor management and evaluation",
        "Invoice verification and payment processing"
      ],
      outcomes: ["MM module expertise", "Real project experience", "Process optimization skills"]
    },
    {
      phase: "Advanced Skills",
      duration: "Week 9-10",
      icon: TrendingUp,
      title: "Advanced SAP Concepts & Integration",
      description: "Learn complex SAP functionalities and module integrations for enterprise solutions",
      topics: [
        "Cross-module integration (MM-FI-SD)",
        "Advanced reporting and analytics",
        "Customization and configuration",
        "Workflow and approval processes",
        "Performance optimization techniques"
      ],
      outcomes: ["Integration expertise", "Advanced reporting skills", "Optimization knowledge"]
    },
    {
      phase: "Certification Prep",
      duration: "Week 11-12",
      icon: Award,
      title: "SAP Certification & Career Readiness",
      description: "Comprehensive certification preparation and career development guidance",
      topics: [
        "Official SAP certification exam preparation",
        "Mock tests and practice scenarios",
        "Resume building and LinkedIn optimization",
        "Interview preparation and soft skills",
        "Job search strategies and networking"
      ],
      outcomes: ["SAP certification ready", "Professional portfolio", "Career guidance completed"]
    }
  ];

  const careerProgression = [
    {
      level: "Entry Level",
      duration: "0-2 years",
      salary: "₹4-8 LPA",
      roles: ["SAP Junior Consultant", "SAP Functional Trainee", "Business Analyst"],
      skills: ["Basic SAP navigation", "Module fundamentals", "Business process knowledge"]
    },
    {
      level: "Mid Level",
      duration: "2-5 years", 
      salary: "₹8-15 LPA",
      roles: ["SAP Functional Consultant", "Senior Business Analyst", "SAP Team Lead"],
      skills: ["Advanced module expertise", "Implementation experience", "Client interaction"]
    },
    {
      level: "Senior Level",
      duration: "5+ years",
      salary: "₹15-30+ LPA",
      roles: ["SAP Architect", "Project Manager", "Practice Head"],
      skills: ["Solution architecture", "Team management", "Strategic planning"]
    }
  ];

  const successMetrics = [
    { icon: Users, number: "500+", label: "Students Trained" },
    { icon: Award, number: "95%", label: "Certification Rate" },
    { icon: Briefcase, number: "90%", label: "Placement Success" },
    { icon: Star, number: "4.9/5", label: "Student Rating" }
  ];

  return (
    <section id="roadmap" className="section-padding bg-gradient-to-br from-white to-green-50">
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
            Your Learning Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            SAP Learning{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A structured 12-week journey from SAP fundamentals to career-ready professional. 
            Follow our proven roadmap used by 500+ successful students.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-4 bg-white rounded-xl shadow-lg border border-green-100"
              >
                <metric.icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">{metric.number}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Roadmap Steps */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10">
                  <step.icon className="w-4 h-4 text-white" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="shadow-xl border-0 bg-white">
                    <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 rounded-t-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-green-600 font-medium text-sm">{step.phase}</span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {step.duration}
                        </span>
                      </div>
                      <CardTitle className="text-xl text-gray-900">{step.title}</CardTitle>
                      <p className="text-gray-600">{step.description}</p>
                    </CardHeader>
                    <CardContent className="p-6">
                      {/* Topics */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Topics Covered:</h4>
                        <ul className="space-y-2">
                          {step.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Learning Outcomes:</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.outcomes.map((outcome, outcomeIndex) => (
                            <span
                              key={outcomeIndex}
                              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium"
                            >
                              {outcome}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career Progression */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Career Progression Path
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understand the typical career trajectory and earning potential in SAP consulting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {careerProgression.map((level, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <Card className={`shadow-lg border-0 ${
                  index === 1 ? 'bg-gradient-to-br from-green-600 to-green-700 text-white transform md:scale-105' : 'bg-white'
                }`}>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      index === 1 ? 'bg-white/20' : 'bg-green-100'
                    }`}>
                      <GraduationCap className={`w-8 h-8 ${
                        index === 1 ? 'text-white' : 'text-green-600'
                      }`} />
                    </div>
                    <CardTitle className={`text-xl ${
                      index === 1 ? 'text-white' : 'text-gray-900'
                    }`}>
                      {level.level}
                    </CardTitle>
                    <p className={`text-sm ${
                      index === 1 ? 'text-green-100' : 'text-gray-600'
                    }`}>
                      {level.duration} experience
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className={`text-2xl font-bold ${
                        index === 1 ? 'text-yellow-300' : 'text-green-600'
                      }`}>
                        {level.salary}
                      </div>
                      <p className={`text-sm ${
                        index === 1 ? 'text-green-100' : 'text-gray-600'
                      }`}>
                        Average Salary
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className={`font-semibold mb-2 ${
                          index === 1 ? 'text-white' : 'text-gray-900'
                        }`}>
                          Typical Roles:
                        </h4>
                        <ul className="space-y-1">
                          {level.roles.map((role, roleIndex) => (
                            <li key={roleIndex} className={`text-sm ${
                              index === 1 ? 'text-green-100' : 'text-gray-600'
                            }`}>
                              • {role}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={`font-semibold mb-2 ${
                          index === 1 ? 'text-white' : 'text-gray-900'
                        }`}>
                          Key Skills:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {level.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className={`px-2 py-1 rounded text-xs ${
                                index === 1 ? 'bg-white/20 text-white' : 'bg-green-100 text-green-800'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Story CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-green-600 to-green-700 text-white max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Start Your SAP Journey?
                  </h3>
                  <p className="text-green-100 mb-6">
                    Join hundreds of successful professionals who have transformed their careers 
                    with our proven SAP training methodology.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Start Learning Today
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-gray-800 hover:bg-white hover:text-green-700"
                      onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      View Course Details
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/assets/success.webp"
                    alt="SAP Training Success"
                    width={300}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LearningRoadmap;