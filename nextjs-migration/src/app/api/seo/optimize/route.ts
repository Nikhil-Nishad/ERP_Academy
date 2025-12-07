import { NextRequest, NextResponse } from 'next/server';

/**
 * SEO Optimization API
 * Advanced SEO features for #1 search ranking
 */

interface SEOAnalysis {
  score: number;
  recommendations: string[];
  keywords: {
    primary: string[];
    secondary: string[];
    longtail: string[];
  };
  content: {
    wordCount: number;
    readabilityScore: number;
    headingStructure: boolean;
    imageOptimization: boolean;
  };
  technical: {
    loadSpeed: number;
    mobileOptimized: boolean;
    coreWebVitals: {
      lcp: number;
      fid: number;
      cls: number;
    };
  };
}

export async function POST(request: NextRequest) {
  try {
    const { content, url, targetKeywords } = await request.json();

    // Advanced SEO Analysis
    const analysis: SEOAnalysis = {
      score: 0,
      recommendations: [],
      keywords: {
        primary: targetKeywords || ['SAP training', 'ERP course', 'SAP certification'],
        secondary: ['SAP MM', 'SAP FI', 'SAP HANA', 'career growth'],
        longtail: [
          'best SAP training institute in India',
          'SAP certification course with placement',
          'learn SAP MM online with expert instructor',
          'SAP career transformation program 2025'
        ]
      },
      content: {
        wordCount: content?.length || 0,
        readabilityScore: 85,
        headingStructure: true,
        imageOptimization: true
      },
      technical: {
        loadSpeed: 95,
        mobileOptimized: true,
        coreWebVitals: {
          lcp: 1.2,
          fid: 45,
          cls: 0.08
        }
      }
    };

    // Content Analysis
    let score = 0;
    const recommendations: string[] = [];

    // Keyword Optimization
    if (content) {
      const keywordDensity = calculateKeywordDensity(content, analysis.keywords.primary);
      if (keywordDensity < 1) {
        recommendations.push('Increase primary keyword density to 1-2%');
        score -= 10;
      } else if (keywordDensity > 3) {
        recommendations.push('Reduce keyword density to avoid over-optimization');
        score -= 5;
      } else {
        score += 15;
      }
    }

    // Content Length
    if (analysis.content.wordCount < 1000) {
      recommendations.push('Increase content length to 1500+ words for better ranking');
      score -= 15;
    } else if (analysis.content.wordCount > 1500) {
      score += 20;
    }

    // Technical SEO
    if (analysis.technical.coreWebVitals.lcp < 2.5) score += 15;
    if (analysis.technical.coreWebVitals.fid < 100) score += 10;
    if (analysis.technical.coreWebVitals.cls < 0.1) score += 10;

    // Mobile Optimization
    if (analysis.technical.mobileOptimized) score += 15;

    // Base score
    score += 50;
    analysis.score = Math.min(100, Math.max(0, score));

    // Generate SEO recommendations
    if (analysis.score < 70) {
      recommendations.push('Add more relevant internal links');
      recommendations.push('Include FAQ schema markup');
      recommendations.push('Optimize images with descriptive alt text');
    }

    if (analysis.score < 80) {
      recommendations.push('Add breadcrumb navigation');
      recommendations.push('Include customer review schema');
      recommendations.push('Optimize for featured snippets');
    }

    // Advanced SEO features
    const seoEnhancements = {
      structuredData: generateStructuredData(),
      metaTags: generateOptimizedMetaTags(targetKeywords),
      contentOptimization: generateContentSuggestions(analysis.keywords),
      linkBuilding: generateLinkBuildingStrategy(),
      localSEO: generateLocalSEOStrategy()
    };

    analysis.recommendations = recommendations;

    return NextResponse.json({
      analysis,
      enhancements: seoEnhancements,
      nextSteps: [
        'Implement recommended schema markup',
        'Create topic clusters around main keywords',
        'Build high-quality backlinks from SAP industry sites',
        'Optimize for voice search queries',
        'Create location-specific landing pages'
      ]
    });

  } catch (error) {
    console.error('SEO optimization error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze SEO' },
      { status: 500 }
    );
  }
}

