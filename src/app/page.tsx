'use client'

/**
 * Main Home Page Component for Next.js
 * Migrated from React App.jsx with enhanced SEO and performance
 * Uses dynamic imports to optimize bundle size
 */

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import EnhancedAboutSection from "@/components/EnhancedAboutSection";

// Dynamic imports for below-fold components - improves initial load time
const BenefitsSection = dynamic(() => import("@/components/sapBenefit"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
});
const LearningRoadmap = dynamic(() => import("@/components/RoadmapSap"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
});
const ComprehensiveCourses = dynamic(() => import("@/components/CourseDetail"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
});
const UpcomingCourses = dynamic(() => import("@/components/UpcomingCourse"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
});
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
});
const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100" />
});
const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => <div className="min-h-[500px] animate-pulse bg-gray-100" />
});
const ScrollTopBtn = dynamic(() => import("@/components/ScrollTopBtn"));
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-900" />
});
const SocialProofNotification = dynamic(() => import("@/components/PsychologicalTriggers").then(mod => ({ default: mod.SocialProofNotification })));
const FOMOBanner = dynamic(() => import("@/components/PsychologicalTriggers").then(mod => ({ default: mod.FOMOBanner })));

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