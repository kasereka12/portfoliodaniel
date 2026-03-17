// ================================================================
//  FICHIER DE CONFIGURATION DU PORTFOLIO — NEXUS OS
//  Modifiez CE SEUL FICHIER pour personnaliser tout votre portfolio.
//  Les composants lisent automatiquement ces données.
// ================================================================

// ── Informations personnelles ──────────────────────────────────
export const personalInfo = {
  name:      "Daniel Mutaka",
  firstName: "Daniel",
  title:     "Ingénieur Full Stack | Core Banking & Solutions Web",
  tagline:   "Du core banking aux interfaces modernes — je conçois des systèmes qui tiennent la charge.",
  bio:       "Ingénieur en informatique passionné par la construction de solutions robustes. De la migration de systèmes bancaires critiques au développement d'applications web modernes, j'interviens sur toute la chaîne — backend, frontend, cloud et données.",

  github:    "https://github.com/username",         // 👈 Mets ton vrai lien GitHub
  linkedin:  "https://linkedin.com/in/username",    // 👈 Mets ton vrai LinkedIn
  cv:        "/cv.pdf",
  email:     "dmutaka7@gmail.com",
  location:  "Casablanca, Maroc",
  available: false,                                 // Tu es en poste à la Bank of Africa
};

// ── Statistiques section À propos ─────────────────────────────
export const aboutStats = [
  { label: "Années de formation",      value: "5+",  icon: "GraduationCap" },
  { label: "Langages & frameworks",    value: "20+", icon: "Code2"    },
  { label: "Projets livrés",           value: "10+", icon: "Rocket"   },
  { label: "Certifications Coursera",  value: "4",   icon: "Award"    },
];

// ── Paragraphes À propos ───────────────────────────────────────
export const aboutDescription = [
  "Ingénieur full-stack diplômé de l'EMSI (cycle 5 ans, option MIAGE) et d'un Master 2 en Mobiquité & Big Data à l'Université Côte d'Azur. Je combine une solide culture théorique et une expérience terrain en environnement bancaire critique.",
  "Mon stage PFE de 7 mois à la Bank of Africa m'a plongé dans le core banking : systèmes transactionnels, données financières à haute disponibilité, contraintes de performance réelles. Une expérience qui donne une autre dimension à ce que signifie \"coder en production\".",
  "Je maîtrise autant le backend lourd (Spring Boot, .NET, Django) que le frontend moderne (React, Angular, Flutter) et les environnements cloud (AWS, Azure, Docker/Kubernetes). Mon objectif : construire des systèmes qui durent.",
];

// ── Compétences ────────────────────────────────────────────────
export const skills = [
  {
    id:          "frontend",
    category:    "Frontend & Mobile",
    icon:        "Monitor",
    color:       "cyan",
    description: "Web moderne et applications mobiles",
    techs: [
      { name: "React JS",    level: 85 },
      { name: "Angular",     level: 82 },
      { name: "Flutter",     level: 75 },
      { name: "Bootstrap 5", level: 90 },
    ],
  },
  {
    id:          "backend",
    category:    "Backend",
    icon:        "Server",
    color:       "purple",
    description: "APIs robustes et architectures critiques",
    techs: [
      { name: "Spring Boot", level: 88 },
      { name: ".NET / C#",   level: 78 },
      { name: "Django",      level: 80 },
      { name: "Grails",      level: 70 },
    ],
  },
  {
    id:          "languages",
    category:    "Langages",
    icon:        "Code2",
    color:       "green",
    description: "Polyvalence et adaptabilité",
    techs: [
      { name: "Java",       level: 90 },
      { name: "Python",     level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "Kotlin",     level: 72 },
    ],
  },
  {
    id:          "database",
    category:    "Bases de données",
    icon:        "Database",
    color:       "yellow",
    description: "SQL, NoSQL et environnements enterprise",
    techs: [
      { name: "Oracle / Oracle NoSQL", level: 85 },
      { name: "MongoDB",               level: 80 },
    ],
  },
  {
    id:          "cloud",
    category:    "Cloud & DevOps",
    icon:        "Wrench",
    color:       "rose",
    description: "Du dev à la prod, en continu",
    techs: [
      { name: "Docker",          level: 80 },
      { name: "Kubernetes",      level: 68 },
      { name: "AWS",             level: 72 },
      { name: "Microsoft Azure", level: 70 },
    ],
  },
];

