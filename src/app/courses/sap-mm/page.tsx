import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { generateSEO, getCourseSchema } from '@/lib/seo'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  CheckCircle,
  Clock,
  Award,
  Users,
  Star,
  BookOpen,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  HelpCircle,
  Laptop
} from 'lucide-react'

export const metadata: Metadata = generateSEO({
  title: 'SAP MM Training in India | Complete Course with 100% Placement Support',
  description: 'Master SAP Materials Management (MM) with India\'s #1 SAP training institute. 10-12 weeks hands-on practical training, real-time projects, and guaranteed job placement support.',
  keywords: [
    'SAP MM training India',
    'SAP MM course Delhi',
    'SAP Materials Management certification',
    'SAP MM online training',
    'SAP MM course fees',
    'SAP MM placement assistance',
    'best SAP MM trainer India'
  ],
  canonicalUrl: 'https://erp-academy.vercel.app/courses/sap-mm'
})

export default function SapMmCoursePage() {
  const siteUrl = 'https://erp-academy.vercel.app'
  const pageUrl = `${siteUrl}/courses/sap-mm`

  const courseSchemaData = getCourseSchema({
    name: 'SAP MM (Materials Management) Training Course',
    description: 'Comprehensive SAP MM training covering procurement lifecycle, inventory management, master data, pricing procedure, and integration with FI/SD modules.',
    teaches: [
      'Procurement Process & Purchasing',
      'Inventory Management & Physical Inventory',
      'Material Master Data & Vendor Master',
      'Valuation and Account Determination',
      'Invoice Verification (MIRO)',
      'SAP S/4HANA Sourcing and Procurement'
    ],
    url: pageUrl
  })

  const curriculum = [
    {
      module: 'Module 1: Enterprise Structure & Master Data',
      topics: [
        'Organization structure in SAP MM (Plant, Storage Location, Purchase Org)',
        'Material Master configuration & views',
        'Vendor / Business Partner Master configuration in S/4HANA',
        'Purchasing Info Records, Source Lists, and Quota Arrangement'
      ]
    },
    {
      module: 'Module 2: Procurement Lifecycle & Purchasing Documents',
      topics: [
        'Purchase Requisition (PR) and Request for Quotation (RFQ)',
        'Purchase Order (PO) creation, release strategy, and version management',
        'Outline Agreements: Contracts and Scheduling Agreements',
        'Special Procurement processes (Subcontracting, Consignment, Stock Transport Order - STO)'
      ]
    },
    {
      module: 'Module 3: Inventory Management & Goods Movement',
      topics: [
        'Goods Receipt (MIGO), Goods Issue, and Transfer Postings',
        'Movement Types in SAP MM and reservation management',
        'Physical Inventory process and cycle counting',
        'Special stock management and batch tracking'
      ]
    },
    {
      module: 'Module 4: Valuation, Account Determination & Invoice Verification',
      topics: [
        'Material Valuation methods (Standard Price vs Moving Average)',
        'Automatic Account Determination (OBYC configuration & integration with FI)',
        'Logistics Invoice Verification (MIRO) and credit memo handling',
        'Price variance, variances handling, and blocking reasons'
      ]
    },
    {
      module: 'Module 5: Real-World S/4HANA Migration & Interview Prep',
      topics: [
        'S/4HANA Sourcing & Procurement key innovations (Fiori apps)',
        'End-to-end real-world client implementation project simulation',
        'Top 100+ SAP MM technical & scenario-based interview questions',
        'Resume formatting, LinkedIn profile optimization, and job placement assistance'
      ]
    }
  ]

  const highlights = [
    { icon: Clock, title: 'Duration', desc: '10–12 Weeks (Weekend & Weekday batches)' },
    { icon: Laptop, title: 'Mode of Training', desc: '100% Live Interactive Online Sessions' },
    { icon: Award, title: 'Certification', desc: 'Official SAP MM Certification Prep Included' },
    { icon: TrendingUp, title: 'Placement Rate', desc: '95% Verified Placement Assistance' },
    { icon: Briefcase, title: 'Starting Salary', desc: '₹5.5 LPA to ₹14 LPA for MM Consultants' },
    { icon: ShieldCheck, title: 'Server Access', desc: '24/7 SAP GUI & S/4HANA Practice Sandbox' }
  ]

  const faqs = [
    {
      q: 'What are the prerequisites for SAP MM training?',
      a: 'There are no strict coding prerequisites. Basic understanding of supply chain, purchasing, inventory, or commerce concepts is helpful. Both freshers and working professionals from non-IT backgrounds can learn successfully.'
    },
    {
      q: 'Do I get access to an actual SAP software sandbox for practice?',
      a: 'Yes, full 24/7 dedicated access to the latest SAP GUI and S/4HANA sandbox environment is provided for hands-on configuration throughout your training period.'
    },
    {
      q: 'How does the placement assistance work?',
      a: 'We conduct 1-on-1 resume building, mock interviews, LinkedIn profile optimization, and direct referrals to top hiring partner companies such as TCS, Infosys, Wipro, and Accenture.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchemaData)
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Courses', url: `${siteUrl}/#courses` },
          { name: 'SAP MM Training', url: pageUrl }
        ]}
      />

      <Header />

      {/* Hero Banner */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-900 via-green-800 to-green-950 text-white relative overflow-hidden">
        <div className="container-max px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl">
            <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 px-3 py-1 mb-4 text-sm font-semibold">
              ⭐ India's #1 Rated SAP MM Training
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">SAP MM</span> with Practical Industry Training
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-2xl leading-relaxed">
              Step into high-paying SAP consultant roles. Gain comprehensive end-to-end procurement and inventory mastery with 6+ years expert mentorship, live project experience, and 95% placement record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-green-950 font-bold px-8 py-6 text-lg w-full sm:w-auto">
                  Book Free Demo Class <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900 px-8 py-6 text-lg w-full sm:w-auto">
                  Download Syllabus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container-max px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((item, idx) => (
              <Card key={idx} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-2 text-green-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-gray-900 text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-gray-600 leading-tight">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview & Benefits */}
      <section className="py-16">
        <div className="container-max px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Why Learn SAP Materials Management (MM)?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  SAP MM is the backbone of supply chain and enterprise resource planning. Every manufacturing, retail, automotive, and logistics conglomerate globally relies on SAP MM to manage purchase lifecycles, master data, valuation, and vendor coordination.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With the global transition to SAP S/4HANA, certified SAP MM consultants are in massive demand across Tier-1 IT companies in India and overseas.
                </p>
              </div>

              {/* What You Will Learn */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Complete Curriculum Breakdown
                </h3>
                <div className="space-y-4">
                  {curriculum.map((c, i) => (
                    <Card key={i} className="border border-gray-200 shadow-sm">
                      <CardHeader className="bg-green-50 py-3 px-6">
                        <CardTitle className="text-base sm:text-lg font-bold text-green-900 flex items-center">
                          <BookOpen className="w-5 h-5 mr-2 text-green-700" />
                          {c.module}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ul className="space-y-2">
                          {c.topics.map((t, ti) => (
                            <li key={ti} className="flex items-start text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <HelpCircle className="w-6 h-6 mr-2 text-green-700" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((f, fi) => (
                    <Card key={fi} className="border border-gray-200">
                      <CardContent className="p-5">
                        <h4 className="font-bold text-gray-900 mb-2">{f.q}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA Card */}
            <div className="lg:col-span-1 sticky top-24">
              <Card className="border-2 border-green-600 shadow-xl overflow-hidden">
                <div className="bg-green-800 text-white p-6 text-center">
                  <Badge className="bg-yellow-400 text-green-950 font-bold mb-2">Next Batch Starting Soon</Badge>
                  <h3 className="text-2xl font-bold mb-1">Enroll in SAP MM</h3>
                  <p className="text-green-200 text-sm">Limited seats per batch for personalized mentoring</p>
                </div>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-3 border-b pb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Instructor</span>
                      <span className="font-semibold text-gray-900">Akshay Kumar (6+ Yrs Exp)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Batch Type</span>
                      <span className="font-semibold text-gray-900">Weekend & Weekday</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Placement Support</span>
                      <span className="font-semibold text-green-700">100% Assistance</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Student Rating</span>
                      <span className="font-semibold text-yellow-600 flex items-center">
                        <Star className="w-4 h-4 fill-current mr-1 text-yellow-500" /> 4.9/5.0 (500+ reviews)
                      </span>
                    </div>
                  </div>

                  <Link href="/#contact" className="block w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-base">
                      Enroll / Request Call Back
                    </Button>
                  </Link>

                  <div className="text-center">
                    <p className="text-xs text-gray-500">Need instant consultation?</p>
                    <a href="tel:+919312340496" className="text-sm font-bold text-green-700 hover:underline">
                      Call: +91-9312340496
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
