import React, { useState } from 'react';
import { Button } from './ui/Button';
interface NavbarProps {
  onNavClick: (page: string, filter?: string) => void;
  userRole: "none" | "student" | "company";
  onLogout: () => void;
  setModalView: (view: "login" | "signup") => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onNavClick,
  userRole,
  onLogout,
  setModalView
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
          <span className="text-indigo-500">✨</span>
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
                👤 My Profile
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
          ☰
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
                  👤 My Profile
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

export default Navbar;