// ── Projets ────────────────────────────────────────────────────
export const projects = [
  {
    id:              1,
    title:           "SOS Mon Garage",
    description:     "Plateforme de mise en relation entre automobilistes et garagistes pour des interventions rapides et fiables.",
    longDescription: "Application web full-stack permettant aux conducteurs de décrire leur panne (véhicule opérationnel ou non), de soumettre une demande de réparation et d'être mis en contact avec un garagiste qualifié. Dashboard client, formulaire multi-étapes, design mobile-first.",
    techs:           ["React JS", "Spring Boot", "MongoDB", "Docker", "Bootstrap"],
    demo:            "https://www.sosmongarage.com/",
    github:          "#",
    status:          "Production",
    featured:        true,
  },
  {
    id:              2,
    title:           "GoodPlan.ma",
    description:     "Plateforme marocaine de bons plans, promotions et offres exclusives pour les consommateurs.",
    longDescription: "Application web de référencement et partage de bons plans commerciaux au Maroc. Interface de découverte d'offres par catégorie, système de mise en avant des promotions en cours et navigation intuitive adaptée au marché local.",
    techs:           ["React JS", "Node.js", "MongoDB", "Vercel"],
    demo:            "https://goodplan.ma/",
    github:          "#",
    status:          "Production",
    featured:        true,
  },
  {
    id:              3,
    title:           "TonCadeau.net",
    description:     "Plateforme de cadeaux personnalisés — trouver et offrir le cadeau parfait, simplement.",
    longDescription: "CadeauBox est une plateforme e-cadeau permettant aux utilisateurs de créer et envoyer des cadeaux personnalisés. Catalogue de produits, personnalisation, gestion des commandes et expérience d'unboxing digitale. Actuellement en phase de pré-production.",
    techs:           ["React JS", "Django", "PostgreSQL", "Docker"],
    demo:            "https://toncadeau.net/",
    github:          "#",
    status:          "Pré-production",
    featured:        false,
  },
  {
    id:              4,
    title:           "OpenTicket",
    description:     "Système de gestion de tickets open source — suivi des incidents, bugs et tâches en équipe.",
    longDescription: "Application de ticketing collaboratif inspirée des meilleurs outils du marché (Jira, Linear). Création et assignation de tickets, workflow par statuts, tableaux de bord par projet, notifications en temps réel. Déployé sur Vercel.",
    techs:           ["React JS", "Spring Boot", "MongoDB", "Vercel", "JWT"],
    demo:            "https://open-ticket-z6v3.vercel.app/",
    github:          "#",
    status:          "En développement",
    featured:        false,
  },
  {
    id:              5,
    title:           "Jeu Style Africain",
    description:     "Jeu vidéo web avec univers, esthétique et personnages inspirés des cultures africaines.",
    longDescription: "Projet personnel de développement d'un jeu de style africain — personnages inspirés des traditions du continent, univers visuels riches, mécaniques de gameplay originales. Développement en cours, construit avec des technologies web modernes.",
    techs:           ["JavaScript", "Phaser.js", "Canvas API", "Python"],
    demo:            "#",
    github:          "#",
    status:          "En développement",
    featured:        false,
  },
  {
    id:              6,
    title:           "Core Banking — Bank of Africa",
    description:     "PFE de 7 mois au sein de la Bank of Africa. Développement et optimisation de modules critiques du système bancaire central.",
    longDescription: "Immersion en environnement bancaire réel : développement sur le core banking system, traitement de données transactionnelles haute disponibilité, contraintes de conformité réglementaire. Stack entreprise Java/Spring Boot et Oracle.",
    techs:           ["Java", "Spring Boot", "Oracle", "Git", "Docker"],
    demo:            "#",
    github:          "#",
    status:          "Production",
    featured:        true,
  },
  {
    id:              7,
    title:           "Application WebGL 3D (aRTICODE)",
    description:     "Application WebGL interactive développée sous Unity lors d'un stage chez aRTICODE.",
    longDescription: "Création d'une expérience 3D dans le navigateur via WebGL et Unity. Intégration de modèles 3D, gestion des animations d'objets, spatialisation du son et optimisation des performances de rendu temps réel.",
    techs:           ["Unity", "WebGL", "C#", "3D Modeling"],
    demo:            "#",
    github:          "#",
    status:          "Archivé",
    featured:        false,
  },
];

