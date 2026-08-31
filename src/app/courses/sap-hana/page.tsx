import type { Metadata } from 'next'
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
  title: 'SAP HANA Training in India | S/4HANA Certification with Placement Assistance',
  description: 'Master in-memory database architecture, HANA Modeling, CDS Views, and S/4HANA migration with ERP Academy. Hands-on labs & guaranteed placement assistance.',
  keywords: [
    'SAP HANA training India',
    'SAP S4HANA course Delhi',
    'SAP HANA certification',
    'SAP HANA online training',
    'learn SAP HANA modeling',
    'SAP HANA consultant salary India'
  ],
  canonicalUrl: 'https://erp-academy.vercel.app/courses/sap-hana'
})

export default function SapHanaCoursePage() {
  const siteUrl = 'https://erp-academy.vercel.app'
  const pageUrl = `${siteUrl}/courses/sap-hana`

  const courseSchemaData = getCourseSchema({
    name: 'SAP HANA & S/4HANA Training Course',
    description: 'Comprehensive hands-on training on SAP HANA In-Memory Database, Columnar Architecture, Calculation Views, CDS Views, and S/4HANA Migration.',
    teaches: [
      'SAP HANA In-Memory Computing & Architecture',
      'Column Store vs Row Store Table Optimization',
      'Information Modeling & Calculation Views',
      'Core Data Services (CDS Views) & AMDP',
      'Data Provisioning with SLT & SDI',
      'S/4HANA Conversion & Brownfield/Greenfield Migration'
    ],
    url: pageUrl
  })

  const curriculum = [
    {
      module: 'Module 1: SAP HANA Architecture & In-Memory Database',
      topics: [
        'Evolution of SAP HANA and In-Memory Computing principles',
        'Persistence layer, Row store vs Column store architecture',
        'Multi-Version Concurrency Control (MVCC) & Memory Management',
        'SAP HANA Studio and Web IDE / Business Application Studio'
      ]
    },
    {
      module: 'Module 2: Advanced HANA Modeling & Calculation Views',
      topics: [
        'Dimension, Cube, and Star Join Calculation Views',
        'Aggregations, Projections, Unions, and Complex Joins',
        'Input Parameters, Variables, and Calculated Columns',
        'Performance tuning of modeling views and execution plan analysis'
      ]
    },
    {
      module: 'Module 3: CDS Views & ABAP for HANA (AMDP)',
      topics: [
        'ABAP Core Data Services (CDS Views) definition & associations',
        'Virtual Data Model (VDM) in SAP S/4HANA',
        'ABAP Managed Database Procedures (AMDP) implementation',
        'Code-to-Data pushdown paradigm in real-world scenarios'
      ]
    },
    {
      module: 'Module 4: Data Provisioning & Replication Techniques',
      topics: [
        'SAP Landscape Transformation (SLT) real-time replication',
        'Smart Data Integration (SDI) and Smart Data Quality (SDQ)',
        'Flat file loading and SAP Data Services integration',
        'Security, Roles, and Analytic Privileges in HANA'
      ]
    },
    {
      module: 'Module 5: S/4HANA Cloud Migration & Interview Prep',
      topics: [
        'Greenfield vs Brownfield vs Selective Data Transition paths',
        'Software Update Manager (SUM) with DMO (Database Migration Option)',
        'Top 100+ SAP HANA and S/4HANA technical interview questions',
        'Client project simulations and 100% placement support'
      ]
    }
  ]

  const highlights = [
    { icon: Clock, title: 'Duration', desc: '10–12 Weeks (Flexible scheduling)' },
    { icon: Laptop, title: 'Mode of Training', desc: 'Live Instructor-led Online Labs' },
    { icon: Award, title: 'Certification', desc: 'C_HANAIMP / C_HANATEC Prep' },
    { icon: TrendingUp, title: 'Placement Record', desc: '95% Placed in Top MNCs' },
    { icon: Briefcase, title: 'Salary Potential', desc: '₹7 LPA to ₹18+ LPA for HANA Consultants' },
    { icon: ShieldCheck, title: 'Lab Server', desc: 'Dedicated 24/7 SAP HANA Studio Access' }
  ]

  return (
    <div className="min-h-screen bg-white">
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
          { name: 'SAP HANA Training', url: pageUrl }
        ]}
      />

      <Header />

      {/* Hero Banner */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-900 via-green-800 to-green-950 text-white relative overflow-hidden">
        <div className="container-max px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl">
            <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 px-3 py-1 mb-4 text-sm font-semibold">
              🚀 High Demand Technology 2025-2026
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">SAP HANA & S/4HANA</span> Architecture
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-2xl leading-relaxed">
              Accelerate your IT career into elite high-paying consultant roles. Learn in-memory modeling, CDS views, SQLScript, and S/4HANA migration with real enterprise project environments.
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

      {/* Highlights */}
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

      {/* Curriculum & Details */}
      <section className="py-16">
        <div className="container-max px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Why SAP HANA is the Future of Enterprise Data
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  SAP HANA is not just a database — it is a revolutionary in-memory data platform that processes massive analytical and transactional workloads in milliseconds. With SAP phasing out legacy non-HANA systems, every Fortune 500 company is actively hiring skilled HANA specialists.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Curriculum & Hands-on Modules
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
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1 sticky top-24">
              <Card className="border-2 border-green-600 shadow-xl overflow-hidden">
                <div className="bg-green-800 text-white p-6 text-center">
                  <Badge className="bg-yellow-400 text-green-950 font-bold mb-2">Weekend Batch Open</Badge>
                  <h3 className="text-2xl font-bold mb-1">Enroll in SAP HANA</h3>
                  <p className="text-green-200 text-sm">Comprehensive hands-on training with placement</p>
                </div>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-3 border-b pb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Instructor</span>
                      <span className="font-semibold text-gray-900">Akshay Kumar</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Placement Support</span>
                      <span className="font-semibold text-green-700">100% Assistance</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Rating</span>
                      <span className="font-semibold text-yellow-600 flex items-center">
                        <Star className="w-4 h-4 fill-current mr-1 text-yellow-500" /> 4.9/5.0
                      </span>
                    </div>
                  </div>

                  <Link href="/#contact" className="block w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-base">
                      Enroll / Book Free Demo
                    </Button>
                  </Link>

                  <div className="text-center">
                    <p className="text-xs text-gray-500">Call our career counselors:</p>
                    <a href="tel:+919312340496" className="text-sm font-bold text-green-700 hover:underline">
                      +91-9312340496
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
