"use client";

import React, { useState } from 'react';

// --- Icon Components (Mocking lucide-react) ---

const SearchIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const MenuIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const UserIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MapPinIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const DollarSignIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const CalendarIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const SparklesIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    <path d="M19.5 13.5 21 12l-1.5-1.5"></path>
    <path d="m10.5 13.5 1.5 1.5 1.5-1.5"></path>
    <path d="m3 12 1.5 1.5L6 12"></path>
    <path d="m4.5 4.5 1.5 1.5L7.5 4.5"></path>
  </svg>
);

const LaptopIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.29 2.57A2 2 0 0 1 19.3 21H4.7a2 2 0 0 1-1.99-2.43L4 16"></path>
  </svg>
);

const BriefcaseIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const LogOutIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

const BookOpenIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const TrophyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-2.34"></path>
    <path d="M15 14.66V17c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-2.34"></path>
    <path d="M8 18v-2c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2"></path>
    <path d="M12 18V8"></path>
    <path d="M15 9a3 3 0 0 0-3-3H9M12 9a3 3 0 0 1-3-3H9"></path>
  </svg>
);

const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const UsersIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
};

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
};

const XCircleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
  );
};

const LayoutDashboardIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="7" height="9" x="3" y="3" rx="1"></rect>
      <rect width="7" height="5" x="14" y="3" rx="1"></rect>
      <rect width="7" height="9" x="14" y="12" rx="1"></rect>
      <rect width="7" height="5" x="3" y="16" rx="1"></rect>
    </svg>
  );
};

const PlusCircleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
};

const EditIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  );
};

const DownloadIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2 2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const CalendarPlusIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
    <line x1="12" y1="15" x2="12" y2="15"></line>
    <line x1="12" y1="13" x2="12" y2="19"></line>
    <line x1="9" y1="16" x2="15" y2="16"></line>
  </svg>
);

const ClipboardCheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <path d="m9 14 2 2 4-4"></path>
  </svg>
);

const PlusIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const TrashIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const AwardIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const GraduationCapIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5"></path>
  </svg>
);

const CodeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const BuildingIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <line x1="8" y1="6" x2="8" y2="6"></line>
    <line x1="16" y1="6" x2="16" y2="6"></line>
    <line x1="12" y1="6" x2="12" y2="6"></line>
    <line x1="8" y1="10" x2="8" y2="10"></line>
    <line x1="16" y1="10" x2="16" y2="10"></line>
    <line x1="12" y1="10" x2="12" y2="10"></line>
    <line x1="8" y1="14" x2="8" y2="14"></line>
    <line x1="16" y1="14" x2="16" y2="14"></line>
    <line x1="12" y1="14" x2="12" y2="14"></line>
    <line x1="8" y1="18" x2="8" y2="18"></line>
    <line x1="16" y1="18" x2="16" y2="18"></line>
    <line x1="12" y1="18" x2="12" y2="18"></line>
  </svg>
);


// --- Mock Data ---
const mockOpportunitiesList = [
  {
    id: 1,
    title: "Innovate AI Hackathon",
    organization: "Tech Corp",
    type: "Hackathon",
    prize: "₹1,00,000",
    deadline: "20 days left",
    location: "Online",
    tags: ["AI", "Machine Learning"],
    image: "https://placehold.co/600x400/6366F1/FFFFFF?text=AI+Hackathon",
    details: {
      overview: "A premier hackathon to build innovative AI solutions. Show your skills and compete for the grand prize.",
      prizes: ["1st Place: ₹1,00,000", "2nd Place: ₹50,000", "3rd Place: ₹25,000"],
      rounds: [
        { name: "Round 1: Idea Submission", description: "Submit your idea and a brief plan." },
        { name: "Round 2: Prototype Build", description: "Build and submit your prototype." },
        { name: "Round 3: Final Presentation", description: "Present your solution to the judges." }
      ]
    }
  },
  {
    id: 2,
    title: "Software Engineer (Frontend)",
    organization: "WebFlow Inc.",
    type: "Job",
    prize: "₹18-24 LPA",
    deadline: "Apply by Nov 30",
    location: "Remote",
    tags: ["React", "Next.js", "TypeScript"],
    image: "https://placehold.co/600x400/EC4899/FFFFFF?text=Frontend+Job",
    details: {
      overview: "We are looking for a skilled Frontend Engineer to join our remote team. You will be responsible for building and maintaining our user-facing applications.",
      prizes: ["Competitive Salary (₹18-24 LPA)", "Stock Options", "Health Insurance"],
      rounds: [
        { name: "Round 1: Online Assessment", description: "A technical test on frontend skills." },
        { name: "Round 2: Technical Interview", description: "A 1-on-1 with a Senior Engineer." },
        { name: "Round 3: HR Interview", description: "Culture fit and behavioral interview." }
      ]
    }
  },
  {
    id: 3,
    title: "Marketing Intern",
    organization: "Growthify",
    type: "Internship",
    prize: "₹25,000/mo",
    deadline: "1 week left",
    location: "Mumbai",
    tags: ["Marketing", "SEO", "Social Media"],
    image: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Marketing+Intern",
    details: {
      overview: "Join our fast-growing marketing team. This is a 3-month paid internship with a high chance of a full-time offer upon completion.",
      prizes: ["Stipend: ₹25,000/month", "Certificate of Internship", "Letter of Recommendation"],
      rounds: [
        { name: "Round 1: Resume Screening", description: "Applications will be screened based on resumes." },
        { name: "Round 2: Telephonic Interview", description: "A brief 20-minute call with the HR manager." },
        { name: "Round 3: Case Study", description: "A small marketing case study to solve." }
      ]
    }
  },
  {
    id: 4,
    title: "Microsoft Code Challenge",
    organization: "Microsoft",
    type: "Competition",
    prize: "₹5,00,000",
    deadline: "Apply by Dec 15",
    location: "Online",
    tags: ["Coding", "Algorithms", "Data Structures"],
    image: "https://placehold.co/600x400/10B981/FFFFFF?text=Code+Challenge",
    details: {
      overview: "Microsoft's annual coding competition for students. Compete with the best and win exciting prizes and internship opportunities.",
      prizes: ["1st Place: ₹5,00,000", "2nd Place: ₹2,00,000", "Top 100 get interview opportunities"],
      rounds: [
        { name: "Qualifier Round", description: "Online coding test (90 mins)." },
        { name: "Final Round", description: "4-hour proctored coding challenge." }
      ]
    }
  },
  {
    id: 5,
    title: "Data Scientist",
    organization: "DataMiners",
    type: "Job",
    prize: "₹20-25 LPA",
    deadline: "Apply by Dec 1",
    location: "Bangalore",
    tags: ["Python", "SQL", "Data Analysis"],
    image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Data+Scientist",
    details: {
      overview: "Looking for a Data Scientist to analyze large datasets and generate insights.",
      prizes: ["Competitive Salary (₹20-25 LPA)", "Performance Bonus"],
      rounds: [
        { name: "Round 1: Screening", description: "Resume screening" },
        { name: "Round 2: Technical Test", description: "SQL and Python test" },
      ]
    }
  }
];
type Opportunity = (typeof mockOpportunitiesList)[0];
const uniqueLocations = ["All", ...new Set(mockOpportunitiesList.map(op => op.location))];

