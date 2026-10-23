import { Injectable, signal, computed } from '@angular/core';
import {
  SupportedLanguage,
  ProjectItem,
  SkillCategoryGroup,
  InternshipExperience,
  EducationItem,
  CertificationItem,
  SpokenLanguage
} from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  // English is the default language
  readonly currentLanguage = signal<SupportedLanguage>('en');

  readonly isFrench = computed(() => this.currentLanguage() === 'fr');

  // Personal Information (Unchanged constants)
  readonly personal = {
    fullName: 'Mohamed Aziz Loueti',
    shortName: 'Aziz Loueti',
    titleEn: 'Full-Stack Developer & DevOps | Software Engineering Student',
    titleFr: 'Développeur Full-Stack & DevOps | Étudiant en Génie Logiciel',
    location: 'Ariana, Tunisia',
    email: 'aziz.loueti18@gmail.com',
    phone: '+216 27 185 228',
    phoneRaw: '+21627185228',
    githubUrl: 'https://github.com/azizx0',
    githubUsername: 'azizx0',
    educationSchool: 'ESPRIT',
    educationPeriod: '2022–2027'
  };

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('aziz_portfolio_lang') as SupportedLanguage;
      if (saved === 'en' || saved === 'fr') {
        this.currentLanguage.set(saved);
      }
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.currentLanguage();
    }
  }

  toggleLanguage(): void {
    const next: SupportedLanguage = this.currentLanguage() === 'en' ? 'fr' : 'en';
    this.setLanguage(next);
  }

  setLanguage(lang: SupportedLanguage): void {
    this.currentLanguage.set(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('aziz_portfolio_lang', lang);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }

  // Reactive UI strings
  readonly ui = computed(() => {
    const fr = this.isFrench();
    return {
      nav: {
        about: fr ? 'À Propos' : 'About',
        skills: fr ? 'Compétences' : 'Skills',
        experience: fr ? 'Expérience' : 'Experience',
        projects: fr ? 'Projets' : 'Projects',
        education: fr ? 'Formation & Certifications' : 'Education & Certs',
        contact: fr ? 'Contact' : 'Contact',
        pfeStatus: fr ? 'Recherche Stage PFE' : 'Seeking PFE Internship',
        switchLangAria: fr ? 'Passer en anglais' : 'Switch to French'
      },
      hero: {
        greeting: fr ? 'Bonjour, je suis' : "Hello, I am",
        headline: fr
          ? 'Développeur Full-Stack & DevOps | Étudiant en Génie Logiciel'
          : 'Full-Stack Developer & DevOps | Software Engineering Student',
        pfeBadge: fr
          ? 'Étudiant en 3ème année à ESPRIT • Recherche stage PFE'
          : '3rd Year Software Engineering Student at ESPRIT • Seeking PFE Internship',
        summary: fr
          ? 'Étudiant de 3ème année en génie logiciel à ESPRIT (Ariana), passionné par le développement Full-Stack, les pratiques DevOps et les technologies Cloud pour concevoir des applications robustes et utiles.'
          : 'Third-year software engineering student at ESPRIT (Ariana) passionate about Full-Stack Development, DevOps methodologies, and Cloud technologies to build robust, practical applications.',
        ctaProjects: fr ? 'Voir mes Projets' : 'View Projects',
        ctaContact: fr ? 'Me Contacter' : 'Get in Touch',
        quickContact: fr ? 'Discuter d\'un stage' : 'Discuss an Internship'
      },
      about: {
        badge: fr ? 'Profil & Parcours' : 'Background & Profile',
        title: fr ? 'À Propos de Moi' : 'About Me',
        subtitle: fr
          ? 'Mon parcours académique, mes centres d\'intérêt et mes ambitions professionnelles.'
          : 'My academic pathway, technical interests, and professional aspirations.',
        p1: fr
          ? 'Je suis Mohamed Aziz Loueti, étudiant en troisième année de génie logiciel à ESPRIT (Ariana, Tunisie). Fort d\'une solide base académique et de deux stages significatifs en développement logiciel, je conçois des applications de bout en bout alliant architecture backend rigoureuse, interfaces utilisateurs modernes et chaînes d\'intégration continue fiables.'
          : 'I am Mohamed Aziz Loueti, a third-year software engineering student at ESPRIT (Ariana, Tunisia). Combining a strong academic foundation with practical internship experience, I build full-stack solutions with disciplined backend architectures, responsive user interfaces, and reliable continuous delivery pipelines.',
        p2: fr
          ? 'Mes centres d\'intérêt s\'articulent autour des microservices, du développement Full-Stack (Angular, Spring Boot, Node.js), de la conteneurisation (Docker, Kubernetes) et de l\'automatisation CI/CD (Jenkins, GitLab CI/CD). Je cherche activement un stage de fin d\'études (PFE) stimulant où je pourrai apporter de la valeur concrète tout en approfondissant mon expertise.'
          : 'My core focus lies in microservices architectures, Full-Stack engineering (Angular, Spring Boot, Node.js), containerization (Docker, Kubernetes), and CI/CD automation (Jenkins, GitLab CI/CD). I am actively seeking a rewarding Graduation Internship (PFE) where I can contribute to mission-critical applications.',
        highlights: [
          {
            title: fr ? 'Formation Continue' : 'Engineering Mindset',
            desc: fr
              ? 'Cursus d\'ingénieur à ESPRIT (2022–2027), alliant théorie informatique avancée et projets réels en équipe.'
              : 'Software engineering degree at ESPRIT (2022–2027), balancing rigorous computer science foundations with team projects.'
          },
          {
            title: fr ? 'Pratiques DevOps Réelles' : 'DevOps in Practice',
            desc: fr
              ? 'Mise en œuvre concrète de Docker, Kubernetes, pipelines CI/CD, tests automatisés (JUnit, Mockito, Newman) et SonarQube.'
              : 'Real-world deployment of Docker, Kubernetes, CI/CD pipelines, automated testing (JUnit, Mockito, Newman), and SonarQube.'
          },
          {
            title: fr ? 'Objectif Professionnel' : 'Career Objective',
            desc: fr
              ? 'Recherche active d\'un stage de fin d\'études (PFE) en développement Full-Stack / DevOps au sein d\'une équipe innovante.'
              : 'Actively seeking a PFE Graduation Internship in Full-Stack development / DevOps within an engineering-driven team.'
          }
        ]
      },
      skills: {
        badge: fr ? 'Savoir-Faire Technique' : 'Technical Proficiency',
        title: fr ? 'Compétences & Outils' : 'Skills & Technologies',
        subtitle: fr
          ? 'Technologies organisées par domaine d\'expertise et validées lors de projets et stages.'
          : 'Technologies organized by domain, practiced through academic projects and professional internships.',
        quickSummary: fr ? 'Technologies Clés :' : 'Core Summary:',
        languagesLabel: fr ? 'Langages' : 'Languages',
        frameworksLabel: fr ? 'Frameworks' : 'Frameworks',
        databasesLabel: fr ? 'Bases de Données' : 'Databases',
        devopsLabel: fr ? 'DevOps & Outils' : 'DevOps & Tools',
        testingLabel: fr ? 'Tests & Qualité' : 'Testing & Quality'
      },
      experience: {
        badge: fr ? 'Parcours Professionnel' : 'Work History',
        title: fr ? 'Expériences en Entreprise' : 'Internship Experience',
        subtitle: fr
          ? 'Deux expériences en entreprise axées sur le développement e-commerce, les microservices et le DevOps.'
          : 'Two software engineering internships focused on e-commerce, microservices, and DevOps delivery.',
        responsibilitiesTitle: fr ? 'Réalisations & Responsabilités :' : 'Key Contributions & Responsibilities:',
        techStackTitle: fr ? 'Technologies utilisées :' : 'Technologies used:'
      },
      projects: {
        badge: fr ? 'Réalisations' : 'Selected Work',
        title: fr ? 'Projets Récents' : 'Featured Projects',
        subtitle: fr
          ? 'Applications pratiques illustrant la maîtrise du Full-Stack, des architectures distribuées et du mobile.'
          : 'Practical applications showcasing full-stack design, distributed architectures, and mobile engineering.',
        inProgressBadge: fr ? 'En cours de développement' : 'In Progress',
        completedBadge: fr ? 'Projet Réalisé' : 'Completed Project',
        stackLabel: fr ? 'Technologies :' : 'Tech Stack:',
        devopsLabel: fr ? 'Outils DevOps & Tests :' : 'DevOps & Testing:'
      },
      education: {
        badge: fr ? 'Parcours & Qualifications' : 'Academic & Credentials',
        title: fr ? 'Formation & Certifications' : 'Education & Certifications',
        subtitle: fr
          ? 'Mon cursus d\'ingénieur à ESPRIT, mes certifications professionnelles et mes compétences linguistiques.'
          : 'My software engineering education at ESPRIT, certifications, and language proficiencies.',
        eduTitle: fr ? 'Diplôme & Formation' : 'Degree & Academic Studies',
        certTitle: fr ? 'Certifications' : 'Certifications',
        langTitle: fr ? 'Langues' : 'Languages',
        nativeLabel: fr ? 'Langue maternelle' : 'Native language',
        b2Label: fr ? 'Niveau B2' : 'B2 Proficiency'
      },
      contact: {
        badge: fr ? 'Me Joindre' : 'Get In Touch',
        title: fr ? 'Contact & Opportunités' : 'Contact Information',
        subtitle: fr
          ? 'Disponible pour un stage PFE ou pour échanger sur des opportunités en génie logiciel.'
          : 'Available for a PFE internship or to discuss engineering opportunities.',
        emailAction: fr ? 'Envoyer un Email' : 'Send an Email',
        copyEmail: fr ? 'Copier l\'adresse' : 'Copy Address',
        copiedFeedback: fr ? 'Copié dans le presse-papiers !' : 'Copied to clipboard!',
        callAction: fr ? 'Appeler' : 'Call Phone',
        viewGithub: fr ? 'Voir le Profil GitHub' : 'View GitHub Profile',
        calloutTitle: fr ? 'Recherche active de stage PFE' : 'Actively Seeking PFE Internship',
        calloutText: fr
          ? 'Vous recherchez un étudiant en génie logiciel motivé, rigoureux et opérationnel en Full-Stack et DevOps ? Contactez-moi directement par email ou téléphone.'
          : 'Looking for a disciplined, motivated software engineering student skilled in Full-Stack development and DevOps? Feel free to contact me directly via email or phone.'
      },
      footer: {
        rights: fr ? 'Tous droits réservés.' : 'All rights reserved.',
        headline: fr
          ? 'Étudiant en Génie Logiciel à ESPRIT | Full-Stack & DevOps'
          : 'Software Engineering Student at ESPRIT | Full-Stack & DevOps',
        backToTop: fr ? 'Retour en haut' : 'Back to top'
      }
    };
  });

  // Internships (Exact facts from prompt)
  readonly internships: InternshipExperience[] = [
    {
      id: 'angel-industry',
      company: 'ANGEL INDUSTRY & FRAMING',
      role: {
        en: 'Full-Stack Engineering Intern',
        fr: 'Stagiaire Ingénieur Full-Stack'
      },
      location: 'La Soukra, Tunisia',
      period: {
        en: 'June – August 2026',
        fr: 'Juin – Août 2026'
      },
      description: {
        en: 'Developed a comprehensive e-commerce application using Angular 20 and Spring Boot 3, featuring product catalog, cart, orders, and administration.',
        fr: 'Développement d\'une application e-commerce complète avec Angular 20 et Spring Boot 3, comprenant le catalogue de produits, le panier, la gestion des commandes et l\'administration.'
      },
      achievements: {
        en: [
          'Developed an e-commerce application using Angular 20 and Spring Boot 3, including product catalog, cart, orders, and administration.',
          'Implemented REST APIs, JPA/Hibernate persistence, JWT authentication, and role-based authorization with Spring Security.',
          'Tested APIs using Postman and implemented transactional order and stock management.'
        ],
        fr: [
          'Développement d\'une application e-commerce complète avec Angular 20 et Spring Boot 3 (catalogue, panier, commandes et administration).',
          'Implémentation d\'APIs REST, persistance JPA/Hibernate, authentification JWT et contrôle d\'accès basé sur les rôles avec Spring Security.',
          'Tests complets des APIs avec Postman et mise en œuvre de la gestion transactionnelle des stocks et commandes.'
        ]
      },
      techStack: ['Angular 20', 'Spring Boot 3', 'Spring Security', 'JWT', 'JPA / Hibernate', 'REST APIs', 'Postman']
    },
    {
      id: 'datadune',
      company: 'Datadune Technologie',
      role: {
        en: 'Full-Stack Developer Intern',
        fr: 'Stagiaire Développeur Full-Stack'
      },
      location: 'Remote',
      period: {
        en: 'June – July 2024',
        fr: 'Juin – Juillet 2024'
      },
      description: {
        en: 'Worked on an e-commerce microservices platform with seven services using Angular, Node.js/Express, MongoDB, and JWT.',
        fr: 'Participation au développement d\'une plateforme e-commerce en microservices (7 services) avec Angular, Node.js/Express, MongoDB et JWT.'
      },
      achievements: {
        en: [
          'Worked on an e-commerce microservices platform with seven services using Angular, Node.js/Express, MongoDB, and JWT.',
          'Used Agile/Scrum practices to collaborate effectively in a distributed team.',
          'Implemented containerization and automation with Docker, Docker Compose, and GitLab CI/CD.',
          'Automated API testing workflows using Postman and Newman.'
        ],
        fr: [
          'Développement d\'une architecture e-commerce en microservices composée de 7 services distincts (Angular, Node.js/Express, MongoDB, JWT).',
          'Application des rituels et bonnes pratiques Agile/Scrum au sein d\'une équipe distribuée.',
          'Conteneurisation des services et orchestration locale avec Docker et Docker Compose, et intégration continue avec GitLab CI/CD.',
          'Automatisation des tests d\'APIs avec Postman et Newman.'
        ]
      },
      techStack: ['Angular', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Docker', 'Docker Compose', 'GitLab CI/CD', 'Newman', 'Postman', 'Agile/Scrum']
    }
  ];

  // Projects (Exact facts from prompt - no invented URLs)
  readonly projects: ProjectItem[] = [
    {
      id: 'skill2job',
      title: 'Skill2Job',
      category: 'fullstack',
      categoryLabel: {
        en: 'Full-Stack & DevOps Platform',
        fr: 'Plateforme Full-Stack & DevOps'
      },
      status: {
        en: 'Completed Project',
        fr: 'Projet Réalisé'
      },
      isInProgress: false,
      shortDesc: {
        en: 'An online training and job opportunities platform built with Angular, Spring Boot, and MySQL. Testing includes JUnit and Mockito. The DevOps toolchain includes Jenkins, SonarQube, Docker, and Kubernetes.',
        fr: 'Plateforme de formation en ligne et d\'offres d\'emploi développée avec Angular, Spring Boot et MySQL. Tests avec JUnit et Mockito. Chaîne DevOps complète avec Jenkins, SonarQube, Docker et Kubernetes.'
      },
      fullDesc: {
        en: 'Skill2Job bridges skill development with professional recruitment. Built with an Angular frontend, a Spring Boot backend, and a relational MySQL database. The software engineering lifecycle integrates unit and integration testing via JUnit and Mockito, continuous static code inspection via SonarQube, and containerized deployment with Docker, Kubernetes, and Jenkins pipelines.',
        fr: 'Skill2Job est une plateforme qui relie le développement des compétences aux opportunités de recrutement. Conçue avec un frontend Angular, un backend Spring Boot et une base relationnelle MySQL. Le cycle de livraison intègre des tests avec JUnit et Mockito, l\'analyse de qualité continue avec SonarQube et le déploiement conteneurisé avec Docker, Kubernetes et Jenkins.'
      },
      features: {
        en: [
          'Full-stack architecture with Angular frontend and Spring Boot backend',
          'Relational database design and persistence with MySQL',
          'Automated testing suites using JUnit and Mockito',
          'Complete DevOps pipeline: Jenkins CI/CD, SonarQube code quality, Docker containerization, and Kubernetes orchestration'
        ],
        fr: [
          'Architecture Full-Stack avec frontend Angular et backend Spring Boot',
          'Modélisation et persistance des données relationnelles avec MySQL',
          'Suites de tests unitaires et d\'intégration avec JUnit et Mockito',
          'Chaîne DevOps complète : Jenkins CI/CD, analyse SonarQube, conteneurisation Docker et orchestration Kubernetes'
        ]
      },
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Java', 'TypeScript'],
      testingTools: ['JUnit', 'Mockito'],
      devopsTools: ['Jenkins', 'SonarQube', 'Docker', 'Kubernetes']
    },
    {
      id: 'silentspeak',
      title: 'SilentSpeak',
      category: 'mobile',
      categoryLabel: {
        en: 'Mobile Application',
        fr: 'Application Mobile'
      },
      status: {
        en: 'Project in Progress',
        fr: 'Projet en Cours'
      },
      isInProgress: true,
      shortDesc: {
        en: 'A Flutter mobile application intended to support communication for people with autism. This project is in progress.',
        fr: 'Application mobile Flutter dédiée au soutien de la communication pour les personnes atteintes d\'autisme. Ce projet est actuellement en cours de développement.'
      },
      fullDesc: {
        en: 'SilentSpeak is an assistive mobile solution crafted with Flutter. Its goal is to provide accessible, intuitive visual and communication assistance to individuals with autism spectrum disorder, emphasizing inclusive design, responsiveness, and clear user experiences.',
        fr: 'SilentSpeak est une solution mobile inclusive développée avec Flutter. Son objectif est de fournir des outils de communication intuitifs et adaptés aux personnes atteintes d\'autisme, en mettant l\'accent sur une ergonomie bienveillante et une réactivité maximale.'
      },
      features: {
        en: [
          'Cross-platform mobile application developed with Flutter and Dart',
          'Accessible communication interface designed specifically for individuals with autism',
          'Active ongoing research and implementation of inclusive mobile user experience'
        ],
        fr: [
          'Application mobile multiplateforme développée avec Flutter et Dart',
          'Interface de communication accessible conçue pour les personnes avec autisme',
          'Développement actif et recherche ergonomique sur l\'accessibilité numérique'
        ]
      },
      technologies: ['Flutter', 'Dart', 'Mobile UI/UX', 'Accessible Design']
    },
    {
      id: 'b2b-travel',
      title: 'B2B Travel',
      category: 'backend',
      categoryLabel: {
        en: 'Enterprise Management Platform',
        fr: 'Plateforme de Gestion B2B'
      },
      status: {
        en: 'Completed Project',
        fr: 'Projet Réalisé'
      },
      isInProgress: false,
      shortDesc: {
        en: 'A travel agency management platform built using Java and Symfony.',
        fr: 'Plateforme de gestion pour agence de voyage développée avec Java et Symfony.'
      },
      fullDesc: {
        en: 'B2B Travel provides travel agencies with centralized administrative workflows, travel package management, booking controls, and partner coordination. Built using a robust backend foundation in Java and Symfony with structured relational data management.',
        fr: 'B2B Travel offre aux agences de voyage des flux de gestion administrative centralisés, la gestion des forfaits de voyage, le suivi des réservations et la coordination des partenaires. Conçu sur une architecture backend robuste combinant Java et Symfony.'
      },
      features: {
        en: [
          'Travel agency operational management and booking tracking',
          'Backend logic built using Java and Symfony frameworks',
          'Relational database integration and secure operational flows'
        ],
        fr: [
          'Gestion opérationnelle de l\'agence et suivi des réservations touristiques',
          'Logique métier backend structurée avec les frameworks Java et Symfony',
          'Intégration d\'une base relationnelle et sécurisation des échanges'
        ]
      },
      technologies: ['Java', 'Symfony', 'PHP', 'SQL']
    }
  ];

  // Skills organized into 5 required categories + distinct toolchains
  readonly skillCategories: SkillCategoryGroup[] = [
    {
      id: 'frontend',
      title: { en: 'Frontend', fr: 'Frontend' },
      icon: '🎨',
      items: [
        { name: 'Angular', highlighted: true },
        { name: 'TypeScript', highlighted: true },
        { name: 'JavaScript', highlighted: true },
        { name: 'Flutter', highlighted: true }
      ]
    },
    {
      id: 'backend',
      title: { en: 'Backend', fr: 'Backend' },
      icon: '⚙️',
      items: [
        { name: 'Spring Boot', highlighted: true },
        { name: 'Spring Security', highlighted: true },
        { name: 'Node.js / Express', highlighted: true },
        { name: 'Symfony', highlighted: true },
        { name: 'Java', highlighted: true },
        { name: 'PHP', highlighted: true }
      ]
    },
    {
      id: 'databases',
      title: { en: 'Databases', fr: 'Bases de Données' },
      icon: '🗄️',
      items: [
        { name: 'MySQL', highlighted: true },
        { name: 'MongoDB', highlighted: true },
        { name: 'SQL', highlighted: true }
      ]
    },
    {
      id: 'devops',
      title: { en: 'DevOps & Cloud', fr: 'DevOps & Cloud' },
      icon: '☁️',
      items: [
        { name: 'Docker', highlighted: true },
        { name: 'Kubernetes', highlighted: true },
        { name: 'Jenkins', highlighted: true },
        { name: 'GitLab CI/CD', highlighted: true },
        { name: 'SonarQube', highlighted: true },
        { name: 'Git & GitHub', highlighted: true }
      ]
    },
    {
      id: 'testing',
      title: { en: 'Testing & Tools', fr: 'Tests & Outils' },
      icon: '🧪',
      items: [
        { name: 'JUnit', highlighted: true },
        { name: 'Mockito', highlighted: true },
        { name: 'Postman', highlighted: true },
        { name: 'Newman', highlighted: true }
      ]
    }
  ];

  // Education (ESPRIT, Software Engineering, 2022–2027)
  readonly education: EducationItem[] = [
    {
      id: 'esprit-se',
      degree: {
        en: 'National Diploma in Software Engineering (Diplôme d\'Ingénieur en Génie Logiciel)',
        fr: 'Diplôme National d\'Ingénieur en Génie Logiciel'
      },
      institution: 'ESPRIT (École Supérieure Privée d\'Ingénierie et de Technologies)',
      location: 'Ariana, Tunisia',
      period: '2022 – 2027',
      status: {
        en: 'Currently in 3rd Year • Seeking PFE Graduation Internship',
        fr: 'Actuellement en 3ème année • En recherche de stage PFE'
      },
      details: {
        en: [
          'Comprehensive training in software architecture, distributed systems, algorithms, and cloud technologies.',
          'Practical project work following Agile methodologies, collaborative Git workflows, and DevOps CI/CD practices.',
          'Third-year student preparing for Graduation Project (PFE).'
        ],
        fr: [
          'Formation d\'ingénieur complète en conception logicielle, architectures distribuées, algorithmes et cloud computing.',
          'Projets pratiques en équipe appliquant les méthodologies Agile, le versioning Git et les chaînes CI/CD DevOps.',
          'Étudiant en 3ème année préparant son Projet de Fin d\'Études (PFE).'
        ]
      }
    }
  ];

  // Certifications (Exact facts: AWS Certified Cloud Practitioner + Blockchain certification)
  readonly certifications: CertificationItem[] = [
    {
      id: 'aws-ccp',
      title: 'AWS Certified Cloud Practitioner',
      category: { en: 'Cloud Computing & Infrastructure', fr: 'Cloud Computing & Infrastructure' },
      note: { en: 'Amazon Web Services', fr: 'Amazon Web Services' }
    },
    {
      id: 'blockchain-cert',
      title: 'Blockchain Certification',
      category: { en: 'Distributed Ledger & Cryptography', fr: 'Registres Distribués & Cryptographie' },
      note: { en: 'Certified Competency', fr: 'Certification Professionnelle' }
    }
  ];

  // Spoken Languages (Arabic native, French B2, English B2)
  readonly spokenLanguages: SpokenLanguage[] = [
    {
      name: { en: 'Arabic', fr: 'Arabe' },
      level: { en: 'Native Language', fr: 'Langue Maternelle' },
      proficiencyBadge: 'Native'
    },
    {
      name: { en: 'French', fr: 'Français' },
      level: { en: 'B2 Level — Professional Working Proficiency', fr: 'Niveau B2 — Capacité Professionnelle' },
      proficiencyBadge: 'B2'
    },
    {
      name: { en: 'English', fr: 'Anglais' },
      level: { en: 'B2 Level — Professional Working Proficiency', fr: 'Niveau B2 — Capacité Professionnelle' },
      proficiencyBadge: 'B2'
    }
  ];
}
