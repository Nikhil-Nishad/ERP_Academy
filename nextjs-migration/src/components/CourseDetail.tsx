'use client'

/**
 * CourseDetail Component for Next.js
 * Comprehensive course information with detailed curriculum and features
 */

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Star,
  Calendar,
  Globe,
  Headphones,
  FileText,
  Download,
  Video
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const ComprehensiveCourses = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const courses = [
    {
      title: "SAP MM (Material Management)",
      description: "Master the complete procurement process from purchase requisition to payment",
      duration: "8 Weeks",
      level: "Beginner to Advanced",
      rating: 4.9,
      students: 250,
      price: "₹25,000",
      originalPrice: "₹35,000",
      features: [
        "Complete SAP MM module coverage",
        "Real-time project scenarios",
        "Hands-on SAP system access",
        "Industry expert mentorship",
        "Certification preparation",
        "Job placement assistance"
      ],
      curriculum: [
        "SAP MM Overview & Navigation",
        "Master Data Management",
        "Procurement Process",
        "Inventory Management",
        "Invoice Verification",
        "Reporting & Analytics"
      ],
      popular: true
    },
    {
      title: "SAP FI (Financial Accounting)",
      description: "Learn financial accounting processes and integration with other SAP modules",
      duration: "6 Weeks",
      level: "Beginner to Intermediate",
      rating: 4.8,
      students: 180,
      price: "₹22,000",
      originalPrice: "₹30,000",
      features: [
        "Complete FI module training",
        "Financial reporting mastery",
        "Integration with other modules",
        "Real business scenarios",
        "Expert guidance",
        "Career support"
      ],
      curriculum: [
        "SAP FI Fundamentals",
        "General Ledger Accounting",
        "Accounts Payable/Receivable",
        "Asset Accounting",
        "Financial Reporting",
        "Month-end & Year-end Closing"
      ]
    },
    {
      title: "SAP HANA",
      description: "Advanced in-memory database technology and analytics platform",
      duration: "4 Weeks",
      level: "Intermediate to Advanced",
      rating: 4.9,
      students: 120,
      price: "₹30,000",
      originalPrice: "₹40,000",
      features: [
        "In-memory database concepts",
        "HANA modeling techniques",
        "Performance optimization",
        "Real-time analytics",
        "Industry case studies",
        "Advanced certifications"
      ],
      curriculum: [
        "SAP HANA Architecture",
        "Data Modeling",
        "SQL Script Development",
        "Calculation Views",
        "Performance Optimization",
        "Analytics & Reporting"
      ]
    }
  ];

  const courseFeatures = [
    {
      icon: Video,
      title: "Live Interactive Sessions",
      description: "Engage with instructors in real-time online classes"
    },
    {
      icon: Globe,
      title: "24/7 SAP System Access",
      description: "Practice on real SAP systems anytime, anywhere"
    },
    {
      icon: FileText,
      title: "Comprehensive Materials",
      description: "Study guides, notes, and practical exercises included"
    },
    {
      icon: Headphones,
      title: "1-on-1 Mentorship",
      description: "Personal guidance from industry experts"
    },
    {
      icon: Award,
      title: "Certification Support",
      description: "Complete preparation for official SAP certifications"
    },
    {
      icon: Users,
      title: "Job Placement",
      description: "Dedicated placement support with 95% success rate"
    }
  ];

  return (
    <section id="courses" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container-max"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive SAP{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Training Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master SAP with our industry-leading training programs designed by experts 
            with 6+ years of real-world implementation experience.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {course.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold z-10">
                  MOST POPULAR
                </div>
              )}
              
              <Card className={`h-full shadow-xl border-0 ${
                course.popular ? 'ring-2 ring-green-500 transform scale-105' : ''
              }`}>
                <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 rounded-t-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-600 font-medium text-sm">{course.level}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{course.title}</CardTitle>
                  <p className="text-gray-600">{course.description}</p>
                </CardHeader>
                
                <CardContent className="p-6">
                  {/* Course Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-green-600" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-green-600" />
                      {course.students}+ Students
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-green-600">{course.price}</span>
                      <span className="text-gray-500 line-through">{course.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-600">One-time payment • Lifetime access</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What You'll Get:</h4>
                    <ul className="space-y-2">
                      {course.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      course.popular 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    } text-white font-semibold`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Course Features */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our SAP Training?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our comprehensive approach to SAP education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-xl shadow-lg border border-green-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enrollment CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-green-600 to-green-700 text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <BookOpen className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Master SAP?
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Join our next batch starting soon. Limited seats available. 
                Early bird discount of 30% applicable for the first 10 enrollments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Enroll Now & Save 30%
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-green-700"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Free Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ComprehensiveCourses;