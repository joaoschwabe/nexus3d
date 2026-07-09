export type Page = 'home' | 'portfolio' | 'process' | 'budget';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  altText: string;
  software: string[];
}

export interface ProcessStep {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface BriefingForm {
  fname: string;
  email: string;
  company: string;
  type: string;
  brief: string;
  budget: number; // Index 1-5
  timeline: number; // Index 1-4
}
