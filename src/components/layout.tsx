// src/components/layout.tsx

import React, { useState } from 'react';
import { Button } from './ui'; 
import { SparklesIcon, MenuIcon, UserIcon, ChevronRightIcon, LogOutIcon } from './icons'; 

/**
 * Header Component (Stylish Logo)
 */
export const Header = ({
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

      {/* Mobile Menu (Dropdown)*/}
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
export const Footer = () => {
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
 * Layout Component (Simulating app/layout.tsx)
 */
export const Layout = ({
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