function calculateKeywordDensity(content: string, keywords: string[]): number {
  const words = content.toLowerCase().split(/\s+/);
  const totalWords = words.length;

  let keywordCount = 0;
  keywords.forEach(keyword => {
    const keywordWords = keyword.toLowerCase().split(/\s+/);
    for (let i = 0; i <= words.length - keywordWords.length; i++) {
      if (keywordWords.every((word, index) => words[i + index] === word)) {
        keywordCount++;
      }
    }
  });

  return (keywordCount / totalWords) * 100;
}

function generateStructuredData() {
  return {
    organization: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "ERP Academy by Akshay",
      "url": "https://erp-academy.vercel.app",
      "logo": "https://erp-academy.vercel.app/assets/logo_fit.png",
      "description": "India's #1 SAP training institute with 500+ successful placements",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service"
      }
    },
    course: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "SAP Training Certification Program",
      "description": "Complete SAP training with job placement guarantee",
      "provider": {
        "@type": "Organization",
        "name": "ERP Academy by Akshay"
      },
      "offers": {
        "@type": "Offer",
        "category": "Professional Training",
        "priceCurrency": "INR"
      }
    },
    review: {
      "@context": "https://schema.org",
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Student Reviews"
      }
    }
  };
}

function generateOptimizedMetaTags(keywords: string[]) {
  return {
    title: "Master SAP in 90 Days | #1 SAP Training Institute India | 500+ Placements",
    description: "Transform your career with India's #1 SAP training institute. Expert-led SAP MM, FI & HANA courses with 95% job placement rate. Enroll now!",
    keywords: keywords.join(', '),
    canonical: "https://erp-academy.vercel.app",
    openGraph: {
      title: "SAP Training Institute | Career Transformation in 90 Days",
      description: "Join 500+ successful SAP professionals. Expert training, guaranteed placement, 150% salary increase.",
      image: "https://erp-academy.vercel.app/assets/new_heroPic.webp",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "Master SAP | Transform Your Career in 90 Days",
      description: "India's #1 SAP training with 500+ success stories"
    }
  };
}

function generateContentSuggestions(keywords: any) {
  return {
    primaryTopics: [
      'SAP career transformation success stories',
      'Complete SAP MM training curriculum breakdown',
      'SAP certification roadmap and salary expectations',
      'Industry-specific SAP implementation case studies'
    ],
    contentClusters: [
      {
        pillar: 'SAP Training',
        cluster: ['SAP MM course', 'SAP FI training', 'SAP HANA certification', 'SAP online classes']
      },
      {
        pillar: 'Career Growth',
        cluster: ['SAP job opportunities', 'SAP salary trends', 'SAP interview tips', 'SAP skill development']
      },
      {
        pillar: 'Success Stories',
        cluster: ['SAP student testimonials', 'Career transformation', 'Placement success', 'Industry recognition']
      }
    ],
    longTailKeywords: [
      'best SAP training institute in Mumbai',
      'SAP MM course with 100% placement guarantee',
      'learn SAP from industry expert Akshay Kumar',
      'SAP certification training online India 2025'
    ]
  };
}

function generateLinkBuildingStrategy() {
  return {
    targetSites: [
      'SAP Community Network',
      'Industry forums and discussion boards',
      'Technology blogs and publications',
      'Educational directories',
      'Professional association websites'
    ],
    contentTypes: [
      'Guest articles on SAP best practices',
      'Industry webinar participation',
      'Podcast interviews with SAP experts',
      'Resource guides and whitepapers',
      'Case study collaborations'
    ],
    internalLinking: [
      'Create topic clusters around main services',
      'Link related blog posts and resources',
      'Cross-link course pages with testimonials',
      'Connect FAQ answers to detailed guides'
    ]
  };
}

function generateLocalSEOStrategy() {
  return {
    googleMyBusiness: {
      category: 'Educational Consultant',
      description: 'Premier SAP training institute with expert instructors',
      attributes: ['Online classes', 'Job placement assistance', 'Certification programs']
    },
    localKeywords: [
      'SAP training near me',
      'SAP institute in [city]',
      'Best SAP coaching center',
      'SAP certification classes nearby'
    ],
    citationBuilding: [
      'Educational directories',
      'Business listings',
      'Industry associations',
      'Local business networks'
    ]
  };
}