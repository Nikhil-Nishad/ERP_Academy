'use client'

/**
 * UpcomingCourse Component for Next.js
 * Upcoming batch schedules and enrollment information
 */

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Star, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const UpcomingCourses = () => {
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

  const upcomingBatches = [
    {
      course: "SAP MM (Material Management)",
      startDate: "January 15, 2025",
      duration: "8 Weeks",
      schedule: "Mon, Wed, Fri - 7:00 PM to 9:00 PM",
      seatsTotal: 12,
      seatsAvailable: 4,
      price: "₹25,000",
      earlyBirdPrice: "₹17,500",
      discount: "30% OFF",
      popular: true,
      features: [
        "Live interactive sessions",
        "Real SAP system access",
        "Hands-on projects",
        "Job placement support"
      ]
    },
    {
      course: "SAP FI (Financial Accounting)",
      startDate: "January 22, 2025",
      duration: "6 Weeks",
      schedule: "Tue, Thu, Sat - 8:00 PM to 10:00 PM",
      seatsTotal: 10,
      seatsAvailable: 6,
      price: "₹22,000",
      earlyBirdPrice: "₹15,400",
      discount: "30% OFF",
      features: [
        "Complete FI module coverage",
        "Financial reporting mastery",
        "Integration scenarios",
        "Certification preparation"
      ]
    },
    {
      course: "SAP HANA",
      startDate: "February 1, 2025",
      duration: "4 Weeks",
      schedule: "Weekends - 10:00 AM to 2:00 PM",
      seatsTotal: 8,
      seatsAvailable: 3,
      price: "₹30,000",
      earlyBirdPrice: "₹21,000",
      discount: "30% OFF",
      features: [
        "In-memory database concepts",
        "Advanced modeling",
        "Performance optimization",
        "Real-time analytics"
      ]
    }
  ];

  return (
    <section id="upcoming" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-max"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
            Limited Seats Available
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Upcoming Course{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Batches
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our next batch and start your SAP career transformation. 
            Early bird discount of 30% available for limited time!
          </p>
          
          {/* Special Offer Banner */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="font-bold">Limited Time Offer: 30% OFF on all courses!</span>
              <Zap className="w-5 h-5 text-yellow-300" />
            </div>
            <p className="text-red-100 text-sm mt-2">Offer valid until December 31, 2024</p>
          </div>
        </motion.div>

        {/* Course Batches */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {upcomingBatches.map((batch, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {batch.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                  MOST POPULAR
                </div>
              )}
              
              <Card className={`h-full shadow-xl border-0 ${
                batch.popular ? 'ring-2 ring-green-500' : ''
              }`}>
                <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 rounded-t-lg">
                  <CardTitle className="text-xl text-gray-900">{batch.course}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center text-green-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{batch.startDate}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{batch.schedule}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-yellow-800 font-bold">{batch.discount}</span>
                        <span className="text-yellow-600 text-sm">Early Bird Offer</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-600">{batch.earlyBirdPrice}</span>
                        <span className="text-gray-500 line-through">{batch.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Seats Info */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 font-medium">Seats Available</span>
                      <span className="text-green-600 font-bold">{batch.seatsAvailable}/{batch.seatsTotal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${(batch.seatsTotal - batch.seatsAvailable) / batch.seatsTotal * 100}%` }}
                      />
                    </div>
                    <p className="text-red-600 text-sm mt-1">
                      {batch.seatsAvailable <= 3 ? 'Only few seats left!' : 'Limited seats available'}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {batch.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Duration Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {batch.duration} Duration
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="text-sm font-medium">4.9/5 Rating</span>
                    </div>
                  </div>

                  {/* Enroll Button */}
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Reserve Your Seat
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enrollment CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-green-600 to-green-700 text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Don't Miss Out - Limited Seats!
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Our batches fill up quickly due to high demand and personalized attention with small batch sizes. 
                Secure your spot today with the early bird discount.
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
                  Book Free Demo Class
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UpcomingCourses;