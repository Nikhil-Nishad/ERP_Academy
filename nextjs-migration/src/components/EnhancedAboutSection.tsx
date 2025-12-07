'use client'

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import {
  Award,
  Users,
  BookOpen,
  Target,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Clock,
  Shield
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const EnhancedAboutSection = () => {
  // Removed useInView hook as we use whileInView prop directly

  const stats = [
    { icon: Users, label: "Students Trained", value: 500, suffix: "+", color: "text-blue-500" },
    { icon: Award, label: "Years Experience", value: 6, suffix: "+", color: "text-green-500" },
    { icon: BookOpen, label: "Courses Offered", value: 15, suffix: "+", color: "text-purple-500" },
    { icon: TrendingUp, label: "Success Rate", value: 95, suffix: "%", color: "text-orange-500" }
  ]

  const skills = [
    { name: "SAP MM", level: 95, color: "bg-blue-500" },
    { name: "SAP HANA", level: 90, color: "bg-green-500" },
    { name: "SAP FI", level: 88, color: "bg-purple-500" },
    { name: "Project Management", level: 92, color: "bg-orange-500" },
    { name: "Training & Mentoring", level: 98, color: "bg-pink-500" }
  ]

  const achievements = [
    {
      icon: Award,
      title: "SAP Certified Professional",
      description: "Multiple SAP certifications in MM, HANA, and FI modules",
      year: "2018-2024"
    },
    {
      icon: Users,
      title: "500+ Students Mentored",
      description: "Successfully trained and placed students across top companies",
      year: "2018-2024"
    },
    {
      icon: Globe,
      title: "Industry Recognition",
      description: "Featured speaker at SAP conferences and industry events",
      year: "2020-2024"
    },
    {
      icon: Target,
      title: "95% Placement Success",
      description: "Consistently high placement rates for students",
      year: "2019-2024"
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Quality Education",
      description: "Commitment to delivering world-class SAP training with practical, industry-relevant curriculum."
    },
    {
      icon: Clock,
      title: "Continuous Support",
      description: "24/7 learning support and lifetime access to course materials and community."
    },
    {
      icon: Target,
      title: "Career Success",
      description: "Dedicated job placement assistance and career guidance for every student."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white to-green-50">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium mb-4">
              About ERP Academy
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
                SAP Expert
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With 6+ years of industry experience and 500+ successful student placements,
              Akshay Kumar brings real-world SAP expertise to every training session.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Image and Floating Cards */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                <Image
                  src="/assets/new_ProfilePic.webp"
                  alt="Akshay Kumar - SAP Expert Trainer"
                  width={500}
                  height={600}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />

                {/* Floating Achievement Cards */}
                <motion.div
                  className="absolute -top-6 -right-6 hidden md:block"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Card className="bg-white/90 backdrop-blur-sm border-green-200 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <div className="text-gray-800 font-semibold">4.9/5 Rating</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 hidden md:block"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <Card className="bg-white/90 backdrop-blur-sm border-blue-200 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Users className="w-6 h-6 text-blue-500" />
                        <div className="text-gray-800 font-semibold">500+ Students</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Transforming Careers Through Expert SAP Training
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  I'm Akshay Kumar, a passionate SAP professional with over 6 years of hands-on experience
                  in enterprise resource planning systems. My journey in SAP began with a vision to make
                  complex business processes simple and accessible for everyone.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At ERP Academy, I combine theoretical knowledge with practical industry experience to
                  deliver training that truly prepares students for real-world challenges.
                </p>
              </div>

              {/* Skills Progress */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Core Expertise</h4>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className={cn("h-2 rounded-full", skill.color)}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Tooltip key={stat.label}>
                    <TooltipTrigger asChild>
                      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <div className={cn("flex justify-center mb-2", stat.color)}>
                            <stat.icon className="w-8 h-8" />
                          </div>
                          <motion.div
                            className="text-2xl font-bold text-gray-900"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            {stat.value}{stat.suffix}
                          </motion.div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Professional {stat.label.toLowerCase()}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements Bento Grid */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Key Achievements & Milestones
            </h3>
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
              {achievements.map((achievement, index) => (
                <BentoGridItem
                  key={achievement.title}
                  title={achievement.title}
                  description={achievement.description}
                  header={
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-100 to-green-200 items-center justify-center">
                      <achievement.icon className="w-12 h-12 text-green-600" />
                    </div>
                  }
                  icon={
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                      {achievement.year}
                    </Badge>
                  }
                  className={cn(
                    "group/bento hover:shadow-xl transition duration-200 shadow-input border-green-100 hover:border-green-300",
                    index === 1 || index === 3 ? "md:col-span-2" : ""
                  )}
                />
              ))}
            </BentoGrid>
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="text-center"
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-300 h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                        <value.icon className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful SAP professionals who started their journey with ERP Academy.
              Get personalized guidance and industry-relevant training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-8 py-4 rounded-full text-lg transition-colors"
              >
                Book Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-green-900 font-semibold px-8 py-4 rounded-full text-lg transition-all"
              >
                View Success Stories
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedAboutSection