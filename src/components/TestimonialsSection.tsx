'use client'

/**
 * TestimonialsSection Component for Next.js
 * Premium testimonials section with modern glassmorphism design
 * Features auto-play carousel with pause on hover
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Briefcase, TrendingUp, Award, Play } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

const TestimonialsSection = () => {
  // Removed useInView hook as we use whileInView prop directly

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "SAP MM Consultant",
      company: "TCS",
      image: "/assets/new_ProfilePic.webp",
      rating: 5,
      content: "The SAP MM training at ERP Academy completely transformed my career. Akshay's teaching methodology and real-world examples made complex concepts easy to understand. I got placed in TCS within 3 months of completion with a 180% salary hike!",
      previousRole: "Data Entry Operator",
      salaryIncrease: "180%",
      timeToPlacement: "3 months"
    },
    {
      name: "Rajesh Kumar",
      role: "Senior SAP Consultant",
      company: "Infosys",
      image: "/assets/new_ProfilePic.webp",
      rating: 5,
      content: "Outstanding training experience! The hands-on approach and practical scenarios helped me gain confidence. The job placement support was exceptional. Akshay personally guided me through interview preparation and resume building.",
      previousRole: "Accounts Executive",
      salaryIncrease: "220%",
      timeToPlacement: "2 months"
    },
    {
      name: "Sneha Patel",
      role: "SAP FI Analyst",
      company: "Accenture",
      image: "/assets/new_ProfilePic.webp",
      rating: 5,
      content: "Being from a non-IT background, I was initially nervous about SAP. But the systematic curriculum and patient mentoring made all the difference. Now I'm working with one of the Big 4 consulting firms!",
      previousRole: "Marketing Executive",
      salaryIncrease: "150%",
      timeToPlacement: "4 months"
    },
    {
      name: "Amit Singh",
      role: "SAP HANA Developer",
      company: "Wipro",
      image: "/assets/new_ProfilePic.webp",
      rating: 5,
      content: "The HANA training was absolutely comprehensive. Real SAP system access and project-based learning gave me the confidence to handle complex implementations. Highly recommend for anyone serious about SAP career.",
      previousRole: "Software Tester",
      salaryIncrease: "120%",
      timeToPlacement: "1 month"
    }
  ];

  const successStats = [
    { number: "500+", label: "Students Placed", icon: Briefcase, color: "from-blue-500 to-blue-600" },
    { number: "95%", label: "Placement Rate", icon: TrendingUp, color: "from-green-500 to-green-600" },
    { number: "₹8-15L", label: "Average Package", icon: Star, color: "from-yellow-500 to-yellow-600" },
    { number: "150%", label: "Avg Salary Hike", icon: Award, color: "from-purple-500 to-purple-600" }
  ];

  // Auto-play with pause on hover
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        nextTestimonial();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentTestimonial, isPaused]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-max relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.span
            className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            ✨ Success Stories
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Students{" "}
            <span className="bg-gradient-to-r from-green-600 via-green-500 to-yellow-500 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real students who transformed their careers with our SAP training.
            Join hundreds of successful professionals who trusted us with their future.
          </p>
        </motion.div>

        {/* Success Stats - Modern Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {successStats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`} />
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}</motion.div>

        {/* Main Testimonial - Video-style Card */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-5xl mx-auto mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white via-white to-green-50/30 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Left side - Student Photo & Stats */}
                    <div className="md:col-span-2 bg-gradient-to-br from-green-600 to-green-700 p-8 md:p-10 text-white relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                      </div>

                      <div className="relative z-10 flex flex-col items-center text-center h-full justify-center space-y-6">
                        {/* Profile Image */}
                        <div className="relative group">
                          <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity animate-pulse" />
                          <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-white/50 shadow-2xl">
                            <Image
                              src={testimonials[currentTestimonial].image}
                              alt={testimonials[currentTestimonial].name}
                              width={144}
                              height={144}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Student Info */}
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            {testimonials[currentTestimonial].name}
                          </h3>
                          <p className="text-yellow-300 font-semibold text-lg mb-1">
                            {testimonials[currentTestimonial].role}
                          </p>
                          <p className="text-green-100 font-medium">
                            @ {testimonials[currentTestimonial].company}
                          </p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                          ))}
                        </div>

                        {/* Career Journey */}
                        <div className="w-full space-y-3">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                            <div className="text-green-100 text-sm font-medium mb-1">Career Transformation</div>
                            <div className="text-white font-semibold">
                              {testimonials[currentTestimonial].previousRole}
                            </div>
                            <div className="flex items-center justify-center my-2">
                              <TrendingUp className="w-5 h-5 text-yellow-300" />
                            </div>
                            <div className="text-yellow-300 font-bold text-lg">
                              {testimonials[currentTestimonial].role}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-yellow-400/20 backdrop-blur-sm rounded-lg p-3">
                              <div className="text-yellow-200 text-xs font-medium mb-1">Salary Hike</div>
                              <div className="text-yellow-100 font-bold text-xl">
                                +{testimonials[currentTestimonial].salaryIncrease}
                              </div>
                            </div>
                            <div className="bg-green-400/20 backdrop-blur-sm rounded-lg p-3">
                              <div className="text-green-200 text-xs font-medium mb-1">Placement</div>
                              <div className="text-green-100 font-bold text-lg">
                                {testimonials[currentTestimonial].timeToPlacement}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side - Testimonial Content */}
                    <div className="md:col-span-3 p-8 md:p-12">
                      <Quote className="w-16 h-16 text-green-200 mb-6 opacity-50" />

                      <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-medium">
                        "{testimonials[currentTestimonial].content}"
                      </blockquote>

                      {/* Success Highlights */}
                      <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-6 border border-green-100">
                        <div className="flex items-center mb-4">
                          <Award className="w-6 h-6 text-green-600 mr-2" />
                          <h4 className="font-bold text-green-900">Key Success Factors</h4>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            "Hands-on SAP System Training",
                            "Personal Career Mentorship",
                            "Job Placement Support",
                            "Real Industry Projects"
                          ].map((factor, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full" />
                              <span className="text-gray-700 text-sm font-medium">{factor}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Modern Style */}
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green-600 hover:text-white shadow-xl border-green-200 hover:border-green-600 transition-all duration-300 w-12 h-12 rounded-full"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green-600 hover:text-white shadow-xl border-green-200 hover:border-green-600 transition-all duration-300 w-12 h-12 rounded-full"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentTestimonial
                    ? 'w-12 bg-gradient-to-r from-green-600 to-green-500'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          {!isPaused && (
            <motion.div
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-600 flex items-center space-x-1 shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Play className="w-3 h-3" />
              <span>Auto-playing</span>
            </motion.div>
          )}
        </motion.div>

        {/* Quick Testimonials Grid */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6 relative">
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full mr-4 ring-2 ring-green-100 relative"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-green-600 text-sm font-semibold">{testimonial.role}</p>
                      <p className="text-gray-500 text-xs">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {testimonial.content}
                  </p>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                    <span className="text-green-600 font-bold text-xs bg-green-50 px-3 py-1 rounded-full">
                      +{testimonial.salaryIncrease}
                    </span>
                    <span className="text-blue-600 font-semibold text-xs">
                      {testimonial.timeToPlacement}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section - Premium Design */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.div
            className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-500 to-yellow-500 opacity-90" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
            </div>

            <div className="relative p-10 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-green-50 text-lg mb-8 max-w-2xl mx-auto">
                Join our community of successful SAP professionals. Your transformation story could be next!
              </p>
              <Button
                size="lg"
                className="bg-white hover:bg-gray-50 text-green-700 font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Journey Today →
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;