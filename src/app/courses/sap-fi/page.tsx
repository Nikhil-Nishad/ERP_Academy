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
  Laptop
} from 'lucide-react'

export const metadata: Metadata = generateSEO({
  title: 'SAP FI Training in India | Financial Accounting & S/4HANA Finance Course',
  description: 'Learn SAP FI (Financial Accounting) & S/4HANA Finance with ERP Academy. Master General Ledger, Accounts Payable, Accounts Receivable, and Asset Accounting with 100% placement support.',
  keywords: [
    'SAP FI training India',
    'SAP FICO course Delhi',
    'SAP Financial Accounting certification',
    'SAP FI online training',
    'SAP Finance consultant career',
    'SAP FI placement assistance'
  ],
  canonicalUrl: 'https://erp-academy.vercel.app/courses/sap-fi'
})

export default function SapFiCoursePage() {
  const siteUrl = 'https://erp-academy.vercel.app'
  const pageUrl = `${siteUrl}/courses/sap-fi`

  const courseSchemaData = getCourseSchema({
    name: 'SAP FI (Financial Accounting) Training Course',
    description: 'Complete training in SAP FI modules including General Ledger, Accounts Payable, Accounts Receivable, Bank Accounting, Asset Accounting, and S/4HANA Universal Journal.',
    teaches: [
      'General Ledger Accounting (FI-GL) & Chart of Accounts',
      'Accounts Payable (FI-AP) & Automatic Payment Program',
      'Accounts Receivable (FI-AR) & Dunning Procedures',
      'Asset Accounting (FI-AA) & Depreciation Run',
      'Bank Ledger & Electronic Bank Statement (EBS)',
      'S/4HANA Universal Journal (ACDOCA) & Financial Closing'
    ],
    url: pageUrl
  })

  const curriculum = [
    {
      module: 'Module 1: Financial Enterprise Structure & General Ledger',
      topics: [
        'Company Code, Fiscal Year Variant, and Posting Period Variant configuration',
        'Chart of Accounts structure and G/L Account Master creation',
        'Document Types, Number Ranges, and Posting Keys',
        'Foreign Currency Valuation and Financial Statement Versions (FSV)'
      ]
    },
    {
      module: 'Module 2: Accounts Payable (FI-AP)',
      topics: [
        'Vendor Master / Business Partner creation and reconciliation accounts',
        'Vendor Invoice posting, credit memo, and down payment processing',
        'Automatic Payment Program (F110) end-to-end configuration',
        'Withholding Tax (TDS) calculations and reporting'
      ]
    },
    {
      module: 'Module 3: Accounts Receivable (FI-AR) & Bank Accounting',
      topics: [
        'Customer Master / Business Partner setup and billing integration (SD-FI)',
        'Customer Invoice, Incoming Payment, and partial/residual payments',
        'Dunning procedure configuration for automated collection reminders',
        'House Banks, Bank Accounts, and Electronic Bank Statement (EBS) upload'
      ]
    },
    {
      module: 'Module 4: Asset Accounting (FI-AA)',
      topics: [
        'Chart of Depreciation, Asset Classes, and Account Determination',
        'Asset Master Record creation and asset acquisitions (direct & with PO)',
        'Depreciation Keys, periodic depreciation run, and retirement/transfer',
        'Asset Year-End Closing procedures'
      ]
    },
    {
      module: 'Module 5: S/4HANA Finance & Placement Preparation',
      topics: [
        'Universal Journal (ACDOCA) single source of truth architecture',
        'Integration with SAP MM (OBYC) and SAP SD (VKOA)',
        '100+ Real-World SAP FI interview questions and scenario prep',
        'Resume coaching, mock technical evaluations, and hiring referrals'
      ]
    }
  ]

  const highlights = [
    { icon: Clock, title: 'Duration', desc: '10–12 Weeks (Flexible scheduling)' },
    { icon: Laptop, title: 'Training Mode', desc: 'Live Instructor-Led Hands-On Online' },
    { icon: Award, title: 'Certification', desc: 'C_TS4FI SAP Certified Associate Prep' },
    { icon: TrendingUp, title: 'Placement Rate', desc: '95% Placement Record' },
    { icon: Briefcase, title: 'Consultant Pay', desc: '₹6 LPA to ₹16 LPA Starting Package' },
    { icon: ShieldCheck, title: 'Server Access', desc: '24/7 S/4HANA Finance GUI Sandbox' }
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
          { name: 'SAP FI Training', url: pageUrl }
        ]}
      />

      <Header />

      {/* Hero Banner */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-900 via-green-800 to-green-950 text-white relative overflow-hidden">
        <div className="container-max px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl">
            <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 px-3 py-1 mb-4 text-sm font-semibold">
              💼 Highest Job Stability & Demand
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">SAP FI & S/4HANA Finance</span> Training
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-2xl leading-relaxed">
              Launch a lucrative career as a certified SAP Financial Accounting Consultant. Gain real enterprise configuration experience across General Ledger, AP, AR, Asset Accounting, and S/4HANA ACDOCA.
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

      {/* Curriculum Breakdown */}
      <section className="py-16">
        <div className="container-max px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Why Choose a Career in SAP Financial Accounting?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Financial reporting and statutory compliance are non-negotiable for every global enterprise. SAP FI consultants enjoy among the highest job security, strong remuneration, and rapid promotion trajectories in global consulting firms like Deloitte, PwC, EY, KPMG, Accenture, and TCS.
                </p>
              </div>

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
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1 sticky top-24">
              <Card className="border-2 border-green-600 shadow-xl overflow-hidden">
                <div className="bg-green-800 text-white p-6 text-center">
                  <Badge className="bg-yellow-400 text-green-950 font-bold mb-2">New Batch Starting</Badge>
                  <h3 className="text-2xl font-bold mb-1">Enroll in SAP FI</h3>
                  <p className="text-green-200 text-sm">Comprehensive practical training with 95% placement</p>
                </div>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-3 border-b pb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Mentor</span>
                      <span className="font-semibold text-gray-900">Akshay Kumar</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Placement</span>
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
                    <p className="text-xs text-gray-500">Have questions? Speak with our team:</p>
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
