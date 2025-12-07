'use client'

/**
 * Psychological Triggers Component
 * Implements proven psychological principles to increase engagement and conversions
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  Users, 
  Star, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Zap,
  Crown,
  Award,
  Target,
  Eye,
  UserCheck,
  Shield
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

// Social Proof Notifications
const SocialProofNotification = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const notifications = [
    {
      icon: UserCheck,
      message: "Rajesh from Mumbai just enrolled in SAP MM course",
      time: "2 minutes ago",
      color: "text-green-600"
    },
    {
      icon: Award,
      message: "Priya completed SAP FI certification with 95% score",
      time: "5 minutes ago", 
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      message: "3 students got job offers this week through our placement program",
      time: "10 minutes ago",
      color: "text-purple-600"
    },
    {
      icon: Star,
      message: "Amit rated our SAP training 5 stars",
      time: "15 minutes ago",
      color: "text-yellow-600"
    }
  ];

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 4000);
    };

    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
      showNotification();
    }, 8000);

    // Show first notification after 3 seconds
    setTimeout(showNotification, 3000);

    return () => clearInterval(interval);
  }, []);

  const notification = notifications[currentNotification];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-md">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full bg-gray-100 ${notification.color}`}>
                  <notification.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Urgency Counter
const UrgencyCounter = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl shadow-xl"
    >
      <div className="text-center">
        <div className="flex items-center justify-center mb-3">
          <AlertCircle className="w-5 h-5 mr-2 text-yellow-300" />
          <span className="font-bold text-lg">Limited Time Offer!</span>
          <AlertCircle className="w-5 h-5 ml-2 text-yellow-300" />
        </div>
        
        <p className="text-red-100 mb-4">
          Early Bird Discount (30% OFF) expires in:
        </p>
        
        <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
              <div className="text-2xl font-bold">{value.toString().padStart(2, '0')}</div>
              <div className="text-xs uppercase text-red-200">{unit}</div>
            </div>
          ))}
        </div>
        
        <p className="text-sm text-red-100 mt-3">
          Don't miss out! Only 5 seats left in the next batch
        </p>
      </div>
    </motion.div>
  );
};

// Authority Indicators
const AuthorityBadges = () => {
  const badges = [
    {
      icon: Crown,
      title: "#1 SAP Institute",
      subtitle: "Ranked by Student Success",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Award,
      title: "6+ Years Experience",
      subtitle: "Industry Expert Instructor",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: Users,
      title: "500+ Students",
      subtitle: "Successfully Placed",
      color: "from-green-400 to-green-500"
    },
    {
      icon: Target,
      title: "95% Success Rate",
      subtitle: "Job Placement Guarantee",
      color: "from-purple-400 to-purple-500"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`bg-gradient-to-br ${badge.color} text-white p-4 rounded-xl text-center shadow-lg`}
        >
          <badge.icon className="w-8 h-8 mx-auto mb-2" />
          <div className="font-bold text-sm">{badge.title}</div>
          <div className="text-xs opacity-90">{badge.subtitle}</div>
        </motion.div>
      ))}
    </div>
  );
};

// Scarcity Indicators
const ScarcityIndicator = ({ seatsLeft = 5, totalSeats = 12 }) => {
  const percentage = ((totalSeats - seatsLeft) / totalSeats) * 100;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white border-2 border-red-200 rounded-xl p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Eye className="w-5 h-5 text-red-500 mr-2" />
          <span className="font-semibold text-gray-900">Seats Filling Fast!</span>
        </div>
        <span className="text-red-600 font-bold">{seatsLeft}/{totalSeats} left</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full"
        />
      </div>
      
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">
          {Math.floor(Math.random() * 20) + 10} people are viewing this page
        </p>
        <p className="text-xs text-red-600 font-medium">
          Next batch starts in 7 days - Secure your spot now!
        </p>
      </div>
    </motion.div>
  );
};

// Trust Signals
const TrustSignals = () => {
  const trustElements = [
    {
      icon: Shield,
      title: "100% Money Back Guarantee",
      description: "Not satisfied? Get full refund within 30 days"
    },
    {
      icon: CheckCircle,
      title: "Verified Student Reviews",
      description: "All testimonials are from real, verified students"
    },
    {
      icon: Award,
      title: "Industry Certified",
      description: "Accredited training with official SAP recognition"
    },
    {
      icon: Users,
      title: "Lifetime Support",
      description: "Continue getting help even after course completion"
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
          <div className="bg-green-600 text-white p-2 rounded-lg">
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

// Fear of Missing Out (FOMO) Banner
const FOMOBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 p-4 shadow-2xl z-40"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Zap className="w-6 h-6" />
          <div>
            <p className="font-bold">Don't Wait! Career Transformation Starts Now</p>
            <p className="text-sm">Join 500+ successful SAP professionals who started with us</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            className="bg-gray-900 hover:bg-gray-800 text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Learning Today
          </Button>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-700 hover:text-gray-900"
          >
            ✕
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Export all components
export {
  SocialProofNotification,
  UrgencyCounter,
  AuthorityBadges,
  ScarcityIndicator,
  TrustSignals,
  FOMOBanner
};