
export interface Project {
  id: string;
  title: string;
  category: 'Valuation' | 'Feasibility' | 'Market Research' | 'Site Analysis' | 'Urban Planning';
  location: string;
  description: string;
  role: string;
  findings: string[];
  imageUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  dates: string;
  responsibilities: string[];
}

export interface Skill {
  name: string;
  category: 'Technical' | 'Soft' | 'Language';
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}
