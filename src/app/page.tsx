/**
 * Main Home Page Component for Next.js (Server Component for Optimal SEO & Fast Crawling)
 * Renders full semantic HTML server-side for maximum search engine indexability and Core Web Vitals.
 */

import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import EnhancedAboutSection from "@/components/EnhancedAboutSection";
import { faqSchema } from "@/lib/seo";

// Dynamic imports for below-the-fold components
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
    <div className="min-h-screen font-sans antialiased bg-white">
      {/* FAQ Schema for Rich Search Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      {/* Fixed Header */}
      <Header />
      
      {/* Main Content rendered for SEO */}
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
    </div>
  );
}