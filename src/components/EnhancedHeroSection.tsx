'use client'

import React, { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import {
  Play,
  Star,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Meteors } from "@/components/ui/meteors"
import TypingAnimation from "@/components/ui/typing-animation"
import Marquee from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

const EnhancedHeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 50]) // Subtle parallax

  const stats = [
    { icon: Users, label: "Students Trained", value: "500+", color: "text-blue-400" },
    { icon: Award, label: "Years Experience", value: "6+", color: "text-green-400" },
    { icon: TrendingUp, label: "Placement Rate", value: "95%", color: "text-yellow-400" },
    { icon: Star, label: "Average Rating", value: "4.9/5", color: "text-purple-400" }
  ]

  const companies = [
    { name: "Liteon", logo: "/assets/liteon-logo.svg" },
    { name: "SAP", logo: "/assets/sap.png" },
    { name: "Motherson", logo: "/assets/motherson_work_3.png" },
    { name: "Sansera", logo: "/assets/sansera_work_1.png" },
    { name: "Wiredsoft", logo: "/assets/wiredsoft_work_4.png" }
  ]

  const features = [
    "Live Interactive Sessions",
    "Real-world Project Experience",
    "Job Placement Assistance",
    "Industry Expert Mentorship",
    "Certification Support",
    "24/7 Learning Support"
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "SAP MM Consultant",
      company: "TCS",
      image: "/assets/new_ProfilePic.webp",
      rating: 5,
      text: "Outstanding training quality! Akshay sir's practical approach helped me land my dream job."
    },
    {
      name: "Priya Sharma",
      role: "SAP HANA Developer",
      company: "Infosys",
      image: "/assets/new_ProfilePic.webp",
      rating: 5,
      text: "Best SAP training institute in India. The hands-on experience was invaluable."
    },
    {
      name: "Amit Patel",
      role: "SAP FI Consultant",
      company: "Wipro",
      image: "/assets/new_ProfilePic.webp",
      rating: 5,
      text: "Excellent curriculum and job placement support. Highly recommended!"
    }
  ]

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <Meteors number={20} />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                #1 SAP Training Institute in India
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Master SAP with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Expert Training
                </span>
              </h1>

              <TypingAnimation
                text="Transform Your Career Today!"
                className="text-2xl md:text-3xl text-green-100 font-semibold"
                duration={100}
              />
            </div>

            {/* Description */}
            <p className="text-xl text-green-100 leading-relaxed max-w-2xl">
              Join India's most trusted SAP training institute. Get hands-on experience with
              <span className="text-yellow-400 font-semibold"> SAP MM, HANA & FI </span>
              modules led by industry experts with 6+ years of experience.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-2 text-green-100"
                >
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-8 py-6 text-lg group"
                aria-label="Start free SAP training trial"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" aria-hidden="true" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-green-900 px-8 py-6 text-lg group"
                aria-label="Watch SAP training demo video"
              >
                <Play className="w-5 h-5 mr-2" aria-hidden="true" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className={cn("flex justify-center mb-2", stat.color)}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-green-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
            style={{ y }}
          >
            {/* Main Image */}
            <div className="relative">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/new_heroPic.webp"
                  alt="Akshay Kumar - SAP Expert Trainer"
                  width={600}
                  height={700}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-6 -left-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <div className="text-white font-semibold">4.9/5 Rating</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-green-400" />
                      <div className="text-white font-semibold">500+ Students</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Companies Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-center text-xl text-green-200 mb-8">
            Our Students Work At Top Companies
          </h3>
          <Marquee pauseOnHover className="[--duration:30s]">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center w-40 h-20 mx-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300 p-4"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </Marquee>
        </motion.div>

        {/* Testimonials Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-center text-xl text-green-200 mb-8">
            What Our Students Say
          </h3>
          <Marquee pauseOnHover className="[--duration:40s]" reverse>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="w-80 mx-4 bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-green-200">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-green-100 text-sm leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default EnhancedHeroSection