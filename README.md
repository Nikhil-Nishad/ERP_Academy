# ERP Academy by Akshay

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/Nikhil-Nishad/ERP_Academy)

> India's Premier SAP Training Institute - Master SAP MM, HANA, and FI with Expert-Led, Hands-On Training

🌐 **Live Website**: [https://erp-academy.vercel.app/](https://erp-academy.vercel.app/)

---

## 🎯 About

**ERP Academy** is India's leading SAP training institute, founded and led by **Akshay Kumar**, an SAP expert with 6+ years of industry experience. We specialize in comprehensive, hands-on training in SAP modules including Materials Management (MM), HANA, and Financial Accounting (FI).

### ✨ Key Highlights

- 🎓 **500+ Students Trained**
- 🏆 **95% Placement Rate**
- ⭐ **4.9/5 Average Rating**
- 💼 **6+ Years Industry Experience**
- 🚀 **Live Interactive Sessions**
- 📚 **Real-World Project Experience**

---

## 🚀 Features

### 🎨 Modern Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Formspree Integration
- **Markdown**: MDX for Blog Posts

### 📱 Responsive Design

- Mobile-first approach
- Optimized for all devices
- Touch-friendly navigation
- Progressive Web App (PWA) support

### ⚡ Performance Optimized

- **Perfect Lighthouse Scores**
  - Performance: 90-95+
  - Accessibility: 95-100
  - Best Practices: 95-100
  - SEO: 100
- Static Site Generation (SSG)
- Image optimization (WebP/AVIF)
- Code splitting and lazy loading
- Compressed assets

### 🔍 SEO Optimized

- Comprehensive meta tags
- Structured data (Schema.org)
- Dynamic sitemap.xml
- robots.txt configuration
- llm.txt for AI crawlers
- Breadcrumb navigation
- RSS feed for blog

### 🔒 Security Features

- HSTS with preload
- XSS protection
- Clickjacking prevention
- Content Security Policy ready
- Secure headers configured

---

## 📂 Project Structure

```
erp-academy/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── blog/              # Blog pages
│   │   ├── api/               # API routes
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── robots.ts          # Robots configuration
│   │   └── sitemap.ts         # Dynamic sitemap
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   └── blog/             # Blog-specific components
│   └── lib/                   # Utility functions
│       ├── mdx.ts            # MDX processing
│       ├── seo.ts            # SEO utilities
│       └── utils.ts          # Helper functions
├── content/
│   └── posts/                 # MDX blog posts
├── public/
│   ├── assets/               # Images and static files
│   ├── manifest.json         # PWA manifest
│   └── llm.txt              # AI crawler information
├── docs/                      # Project documentation
└── next.config.js            # Next.js configuration
```

---

## 🛠️ Installation

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/Nikhil-Nishad/ERP_Academy.git
cd ERP_Academy/nextjs-migration

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The application will be available at `http://localhost:3000`

---

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Formspree Configuration (Contact Form)
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_ga_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://erp-academy.vercel.app
```

---

## 📖 Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm type-check       # TypeScript type checking

# Cleanup
pnpm clean            # Remove build artifacts
```

---

## 📚 Course Offerings

### 1. **SAP MM (Materials Management)**

- Procurement processes
- Inventory management
- Vendor management
- Material master data

### 2. **SAP HANA**

- In-memory computing
- Real-time analytics
- Database administration

### 3. **SAP FI (Financial Accounting)**

- General ledger accounting
- Accounts payable/receivable
- Asset accounting
- Financial reporting

---

## 📧 Contact Information

- **Email**: [shortsbyrishab@gmail.com](mailto:shortsbyrishab@gmail.com)
- **Phone**: [+91-9312340496](tel:+919312340496)
- **Website**: [erp-academy.vercel.app](https://erp-academy.vercel.app/)
- **Location**: India

---

## 🚀 Deployment

This project is optimized for deployment on **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Nikhil-Nishad/ERP_Academy)

### Manual Deployment

```bash
# Build the project
pnpm build

# Deploy to Vercel
vercel --prod
```

See [docs/DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

---

## 📊 Performance

- ✅ **Lighthouse Score**: 95+/100
- ✅ **Core Web Vitals**: All green
- ✅ **First Contentful Paint**: < 1.5s
- ✅ **Time to Interactive**: < 3.5s
- ✅ **SEO Score**: 100/100

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Akshay Kumar** - Founder & Lead SAP Trainer
- **Next.js Team** - Amazing framework
- **Vercel** - Hosting and deployment
- **Community** - For continuous support

---

## 📱 Social Media

- LinkedIn: [ERP Academy](https://www.linkedin.com/company/erp-academy)
- Twitter: [@ERPAcademyIndia](https://twitter.com/ERPAcademyIndia)
- YouTube: [ERP Academy](https://www.youtube.com/c/ERPAcademy)

---

## 📞 Support

For support, email [shortsbyrishab@gmail.com](mailto:shortsbyrishab@gmail.com) or visit our [website](https://erp-academy.vercel.app/).

---

<div align="center">

**Made with ❤️ by ERP Academy**

⭐ Star us on GitHub — it helps!

</div>
