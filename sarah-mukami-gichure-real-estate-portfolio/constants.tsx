
import { Project, Experience, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Government Valuation Procedures',
    category: 'Valuation',
    location: 'Ministry of Lands, Kenya',
    description: 'Practical exposure to government valuation procedures including property inspection and data collection for official purposes.',
    role: 'Attachment Intern',
    findings: [
      'Assisted in reports for compulsory acquisition',
      'Conducted rental assessments for government housing',
      'Supported stamp duty valuation audits'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'Ministry of Lands, Public Works, Housing & Urban Development',
    role: 'Attachment Intern (Valuation)',
    dates: 'June 2025 – September 2025',
    responsibilities: [
      'Participated in property inspection and data collection for valuation purposes.',
      'Assisted government valuers in preparing valuation reports for compulsory acquisition, stamp duty and rental assessments.',
      'Engaged in land administration processes and research tasks.',
      'Updated and organized valuation records within the ministry\'s database.'
    ]
  },
  {
    id: 'exp2',
    company: 'Geollen Preparatory School',
    role: 'Office Administrator',
    dates: '2021 – 2023',
    responsibilities: [
      'Served as primary point of contact for parents and addressed concerns.',
      'Managed day-to-day administrative tasks and school errands.',
      'Coordinated school-wide projects and student activities to foster a positive environment.'
    ]
  }
];

export const SKILLS = [
  { name: 'Property Valuation', category: 'Technical' },
  { name: 'Land Administration', category: 'Technical' },
  { name: 'Data Collection', category: 'Technical' },
  { name: 'Market Analysis', category: 'Technical' },
  { name: 'Time Management', category: 'Soft' },
  { name: 'Leadership', category: 'Soft' },
  { name: 'Adaptability', category: 'Soft' },
  { name: 'English', category: 'Language' },
  { name: 'Swahili', category: 'Language' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Sarah demonstrated high integrity and excellent organizational skills during her attachment at the Ministry.",
    author: "Mr. Hamphrey Malala",
    title: "Senior Valuer",
    company: "Ministry of Lands"
  },
  {
    quote: "A dedicated and hardworking student who excels in interpersonal communication and leadership.",
    author: "Tr. Mary",
    title: "Teacher",
    company: "Geollen Preparatory School"
  }
];
