import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 flex items-center gap-2 text-lg font-bold md:mb-0">
            <span className="text-indigo-500">✨</span>
            <span className="text-gray-900 dark:text-gray-50">Opportunity</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Opportunity Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;