const mockPracticeItems = [
  { id: 1, title: "Data Structures Basics", category: "Coding", image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Data+Structures" },
  { id: 2, "title": "Advanced JavaScript (ES6+)", category: "Coding", image: "https://placehold.co/600x400/FCD34D/FFFFFF?text=JavaScript" },
  { id: 3, "title": "Marketing 101", category: "Marketing", image: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Marketing" },
  { id: 4, "title": "Case Study Fundamentals", category: "Consulting", image: "https://placehold.co/600x400/14B8A6/FFFFFF?text=Case+Study" }
];
type PracticeItem = (typeof mockPracticeItems)[0];

const mockQuizQuestions = [
  {
    question: "What is a key-value pair in a JavaScript object?",
    options: ["A pair of (key, value) items", "A function", "An array", "A string"],
    answer: "A pair of (key, value) items"
  },
  {
    question: "What does `===` operator do in JavaScript?",
    options: ["Assigns a value", "Compares value only", "Compares value and type", "Compares type only"],
    answer: "Compares value and type"
  },
  {
    question: "Which hook is used to manage state in a functional component?",
    options: ["useEffect", "useContext", "useState", "useReducer"],
    answer: "useState"
  },
  {
    question: "What does 'DOM' stand for?",
    options: ["Document Object Model", "Data Object Model", "Document Oriented-Markup", "Dynamic Object Model"],
    answer: "Document Object Model"
  }
];

const mockApplicantsList = [
  { 
    id: 1, 
    name: "Alex Johnson", 
    status: "Pending", 
    applied: "2 days ago", 
    oppId: 1, 
    avatar: "https://placehold.co/100x100/E0E7FF/4F46E5?text=AJ",
    resumeUrl: "#",
    task: null,
    interviewTime: null,
    email: "alex.j@example.com",
    skills: ["Python", "Machine Learning", "TensorFlow", "PyTorch"]
  },
  { 
    id: 2, 
    name: "Maria Garcia", 
    status: "Reviewed", 
    applied: "3 days ago", 
    oppId: 1, 
    avatar: "https://placehold.co/100x100/FCE7F3/DB2777?text=MG",
    resumeUrl: "#",
    task: "Develop a basic image recognition model.",
    interviewTime: null,
    email: "maria.g@example.com",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "AI"]
  },
  { 
    id: 3, 
    name: "Sam Lee", 
    status: "Pending", 
    applied: "1 day ago", 
    oppId: 1, 
    avatar: "https://placehold.co/100x100/D1FAE5/059669?text=SL",
    resumeUrl: "#",
    task: null,
    interviewTime: "2025-11-05T14:30",
    email: "sam.lee@example.com",
    skills: ["Java", "Spring Boot", "SQL", "AWS"]
  },
  { 
    id: 4, 
    name: "David Kim", 
    status: "Pending", 
    applied: "5 days ago", 
    oppId: 4, 
    avatar: "https://placehold.co/100x100/FEF3C7/F59E0B?text=DK",
    resumeUrl: "#",
    task: null,
    interviewTime: null,
    email: "david.kim@example.com",
    skills: ["C++", "Algorithms", "Data Structures", "Competitive Programming"]
  },
  { 
    id: 5, 
    name: "Priya Sharma", 
    status: "Hired", 
    applied: "1 week ago", 
    oppId: 4, 
    avatar: "https://placehold.co/100x100/FEE2E2/DC2626?text=PS",
    resumeUrl: "#",
    task: "Completed: Algorithmic challenge.",
    interviewTime: "2025-10-28T10:00",
    email: "priya.s@example.com",
    skills: ["Python", "Data Analysis", "Pandas", "SQL"]
  },
];
type Applicant = (typeof mockApplicantsList)[0];

// --- NEW STUDENT PROFILE MOCK DATA ---
const defaultStudentProfile = {
  name: "Jane Doe (Demo)",
  email: "janedoe@example.com",
  avatar: "https://placehold.co/120x120/E0E7FF/4F46E5?text=JD",
  skills: ["React", "TypeScript", "Node.js", "Marketing Analytics"],
  education: [
    { id: 1, degree: "B.Tech Computer Science", school: "Global Tech University", year: "2020-2024" },
  ],
  experience: [
    { id: 1, title: "Frontend Intern", company: "WebFlow Inc.", duration: "Jun 2023 - Aug 2023", description: "Worked on the main marketing website using React and Next.js." },
  ],
  projects: [
    { id: 1, name: "Opportunity Platform Clone", description: "This very project!", link: "#" },
  ],
  awards: [
    { id: 1, name: "Dean's List", issuer: "Global Tech University", year: "2023" },
  ],
};
type StudentProfile = typeof defaultStudentProfile;
type EducationEntry = typeof defaultStudentProfile.education[0];
type ExperienceEntry = typeof defaultStudentProfile.experience[0];
type ProjectEntry = typeof defaultStudentProfile.projects[0];
type AwardEntry = typeof defaultStudentProfile.awards[0];


// --- Reusable UI Components (Based on shadcn/ui) ---

/**
 * Button Component (Styled with new accent color)
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  as?: "button" | "a";
  href?: string;
  target?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", as = "button", href, target, ...props }, ref) => {
    const baseStyle =
      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default:
        "bg-indigo-600 text-white hover:bg-indigo-600/90 shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
      destructive:
        "bg-red-600 text-white hover:bg-red-600/90 shadow-sm hover:shadow-md",
      outline:
        "border border-indigo-500 bg-transparent hover:bg-indigo-500 hover:text-white text-indigo-500 dark:border-indigo-500 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white",
      secondary:
        "bg-indigo-100 text-indigo-700 hover:bg-indigo-200/80 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
      ghost:
        "hover:bg-indigo-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300",
      link: "text-indigo-500 dark:text-indigo-400 underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8 text-base",
      icon: "h-10 w-10",
    };

    const Comp = as === "a" ? "a" : "button";
    
    const buttonProps = {
      className: `${baseStyle} ${variants[variant]} ${sizes[size]} ${className || ''}`,
      ...(as === "a" ? { href, target } : {}),
      ...props,
    };

    return <Comp ref={ref as any} {...buttonProps} />;
  }
);
Button.displayName = "Button";

/**
 * Card Components (Enhanced styling)
 */
const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div
    className={`rounded-xl border border-gray-200 bg-white text-gray-950 shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50 ${className}`}
    {...props}
  />
);

const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
);

const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => (
  <h3 className={`text-xl font-semibold leading-none tracking-tight ${className}`} {...props} />
);

const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, ...props }) => (
  <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`} {...props} />
);

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);

const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
);

/**
 * Input Component (Enhanced styling)
 */
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus-visible:ring-indigo-500 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => {
  return (
    <select
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus-visible:ring-indigo-500 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Select.displayName = "Select";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus-visible:ring-indigo-500 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

/**
 * Label Component
 */
const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ className, ...props }) => (
  <label
    className={`text-sm font-medium leading-none text-gray-800 dark:text-gray-200 ${className}`}
    {...props}
  />
);


/**
 * Modal Component (Enhanced styling)
 */
const Modal = ({
  title,
  onClose,
  children,
  size = "md"
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  size?: "md" | "lg" | "xl" | "3xl";
}) => {
  
  const sizes = {
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "3xl": "max-w-3xl",
  }
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative z-50 w-full ${sizes[size]} rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-900 dark:border dark:border-gray-700`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            <XCircleIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

/**
 * Login/Sign Up Modals (Role toggle uses accent color)
 */
const LoginModal = ({
  onLogin,
  onSwitchToSignUp,
}: {
  onLogin: (role: "student" | "company") => void;
  onSwitchToSignUp: () => void;
}) => {
  const [role, setRole] = useState<"student" | "company">("student");

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
        <Button
          variant={role === "student" ? "default" : "ghost"}
          size="sm"
          onClick={() => setRole("student")}
          className={role === 'student' ? 'shadow-md' : 'text-gray-500 dark:text-gray-300'}
        >
          Student
        </Button>
        <Button
          variant={role === "company" ? "default" : "ghost"}
          size="sm"
          onClick={() => setRole("company")}
          className={role === 'company' ? 'shadow-md' : 'text-gray-500 dark:text-gray-300'}
        >
          Company
        </Button>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Enter your {role} account credentials.
      </p>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="name@company.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="••••••••" />
      </div>
      <Button className="w-full" onClick={() => onLogin(role)}>
        Login as {role.charAt(0).toUpperCase() + role.slice(1)}
      </Button>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        Don't have an account?{" "}
        <Button variant="link" className="p-0" onClick={onSwitchToSignUp}>
          Sign Up
        </Button>
      </p>
    </div>
  );
};

const SignUpModal = ({
  onSignUp,
  onSwitchToLogin,
}: {
  onSignUp: (role: "student" | "company") => void;
  onSwitchToLogin: () => void;
}) => {
  const [role, setRole] = useState<"student" | "company">("student");

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
        <Button
          variant={role === "student" ? "default" : "ghost"}
          size="sm"
          onClick={() => setRole("student")}
          className={role === 'student' ? 'shadow-md' : 'text-gray-500 dark:text-gray-300'}
        >
          I'm a Student
        </Button>
        <Button
          variant={role === "company" ? "default" : "ghost"}
          size="sm"
          onClick={() => setRole("company")}
          className={role === 'company' ? 'shadow-md' : 'text-gray-500 dark:text-gray-300'}
        >
          I'm a Company
        </Button>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Create a new {role} account to get started.
      </p>
      <div className="space-y-2">
        <Label htmlFor="signup-name">
          {role === "student" ? "Full Name" : "Company Name"}
        </Label>
        <Input type="text" id="signup-name" placeholder={role === "student" ? "Jane Doe" : "Tech Corp"} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="signup-email">Email</Label>
        <Input type="email" id="signup-email" placeholder="name@company.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="signup-password">Password</Label>
        <Input type="password" id="signup-password" placeholder="••••••••" />
      </div>
      <Button className="w-full" onClick={() => onSignUp(role)}>
        Create Account
      </Button>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Button variant="link" className="p-0" onClick={onSwitchToLogin}>
          Login
        </Button>
      </p>
    </div>
  );
};

