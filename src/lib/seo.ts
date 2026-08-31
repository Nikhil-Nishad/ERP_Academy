import { Metadata } from 'next'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  noIndex?: boolean
  structuredData?: any
}

export function generateSEO({
  title = 'Master SAP MM, HANA, FI Training India | ERP Academy',
  description = 'Transform your career with India\'s top-rated SAP training institute. Expert-led SAP MM, HANA & FI courses with 95% placement assistance. Book a free demo class today!',
  keywords = [
    'SAP training India',
    'SAP MM course',
    'SAP HANA training',
    'SAP FI certification',
    'ERP Academy',
    'Akshay Kumar SAP trainer',
    'SAP job placement India',
    'SAP certification Delhi',
    'learn SAP online'
  ],
  canonicalUrl = 'https://erp-academy.vercel.app/',
  ogImage = 'https://erp-academy.vercel.app/assets/new_heroPic.webp',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData
}: SEOProps): Metadata {
  const isWebp = ogImage.endsWith('.webp')
  const imageType = isWebp ? 'image/webp' : 'image/png'

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Akshay Kumar', url: 'https://erp-academy.vercel.app' }],
    creator: 'Akshay Kumar',
    publisher: 'ERP Academy',
    robots: noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': canonicalUrl,
        'x-default': canonicalUrl
      }
    },
    openGraph: {
      type: ogType as any,
      locale: 'en_US',
      url: canonicalUrl,
      siteName: 'ERP Academy by Akshay',
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: imageType
        }
      ]
    },
    twitter: {
      card: twitterCard as any,
      site: '@ERPAcademyIndia',
      creator: '@AkshayKumarSAP',
      title,
      description,
      images: [ogImage]
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || 'pending-verification'
    },
    category: 'education',
    classification: 'SAP Training Institute',
    other: {
      'theme-color': '#22c55e',
      'msapplication-TileColor': '#22c55e',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-title': 'ERP Academy',
      'application-name': 'ERP Academy',
      'msapplication-tooltip': 'Master SAP with Expert Training',
      'og:site_name': 'ERP Academy by Akshay',
      'og:email': 'nikhilnishad1801@gmail.com',
      'og:phone_number': '+91-9312340496',
      'og:latitude': '28.6139',
      'og:longitude': '77.2090',
      'og:street-address': 'Delhi',
      'og:locality': 'New Delhi',
      'og:region': 'Delhi',
      'og:postal-code': '110001',
      'og:country-name': 'India'
    }
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "name": "ERP Academy by Akshay",
  "alternateName": "ERP Academy",
  "url": "https://erp-academy.vercel.app/",
  "logo": "https://erp-academy.vercel.app/assets/logo_fit.png",
  "description": "India's premier SAP training institute providing expert-led courses in SAP MM, HANA, and FI with guaranteed job placement assistance.",
  "foundingDate": "2018",
  "founder": {
    "@type": "Person",
    "name": "Akshay Kumar",
    "jobTitle": "SAP Expert & Trainer",
    "worksFor": {
      "@type": "Organization",
      "name": "ERP Academy"
    },
    "knowsAbout": ["SAP MM", "SAP HANA", "SAP FI", "Enterprise Resource Planning"],
    "alumniOf": "SAP Certified Professional"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New Delhi",
    "addressLocality": "Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110001",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"],
    "telephone": "+91-9312340496",
    "email": "nikhilnishad1801@gmail.com"
  },
  "sameAs": [
    "https://nikhil-nishad.vercel.app"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  }
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Akshay Kumar",
  "jobTitle": "SAP Expert & Senior Trainer",
  "description": "SAP expert with 6+ years of industry experience, specializing in SAP MM, HANA, and FI. Founder of ERP Academy.",
  "image": "https://erp-academy.vercel.app/assets/new_ProfilePic.webp",
  "url": "https://erp-academy.vercel.app/",
  "worksFor": {
    "@type": "Organization",
    "name": "ERP Academy"
  },
  "alumniOf": "SAP Certified Professional",
  "knowsAbout": ["SAP MM", "SAP HANA", "SAP FI", "Enterprise Resource Planning", "SAP Training"],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "SAP Certified Professional",
    "credentialCategory": "Professional Certification"
  }
}

export function getCourseSchema({
  name,
  description,
  teaches,
  url = 'https://erp-academy.vercel.app/'
}: {
  name: string
  description: string
  teaches: string[]
  url?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "ERP Academy by Akshay",
      "url": "https://erp-academy.vercel.app/"
    },
    "instructor": {
      "@type": "Person",
      "name": "Akshay Kumar",
      "jobTitle": "SAP Expert & Senior Trainer"
    },
    "courseMode": ["online", "blended"],
    "educationalLevel": "Beginner to Advanced",
    "timeRequired": "P3M",
    "teaches": teaches,
    "coursePrerequisites": "Basic computer knowledge and understanding of business processes",
    "financialAid": "Scholarship and flexible EMI options available",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "instructor": {
        "@type": "Person",
        "name": "Akshay Kumar"
      }
    },
    "offers": {
      "@type": "Offer",
      "category": "Education",
      "price": "Contact for pricing",
      "priceCurrency": "INR",
      "availability": "InStock",
      "validFrom": "2025-01-01",
      "url": url
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What SAP modules do you teach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in SAP MM (Material Management), SAP FI (Financial Accounting), and SAP HANA. Our courses cover fundamental to advanced concepts with hands-on practical experience in each module."
      }
    },
    {
      "@type": "Question",
      "name": "How long is the complete SAP training program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our comprehensive SAP training program typically runs for 10-12 weeks, with 3-4 hours of training per week. We also offer intensive weekend batches and flexible scheduling to accommodate working professionals."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide SAP certification preparation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our training includes comprehensive certification preparation. We provide study materials, mock exams, and guidance for official SAP certification exams to help you achieve your certification goals."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide job placement assistance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer comprehensive job placement assistance including resume building, interview preparation, and connecting you with our network of hiring partners. Our placement success rate is over 95%."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get an SAP job without prior IT experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our training is designed for both IT and non-IT professionals. We start with fundamentals and gradually build up to advanced concepts. Many of our successful students come from non-technical backgrounds."
      }
    }
  ]
}