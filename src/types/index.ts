export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'database' | 'tool';
  proficiency: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}