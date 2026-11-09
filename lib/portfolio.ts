export const profile = {
  name: 'Pavanakumar Devadiga',
  role: 'Software Development Engineer / System Engineer',
  tagline:
    'MCA student passionate about Machine Learning and building real-world solutions with Python, SQL, and modern data tools.',
  phone: '+91-6361018315',
  email: 'pavanakumarharigadde@gmail.com',
  linkedin: 'https://linkedin.com/in/pavanakumar-devadiga',
  github: 'https://github.com/pavanakumar-devadiga',
  summary:
    'Motivated MCA student with hands-on experience in Machine Learning projects. Skilled in Python, SQL, MongoDB, and Database Management Systems. Passionate about solving real-world problems and continuously improving technical and communication skills.',
  resumeUrl: '/resume.pdf',
};

export type NavItem = { label: string; href: string };
export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  detail: string;
  cgpa?: string;
};

export const education: EducationItem[] = [
  {
    institution: 'PES University, RR Campus',
    degree: 'Master of Computer Applications (MCA)',
    period: 'Currently pursuing',
    detail: 'Postgraduate program focused on software development, data systems, and applied machine learning.',
    cgpa: '8.4',
  },
  {
    institution: "MES's M.M. Arts and Science College, Sirsi",
    degree: 'B.Sc. (Physics & Computer Science)',
    period: '2022 - 2025',
    detail: 'Affiliated to Karnatak University, Dharwad.',
    cgpa: '8.66',
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Web Technologies',
    items: ['HTML5', 'CSS3'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'DBMS Concepts'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    category: 'Learned Subjects',
    items: [
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
      'Cloud Basics',
      'Java',
      'DevOps',
      'MERN',
      'Next.js',
    ],
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  badge?: string;
};

export const projects: ProjectItem[] = [
  {
    title: 'Traffic E-Challan Pending Prediction System',
    description:
      'A machine learning system that predicts the daily pending traffic challans backlog, helping authorities anticipate and manage outstanding cases.',
    tech: ['Python', 'Machine Learning', 'Streamlit', 'Scikit-learn', 'Pandas'],
    highlights: [
      'Performed preprocessing, feature engineering, and correlation analysis on traffic challan data',
      'Compared Linear Regression, Decision Tree, and Random Forest Regression models',
      'Random Forest Regression selected for strongest predictive performance',
      'Built an interactive Streamlit dashboard with date-based feature extraction and backlog risk indicators',
    ],
    badge: 'Machine Learning',
  },
  {
    title: 'SentinelAI — Data Access Anomaly Detection',
    description:
      'A hybrid ML + rule-based insider threat detection system that analyzes enterprise access events to surface anomalies and explainable incident reports.',
    tech: ['Python', 'Scikit-learn', 'Isolation Forest', 'Streamlit'],
    highlights: [
      'Analyzed 1,200+ enterprise access events for insider threat detection',
      'Implemented risk scoring (0-100) and unauthorized access detection',
      'Used Isolation Forest-based anomaly detection combined with rule-based heuristics',
      'Generated explainable incident reports and an interactive security monitoring dashboard',
    ],
    badge: 'SG Hackathon',
  },
];

export type Certification = {
  title: string;
  issuer: string;
};

export const certifications: Certification[] = [
  {
    title: 'Mastery in MERN Full Stack Development',
    issuer: 'Zetacoding Solutions',
  },
];

export type Achievement = {
  title: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    title: 'Distinction-level academic performance',
    detail: 'Received university-level merit-based scholarships during PG studies.',
  },
  {
    title: 'General Secretary, College Student Union (2024-25)',
    detail: 'Elected to lead the student union and represent the student body.',
  },
  {
    title: 'Organized 15+ events',
    detail: 'Led academic, cultural, and extracurricular events across the academic year.',
  },
  {
    title: 'Mr. Motensar — Best Student of the Year 2024-25',
    detail: 'Awarded for overall excellence in academics, leadership, and extracurriculars.',
  },
];

export const heroHighlights = [
  'MCA student, CGPA 8.4',
  'Machine Learning project experience',
  'Python · SQL · MongoDB',
  'SG Hackathon contributor',
];
