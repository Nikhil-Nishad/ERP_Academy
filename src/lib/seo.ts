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
  title = 'Master SAP Training | ERP Academy by Akshay - #1',
  description = 'Transform your career with India\'s #1 SAP training. Expert SAP MM, HANA & FI courses. 6+ years experience, 500+ placed. Free consultation!',
  keywords = ['SAP training India', 'SAP MM course', 'SAP HANA training', 'SAP FI certification', 'ERP Academy', 'Akshay Kumar SAP trainer', 'SAP job placement', 'SAP certification'],
  canonicalUrl = 'https://erp-academy.vercel.app/',
  ogImage = 'https://erp-academy.vercel.app/assets/new_heroPic.webp',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData
}: SEOProps): Metadata {
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
        'hi': canonicalUrl,
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
          type: 'image/png'
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
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || 'pending-verification',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code'
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
      'og:email': 'contact@erp-academy.com',
      'og:phone_number': '+91-XXXXXXXXXX',
      'og:latitude': '28.6139',
      'og:longitude': '77.2090',
      'og:street-address': 'India',
      'og:locality': 'New Delhi',
      'og:region': 'Delhi',
      'og:postal-code': '110001',
      'og:country-name': 'India'
    }
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "ERP Academy by Akshay",
  "alternateName": "ERP Academy",
  "url": "https://erp-academy.vercel.app/",
  "logo": "https://erp-academy.vercel.app/assets/logo_fit.png",
  "description": "India's #1 SAP training institute providing expert-led courses in SAP MM, HANA, and FI with guaranteed job placement assistance.",
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
    "addressCountry": "IN",
    "addressLocality": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"],
    "telephone": "+91-XXXXXXXXXX",
    "email": "contact@erp-academy.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/erp-academy",
    "https://twitter.com/ERPAcademyIndia",
    "https://www.youtube.com/c/ERPAcademy"
  ],
  "offers": {
    "@type": "Course",
    "name": "SAP Training Courses",
    "description": "Comprehensive SAP training including MM, HANA, and FI modules",
    "provider": {
      "@type": "Organization",
      "name": "ERP Academy by Akshay"
    },
    "courseMode": ["online", "blended"],
    "educationalLevel": "Beginner to Advanced",
    "timeRequired": "P3M",
    "teaches": ["SAP MM", "SAP HANA", "SAP FI"],
    "coursePrerequisites": "Basic computer knowledge",
    "financialAid": "Scholarship available",
    "offers": {
      "@type": "Offer",
      "category": "Education",
      "price": "Contact for pricing",
      "priceCurrency": "INR"
    }
  },
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
  "description": "SAP expert with 6+ years of experience, specializing in SAP MM, HANA, and FI. Founder of ERP Academy, India's leading SAP training institute.",
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
  },
  "memberOf": {
    "@type": "Organization",
    "name": "SAP Community"
  }
}

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "SAP MM Training Course",
  "description": "Complete SAP Materials Management (MM) training course with hands-on practical experience and job placement assistance.",
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
  "teaches": ["Materials Management", "Procurement Process", "Inventory Management", "Vendor Management"],
  "coursePrerequisites": "Basic computer knowledge and understanding of business processes",
  "financialAid": "Scholarship and EMI options available",
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
    "validFrom": "2024-01-01"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  }
}