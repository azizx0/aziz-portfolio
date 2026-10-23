export type SupportedLanguage = 'en' | 'fr';

export interface LocalizedText {
  en: string;
  fr: string;
}

export interface LocalizedList {
  en: string[];
  fr: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'fullstack' | 'mobile' | 'backend';
  categoryLabel: LocalizedText;
  status: LocalizedText;
  isInProgress?: boolean;
  shortDesc: LocalizedText;
  fullDesc: LocalizedText;
  features: LocalizedList;
  technologies: string[];
  testingTools?: string[];
  devopsTools?: string[];
}

export interface SkillCategoryGroup {
  id: string;
  title: LocalizedText;
  icon: string;
  items: {
    name: string;
    description?: LocalizedText;
    highlighted?: boolean;
  }[];
}

export interface InternshipExperience {
  id: string;
  company: string;
  role: LocalizedText;
  location: string;
  period: LocalizedText;
  description: LocalizedText;
  achievements: LocalizedList;
  techStack: string[];
}

export interface EducationItem {
  id: string;
  degree: LocalizedText;
  institution: string;
  location: string;
  period: string;
  status: LocalizedText;
  details: LocalizedList;
}

export interface CertificationItem {
  id: string;
  title: string;
  category: LocalizedText;
  note?: LocalizedText;
}

export interface SpokenLanguage {
  name: LocalizedText;
  level: LocalizedText;
  proficiencyBadge: string;
}
