"use client";

import React, { useState } from 'react';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import CompanyDashboard from './pages/CompanyDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Mock data (same as before)
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
  // ... other mock data
];

const mockPracticeItems = [
  { id: 1, title: "Data Structures Basics", category: "Coding", image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Data+Structures" },
  // ... other mock data
];

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

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [userRole, setUserRole] = useState<"none" | "student" | "company">("none");
  const [modalView, setModalView] = useState<"login" | "signup" | null>(null);
  const [studentProfile, setStudentProfile] = useState(defaultStudentProfile);

  const handleNavClick = (page: string, filter?: string) => {
    setCurrentPage(page);
  };

  const handleLogin = (role: "student" | "company") => {
    setUserRole(role);
    setModalView(null);
  };

  const handleSignUp = (role: "student" | "company") => {
    setUserRole(role);
    setModalView(null);
  };

  const handleLogout = () => {
    setUserRole("none");
    setCurrentPage("home");
  };

  const handleSaveProfile = (newProfile: typeof defaultStudentProfile) => {
    setStudentProfile(newProfile);
  };

  const closeModals = () => {
    setModalView(null);
  };

  return (
    <div className="dark flex min-h-screen flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar
        onNavClick={handleNavClick}
        userRole={userRole}
        onLogout={handleLogout}
        setModalView={setModalView}
      />
      
      <main className="flex-grow">
        {userRole === "company" ? (
          <CompanyDashboard />
        ) : currentPage === "home" ? (
          <Home 
            onNavClick={handleNavClick}
            opportunities={mockOpportunitiesList}
            practiceItems={mockPracticeItems}
          />
        ) : (
          <StudentDashboard
            currentPage={currentPage}
            studentProfile={studentProfile}
            onSaveProfile={handleSaveProfile}
            onLogout={handleLogout}
            opportunities={mockOpportunitiesList}
            practiceItems={mockPracticeItems}
            onNavClick={handleNavClick}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}