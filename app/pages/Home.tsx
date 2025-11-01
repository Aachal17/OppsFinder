import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';

interface HomeProps {
  onNavClick: (page: string, filter?: string) => void;
  opportunities: any[];
  practiceItems: any[];
}

const Home: React.FC<HomeProps> = ({ onNavClick, opportunities, practiceItems }) => {
  return (
    <>
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
            {opportunities.slice(0, 3).map((op) => (
              <OpportunityCard
                key={op.id}
                op={op}
                onViewDetails={() => onNavClick("opportunityDetail", op.id.toString())}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              variant="link"
              onClick={() => onNavClick("opportunities")}
            >
              View All Opportunities
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
            {practiceItems.slice(0, 3).map((item) => (
              <PracticeCard
                key={item.id}
                item={item}
                onStartPractice={() => onNavClick("practiceDetail", item.id.toString())}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              variant="link"
              onClick={() => onNavClick("practice")}
            >
              View All Practice Modules
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const OpportunityCard = ({ op, onViewDetails }: { op: any; onViewDetails: () => void }) => {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:hover:shadow-indigo-500/10">
      <img
        src={op.image}
        alt={op.title}
        className="h-48 w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-indigo-500 dark:text-gray-100">{op.title}</CardTitle>
        <CardDescription>{op.organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span className="ml-2">{op.type}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span className="ml-2">{op.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span className="ml-2">{op.prize}</span>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 dark:bg-gray-800/50">
        <Button
          variant="outline"
          className="w-full"
          onClick={onViewDetails}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

const PracticeCard = ({ item, onStartPractice }: { item: any; onStartPractice: () => void }) => {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:hover:shadow-indigo-500/10">
      <img
        src={item.image}
        alt={item.title}
        className="h-48 w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="dark:text-gray-100">{item.title}</CardTitle>
        <CardDescription>{item.category}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto bg-gray-50 p-4 dark:bg-gray-800/50">
        <Button
          className="w-full"
          onClick={onStartPractice}
        >
          Start Practice
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Home;