'use client'

/**
 * Main Home Page Component for Next.js
 * Migrated from React App.jsx with enhanced SEO and performance
 */

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import EnhancedAboutSection from "@/components/EnhancedAboutSection";
import BenefitsSection from "@/components/sapBenefit";
import LearningRoadmap from "@/components/RoadmapSap";
import ComprehensiveCourses from "@/components/CourseDetail";
import UpcomingCourses from "@/components/UpcomingCourse";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import ScrollTopBtn from "@/components/ScrollTopBtn";
import Footer from "@/components/Footer";
import { 
  SocialProofNotification, 
  FOMOBanner 
} from "@/components/PsychologicalTriggers";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen font-sans antialiased"
    >
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        <EnhancedHeroSection />
        <EnhancedAboutSection />
        <BenefitsSection />
        <LearningRoadmap />
        <ComprehensiveCourses />
        <TestimonialsSection />
        <UpcomingCourses />
        <FAQSection />
        <ContactForm />
      </main>
      
      {/* Utility Components */}
      <ScrollTopBtn />
      
      {/* Psychological Triggers */}
      <SocialProofNotification />
      <FOMOBanner />
      
      {/* Footer */}
      <Footer />
    </motion.div>
  );
}