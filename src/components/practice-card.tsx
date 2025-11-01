// src/components/practice-card.tsx

import React from 'react';
import { PracticeItem } from '../data/mock-data';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardFooter } from './ui';

/**
 * Practice Card Component (Added hover effects)
 */
export const PracticeCard = ({
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
      [cite_start]<CardHeader> // [cite: 128]
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
    [cite_start]</Card> // [cite: 129]
  );
};