// --- Page Components (Simulating Next.js App Router) ---

/**
 * Header Component (Stylish Logo)
 */
const Header = ({
  onNavClick,
  userRole,
  onLogout,
  setModalView,
}: {
  onNavClick: (page: string, filter?: string) => void;
  userRole: "none" | "student" | "company";
  onLogout: () => void;
  setModalView: (view: "login" | "signup") => void;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Practice", page: "practice" },
    { name: "Competitions", page: "opportunities", filter: "Competition" },
    { name: "Hackathons", page: "opportunities", filter: "Hackathon" },
    { name: "Jobs", page: "opportunities", filter: "Job" },
    { name: "Internships", page: "opportunities", filter: "Internship" },
  ];

  const handleNavClick = (page: string, filter?: string) => {
    onNavClick(page, filter);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 text-xl font-bold"
        >
          <SparklesIcon className="h-6 w-6 text-indigo-500" />
          <span className="text-gray-900 dark:text-gray-50">Opportunity</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-2 md:flex">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="text-gray-500 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
              onClick={() => handleNavClick(item.page, item.filter)}
            >
              {item.name}
            </Button>
          ))}
          {userRole === "none" && (
            <Button
              variant="ghost"
              className="text-gray-500 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
              onClick={() => setModalView("login")}
            >
              For Companies
            </Button>
          )}
        </nav>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden items-center space-x-2 md:flex">
          {userRole === "student" ? (
            <>
              <Button
                variant="ghost"
                onClick={() => handleNavClick("profile")}
                className="text-gray-500 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
              >
                <UserIcon className="mr-2 h-4 w-4" />
                My Profile
              </Button>
              <Button variant="outline" onClick={onLogout}>Logout</Button>
            </>
          ) : userRole === "none" ? (
            <>
              <Button variant="ghost" className="text-gray-500 dark:text-gray-300" onClick={() => setModalView("login")}>
                Login
              </Button>
              <Button onClick={() => setModalView("signup")}>Sign Up</Button>
            </>
          ) : null}
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 z-40 w-full border-b border-gray-200 bg-white p-4 shadow-lg dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="justify-start text-base"
                onClick={() => handleNavClick(item.page, item.filter)}
              >
                {item.name}
              </Button>
            ))}
          </nav>
          <div className="mt-6 flex flex-col space-y-2">
            {userRole === "student" ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => handleNavClick("profile")}
                >
                  <UserIcon className="mr-2 h-4 w-4" />
                  My Profile
                </Button>
                <Button onClick={onLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={() => {
                    setModalView("login");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    setModalView("signup");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  variant="link"
                  onClick={() => {
                    setModalView("login");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  For Companies
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

/**
 * Footer Component (Improved styling)
 */
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 flex items-center gap-2 text-lg font-bold md:mb-0">
            <SparklesIcon className="h-6 w-6 text-indigo-500" />
            <span className="text-gray-900 dark:text-gray-50">Opportunity</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Opportunity Platform. All rights reserved.
          </p>
          {/* Social media icons would go here */}
        </div>
      </div>
    </footer>
  );
};

/**
 * Opportunity Card Component (Added hover effects)
 */
const OpportunityCard = ({
  op,
  onViewDetails,
}: {
  op: Opportunity;
  onViewDetails: (id: number) => void;
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "Job":
        return <BriefcaseIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />;
      case "Internship":
        return <LaptopIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />;
      case "Hackathon":
        return <TrophyIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />;
      case "Competition":
        return <SparklesIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />;
      default:
        return <BriefcaseIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />;
    }
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:hover:shadow-indigo-500/10">
      <img
        src={op.image}
        alt={op.title}
        className="h-48 w-full object-cover"
        onError={(e) => (e.currentTarget.src = "https://placehold.co/600x400/gray/white?text=Image+Error")}
      />
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-indigo-500 dark:text-gray-100">{op.title}</CardTitle>
        <CardDescription>{op.organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          {getIcon(op.type)}
          <span className="ml-2">{op.type}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <MapPinIcon className="h-4 w-4" />
          <span className="ml-2">{op.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <DollarSignIcon className="h-4 w-4" />
          <span className="ml-2">{op.prize}</span>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 dark:bg-gray-800/50">
        <Button
          variant="outline"
          className="w-full border-gray-300 text-gray-700 hover:border-indigo-500 dark:border-gray-700 dark:text-gray-300 dark:hover:border-indigo-500 dark:hover:bg-indigo-500 dark:hover:text-white"
          onClick={() => onViewDetails(op.id)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

/**
 * Practice Card Component (Added hover effects)
 */
const PracticeCard = ({
  item,
  onStartPractice,
}: {
  item: PracticeItem;
  onStartPractice: (id: number) => void;
}) => {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:hover:shadow-indigo-500/10">
      <img
        src={item.image}
        alt={item.title}
        className="h-48 w-full object-cover"
        onError={(e) => (e.currentTarget.src = "https://placehold.co/600x400/gray/white?text=Image+Error")}
      />
      <CardHeader>
        <CardTitle className="dark:text-gray-100">{item.title}</CardTitle>
        <CardDescription>{item.category}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto bg-gray-50 p-4 dark:bg-gray-800/50">
        <Button
          className="w-full"
          onClick={() => onStartPractice(item.id)}
        >
          Start Practice
        </Button>
      </CardFooter>
    </Card>
  );
};


/**
 * Home Page Component (Gradient hero, accent text)
 */
const HomePage = ({
  onNavClick,
  onViewDetails,
  onStartPractice,
}: {
  onNavClick: (page: string, filter?: string) => void;
  onViewDetails: (id: number) => void;
  onStartPractice: (id: number) => void;
}) => {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Find Your Next <span className="text-indigo-400">Big Opportunity</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            From hackathons and competitions to internships and jobs, your
            career journey starts here.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
            <Button
              size="lg"
              onClick={() => onNavClick("opportunities")}
            >
              Explore Opportunities
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-gray-100 text-indigo-700 hover:bg-white dark:bg-gray-100 dark:text-indigo-700 dark:hover:bg-white"
              onClick={() => onNavClick("practice")}
            >
              Practice Skills
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Opportunities */}
      <div className="py-16 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-gray-100">
            Featured <span className="text-indigo-500 dark:text-indigo-400">Opportunities</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mockOpportunitiesList.slice(0, 3).map((op) => (
              <OpportunityCard
                key={op.id}
                op={op}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              variant="link"
              onClick={() => onNavClick("opportunities")}
            >
              View All Opportunities <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Practice Section */}
      <div className="bg-gray-50 py-16 dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-gray-100">
            Sharpen Your <span className="text-indigo-500 dark:text-indigo-400">Skills</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mockPracticeItems.slice(0, 3).map((item) => (
              <PracticeCard
                key={item.id}
                item={item}
                onStartPractice={onStartPractice}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              variant="link"
              onClick={() => onNavClick("practice")}
            >
              View All Practice Modules <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

/**
 * Opportunities Page Component (NEW: Location Filter)
 */
const OpportunitiesPage = ({
  opportunities,
  onViewDetails,
  initialFilter,
}: {
  opportunities: Opportunity[];
  onViewDetails: (id: number) => void;
  initialFilter: string | null;
}) => {
  const [searchTerm, setSearchTerm] = useState(initialFilter || "");
  const [locationFilter, setLocationFilter] = useState("All");

  const filteredOpportunities = opportunities.filter((op) => {
    const term = searchTerm.toLowerCase();
    
    const matchesSearch = term === "" ||
      op.title.toLowerCase().includes(term) ||
      op.organization.toLowerCase().includes(term) ||
      op.type.toLowerCase() === term ||
      op.tags.some(tag => tag.toLowerCase().includes(term));
      
    const matchesLocation = locationFilter === "All" || op.location === locationFilter;

    return matchesSearch && matchesLocation;
  });

  const handleFilterClick = (filter: string) => {
    setSearchTerm(filter);
  };
  
  const filters = ["Hackathon", "Competition", "Job", "Internship"];

  return (
    <main className="flex-grow dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-gray-100">
          Explore <span className="text-indigo-500 dark:text-indigo-400">Opportunities</span>
        </h1>
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search by title, organization, or tag..."
              className="w-full !pl-10 !h-12 !text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location-filter">Location</Label>
              <Select id="location-filter" value={locationFilter} onChange={e => setLocationFilter(e.target.value)}>
                {uniqueLocations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </Select>
            </div>
            
            <div className="space-y-2">
               <Label>Category</Label>
               <div className="flex flex-wrap gap-2">
                <Button 
                  variant={searchTerm === "" ? "default" : "secondary"} 
                  size="sm" 
                  onClick={() => handleFilterClick("")}
                  className={searchTerm === "" ? "bg-indigo-600 text-white" : "dark:bg-gray-700 dark:text-gray-200"}
                >
                  All
                </Button>
                {filters.map(filter => (
                  <Button 
                    key={filter}
                    variant={searchTerm === filter ? "default" : "secondary"} 
                    size="sm" 
                    onClick={() => handleFilterClick(filter)}
                    className={searchTerm === filter ? "bg-indigo-600 text-white" : "dark:bg-gray-700 dark:text-gray-200"}
                  >
                    {filter}s
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((op) => (
              <OpportunityCard
                key={op.id}
                op={op}
                onViewDetails={onViewDetails}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-gray-500 dark:text-gray-400 py-10">
              No opportunities found matching your search.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

/**
 * Opportunity Detail Page (Improved Tabs & CTA)
 */
const OpportunityDetailPage = ({
  op,
  onBack,
}: {
  op: Opportunity;
  onBack: () => void;
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <main className="flex-grow bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4 text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400"
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          Back to Opportunities
        </Button>
        <div className="lg:flex lg:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Card className="overflow-hidden shadow-xl">
              <img
                src={op.image}
                alt={op.title}
                className="h-72 w-full object-cover"
                onError={(e) => (e.currentTarget.src = "https://placehold.co/600x400/gray/white?text=Image+Error")}
              />
              <CardHeader>
                <CardTitle className="text-3xl font-bold dark:text-gray-100">{op.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-300">{op.organization}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Tabs */}
                <div className="border-b border-gray-200 dark:border-gray-800">
                  <nav className="-mb-px flex space-x-6">
                    <Button
                      variant="ghost"
                      onClick={() => setActiveTab("overview")}
                      className={`py-4 px-1 rounded-none ${activeTab === "overview" ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"}`}
                    >
                      Overview
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => setActiveTab("prizes")}
                      className={`py-4 px-1 rounded-none ${activeTab === "prizes" ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"}`}
                    >
                      Prizes
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => setActiveTab("rounds")}
                      className={`py-4 px-1 rounded-none ${activeTab === "rounds" ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"}`}
                    >
                      Rounds
                    </Button>
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="prose prose-lg dark:prose-invert mt-6 max-w-full text-gray-700 dark:text-gray-300">
                  {activeTab === "overview" && (
                    <p>{op.details.overview}</p>
                  )}
                  {activeTab === "prizes" && (
                    <ul className="list-disc space-y-2 pl-5">
                      {op.details.prizes.map((prize, i) => (
                        <li key={i}>{prize}</li>
                      ))}
                    </ul>
                  )}
                  {activeTab === "rounds" && (
                    <dl>
                      {op.details.rounds.map((round, i) => (
                        <div key={i} className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                          <dt className="font-semibold text-gray-900 dark:text-gray-100">{round.name}</dt>
                          <dd className="text-gray-600 dark:text-gray-300">{round.description}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="mt-8 w-full lg:mt-0 lg:w-96">
            <Card className="sticky top-24 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl dark:text-gray-100">Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between text-sm">
                  <span className="flex items-center font-medium text-gray-700 dark:text-gray-300">
                    <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                    Deadline:
                  </span>
                  <span className="font-semibold text-red-500">{op.deadline}</span>
                </div>
                <div className="flex items-start justify-between text-sm">
                  <span className="flex items-center font-medium text-gray-700 dark:text-gray-300">
                    <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                    Location:
                  </span>
                  <span className="font-medium text-gray-600 dark:text-gray-200">{op.location}</span>
                </div>
                <div className="flex items-start justify-between text-sm">
                  <span className="flex items-center font-medium text-gray-700 dark:text-gray-300">
                    <DollarSignIcon className="mr-2 h-4 w-4 text-gray-500" />
                    Prize/Stipend:
                  </span>
                  <span className="font-bold text-green-600">{op.prize}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                  <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {op.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

/**
 * Practice Page Component
 */
const PracticePage = ({
  onStartPractice,
}: {
  onStartPractice: (id: number) => void;
}) => {
  return (
    <main className="flex-grow dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-gray-100">
          Practice <span className="text-indigo-500 dark:text-indigo-400">Modules</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-gray-500 dark:text-gray-400">
          Get ready for your interviews and competitions with our practice modules.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockPracticeItems.map((item) => (
            <PracticeCard
              key={item.id}
              item={item}
              onStartPractice={onStartPractice}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

/**
 * Practice Detail Page (Quiz) (Added Progress Bar)
 */
const PracticeDetailPage = ({
  item,
  onQuit,
}: {
  item: PracticeItem;
  onQuit: () => void;
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const q = mockQuizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / mockQuizQuestions.length) * 100;

  const handleSelectAnswer = (option: string) => {
    if (isCorrect !== null) return; // Don't allow changing answer
    
    setSelectedAnswer(option);
    if (option === q.answer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
  };
  
  const handleNext = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    if (currentQuestion + 1 < mockQuizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
    setIsCorrect(null);
  };

  if (isFinished) {
    const finalScore = (score / mockQuizQuestions.length) * 100;
    const passed = finalScore >= 75;

    return (
      <main className="flex-grow bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl dark:text-gray-100">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {passed ? (
                <CheckCircleIcon className="mx-auto h-20 w-20 text-green-500" />
              ) : (
                <XCircleIcon className="mx-auto h-20 w-20 text-red-500" />
              )}
              <p className="text-2xl font-semibold dark:text-gray-100">Your Score</p>
              <p className={`text-6xl font-bold ${passed ? 'text-green-500' : 'text-red-500'}`}>
                {score} / {mockQuizQuestions.length}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                {passed ? "Great job! You passed." : "Keep practicing! You can do better."}
              </p>
            </CardContent>
            <CardFooter className="flex-col gap-4 p-6">
              <Button className="w-full" size="lg" onClick={handleRestart}>
                Try Again
              </Button>
              <Button variant="outline" className="w-full" size="lg" onClick={onQuit}>
                Back to Practice
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <Card className="shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl dark:text-gray-100">{item.title}</CardTitle>
              <Button variant="link" onClick={onQuit} className="text-gray-500">Quit</Button>
            </div>
            <CardDescription>
              Question {currentQuestion + 1} of {mockQuizQuestions.length}
            </CardDescription>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${progress}%` }}>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-xl font-semibold dark:text-gray-100">{q.question}</p>
            <div className="space-y-3">
              {q.options.map((option) => {
                const isSelected = selectedAnswer === option;
                let optionClass = "border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100";
                if (isSelected) {
                  optionClass = isCorrect ? "border-green-500 bg-green-50 dark:bg-green-900/50 ring-2 ring-green-500 text-green-700 dark:text-green-300" : "border-red-500 bg-red-50 dark:bg-red-900/50 ring-2 ring-red-500 text-red-700 dark:text-red-300";
                } else if (isCorrect !== null && option === q.answer) {
                  optionClass = "border-green-500 bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300";
                }
                
                return (
                  <button
                    key={option}
                    onClick={() => handleSelectAnswer(option)}
                    disabled={isCorrect !== null}
                    className={`flex w-full rounded-lg border p-4 text-left transition-all ${optionClass} ${isCorrect !== null ? 'cursor-not-allowed' : ''}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              size="lg"
              onClick={handleNext}
              disabled={isCorrect === null}
            >
              {currentQuestion + 1 === mockQuizQuestions.length ? "Finish" : "Next Question"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

// --- NEW Edit Profile Modal ---
const EditProfileModal = ({
  profile,
  onClose,
  onSave,
}: {
  profile: StudentProfile;
  onClose: () => void;
  onSave: (newProfile: StudentProfile) => void;
}) => {
  const [formData, setFormData] = useState(profile);

  const handleSave = () => {
    onSave(formData);
    onClose();
  };
  
  // Generic handler for nested fields (education, exp, etc.)
  const handleNestedChange = (
    section: keyof StudentProfile,
    id: number,
    field: string,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [section]: (prev[section] as any[]).map(item => 
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  // Handler to add a new item to a section
  const handleAddItem = (section: 'education' | 'experience' | 'projects' | 'awards') => {
    setFormData(prev => {
      const currentItems = prev[section] as any[];
      const newId = Math.max(0, ...currentItems.map(i => i.id)) + 1;
      let newItem: any;
      switch (section) {
        case 'education': newItem = { id: newId, degree: '', school: '', year: '' }; break;
        case 'experience': newItem = { id: newId, title: '', company: '', duration: '', description: '' }; break;
        case 'projects': newItem = { id: newId, name: '', description: '', link: '' }; break;
        case 'awards': newItem = { id: newId, name: '', issuer: '', year: '' }; break;
        default: newItem = { id: newId };
      }
      return { ...prev, [section]: [...currentItems, newItem] };
    });
  };

  // Handler to remove an item from a section
  const handleRemoveItem = (section: 'education' | 'experience' | 'projects' | 'awards', id: number) => {
    setFormData(prev => ({
      ...prev,
      [section]: (prev[section] as any[]).filter(item => item.id !== id),
    }));
  };
  
  // Handler for simple string fields (name, email)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handler for skills (comma-separated string)
  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, skills: e.target.value.split(',').map(s => s.trim()) }));
  };

  return (
    <Modal title="Edit Profile" onClose={onClose} size="3xl">
      <div className="max-h-[75vh] overflow-y-auto p-1 pr-4 space-y-6">
        {/* Basic Info */}
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="dark:text-gray-100">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills">Skills (comma-separated)</Label>
              <Input id="skills" name="skills" value={formData.skills.join(', ')} onChange={handleSkillsChange} />
            </div>
          </CardContent>
        </Card>
        
        {/* Education */}
        <Card className="dark:bg-gray-800">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="dark:text-gray-100">Education</CardTitle>
            <Button type="button" size="sm" onClick={() => handleAddItem('education')}><PlusIcon className="mr-2 h-4 w-4"/>Add</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.education.map((edu, index) => (
              <div key={edu.id} className="space-y-3 rounded-lg border p-4 dark:border-gray-700">
                <div className="flex justify-end">
                  <Button type="button" variant="destructive" size="icon" onClick={() => handleRemoveItem('education', edu.id)}><TrashIcon className="h-4 w-4"/></Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`edu-degree-${index}`}>Degree/Program</Label>
                  <Input id={`edu-degree-${index}`} value={edu.degree} onChange={(e) => handleNestedChange('education', edu.id, 'degree', e.target.value)} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`edu-school-${index}`}>School/University</Label>
                    <Input id={`edu-school-${index}`} value={edu.school} onChange={(e) => handleNestedChange('education', edu.id, 'school', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`edu-year-${index}`}>Year (e.g., 2020-2024)</Label>
                    <Input id={`edu-year-${index}`} value={edu.year} onChange={(e) => handleNestedChange('education', edu.id, 'year', e.target.value)} />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        {/* Experience */}
        <Card className="dark:bg-gray-800">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="dark:text-gray-100">Experience</CardTitle>
            <Button type="button" size="sm" onClick={() => handleAddItem('experience')}><PlusIcon className="mr-2 h-4 w-4"/>Add</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.experience.map((exp, index) => (
              <div key={exp.id} className="space-y-3 rounded-lg border p-4 dark:border-gray-700">
                <div className="flex justify-end">
                  <Button type="button" variant="destructive" size="icon" onClick={() => handleRemoveItem('experience', exp.id)}><TrashIcon className="h-4 w-4"/></Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`exp-title-${index}`}>Job Title</Label>
                  <Input id={`exp-title-${index}`} value={exp.title} onChange={(e) => handleNestedChange('experience', exp.id, 'title', e.target.value)} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`exp-company-${index}`}>Company</Label>
                    <Input id={`exp-company-${index}`} value={exp.company} onChange={(e) => handleNestedChange('experience', exp.id, 'company', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`exp-duration-${index}`}>Duration</Label>
                    <Input id={`exp-duration-${index}`} value={exp.duration} onChange={(e) => handleNestedChange('experience', exp.id, 'duration', e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`exp-desc-${index}`}>Description</Label>
                  <Textarea id={`exp-desc-${index}`} value={exp.description} onChange={(e) => handleNestedChange('experience', exp.id, 'description', e.target.value)} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="dark:bg-gray-800">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="dark:text-gray-100">Projects</CardTitle>
            <Button type="button" size="sm" onClick={() => handleAddItem('projects')}><PlusIcon className="mr-2 h-4 w-4"/>Add</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.projects.map((proj, index) => (
              <div key={proj.id} className="space-y-3 rounded-lg border p-4 dark:border-gray-700">
                <div className="flex justify-end">
                  <Button type="button" variant="destructive" size="icon" onClick={() => handleRemoveItem('projects', proj.id)}><TrashIcon className="h-4 w-4"/></Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`proj-name-${index}`}>Project Name</Label>
                  <Input id={`proj-name-${index}`} value={proj.name} onChange={(e) => handleNestedChange('projects', proj.id, 'name', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`proj-link-${index}`}>Link (Optional)</Label>
                  <Input id={`proj-link-${index}`} value={proj.link} onChange={(e) => handleNestedChange('projects', proj.id, 'link', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`proj-desc-${index}`}>Description</Label>
                  <Textarea id={`proj-desc-${index}`} value={proj.description} onChange={(e) => handleNestedChange('projects', proj.id, 'description', e.target.value)} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        {/* Awards */}
        <Card className="dark:bg-gray-800">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="dark:text-gray-100">Awards & Achievements</CardTitle>
            <Button type="button" size="sm" onClick={() => handleAddItem('awards')}><PlusIcon className="mr-2 h-4 w-4"/>Add</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.awards.map((award, index) => (
              <div key={award.id} className="space-y-3 rounded-lg border p-4 dark:border-gray-700">
                <div className="flex justify-end">
                  <Button type="button" variant="destructive" size="icon" onClick={() => handleRemoveItem('awards', award.id)}><TrashIcon className="h-4 w-4"/></Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`award-name-${index}`}>Award Name</Label>
                    <Input id={`award-name-${index}`} value={award.name} onChange={(e) => handleNestedChange('awards', award.id, 'name', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`award-issuer-${index}`}>Issuer</Label>
                    <Input id={`award-issuer-${index}`} value={award.issuer} onChange={(e) => handleNestedChange('awards', award.id, 'issuer', e.target.value)} />
                  </div>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor={`award-year-${index}`}>Year</Label>
                    <Input id={`award-year-${index}`} value={award.year} onChange={(e) => handleNestedChange('awards', award.id, 'year', e.target.value)} />
                  </div>
              </div>
            ))}
          </CardContent>
        </Card>

      </div>
      <div className="mt-6 flex justify-end gap-2 border-t border-gray-200 dark:border-gray-800 pt-4">
        <Button variant="ghost" onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </Modal>
  );
};

/**
 * Profile Page Component (NEW: Displays data from state, opens Edit Modal)
 */
const ProfilePage = ({
  profile,
  onLogout,
  onSaveProfile,
}: {
  profile: StudentProfile;
  onLogout: () => void;
  onSaveProfile: (newProfile: StudentProfile) => void;
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <main className="flex-grow bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        
        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <img
                src={profile.avatar}
                alt="User"
                className="h-28 w-28 rounded-full border-4 border-white shadow-lg"
              />
              <div className="mt-4 sm:mt-0">
                <CardTitle className="text-3xl font-bold text-white">{profile.name}</CardTitle>
                <CardDescription className="text-lg text-indigo-100">{profile.email}</CardDescription>
              </div>
              <Button variant="secondary" size="sm" onClick={() => setIsEditModalOpen(true)} className="mt-4 sm:mt-0 sm:ml-auto bg-white/20 text-white hover:bg-white/30">
                <EditIcon className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 lg:p-8 space-y-10">
            {/* Skills */}
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">My Skills</h4>
              <div className="flex flex-wrap gap-3">
                {profile.skills.map(skill => (
                  <span key={skill} className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            
            {/* Education */}
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Education</h4>
              <div className="space-y-6">
                {profile.education.map(edu => (
                  <div key={edu.id} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-gray-800">
                      <GraduationCapIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold dark:text-gray-100">{edu.degree}</h5>
                      <p className="text-gray-700 dark:text-gray-300">{edu.school}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Experience */}
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Experience</h4>
               <div className="space-y-6">
                {profile.experience.map(exp => (
                  <div key={exp.id} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-gray-800">
                      <BuildingIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold dark:text-gray-100">{exp.title}</h5>
                      <p className="text-gray-700 dark:text-gray-300">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Projects */}
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Projects</h4>
               <div className="space-y-6">
                {profile.projects.map(proj => (
                  <div key={proj.id} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-gray-800">
                      <CodeIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold dark:text-gray-100">{proj.name}</h5>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">{proj.description}</p>
                      {proj.link && (
                        <Button variant="link" as="a" href={proj.link} target="_blank" className="p-0">
                          View Project
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Awards */}
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Awards & Achievements</h4>
               <div className="space-y-6">
                {profile.awards.map(award => (
                  <div key={award.id} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-gray-800">
                      <AwardIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold dark:text-gray-100">{award.name}</h5>
                      <p className="text-gray-700 dark:text-gray-300">{award.issuer}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{award.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Settings */}
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Settings</h4>
              <div className="space-x-2">
                <Button variant="destructive" onClick={onLogout}>
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>

      {isEditModalOpen && (
        <EditProfileModal
          profile={profile}
          onClose={() => setIsEditModalOpen(false)}
          onSave={onSaveProfile}
        />
      )}
    </main>
  );
};

/**
 * Layout Component (Simulating app/layout.tsx) (FIX: Dark mode fix)
 */
const Layout = ({
  children,
  onNavClick,
  userRole,
  onLogout,
  setModalView,
}: {
  children: React.ReactNode;
  onNavClick: (page: string, filter?: string) => void;
  userRole: "none" | "student" | "company";
  onLogout: () => void;
  setModalView: (view: "login" | "signup") => void;
}) => {
  return (
    // Default to dark mode, applies to whole app
    <div className="dark flex min-h-screen flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header
        onNavClick={onNavClick}
        userRole={userRole}
        onLogout={onLogout}
        setModalView={setModalView}
      />
      {children}
      <Footer />
    </div>
  );
};

// --- --------------------------------------------------- ---
// --- NEW COMPANY DASHBOARD COMPONENTS (Improved UI) ---- ---
// --- --------------------------------------------------- ---

/**
 * Company Layout (FIX: Dark mode bg fix)
 */
const CompanyLayout = ({
  children,
  activePage,
  onNavClick,
  onLogout,
}: {
  children: React.ReactNode;
  activePage: string;
  onNavClick: (page: string) => void;
  onLogout: () => void;
}) => {
  const navItems = [
    { name: "Dashboard", page: "dashboard", icon: <LayoutDashboardIcon className="h-5 w-5" /> },
    { name: "My Postings", page: "postings", icon: <BriefcaseIcon className="h-5 w-5" /> },
    { name: "Create New", page: "create", icon: <PlusCircleIcon className="h-5 w-5" /> },
  ];

  return (
    <div className="dark flex min-h-screen text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <nav className="hidden w-64 flex-shrink-0 border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950 md:flex md:flex-col">
        <div className="flex items-center gap-2 px-2 py-4">
          <BriefcaseIcon className="h-6 w-6 text-indigo-500" />
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Company Dashboard
          </span>
        </div>
        <div className="mt-6 flex flex-1 flex-col space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant={activePage === item.page ? "default" : "ghost"}
              className={`w-full justify-start text-base font-medium ${activePage === item.page ? 'text-white' : 'text-gray-500 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400'}`}
              onClick={() => onNavClick(item.page)}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Button>
          ))}
          <Button
            variant="ghost"
            className="w-full justify-start text-base font-medium text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500 mt-auto"
            onClick={onLogout}
          >
            <LogOutIcon className="h-5 w-5" />
            <span className="ml-3">Logout</span>
          </Button>
        </div>
      </nav>

      {/* Main Content Area (FIX: Added dark bg) */}
      <div className="flex-1 overflow-x-hidden bg-gray-100 dark:bg-gray-900">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 md:justify-end">
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle mobile menu">
            <MenuIcon className="h-6 w-6" />
          </Button>
          <p className="font-medium text-gray-900 dark:text-gray-50">Welcome, <span className="text-indigo-500">Tech Corp</span> (Demo)</p>
        </header>
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

/**
 * Company Dashboard Home Page (Improved Stats)
 */
const CompanyDashboardHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Dashboard</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">Welcome to your company dashboard.</p>
      
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Postings</CardTitle>
            <BriefcaseIcon className="h-5 w-5 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">3</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">1 Hackathon, 2 Jobs</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">New Applicants</CardTitle>
            <UsersIcon className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">5</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">+3 this week</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

/**
 * Company Manage Postings Page (Improved Table)
 */
const CompanyManagePostings = ({
  opportunities,
  onViewApplicants,
  onNavClick,
}: {
  opportunities: Opportunity[];
  onViewApplicants: (oppId: number) => void;
  onNavClick: (page: string) => void;
}) => {
  const myPostings = opportunities.filter(
    op => op.organization.includes("Tech Corp") || op.organization === "Microsoft"
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">My Postings</h1>
        <Button onClick={() => onNavClick("create")}>
          <PlusCircleIcon className="mr-2 h-4 w-4" />
          Create New
        </Button>
      </div>

      <div className="mt-8 flow-w-full">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Applicants</th>
                    <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
                  {myPostings.map((op) => (
                    <tr key={op.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-50">{op.title}</div>
                        <div className="text-sm text-red-500">{op.deadline}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                          {op.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {mockApplicantsList.filter(a => a.oppId === op.id).length}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                        <Button variant="outline" size="sm" onClick={() => onViewApplicants(op.id)}>
                          View Applicants
                        </Button>
                        <Button variant="ghost" size="icon">
                          <EditIcon className="h-4 w-4 text-gray-500" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

/**
 * Company Create Posting Page (NEW: Conditional Fields)
 */
const CompanyCreatePosting = ({
  onCreatePosting,
  onNavClick,
}: {
  onCreatePosting: (newOpp: Omit<Opportunity, 'id'>) => void;
  onNavClick: (page: string) => void;
}) => {
  const [type, setType] = useState<Opportunity['type']>("Job");
  
  // Shared fields
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Online");
  const [deadline, setDeadline] = useState("");
  const [overview, setOverview] = useState("");
  const [tags, setTags] = useState("");
  const [rounds, setRounds] = useState("");
  
  // Conditional fields
  const [prize, setPrize] = useState(""); // For Hackathon/Competition
  const [salary, setSalary] = useState(""); // For Job/Internship
  const [techStack, setTechStack] = useState(""); // For Hackathon
  const [experienceLevel, setExperienceLevel] = useState("Entry Level"); // For Job

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isJob = type === 'Job' || type === 'Internship';
    
    const newPosting: Omit<Opportunity, 'id'> = {
      title,
      type,
      prize: isJob ? salary : prize,
      location,
      deadline,
      organization: "Tech Corp (Demo)", // Hardcoded for demo
      tags: tags.split(',').map(t => t.trim()),
      image: `https://placehold.co/600x400/6366F1/FFFFFF?text=${encodeURIComponent(title)}`,
      details: {
        overview,
        prizes: isJob ? [salary, "Health Benefits", "Stock Options"] : [prize, "Certificates", "Swag"], // Simplified
        rounds: rounds.split('\n').map(r => ({ name: r, description: "Details to be announced." })), // Simplified
      },
    };
    onCreatePosting(newPosting);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Create New Posting</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">Fill out the form to post a new opportunity.</p>

      <form onSubmit={handleSubmit}>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="dark:text-gray-100">Core Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="type">Opportunity Type</Label>
                <Select id="type" value={type} onChange={e => setType(e.target.value as Opportunity['type'])}>
                  <option value="Job">Job</option>
                  <option value="Internship">Internship</option>
                  <option value="Hackathon">Hackathon</option>
                  <option value="Competition">Competition</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" value={title} onChange={e => setTitle(e.target.value)} required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select id="location" value={location} onChange={e => setLocation(e.target.value)}>
                   {uniqueLocations.filter(l => l !== 'All').map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Application Deadline</Label>
                <Input id="deadline" type="date" value={deadline} onChange={e => setDeadline(e.target.value)} required />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Conditional Fields */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="dark:text-gray-100">{type} Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            { (type === 'Job' || type === 'Internship') && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="salary">{type === 'Job' ? 'Salary Range (e.g., ₹18-24 LPA)' : 'Stipend (e.g., ₹25,000/mo)'}</Label>
                  <Input id="salary" value={salary} onChange={e => setSalary(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experienceLevel">Experience Level</Label>
                  <Select id="experienceLevel" value={experienceLevel} onChange={e => setExperienceLevel(e.target.value)}>
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                  </Select>
                </div>
              </>
            )}
            
            { (type === 'Hackathon' || type === 'Competition') && (
              <div className="space-y-2">
                <Label htmlFor="prize">Prize Pool (e.g., ₹1,00,000)</Label>
                <Input id="prize" value={prize} onChange={e => setPrize(e.target.value)} required />
              </div>
            )}
            
            { type === 'Hackathon' && (
              <div className="space-y-2">
                <Label htmlFor="techStack">Tech Stack (e.g., React, Node.js, AI)</Label>
                <Input id="techStack" value={techStack} onChange={e => setTechStack(e.target.value)} />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="overview">Overview / Description</Label>
              <Textarea id="overview" value={overview} onChange={e => setOverview(e.target.value)} rows={5} required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="rounds">Rounds / Stages (one per line)</Label>
              <Textarea id="rounds" value={rounds} onChange={e => setRounds(e.target.value)} rows={3} placeholder="e.g., Round 1: Online Quiz..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input id="tags" value={tags} onChange={e => setTags(e.target.value)} placeholder="e.g. React, AI, Marketing" />
            </div>
          </CardContent>
          <CardFooter className="justify-end space-x-2 p-6">
            <Button type="button" variant="ghost" onClick={() => onNavClick("postings")}>Cancel</Button>
            <Button type="submit" size="lg">Create Posting</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

/**
 * View Applicants Modal (UPDATED with new features)
 */
const ViewApplicantsModal = ({
  opp,
  applicants,
  onClose,
  onViewProfile,
  onAssignTask,
  onScheduleInterview,
}: {
  opp: Opportunity;
  applicants: Applicant[];
  onClose: () => void;
  onViewProfile: (applicantId: number) => void;
  onAssignTask: (applicantId: number) => void;
  onScheduleInterview: (applicantId: number) => void;
}) => {
  const applicantsForOpp = applicants.filter(a => a.oppId === opp.id);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hired": return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200";
      case "Reviewed": return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200";
      case "Pending": default: return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200";
    }
  };

  return (
    <Modal title={`Applicants for ${opp.title}`} onClose={onClose} size="xl">
      <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
        {applicantsForOpp.length > 0 ? applicantsForOpp.map(app => (
          <div key={app.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <img src={app.avatar} alt={app.name} className="h-10 w-10 rounded-full"/>
                <div>
                  <Button variant="link" onClick={() => onViewProfile(app.id)} className="p-0 h-auto text-base font-medium text-gray-900 dark:text-gray-100">
                    {app.name}
                  </Button>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Applied: {app.applied}</p>
                </div>
              </div>
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusColor(app.status)} mt-2 sm:mt-0`}>
                {app.status}
              </span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" as="a" href={app.resumeUrl} target="_blank">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Resume
              </Button>
              <Button variant="outline" size="sm" onClick={() => onAssignTask(app.id)} disabled={!!app.task}>
                <ClipboardCheckIcon className="mr-2 h-4 w-4" />
                {app.task ? "Task Assigned" : "Assign Task"}
              </Button>
              <Button variant="outline" size="sm" onClick={() => onScheduleInterview(app.id)} disabled={!!app.interviewTime}>
                <CalendarPlusIcon className="mr-2 h-4 w-4" />
                {app.interviewTime ? "Scheduled" : "Schedule"}
              </Button>
            </div>
          </div>
        )) : (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">No applicants yet.</p>
        )}
      </div>
    </Modal>
  );
};

// --- Applicant Profile Page ---
const ApplicantProfilePage = ({
  applicant,
  onBack,
  onAssignTask,
  onScheduleInterview,
}: {
  applicant: Applicant;
  onBack: () => void;
  onAssignTask: (applicantId: number) => void;
  onScheduleInterview: (applicantId: number) => void;
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hired": return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200";
      case "Reviewed": return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200";
      case "Pending": default: return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200";
    }
  };
  
  return (
    <div className="text-gray-900 dark:text-gray-100">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-4 text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400"
      >
        <ChevronLeftIcon className="mr-2 h-4 w-4" />
        Back to Applicants
      </Button>

      <Card className="shadow-xl">
        <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-xl p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <img
              src={applicant.avatar}
              alt={applicant.name}
              className="h-28 w-28 rounded-full border-4 border-white shadow-lg"
            />
            <div className="mt-4 sm:mt-0">
              <CardTitle className="text-3xl font-bold text-white">{applicant.name}</CardTitle>
              <CardDescription className="text-lg text-indigo-100">{applicant.email}</CardDescription>
              <span className={`mt-2 inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusColor(applicant.status)}`}>
                {applicant.status}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - Actions */}
            <div className="md:col-span-1 space-y-4">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Actions</h4>
              <Button variant="outline" className="w-full" as="a" href={applicant.resumeUrl} target="_blank">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" className="w-full" onClick={() => onAssignTask(applicant.id)}>
                <ClipboardCheckIcon className="mr-2 h-4 w-4" />
                {applicant.task ? "View/Edit Task" : "Assign Task"}
              </Button>
              <Button variant="outline" className="w-full" onClick={() => onScheduleInterview(applicant.id)}>
                <CalendarPlusIcon className="mr-2 h-4 w-4" />
                {applicant.interviewTime ? "Reschedule" : "Schedule Interview"}
              </Button>
            </div>
            
            {/* Right Column - Details */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {applicant.skills.map(skill => (
                    <span key={skill} className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Assigned Task</h4>
                <Card className="bg-gray-50 dark:bg-gray-800">
                  <CardContent className="p-4 pt-6">
                    {applicant.task ? (
                      <p className="text-gray-700 dark:text-gray-300">{applicant.task}</p>
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400">No task assigned yet.</p>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Interview</h4>
                <Card className="bg-gray-50 dark:bg-gray-800">
                  <CardContent className="p-4 pt-6">
                    {applicant.interviewTime ? (
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        Scheduled for: {new Date(applicant.interviewTime).toLocaleString()}
                      </p>
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400">No interview scheduled yet.</p>
                    )}
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


// --- NEW Modals for Company Actions ---
const AssignTaskModal = ({
  applicant,
  onClose,
  onSubmit,
}: {
  applicant: Applicant;
  onClose: () => void;
  onSubmit: (applicantId: number, task: string) => void;
}) => {
  const [task, setTask] = useState(applicant.task || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(applicant.id, task);
  };
  
  return (
    <Modal title={`Assign Task to ${applicant.name}`} onClose={onClose} size="lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="task">Task Description</Label>
          <Textarea 
            id="task" 
            value={task} 
            onChange={(e) => setTask(e.target.value)}
            rows={5}
            placeholder="e.g., 'Complete the linked coding challenge within 48 hours...'"
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="ghost" type="button" onClick={onClose}>Cancel</Button>
          <Button type="submit">Assign Task</Button>
        </div>
      </form>
    </Modal>
  );
};

const ScheduleInterviewModal = ({
  applicant,
  onClose,
  onSubmit,
}: {
  applicant: Applicant;
  onClose: () => void;
  onSubmit: (applicantId: number, dateTime: string) => void;
}) => {
  const [dateTime, setDateTime] = useState(applicant.interviewTime ? applicant.interviewTime.slice(0, 16) : "");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(applicant.id, dateTime);
  };

  return (
    <Modal title={`Schedule Interview with ${applicant.name}`} onClose={onClose} size="lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="interviewTime">Date and Time</Label>
          <Input 
            id="interviewTime"
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="ghost" type="button" onClick={onClose}>Cancel</Button>
          <Button type="submit">Schedule</Button>
        </div>
      </form>
    </Modal>
  );
};


// --- --------------------------------------------------- ---
// --- END OF COMPANY DASHBOARD COMPONENTS --------------- ---
// --- --------------------------------------------------- ---


/**
 * Main App Component (Root)
 */
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [companyPage, setCompanyPage] = useState("dashboard"); // State for company nav
  const [selectedOpportunityId, setSelectedOpportunityId] = useState<number | null>(null);
  const [selectedPracticeId, setSelectedPracticeId] = useState<number | null>(null);
  const [opportunityFilter, setOpportunityFilter] = useState<string | null>(null);
  
  // Lifted State
  const [opportunities, setOpportunities] = useState(mockOpportunitiesList);
  const [applicants, setApplicants] = useState(mockApplicantsList);
  const [studentProfile, setStudentProfile] = useState(defaultStudentProfile); // NEW

  // Auth State
  const [userRole, setUserRole] = useState<"none" | "student" | "company">("none");
  const [modalView, setModalView] = useState<"login" | "signup" | null>(null);
  
  // Company Action Modals/Pages State
  const [applicantsModalOppId, setApplicantsModalOppId] = useState<number | null>(null);
  const [viewingApplicantId, setViewingApplicantId] = useState<number | null>(null);
  const [assigningTaskApplicantId, setAssigningTaskApplicantId] = useState<number | null>(null);
  const [schedulingInterviewApplicantId, setSchedulingInterviewApplicantId] = useState<number | null>(null);


  // --- Auth Handlers ---
  const handleLogin = (role: "student" | "company") => {
    setUserRole(role);
    if (role === "student") {
      setCurrentPage("home");
    } else {
      setCompanyPage("dashboard"); 
    }
    setModalView(null);
  };

  const handleSignUp = (role: "student" | "company") => {
    setUserRole(role);
    if (role === "student") {
      setCurrentPage("home");
    } else {
      setCompanyPage("dashboard");
    }
    setModalView(null);
  };

  const handleLogout = () => {
    setUserRole("none");
    setCurrentPage("home"); 
  };

  // --- Student Navigation Handler ---
  const handleNavClick = (page: string, filter?: string) => {
    setCurrentPage(page);
    if (page === "opportunities") {
      setOpportunityFilter(filter || ""); 
    } else {
      setOpportunityFilter(null);
    }
    setSelectedOpportunityId(null);
    setSelectedPracticeId(null);
  };
  
  // --- Company Navigation Handler ---
  const handleCompanyNavClick = (page: string) => {
    setCompanyPage(page);
    setViewingApplicantId(null); 
  };
  
  // --- Profile Save Handler ---
  const handleSaveProfile = (newProfile: StudentProfile) => {
    setStudentProfile(newProfile);
  };

  // --- View Details Handlers ---
  const handleViewDetails = (id: number) => {
    setSelectedOpportunityId(id);
    setCurrentPage("opportunityDetail");
  };

  const handleBackToOpportunities = () => {
    setSelectedOpportunityId(null);
    setCurrentPage("opportunities");
  };

  // --- Practice Handlers ---
  const handleStartPractice = (id: number) => {
    setSelectedPracticeId(id);
    setCurrentPage("practiceDetail");
  };

  const handleQuitPractice = () => {
    setSelectedPracticeId(null);
    setCurrentPage("practice");
  };

  // --- Company Action Handlers ---
  const handleCreatePosting = (newOppData: Omit<Opportunity, 'id'>) => {
    const newOpp = {
      ...newOppData,
      id: opportunities.length + 100, 
    };
    setOpportunities(prevOps => [newOpp, ...prevOps]);
    setCompanyPage("postings"); 
  };
  
  // --- Applicant Management Handlers (NEW) ---
  
  const handleViewApplicants = (oppId: number) => {
    setApplicantsModalOppId(oppId);
  };
  
  const handleViewApplicantProfile = (applicantId: number) => {
    setViewingApplicantId(applicantId);
    setApplicantsModalOppId(null); 
  };
  
  const handleBackToApplicants = () => {
    const applicant = applicants.find(a => a.id === viewingApplicantId);
    setViewingApplicantId(null);
    if (applicant) {
      setApplicantsModalOppId(applicant.oppId); // Re-open the modal
    }
  };
  
  const handleOpenAssignTask = (applicantId: number) => {
    setAssigningTaskApplicantId(applicantId);
  };
  
  const handleSubmitTask = (applicantId: number, task: string) => {
    setApplicants(prev => 
      prev.map(app => 
        app.id === applicantId ? { ...app, task: task } : app
      )
    );
    // Also update profile if viewing
    if(viewingApplicantId === applicantId) {
      setViewingApplicantId(null); // Force re-render of profile
      setViewingApplicantId(applicantId);
    }
    setAssigningTaskApplicantId(null);
  };
  
  const handleOpenScheduleInterview = (applicantId: number) => {
    setSchedulingInterviewApplicantId(applicantId);
  };
  
  const handleSubmitInterview = (applicantId: number, dateTime: string) => {
    setApplicants(prev => 
      prev.map(app => 
        app.id === applicantId ? { ...app, interviewTime: dateTime } : app
      )
    );
    // Also update profile if viewing
    if(viewingApplicantId === applicantId) {
      setViewingApplicantId(null); // Force re-render of profile
      setViewingApplicantId(applicantId);
    }
    setSchedulingInterviewApplicantId(null);
  };

  const closeModals = () => {
    setModalView(null);
    setApplicantsModalOppId(null);
    setAssigningTaskApplicantId(null);
    setSchedulingInterviewApplicantId(null);
  };


  // --- ------------------- ---
  // --- MAIN RENDER LOGIC ---
  // --- ------------------- ---

  // 1. Check if user is a company, render company dashboard
  if (userRole === "company") {
    let companyContent;
    
    if (viewingApplicantId) {
      const applicant = applicants.find(a => a.id === viewingApplicantId);
      if (applicant) {
        companyContent = (
          <ApplicantProfilePage
            applicant={applicant}
            onBack={handleBackToApplicants}
            onAssignTask={handleOpenAssignTask}
            onScheduleInterview={handleOpenScheduleInterview}
          />
        );
      } else {
        setViewingApplicantId(null);
        companyContent = <CompanyDashboardHome />;
      }
    } else {
      switch (companyPage) {
        case "dashboard":
          companyContent = <CompanyDashboardHome />;
          break;
        case "postings":
          companyContent = (
            <CompanyManagePostings
              opportunities={opportunities}
              onViewApplicants={handleViewApplicants}
              onNavClick={handleCompanyNavClick}
            />
          );
          break;
        case "create":
          companyContent = (
            <CompanyCreatePosting
              onCreatePosting={handleCreatePosting}
              onNavClick={handleCompanyNavClick}
            />
          );
          break;
        default:
          companyContent = <CompanyDashboardHome />;
      }
    }

    return (
      <>
        <CompanyLayout
          activePage={companyPage}
          onNavClick={handleCompanyNavClick}
          onLogout={handleLogout}
        >
          {companyContent}
        </CompanyLayout>

        {/* Company Modals */}
        {applicantsModalOppId && (
          <ViewApplicantsModal
            opp={opportunities.find(op => op.id === applicantsModalOppId)!}
            applicants={applicants}
            onClose={closeModals}
            onViewProfile={handleViewApplicantProfile}
            onAssignTask={handleOpenAssignTask}
            onScheduleInterview={handleOpenScheduleInterview}
          />
        )}
        
        {assigningTaskApplicantId && (
          <AssignTaskModal
            applicant={applicants.find(a => a.id === assigningTaskApplicantId)!}
            onClose={closeModals}
            onSubmit={handleSubmitTask}
          />
        )}
        
        {schedulingInterviewApplicantId && (
          <ScheduleInterviewModal
            applicant={applicants.find(a => a.id === schedulingInterviewApplicantId)!}
            onClose={closeModals}
            onSubmit={handleSubmitInterview}
          />
        )}
      </>
    );
  }

  // 2. User is a student or guest, render student-facing site
  let pageToRender;
  switch (currentPage) {
    case "home":
      pageToRender = (
        <HomePage
          onNavClick={handleNavClick}
          onViewDetails={handleViewDetails}
          onStartPractice={handleStartPractice}
        />
      );
      break;
    case "opportunities":
      pageToRender = (
        <OpportunitiesPage
          opportunities={opportunities} 
          onViewDetails={handleViewDetails}
          initialFilter={opportunityFilter}
        />
      );
      break;
    case "opportunityDetail":
      const selectedOp = opportunities.find(
        (op) => op.id === selectedOpportunityId
      );
      if (selectedOp) {
        pageToRender = (
          <OpportunityDetailPage op={selectedOp} onBack={handleBackToOpportunities} />
        );
      } else {
        pageToRender = (
          <OpportunitiesPage
            opportunities={opportunities} 
            onViewDetails={handleViewDetails}
            initialFilter={opportunityFilter}
          />
        );
      }
      break;
    case "practice":
      pageToRender = <PracticePage onStartPractice={handleStartPractice} />;
      break;
    case "practiceDetail":
      const selectedPractice = mockPracticeItems.find(
        item => item.id === selectedPracticeId
      );
      if (selectedPractice) {
        pageToRender = (
          <PracticeDetailPage item={selectedPractice} onQuit={handleQuitPractice} />
        );
      } else {
        pageToRender = <PracticePage onStartPractice={handleStartPractice} />;
      }
      break;
    case "profile":
      pageToRender = userRole === "student" ? (
        <ProfilePage
          profile={studentProfile}
          onLogout={handleLogout}
          onSaveProfile={handleSaveProfile}
        />
      ) : (
        <HomePage
          onNavClick={handleNavClick}
          onViewDetails={handleViewDetails}
          onStartPractice={handleStartPractice}
        />
      );
      break;
    default:
      pageToRender = (
        <HomePage
          onNavClick={handleNavClick}
          onViewDetails={handleViewDetails}
          onStartPractice={handleStartPractice}
        />
      );
  }

  return (
    <>
      <Layout
        onNavClick={handleNavClick}
        userRole={userRole}
        onLogout={handleLogout}
        setModalView={(view) => setModalView(view)}
      >
        {pageToRender}
      </Layout>

      {/* Render Auth Modals at the top level */}
      {modalView === "login" && (
        <Modal title="Login" onClose={closeModals}>
          <LoginModal
            onLogin={handleLogin} 
            onSwitchToSignUp={() => setModalView("signup")}
          />
        </Modal>
      )}
      {modalView === "signup" && (
        <Modal title="Sign Up" onClose={closeModals}>
          <SignUpModal
            onSignUp={handleSignUp} 
            onSwitchToLogin={() => setModalView("login")}
          />
        </Modal>
      )}
    </>
  );
}