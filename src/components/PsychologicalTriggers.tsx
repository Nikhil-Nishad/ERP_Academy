'use client'

/**
 * Psychological Triggers Component
 * Clean, ethical trust indicators and conversion triggers
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Award, 
  Target, 
  Shield, 
  CheckCircle, 
  MessageCircle, 
  PhoneCall,
  Crown
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

// Social Proof Notifications (Disabled artificial simulated popups for trust & credibility)
const SocialProofNotification = () => {
  return null;
};

// Urgency Counter (Clean, honest batch indicator without artificial countdown loops)
const UrgencyCounter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-green-800 to-green-950 text-white p-6 rounded-xl shadow-xl border border-green-700/40"
    >
      <div className="text-center">
        <span className="font-bold text-lg text-yellow-300">Upcoming Batches Enrolling</span>
        <p className="text-green-100 text-sm mt-2 mb-4">
          Weekend & Weekday Live Interactive Batches starting every month.
        </p>
        <div className="flex justify-center gap-3">
          <Button
            size="sm"
            className="bg-yellow-400 hover:bg-yellow-500 text-green-950 font-bold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Inquire for Next Batch
          </Button>
          <a
            href="https://wa.me/919312340496?text=Hi%20ERP%20Academy%2C%20I%20am%20interested%20in%20upcoming%20SAP%20batch%20dates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-md transition-colors"
          >
            <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Authority Indicators
const AuthorityBadges = () => {
  const badges = [
    {
      icon: Crown,
      title: "Top-Rated SAP Training",
      subtitle: "Highest Student Satisfaction",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Award,
      title: "6+ Years Experience",
      subtitle: "Senior Enterprise Consultant",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: Users,
      title: "500+ Professionals",
      subtitle: "Successfully Mentored",
      color: "from-green-400 to-green-500"
    },
    {
      icon: Target,
      title: "Dedicated Placement",
      subtitle: "1-on-1 Career Support",
      color: "from-purple-400 to-purple-500"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((b, i) => (
        <div key={i} className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="flex justify-center mb-2">
            <b.icon className="w-6 h-6 text-green-600" />
          </div>
          <div className="font-bold text-gray-900 text-sm">{b.title}</div>
          <div className="text-xs text-gray-500">{b.subtitle}</div>
        </div>
      ))}
    </div>
  );
};

// Scarcity Indicator (Ethical batch size notice instead of fake viewer counter)
const ScarcityIndicator = () => {
  return (
    <div className="p-4 bg-green-50 rounded-xl border border-green-200 text-center">
      <p className="text-sm font-semibold text-green-950">
        Small Batch Mentoring Policy (Max 10–12 Learners)
      </p>
      <p className="text-xs text-green-700 mt-1">
        We limit batch sizes to ensure each learner receives direct system assistance and individualized resume feedback.
      </p>
    </div>
  );
};

// Trust Signals
const TrustSignals = () => {
  const trustElements = [
    {
      icon: Shield,
      title: "100% Practical Focus",
      description: "Hands-on SAP GUI and S/4HANA enterprise sandbox access throughout your training"
    },
    {
      icon: CheckCircle,
      title: "Senior Consultant Mentorship",
      description: "Taught directly by Akshay Kumar with 6+ years enterprise implementation experience"
    },
    {
      icon: Award,
      title: "Independent SAP Training",
      description: "Comprehensive curriculum aligned with current global consulting and hiring demands"
    },
    {
      icon: Users,
      title: "Dedicated Career Support",
      description: "Resume crafting, mock interviews, LinkedIn re-branding, and interview preparation"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {trustElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border border-green-100"
        >
          <div className="bg-green-600 text-white p-2 rounded-lg flex-shrink-0">
            <element.icon className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">{element.title}</h4>
            <p className="text-sm text-gray-600">{element.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Floating Conversion Bar with WhatsApp & Quick Inquire
const FOMOBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-950 text-white p-3 sm:p-4 shadow-2xl z-40 border-t border-slate-800">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-3 text-center sm:text-left">
          <div className="hidden sm:flex p-2 bg-green-600/20 text-green-400 rounded-lg">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-sm sm:text-base text-white">
              Have questions about SAP courses or upcoming batches?
            </p>
            <p className="text-xs text-gray-400">
              Speak directly with our senior consultant • Online & limited offline in Delhi
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto justify-center">
          <a
            href="https://wa.me/919312340496?text=Hi%20ERP%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20SAP%20training%20courses"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold rounded-lg transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 mr-1.5" /> WhatsApp
          </a>
          <a
            href="tel:+919312340496"
            className="hidden md:inline-flex items-center justify-center px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-medium rounded-lg border border-slate-700 transition-colors"
          >
            <PhoneCall className="w-4 h-4 mr-1.5 text-green-400" /> Call
          </a>
          <Button 
            size="sm"
            className="flex-1 sm:flex-none bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-bold text-xs sm:text-sm"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Demo
          </Button>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white p-1 text-xs"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export {
  SocialProofNotification,
  UrgencyCounter,
  AuthorityBadges,
  ScarcityIndicator,
  TrustSignals,
  FOMOBanner
};
