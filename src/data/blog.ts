export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML content
  author: string;
  publishDate: string; // YYYY-MM-DD
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  views: number;
  likes: number;
  imageUrl: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'SAP S/4HANA Migration: Complete Guide for 2025',
    excerpt:
      "Discover strategies and best practices for migrating to SAP S/4HANA in 2025. Learn about pitfalls and success factors.",
    content: `
      <h2>Introduction to SAP S/4HANA Migration</h2>
      <p>SAP S/4HANA represents the next generation of business suite, offering real-time analytics, simplified data models, and enhanced user experience.</p>
      <h3>Why Migrate to SAP S/4HANA?</h3>
      <ul>
        <li><strong>Real-time Analytics:</strong> Get instant insights into your business performance</li>
        <li><strong>Simplified Data Model:</strong> Reduce data redundancy and improve performance</li>
        <li><strong>Enhanced User Experience:</strong> Modern, intuitive interface with SAP Fiori</li>
      </ul>
      <h3>Migration Strategies</h3>
      <p>There are three main approaches: Greenfield, Brownfield, and Hybrid.</p>
      <h3>Conclusion</h3>
      <p>With proper planning and the right expertise, organizations can unlock significant value from S/4HANA.</p>
    `,
    author: 'Akshay Kumar',
    publishDate: '2024-12-28',
    readTime: 8,
    category: 'SAP Migration',
    tags: ['SAP S/4HANA', 'Migration', 'Enterprise'],
    featured: true,
    views: 2547,
    likes: 128,
    imageUrl: '/assets/sap.webp',
    slug: 'sap-s4hana-migration-guide-2025',
  },
  {
    id: '2',
    title: 'Top 10 SAP MM Interview Questions and Answers',
    excerpt:
      'Prepare for your SAP MM interview with these commonly asked questions and expert answers. Boost your confidence and land your dream job.',
    content: `
      <h2>Core SAP MM Interview Questions</h2>
      <ol>
        <li>Explain the procurement lifecycle in MM.</li>
        <li>What are movement types and common use cases?</li>
      </ol>
      <p>Use STAR responses and share real-world scenarios.</p>
    `,
    author: 'Akshay Kumar',
    publishDate: '2024-12-27',
    readTime: 6,
    category: 'Career',
    tags: ['SAP MM', 'Interview', 'Career'],
    featured: false,
    views: 1823,
    likes: 95,
    imageUrl: '/assets/success.webp',
    slug: 'sap-mm-interview-questions-answers',
  },
  {
    id: '3',
    title: 'SAP Career Salary Guide: What to Expect in 2025',
    excerpt:
      'Comprehensive salary analysis for SAP professionals across different modules, experience levels, and regions.',
    content: `
      <h2>Salary Overview</h2>
      <p>Explore compensation ranges by module and experience.</p>
    `,
    author: 'Akshay Kumar',
    publishDate: '2024-12-26',
    readTime: 10,
    category: 'Career',
    tags: ['SAP Salary', 'Career Growth', 'Compensation'],
    featured: true,
    views: 3156,
    likes: 187,
    imageUrl: '/assets/new_heroPic.webp',
    slug: 'sap-career-salary-guide-2025',
  },
];

export function getAllPosts() {
  return blogPosts.sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug) || null;
}
