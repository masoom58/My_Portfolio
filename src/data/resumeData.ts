export interface ResumeProject {
  id: string;
  title: string;
  subtitle?: string;
  tags: string[];
  category: 'NLP & AI' | 'Machine Learning & Full Stack' | 'Intelligent Systems';
  bullets: string[];
  highlights: string[];
  architectureOverview: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  status: 'In Progress' | 'Completed';
}

export interface ExperienceItem {
  role: string;
  organization: string;
  program: string;
  bullets: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  type: 'Certification' | 'Achievement' | 'Competitive';
  badgeNote?: string;
}

export const RESUME_DATA = {
  personal: {
    name: 'MASOOM CHOUDHARY',
    titles: [
      'NLP Engineer',
      'AI/ML Engineer',
      'LLM & Generative AI Developer'
    ],
    primaryRole: 'NLP Engineer | AI/ML Engineer | LLM & Generative AI Developer',
    email: 'masoomchoudhary4124@gmail.com',
    phone: '+91 7415360209',
    location: 'Pithampur, Madhya Pradesh, India',
    linkedin: {
      url: 'https://linkedin.com/in/masoom-choudhary-9776a3333',
      display: 'linkedin.com/in/masoom-choudhary-9776a3333'
    },
    resumePdfUrl: '/Masoom_Choudhary_Resume.pdf',
    fallbackResumePdfUrl: '/assets/aistudio/Masoom_Choudhary_Resume-3_f36f14df.pdf'
  },

  summary: `Results-driven AI/ML Engineer specializing in Natural Language Processing (NLP), Large Language Models (LLMs), Generative AI, and Deep Learning. Proven ability to build AI-powered applications, intelligent automation systems, text-processing pipelines, and scalable machine learning workflows. Proficient in developing data preprocessing solutions, feature engineering pipelines, and AI-driven products using TensorFlow, PyTorch, Hugging Face Transformers, and Scikit-learn. Passionate about solving real-world problems through conversational AI, predictive modeling, and cutting-edge AI research.`,

  skillCategories: [
    {
      category: 'AI/ML Technologies',
      description: 'Core machine learning, deep neural representations, and generative paradigms',
      skills: [
        'NLP',
        'LLMs',
        'Generative AI',
        'Deep Learning',
        'Neural Networks',
        'Reinforcement Learning (Foundational)'
      ]
    },
    {
      category: 'AI/ML Frameworks',
      description: 'High-performance frameworks for model development, training, and inference',
      skills: [
        'TensorFlow',
        'PyTorch',
        'Hugging Face Transformers',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'OpenCV (Basics)'
      ]
    },
    {
      category: 'Programming Languages',
      description: 'Languages used across AI/ML workflows, data queries, and application stacks',
      skills: [
        'Python',
        'SQL',
        'JavaScript'
      ]
    },
    {
      category: 'Specialisations',
      description: 'Specialized techniques in NLP pipelines, feature engineering, and inference',
      skills: [
        'Prompt Engineering',
        'Text Preprocessing',
        'Feature Extraction',
        'Model Evaluation',
        'Predictive Modelling'
      ]
    },
    {
      category: 'Tools & Platforms',
      description: 'Development environments, containerization, cloud, and version control',
      skills: [
        'Jupyter Notebook',
        'Google Colab',
        'Git & GitHub',
        'Docker',
        'Linux',
        'IBM Cloud',
        'AWS (Basics)',
        'VS Code'
      ]
    }
  ],

  projects: [
    {
      id: 'voice-assistant',
      title: 'Jarvis-Like Smart AI Voice Assistant',
      subtitle: 'Conversational Voice AI with Deep Learning & Reinforcement Learning',
      tags: ['Python', 'NLP', 'TensorFlow', 'PyTorch'],
      category: 'NLP & AI',
      bullets: [
        'Designed and developed an AI-powered voice assistant leveraging NLP and deep learning for natural language understanding.',
        'Implemented voice command recognition, intent parsing, and intelligent response generation with scalable architecture.',
        'Integrated reinforcement learning concepts to enable adaptive, context-aware assistant behaviour.',
        'Built end-to-end conversational AI functionalities with modular, production-ready design principles.'
      ],
      highlights: [
        'Intent parsing & NLU pipeline',
        'Voice command recognition',
        'Adaptive RL context awareness',
        'Modular production-ready design'
      ],
      architectureOverview: 'Speech/Command Input → NLU & Intent Parser → Deep Learning / RL Adaptive Policy → Intelligent Natural Response Generation'
    },
    {
      id: 'ecokrishi',
      title: 'AI-Integrated Agriculture Recommendation System (EcoKrishi)',
      subtitle: 'Predictive Crop Modeling & Collaborative Filtering Platform',
      tags: ['Machine Learning', 'Python', 'MERN Stack', 'AI Recommendation Engine'],
      category: 'Machine Learning & Full Stack',
      bullets: [
        'Built an AI-driven agriculture support platform delivering intelligent, data-backed crop and resource recommendations.',
        'Implemented predictive modelling and collaborative filtering workflows to power real-time recommendation engines.',
        'Engineered scalable backend integration with secure authentication and role-based access control.',
        'Enhanced farmer decision-support through intuitive UI and explainable AI-powered insights.'
      ],
      highlights: [
        'Predictive crop modeling',
        'Collaborative filtering engine',
        'Role-based access & auth',
        'Explainable AI decision support'
      ],
      architectureOverview: 'Soil & Climate Parameters → Predictive & Collaborative ML Engine → Scalable MERN API Layer → Explainable Decision UI'
    },
    {
      id: 'emergency-alert',
      title: 'Emergency Alert & Response System',
      subtitle: 'Intelligent Incident Triage & Real-Time Event Processing',
      tags: ['AI Workflow Design', 'Intelligent Automation', 'System Architecture'],
      category: 'Intelligent Systems',
      bullets: [
        'Architected a scalable emergency response application with structured incident triage and categorisation logic.',
        'Designed AI-based smart alert-handling pipelines and automated assistance workflows for real-time scenarios.',
        'Focused on intelligent system architecture, fault tolerance, scalability, and real-time event processing.'
      ],
      highlights: [
        'Structured incident triage',
        'Real-time event processing',
        'Fault-tolerant pipeline',
        'Automated AI assistance workflows'
      ],
      architectureOverview: 'Real-Time Incident Stream → Smart AI Alert Triage & Classification → Automated Dispatch Pipeline → Scalable Fail-Safe Event Handling'
    }
  ] as ResumeProject[],

  experience: [
    {
      role: 'AI & Cloud Intern',
      organization: 'IBM',
      program: 'IBM SkillsBuild Internship Program',
      bullets: [
        'Completed practical training in Artificial Intelligence, Machine Learning, and Cloud Computing on IBM SkillsBuild.',
        'Developed and executed end-to-end ML workflows covering data preprocessing, model training, evaluation, and AI pipeline design.',
        'Gained hands-on exposure to cloud-based deployment concepts and intelligent automation systems.',
        'Collaborated on AI-focused learning modules, applying real-world problem-solving approaches across diverse datasets.'
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: 'M.Tech',
      field: 'Information Technology (IT)',
      institution: 'SGSITS, Indore',
      location: 'Indore, India',
      period: 'Pursuing (Current)',
      status: 'In Progress'
    },
    {
      degree: 'B.Tech',
      field: 'Computer Science Engineering',
      institution: 'Indore Institute of Science & Technology, Indore',
      location: 'Indore, India',
      period: 'Completed',
      status: 'Completed'
    },
    {
      degree: 'Diploma',
      field: 'Computer Science Engineering',
      institution: 'Shri Vaishnav Polytechnic College, Indore',
      location: 'Indore, India',
      period: '2020 – 2023',
      score: '72%',
      status: 'Completed'
    },
    {
      degree: 'Secondary Education',
      field: 'Class X',
      institution: 'Achievers Academy Higher Secondary School, Pithampur',
      location: 'Pithampur, India',
      period: '2020',
      score: '81%',
      status: 'Completed'
    }
  ] as EducationItem[],

  certificationsAndAchievements: [
    {
      name: 'IBM SkillsBuild – AI Fundamentals',
      issuer: 'IBM SkillsBuild',
      type: 'Certification',
      badgeNote: 'Official IBM Certification'
    },
    {
      name: 'IBM SkillsBuild – Python for AI',
      issuer: 'IBM SkillsBuild',
      type: 'Certification',
      badgeNote: 'Official IBM Certification'
    },
    {
      name: 'IBM SkillsBuild – Cloud Computing',
      issuer: 'IBM SkillsBuild',
      type: 'Certification',
      badgeNote: 'Official IBM Certification'
    },
    {
      name: 'Smart India Hackathon (SIH)',
      issuer: 'Ministry of Education',
      type: 'Achievement',
      badgeNote: 'Official Participant'
    },
    {
      name: 'Naukri Campus Young Turks',
      issuer: 'Naukri Campus',
      type: 'Competitive',
      badgeNote: '95.41 Percentile'
    },
    {
      name: 'TCS CodeVita',
      issuer: 'Tata Consultancy Services',
      type: 'Competitive',
      badgeNote: 'Rank 5,530 Globally'
    }
  ] as CertificationItem[],

  coreCompetencies: [
    'Built AI-focused projects spanning NLP, Generative AI, and intelligent automation systems.',
    'Strong command of AI/ML model lifecycle: design, training, evaluation, and deployment.',
    'Active researcher in Deep Learning, LLMs, TensorFlow, PyTorch, and advanced AI domains.'
  ],

  areasOfInterest: [
    'Natural Language Processing (NLP)',
    'Large Language Models (LLMs)',
    'Generative AI',
    'Conversational AI',
    'AI Research',
    'Deep Learning',
    'Intelligent Automation Systems',
    'Prompt Engineering'
  ]
};
