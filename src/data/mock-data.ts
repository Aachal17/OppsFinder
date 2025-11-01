// src/data/mock-data.ts

// --- Mock Data ---
export const mockOpportunitiesList = [
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

export type Opportunity = (typeof mockOpportunitiesList)[0];
export const uniqueLocations = ["All", ...new Set(mockOpportunitiesList.map(op => op.location))];

export const mockPracticeItems = [
  { id: 1, title: "Data Structures Basics", category: "Coding", image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Data+Structures" },
  { id: 2, "title": "Advanced JavaScript (ES6+)", category: "Coding", image: "https://placehold.co/600x400/FCD34D/FFFFFF?text=JavaScript" },
  { id: 3, "title": "Marketing 101", category: "Marketing", image: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Marketing" },
  { id: 4, "title": "Case Study Fundamentals", category: "Consulting", image: "https://placehold.co/600x400/14B8A6/FFFFFF?text=Case+Study" }
];

export type PracticeItem = (typeof mockPracticeItems)[0];

export const mockQuizQuestions = [
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

export const mockApplicantsList = [
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

export type Applicant = (typeof mockApplicantsList)[0];

// --- NEW STUDENT PROFILE MOCK DATA ---
export const defaultStudentProfile = {
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

export type StudentProfile = typeof defaultStudentProfile;
export type EducationEntry = typeof defaultStudentProfile.education[0];
export type ExperienceEntry = typeof defaultStudentProfile.experience[0];
export type ProjectEntry = typeof defaultStudentProfile.projects[0];
export type AwardEntry = typeof defaultStudentProfile.awards[0];