
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  category: 'Web' | 'Mobile' | 'AI';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}


