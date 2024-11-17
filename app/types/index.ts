export interface Skill {
  id: string;
  title: string;
  percent: number;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
} 