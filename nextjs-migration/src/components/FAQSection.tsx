'use client'

/**
 * FAQSection Component for Next.js
 * Comprehensive FAQ section with accordion functionality and categories
 */

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const FAQSection = () => {
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

  const faqCategories = [
    {
      title: "Course Information",
      faqs: [
        {
          question: "What SAP modules do you teach?",
          answer: "We specialize in SAP MM (Material Management), SAP FI (Financial Accounting), and SAP HANA. Our courses cover fundamental to advanced concepts with hands-on practical experience in each module."
        },
        {
          question: "How long is the complete SAP training program?",
          answer: "Our comprehensive SAP training program typically runs for 10-12 weeks, with 3-4 hours of training per week. We also offer intensive weekend batches and flexible scheduling to accommodate working professionals."
        },
        {
          question: "Do you provide SAP certification preparation?",
          answer: "Yes, our training includes comprehensive certification preparation. We provide study materials, mock exams, and guidance for official SAP certification exams to help you achieve your certification goals."
        },
        {
          question: "What is the course fee structure?",
          answer: "Our course fees are competitive and vary based on the module and duration. We offer flexible payment options, early bird discounts, and special rates for students. Contact us for detailed pricing information."
        }
      ]
    },
    {
      title: "Training Methodology",
      faqs: [
        {
          question: "Is the training online or offline?",
          answer: "We offer both online and offline training options. Our online sessions are interactive with live demonstrations, while offline classes provide hands-on lab experience. You can choose based on your preference and location."
        },
        {
          question: "What kind of practical experience will I get?",
          answer: "Our training includes extensive hands-on experience with real SAP systems. You'll work on live projects, practice with actual business scenarios, and get access to SAP sandboxes for practical learning."
        },
        {
          question: "Do you provide study materials and resources?",
          answer: "Yes, we provide comprehensive study materials including course notes, practical exercises, video recordings of sessions, and access to our online learning portal with additional resources."
        },
        {
          question: "What is the batch size for training?",
          answer: "We maintain small batch sizes of 8-12 students to ensure personalized attention and better learning outcomes. This allows for more interaction and individual guidance from our expert instructor."
        }
      ]
    },
    {
      title: "Career & Placement",
      faqs: [
        {
          question: "Do you provide job placement assistance?",
          answer: "Yes, we offer comprehensive job placement assistance including resume building, interview preparation, and connecting you with our network of hiring partners. Our placement success rate is over 95%."
        },
        {
          question: "What kind of salary can I expect after SAP training?",
          answer: "SAP professionals typically earn competitive salaries. Entry-level positions start from ₹4-6 LPA, while experienced professionals can earn ₹15+ LPA. Salary depends on your experience, location, and specialization."
        },
        {
          question: "Can I get a job without prior IT experience?",
          answer: "Absolutely! Our training is designed for both IT and non-IT professionals. We start with fundamentals and gradually build up to advanced concepts. Many of our successful students come from non-technical backgrounds."
        },
        {
          question: "How long does it take to get a job after completing the course?",
          answer: "Most of our students receive job offers within 2-6 months of course completion. The timeline depends on market conditions, your preparation level, and interview performance. We support you throughout the job search process."
        }
      ]
    },
    {
      title: "Technical Requirements",
      faqs: [
        {
          question: "What are the prerequisites for SAP training?",
          answer: "No specific technical prerequisites are required. Basic computer knowledge and familiarity with business processes is helpful. We welcome students from all backgrounds including engineering, commerce, arts, and working professionals."
        },
        {
          question: "Do I need to purchase SAP software?",
          answer: "No, you don't need to purchase any software. We provide access to SAP systems and environments for practice. All necessary tools and resources are included in the training program."
        },
        {
          question: "What computer specifications do I need for online training?",
          answer: "For online training, you need a computer with stable internet connection, webcam, and microphone. Minimum 4GB RAM and Windows 7/Mac OS or higher. We'll provide detailed technical requirements upon enrollment."
        },
        {
          question: "Can I access the training materials after course completion?",
          answer: "Yes, you get lifetime access to our learning portal with course materials, recordings, and updates. You can revisit the content anytime and also attend revision sessions when available."
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      action: "Start Chat"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our counselors",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your detailed queries",
      action: "Send Email"
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-max"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our SAP training programs, certification, 
            placement assistance, and more. Can't find what you're looking for? Contact us directly!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Content */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div key={categoryIndex} variants={itemVariants}>
                  <Card className="shadow-lg border-0">
                    <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 rounded-t-lg">
                      <CardTitle className="text-xl text-green-800 flex items-center">
                        <HelpCircle className="w-5 h-5 mr-2" />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq, faqIndex) => (
                          <AccordionItem
                            key={faqIndex}
                            value={`${categoryIndex}-${faqIndex}`}
                            className="border-b border-gray-200 px-6"
                          >
                            <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-green-600">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Support Options Sidebar */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Quick Help */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-green-600 to-green-700 text-white">
              <CardHeader>
                <CardTitle className="text-white">Need More Help?</CardTitle>
                <p className="text-green-100">
                  Our support team is here to assist you with any questions about SAP training.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportOptions.map((option, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                    >
                      <div className="flex items-center space-x-3">
                        <option.icon className="w-5 h-5 text-green-200" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">{option.title}</h4>
                          <p className="text-green-100 text-sm">{option.description}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="w-full mt-3 bg-white text-green-700 hover:bg-green-50"
                        onClick={() => {
                          if (option.title === "Call Us") {
                            window.open("tel:+919876543210", "_self");
                          } else if (option.title === "Email Support") {
                            window.open("mailto:info@erpacademy.com", "_self");
                          } else {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {option.action}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Questions */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-gray-900">Popular Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Course duration and schedule",
                    "Job placement success rate",
                    "SAP certification guidance",
                    "Training fee structure",
                    "Prerequisites for beginners"
                  ].map((question, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-green-50 hover:border-green-200 transition-colors"
                      onClick={() => {
                        // Scroll to relevant FAQ section
                        document.querySelector(`[data-question="${question}"]`)?.scrollIntoView({ 
                          behavior: 'smooth', 
                          block: 'center' 
                        });
                      }}
                    >
                      <p className="text-sm text-gray-700 font-medium">{question}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="shadow-lg border-0 bg-yellow-50 border-yellow-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">Still Have Questions?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Schedule a free consultation call with our SAP expert
                </p>
                <Button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;