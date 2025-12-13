'use client'

/**
 * ContactForm Component for Next.js
 * Complete contact form with Formspree integration, validation, and success states
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm, ValidationError } from "@formspree/react";
import { 
  Send, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  User,
  MessageSquare,
  Loader2
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [state, handleSubmit] = useForm("xdkqbpap"); // Formspree form ID
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "shortsbyrishab@gmail.com",
      subtitle: "Get response within 24 hours",
      link: "mailto:shortsbyrishab@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91-9312340496",
      subtitle: "Mon-Fri, 9 AM - 6 PM",
      link: "tel:+919312340496"
    },
    {
      icon: MapPin,
      title: "Website",
      details: "erp-academy.vercel.app",
      subtitle: "Online & Offline Training",
      link: "https://erp-academy.vercel.app/"
    },
    {
      icon: Clock,
      title: "Quick Response",
      details: "24 Hours",
      subtitle: "Average response time"
    }
  ];

  const courseOptions = [
    "SAP MM (Material Management)",
    "SAP FI (Financial Accounting)", 
    "SAP HANA",
    "SAP SD (Sales & Distribution)",
    "Complete SAP Bundle",
    "Custom Training Program"
  ];

  if (state.succeeded) {
    return (
      <section id="contact" className="section-padding bg-gradient-to-br from-green-50 to-green-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You for Your Interest!
              </h2>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. Our SAP expert will contact you within 24 hours 
                to discuss your training requirements and career goals.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-medium">What's Next?</p>
                <ul className="text-green-700 text-sm mt-2 space-y-1">
                  <li>• Expert consultation call within 24 hours</li>
                  <li>• Personalized learning path recommendation</li>
                  <li>• Course schedule and pricing details</li>
                  <li>• Free demo session invitation</li>
                </ul>
              </div>
              <Button
                onClick={() => window.location.reload()}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Send Another Message
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-green-50 to-green-100">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container-max"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium mb-4">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              SAP Career?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards SAP excellence. Get personalized guidance from our expert instructor 
            and start your journey to becoming a certified SAP professional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-white rounded-t-lg">
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <MessageSquare className="w-6 h-6 text-green-600 mr-3" />
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="bg-white rounded-b-lg p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>

                  {/* Course Interest */}
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                      Course of Interest
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a course</option>
                      {courseOptions.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                      ))}
                    </select>
                    <ValidationError prefix="Course" field="course" errors={state.errors} />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your goals, experience level, or any specific questions..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold group"
                  >
                    {state.submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  {state.errors && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 text-sm">
                        There was an error sending your message. Please try again.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-lg border border-green-100"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-lg font-semibold text-green-600 mb-1 hover:text-green-700 hover:underline block"
                      {...(info.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-green-600 mb-1">{info.details}</p>
                  )}
                  <p className="text-sm text-gray-600">{info.subtitle}</p>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us */}
            <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-white">Why Choose ERP Academy?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-200 mr-3 flex-shrink-0" />
                    <span>6+ years of industry experience</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-200 mr-3 flex-shrink-0" />
                    <span>500+ successful students placed</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-200 mr-3 flex-shrink-0" />
                    <span>Hands-on practical training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-200 mr-3 flex-shrink-0" />
                    <span>Job placement assistance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-200 mr-3 flex-shrink-0" />
                    <span>Flexible learning schedules</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;