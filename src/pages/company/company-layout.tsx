// src/pages/company/company-layout.tsx

import React from 'react';
import { Button } from '../../components/ui';
import { BriefcaseIcon, LayoutDashboardIcon, PlusCircleIcon, LogOutIcon, MenuIcon } from '../../components/icons';

/**
 * Company Layout
 */
export const CompanyLayout = ({
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

      {/* Main Content Area */}
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