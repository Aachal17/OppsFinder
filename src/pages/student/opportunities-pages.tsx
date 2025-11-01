// src/pages/student/opportunities-pages.tsx

import React, { useState } from 'react';
import { Opportunity, uniqueLocations } from '../../data/mock-data';
import { OpportunityCard } from '../../components/opportunity-card';
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label, Select } from '../../components/ui';
import { ChevronLeftIcon, SearchIcon, CalendarIcon, MapPinIcon, DollarSignIcon } from '../../components/icons';

/**
 * Opportunities Page Component (NEW: Location Filter)
 */
export const OpportunitiesPage = ({
  opportunities,
  onViewDetails,
  initialFilter,
}: {
  opportunities: Opportunity[];
  onViewDetails: (id: number) => void;
  initialFilter: string | null;
}) => {
  const [searchTerm, setSearchTerm] = useState(initialFilter || "");
  const [locationFilter, setLocationFilter] = useState("All");

  const filteredOpportunities = opportunities.filter((op) => {
    const term = searchTerm.toLowerCase();
    
    const matchesSearch = term === "" ||
      op.title.toLowerCase().includes(term) ||
      op.organization.toLowerCase().includes(term) ||
      op.type.toLowerCase() === term ||
      op.tags.some(tag => tag.toLowerCase().includes(term));
      
    const matchesLocation = locationFilter === "All" || op.location === locationFilter;

    return matchesSearch && matchesLocation;
  });

  const handleFilterClick = (filter: string) => {
    setSearchTerm(filter);
  };
  
  const filters = ["Hackathon", "Competition", "Job", "Internship"];

  return (
    <main className="flex-grow dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-gray-100">
          Explore <span className="text-indigo-500 dark:text-indigo-400">Opportunities</span>
        </h1>
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search by title, organization, or tag..."
              className="w-full !pl-10 !h-12 !text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location-filter">Location</Label>
              <Select id="location-filter" value={locationFilter} onChange={e => setLocationFilter(e.target.value)}>
                {uniqueLocations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Category</Label>
               <div className="flex flex-wrap gap-2">
                <Button 
                  variant={searchTerm === "" ? "default" : "secondary"} 
                  size="sm" 
                  onClick={() => handleFilterClick("")}
                  className={searchTerm === "" ? "bg-indigo-600 text-white" : "dark:bg-gray-700 dark:text-gray-200"}
                >
                  All
                </Button>
                {filters.map(filter => (
                  <Button 
                    key={filter} 
                    variant={searchTerm === filter ? "default" : "secondary"} 
                    size="sm" 
                    onClick={() => handleFilterClick(filter)}
                    className={searchTerm === filter ? "bg-indigo-600 text-white" : "dark:bg-gray-700 dark:text-gray-200"}
                  >
                    {filter}s
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((op) => (
              <OpportunityCard
                key={op.id}
                op={op}
                onViewDetails={onViewDetails}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-gray-500 dark:text-gray-400 py-10">
              No opportunities found matching your search.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

/**
 * Opportunity Detail Page (Improved Tabs & CTA)
 */
export const OpportunityDetailPage = ({
  op,
  onBack,
}: {
  op: Opportunity;
  onBack: () => void;
}) => {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <main className="flex-grow bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4 text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400"
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          Back to Opportunities
        </Button>
        <div className="lg:flex lg:gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Card className="overflow-hidden shadow-xl">
              <img
                src={op.image}
                alt={op.title}
                className="h-72 w-full object-cover"
                onError={(e) => (e.currentTarget.src = "https://placehold.co/600x400/gray/white?text=Image+Error")}
              />
              <CardHeader>
                <CardTitle className="text-3xl font-bold dark:text-gray-100">{op.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-300">{op.organization}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Tabs */}
                <div className="border-b border-gray-200 dark:border-gray-800">
                  <nav className="-mb-px flex space-x-6">
                    <Button
                      variant="ghost"
                      onClick={() => setActiveTab("overview")}
                      className={`py-4 px-1 rounded-none ${activeTab === "overview" ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"}`}
                    >
                      Overview
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => setActiveTab("prizes")}
                      className={`py-4 px-1 rounded-none ${activeTab === "prizes" ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"}`}
                    >
                      Prizes
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => setActiveTab("rounds")}
                      className={`py-4 px-1 rounded-none ${activeTab === "rounds" ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"}`}
                    >
                      Rounds
                    </Button>
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="prose prose-lg dark:prose-invert mt-6 max-w-full text-gray-700 dark:text-gray-300">
                  {activeTab === "overview" && (
                    <p>{op.details.overview}</p>
                  )}
                  {activeTab === "prizes" && (
                    <ul className="list-disc space-y-2 pl-5">
                      {op.details.prizes.map((prize, i) => (
                        <li key={i}>{prize}</li>
                      ))}
                    </ul>
                  )}
                  {activeTab === "rounds" && (
                    <dl>
                      {op.details.rounds.map((round, i) => (
                        <div key={i} className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                          <dt className="font-semibold text-gray-900 dark:text-gray-100">{round.name}</dt>
                          <dd className="text-gray-600 dark:text-gray-300">{round.description}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="mt-8 w-full lg:mt-0 lg:w-96">
            <Card className="sticky top-24 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl dark:text-gray-100">Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between text-sm">
                  <span className="flex items-center font-medium text-gray-700 dark:text-gray-300">
                    <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                    Deadline:
                  </span>
                  <span className="font-semibold text-red-500">{op.deadline}</span>
                </div>
                <div className="flex items-start justify-between text-sm">
                  <span className="flex items-center font-medium text-gray-700 dark:text-gray-300">
                    <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                    Location:
                  </span>
                  <span className="font-medium text-gray-600 dark:text-gray-200">{op.location}</span>
                </div>
                <div className="flex items-start justify-between text-sm">
                  <span className="flex items-center font-medium text-gray-700 dark:text-gray-300">
                    <DollarSignIcon className="mr-2 h-4 w-4 text-gray-500" />
                    Prize/Stipend:
                  </span>
                  <span className="font-bold text-green-600">{op.prize}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                  <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {op.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};