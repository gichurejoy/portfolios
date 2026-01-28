
import { Project } from './types';

export interface WorkItem extends Project {
  date: string;
  displayCategory: string;
  filterCategories: string[];
  accentColor: string;
  year: string;
  result?: string;
}

export interface ShopItem {
  id: string;
  title: string;
  price: string;
  category: string;
  subTitle: string;
  image: string;
  description: string;
  details: string;
  status?: string;
  statusColor?: string;
}

export const PROJECTS: WorkItem[] = [
  {
    id: '1',
    title: 'Order Matching Engine',
    description: 'Built a real-time trading platform with price-time priority matching for prediction markets.',
    tech: ['FastAPI', 'React', 'Docker', 'PostgreSQL'],
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39c0f4c2-606b-41d0-aa3b-9ed97ec9495b_800w.jpg',
    link: '#',
    category: 'Web',
    date: '2024',
    displayCategory: 'System Dev',
    filterCategories: ['systems', 'web'],
    accentColor: 'bg-blue-500',
    year: '2024'
  },
  {
    id: '2',
    title: 'Pharma Automation',
    description: 'Automated 148-page medical catalogue translation using NLP, saving hours of manual work.',
    tech: ['Python', 'Playwright', 'NLP'],
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/647e43ef-bc7d-4077-9e45-ce2ea6645447_800w.jpg',
    link: '#',
    category: 'AI',
    date: '2024',
    displayCategory: 'Automation',
    filterCategories: ['ai', 'automation'],
    accentColor: 'bg-rose-500',
    year: '2024',
    result: 'Hours → minutes, eliminated expensive translation services'
  },
  {
    id: '3',
    title: 'B2B E-commerce',
    description: 'Full-featured platform with shopping cart, RFQ system, and prescription uploads.',
    tech: ['Laravel', 'JavaScript', 'MySQL'],
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49aac4dd-9624-4c88-ab00-4c68f0f0bfe8_800w.jpg',
    link: '#',
    category: 'Web',
    date: '2023',
    displayCategory: 'E-commerce',
    filterCategories: ['web', 'systems'],
    accentColor: 'bg-emerald-500',
    year: '2023'
  },
  {
    id: '4',
    title: 'Contract Dashboard',
    description: 'Interactive dashboard with real-time tracking, PDF exports, and approval workflows.',
    tech: ['Laravel', 'Livewire', 'MySQL'],
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/319e51fd-51ca-4d6c-ba52-420dcd2f2591_800w.jpg',
    link: '#',
    category: 'Web',
    date: '2023',
    displayCategory: 'Enterprise',
    filterCategories: ['systems'],
    accentColor: 'bg-purple-500',
    year: '2023'
  }
];

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 's1',
    title: 'Starter Portfolio',
    price: 'KSH 20,000',
    category: 'Portfolio Package',
    subTitle: '3-Page Custom Static Site',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/882f35de-4483-41d0-b5a4-d072734721fc_1600w.jpg',
    description: 'Essential professional presence for junior professionals and recent graduates.',
    status: 'Best Value',
    statusColor: 'bg-rose-600',
    details: `STARTER PORTFOLIO - KSH 20,000

PERFECT FOR:
- Recent graduates entering the job market
- Junior professionals building their first portfolio
- Career switchers showcasing bootcamp projects

DESIGN & STRUCTURE:
✓ Single-page responsive design
✓ Modern, clean professional layout
✓ Custom color scheme
✓ Mobile & Desktop optimized
✓ Hero section with introduction
✓ About Me section

PROJECT SHOWCASE:
✓ Up to 5 project displays
✓ GitHub repository links
✓ Technology stack tags
✓ Live demo links (if available)

TECHNICAL FEATURES:
✓ Basic Contact form
✓ Social media links
✓ Skills section with icons
✓ Resume/CV download button
✓ Fast loading speed (< 2s)
✓ SEO basics

HOSTING & DEPLOYMENT:
✓ Free hosting on Netlify
✓ HTTPS/SSL certificate
✓ Deployment setup and testing

TIMELINE:
5-7 business days`
  },
  {
    id: 's2',
    title: 'Professional Tier',
    price: 'KSH 45,000',
    category: 'Portfolio Package',
    subTitle: 'Full CMS + Blog Integration',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb976ea7-50d8-4e6d-bf5d-8600ca855bf4_1600w.jpg',
    description: 'Advanced website solution with dynamic content and SEO optimization. Ideal for portfolios and small businesses.',
    status: 'Popular',
    statusColor: 'bg-blue-600',
    details: `PROFESSIONAL TIER - KSH 45,000

PERFECT FOR:
- Small businesses establishing online presence
- Professionals seeking better opportunities
- Service providers showcasing their work
- Startups validating their ideas

DESIGN & STRUCTURE:
✓ Multi-page website (up to 5 pages)
✓ Custom professional design
✓ Advanced responsive animations
✓ Smooth page transitions

CONTENT & SHOWCASE:
✓ Products or Services showcase
✓ Up to 10 detailed project/item displays
✓ Categorization & Filtering
✓ Client case studies or Testimonials

CONTENT MANAGEMENT (CMS):
✓ Easy-to-use admin dashboard
✓ Write and publish blog posts
✓ Training session included

ADVANCED FEATURES:
✓ Contact form with email notifications
✓ Newsletter signup integration
✓ Testimonials section
✓ Experience timeline

SEO & ANALYTICS:
✓ Advanced SEO optimization
✓ Page speed optimization`
  },
  {
    id: 's3',
    title: 'Automation Suite',
    price: 'Starting from KSH 50,000',
    category: 'Custom System',
    subTitle: 'Workflow Automation Solutions',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5eda603-1fa3-4130-9355-21f4264ed610_1600w.jpg',
    description: 'Eliminate manual, repetitive work and improve operational efficiency through custom solutions.',
    status: 'Business',
    statusColor: 'bg-emerald-600',
    details: `AUTOMATION SUITE - FROM KSH 50,000

PERFECT FOR:
- Businesses with repetitive manual tasks
- Teams requiring custom integrations
- Data processing and reporting solutions

AUTOMATION SOLUTIONS:
✓ Web scraping and data extraction
✓ Document processing (PDF/Reports)
✓ Email automation systems
✓ Data synchronization
✓ API integrations
✓ Workflow approval systems

TECHNICAL APPROACH:
✓ Python scripts (FastAPI/Django)
✓ Playwright/Selenium scraping
✓ Task scheduling (Celery)
✓ Database design & optimization
✓ Cloud deployment

DISCOVERY & PLANNING:
✓ 1-hour consultation
✓ Process bottleneck analysis
✓ Detailed automation proposal

SUPPORT:
✓ 90 days post-launch support
✓ Bug fixes included
✓ Training walkthrough`
  },
  {
    id: 's4',
    title: 'Premium Package',
    price: 'Starting From KSH 80,000',
    category: 'Full Stack',
    subTitle: 'Enterprise MVPs & Custom Apps',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/319e51fd-51ca-4d6c-ba52-420dcd2f2591_800w.jpg',
    description: 'End-to-end full-stack solutions for startups and businesses needing robust, scalable systems.',
    status: 'Enterprise',
    statusColor: 'bg-indigo-600',
    details: `PREMIUM PACKAGE - FROM KSH 80,000

PERFECT FOR:
- Startups building their MVP
- Businesses needing custom web applications
- Enterprises needing robust systems

FULL-STACK WEB APPS:
✓ B2B/B2C E-commerce platforms
✓ Management dashboards
✓ CRM and ERP systems
✓ Booking & Scheduling systems
✓ Inventory management systems

MOBILE APPLICATIONS:
✓ Flutter mobile apps (iOS & Android)
✓ React Native development

API & DATABASE:
✓ RESTful and GraphQL API design
✓ Third-party service integration
✓ Database architecture
✓ Query optimization

ADVANCED FEATURES:
✓ User auth & role-based access
✓ File management & uploads
✓ Email and SMS integration
✓ Payment gateway (M-Pesa)
✓ Real-time features (WebSockets)

SECURITY & INFRASTRUCTURE:
✓ Data encryption & validation
✓ Cloud hosting (AWS/GCP)
✓ CI/CD pipeline configuration
✓ Automated backups
✓ Monitoring & Error tracking

SUPPORT & MAINTENANCE:
✓ 60 days post-launch support
✓ Detailed training & handover
✓ Optional maintenance plans`
  }
];

export const SKILLS = [
  'React', 'Next.js', 'Python', 'FastAPI', 'Laravel', 'Tailwind CSS',
  'MySQL', 'PostgreSQL', 'Flutter', 'Docker', 'Automation', 'SEO'
];

export const FAQS = [
  {
    q: "What's your typical project timeline?",
    a: "Project timelines vary based on scope and complexity. Portfolio packages typically take 5-7 days, while custom systems or enterprise dashboards can take 4-8 weeks. I'll provide a detailed timeline during our initial consultation."
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely! I work with clients worldwide and am comfortable with remote collaboration. I've built systems for clients across Europe, the US, and Africa."
  },
  {
    q: "What's included in a portfolio package?",
    a: "My packages include custom engineering, mobile responsiveness, project case studies, SEO optimization, and M-Pesa integration. The Professional tier adds CMS functionality for easy content updates."
  },
  {
    q: "Can you help with technical implementation?",
    a: "Yes! I specialize in full-stack implementation. From backend APIs and database architecture to complex frontend interactions, I handle the entire engineering lifecycle of your product."
  }
];
