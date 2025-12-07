// Google Analytics and performance tracking utilities

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Google Analytics tracking
export const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag(...args)
  }
}

// Page view tracking
export const pageview = (url: string) => {
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// Event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Performance tracking
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Core Web Vitals tracking
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          event({
            action: 'LCP',
            category: 'Web Vitals',
            label: 'Largest Contentful Paint',
            value: Math.round(entry.startTime),
          })
        }
        
        if (entry.entryType === 'first-input') {
          event({
            action: 'FID',
            category: 'Web Vitals',
            label: 'First Input Delay',
            value: Math.round((entry as any).processingStart - entry.startTime),
          })
        }
      }
    })

    observer.observe({ type: 'largest-contentful-paint', buffered: true })
    observer.observe({ type: 'first-input', buffered: true })

    // Layout shift tracking
    let cumulativeLayoutShift = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          cumulativeLayoutShift += (entry as any).value
        }
      }
      
      event({
        action: 'CLS',
        category: 'Web Vitals',
        label: 'Cumulative Layout Shift',
        value: Math.round(cumulativeLayoutShift * 1000),
      })
    })
    
    clsObserver.observe({ type: 'layout-shift', buffered: true })
  }
}

// User engagement tracking
export const trackEngagement = {
  courseInterest: (courseName: string) => {
    event({
      action: 'course_interest',
      category: 'Engagement',
      label: courseName,
    })
  },
  
  formSubmission: (formType: string) => {
    event({
      action: 'form_submit',
      category: 'Lead Generation',
      label: formType,
    })
  },
  
  blogRead: (postTitle: string, readTime: number) => {
    event({
      action: 'blog_read',
      category: 'Content',
      label: postTitle,
      value: readTime,
    })
  },
  
  downloadBrochure: () => {
    event({
      action: 'download_brochure',
      category: 'Lead Generation',
      label: 'Course Brochure',
    })
  },
  
  bookConsultation: () => {
    event({
      action: 'book_consultation',
      category: 'Lead Generation',
      label: 'Free Consultation',
    })
  }
}