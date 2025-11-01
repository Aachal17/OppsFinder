// src/components/opportunity-card.tsx

import React from 'react';
import { Opportunity } from '../data/mock-data';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui';
import { BriefcaseIcon, LaptopIcon, TrophyIcon, SparklesIcon, MapPinIcon, DollarSignIcon } from './icons';

/**
 * Opportunity Card Component (Added hover effects)
 */
export const OpportunityCard = ({
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