// ── Parcours (timeline) ────────────────────────────────────────
export const timeline = [
  {
    id:           1,
    type:         "work",
    title:        "Ingénieur Full Stack",
    organization: "Bank of Africa",
    period:       "Octobre 2025 — Présent",
    description:  "Poste d'ingénieur suite au PFE. Développement et maintenance de modules du core banking system, participation aux projets de transformation digitale de la banque.",
    techs:        ["Java", "Spring Boot", "Oracle", "Docker"],
    location:     "Casablanca, Maroc",
  },
  {
    id:           2,
    type:         "work",
    title:        "Stagiaire PFE — Core Banking (7 mois)",
    organization: "Bank of Africa",
    period:       "Mars 2025 — Octobre 2025",
    description:  "Projet de fin d'études en environnement bancaire réel. Développement sur le système bancaire central, traitement transactionnel, haute disponibilité et conformité réglementaire.",
    techs:        ["Java", "Spring Boot", "Oracle", "Git"],
    location:     "Casablanca, Maroc",
  },
  {
    id:           3,
    type:         "work",
    title:        "Stagiaire — Développement WebGL",
    organization: "aRTICODE",
    period:       "Juillet — Août 2023",
    description:  "Création d'une application WebGL avec Unity. Gestion des modèles 3D, du son et des animations dans un environnement de rendu temps réel.",
    techs:        ["Unity", "WebGL", "C#"],
    location:     "Maroc",
  },
  {
    id:           4,
    type:         "work",
    title:        "Stagiaire — Développement Web",
    organization: "EMID",
    period:       "Juillet — Septembre 2020",
    description:  "Migration d'une application vers une solution web moderne. Optimisation de l'interface utilisateur et amélioration de la gestion des données.",
    techs:        ["JavaScript", "HTML/CSS", "SQL"],
    location:     "Maroc",
  },
  {
    id:           5,
    type:         "education",
    title:        "Master 2 — Mobiquité, Big Data & Intégration de Systèmes",
    organization: "Université Côte d'Azur",
    period:       "2023 — Octobre 2025",
    description:  "Spécialisation en mobilité, Big Data et architectures distribuées. Double diplôme en parallèle du cycle ingénieur EMSI.",
    techs:        ["Big Data", "Architecture distribuée", "Mobile"],
    location:     "Nice, France",
  },
  {
    id:           6,
    type:         "education",
    title:        "Cycle Ingénieur Informatique & Réseau — option MIAGE",
    organization: "EMSI",
    period:       "2020 — Octobre 2025",
    description:  "Formation d'ingénieur sur 5 ans en informatique et réseaux, spécialisation MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises).",
    techs:        ["Java", "Algorithmique", "Réseaux", "Gestion SI"],
    location:     "Casablanca, Maroc",
  },
  {
    id:           7,
    type:         "education",
    title:        "Baccalauréat Scientifique — Mathématiques & Physique",
    organization: "Complexe MAFUTA",
    period:       "2019",
    description:  "Baccalauréat scientifique avec option Mathématiques et Physique.",
    techs:        ["Mathématiques", "Physique"],
    location:     "Maroc",
  },
];

// ── Contact ─────────────────────────────────────────────────────
export const contactInfo = {
  email:    "dmutaka7@gmail.com",
  github:   "https://github.com/username",        // 👈 Mets ton vrai GitHub
  linkedin: "https://linkedin.com/in/username",   // 👈 Mets ton vrai LinkedIn
  twitter:  "https://twitter.com/username",       // 👈 Ou supprime/commente
  message:  "Ingénieur à la Bank of Africa, je reste ouvert aux échanges tech, collaborations et belles opportunités.",
};
