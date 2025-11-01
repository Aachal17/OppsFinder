// src/pages/student/home-page.tsx

import React from 'react';
import { Button } from '../../components/ui';
import { OpportunityCard } from '../../components/opportunity-card';
import { PracticeCard } from '../../components/practice-card';
import { ChevronRightIcon, SparklesIcon } from '../../components/icons';
import { mockOpportunitiesList, mockPracticeItems } from '../../data/mock-data';

/**
 * Home Page Component (Gradient hero, accent text)
 */
export const HomePage = ({
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