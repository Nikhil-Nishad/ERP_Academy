'use client'

import React from 'react'
import Link from 'next/link'
import { MessageSquare, PhoneCall, CheckCircle2, ArrowRight, Sparkles, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface BlogCTAProps {
  moduleName?: string
}

export default function BlogCTA({ moduleName = 'SAP MM, HANA & FI' }: BlogCTAProps) {
  return (
    <Card className="my-10 border-2 border-green-600/30 bg-gradient-to-br from-green-900 via-green-800 to-emerald-950 text-white shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-green-500/10 rounded-full blur-2xl pointer-events-none" />
      <CardContent className="p-6 sm:p-8 relative z-10">
        <div className="flex items-center space-x-2 text-yellow-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
          <Sparkles className="w-4 h-4" />
          <span>India\'s Premier SAP Training with Mentor Support</span>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-white leading-tight">
          Ready to Accelerate Your Career with {moduleName}?
        </h3>

        <p className="text-green-100 text-sm sm:text-base mb-6 max-w-2xl leading-relaxed">
          Stop struggling with fragmented tutorials. Get trained personally by <strong>Akshay Kumar</strong> (6+ years experience, 500+ placed professionals) with real-time S/4HANA server access, business blueprint scenarios, and 100% interview preparation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-xs sm:text-sm text-green-200">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span>95% Placement Assistance</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span>Live S/4HANA 2023 Server</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span>Weekend & Weekday Batches</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <a
            href="https://wa.me/919312340496?text=Hi%20Akshay,%20I%20am%20reading%20your%20SAP%20blog%20and%20would%20like%20to%20know%20more%20about%20your%20upcoming%20batch%20and%20course%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none"
          >
            <Button
              size="lg"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-md flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </Button>
          </a>

          <Link href="/#contact" className="flex-1 sm:flex-none">
            <Button
              size="lg"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-green-950 font-bold shadow-md flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Free Demo Class</span>
            </Button>
          </Link>

          <Link href="/courses/sap-mm" className="flex-1 sm:flex-none">
            <Button
              variant="outline"
              size="lg"
              className="w-full border-green-400/50 text-white hover:bg-green-700/50 hover:text-yellow-300 font-medium"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
