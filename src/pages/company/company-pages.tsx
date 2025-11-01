// src/pages/company/company-pages.tsx

import React, { useState } from 'react';
import { Opportunity, mockApplicantsList, Applicant, uniqueLocations } from '../../data/mock-data';
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle, Input, Label, Select, Textarea } from '../../components/ui';
import { BriefcaseIcon, LayoutDashboardIcon, PlusCircleIcon, UsersIcon, EditIcon, PlusIcon } from '../../components/icons';

/**
 * Company Dashboard Home Page (Improved Stats)
 */
export const CompanyDashboardHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Dashboard</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">Welcome to your company dashboard.</p>
      
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Postings</CardTitle>
            <BriefcaseIcon className="h-5 w-5 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">3</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">1 Hackathon, 2 Jobs</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">New Applicants</CardTitle>
            <UsersIcon className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">5</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">+3 this week</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

/**
 * Company Manage Postings Page (Improved Table)
 */
export const CompanyManagePostings = ({
  opportunities,
  onViewApplicants,
  onNavClick,
}: {
  opportunities: Opportunity[];
  onViewApplicants: (oppId: number) => void;
  onNavClick: (page: string) => void;
}) => {
  const myPostings = opportunities.filter(
    op => op.organization.includes("Tech Corp") || op.organization === "Microsoft"
  );
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">My Postings</h1>
        <Button onClick={() => onNavClick("create")}>
          <PlusCircleIcon className="mr-2 h-4 w-4" />
          Create New
        </Button>
      </div>

      <div className="mt-8 flow-w-full">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Applicants</th>
                    <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
                  {myPostings.map((op) => (
                    <tr key={op.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-50">{op.title}</div>
                        <div className="text-sm text-red-500">{op.deadline}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                          {op.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {mockApplicantsList.filter(a => a.oppId === op.id).length}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                        <Button variant="outline" size="sm" onClick={() => onViewApplicants(op.id)}>
                          View Applicants
                        </Button>
                        <Button variant="ghost" size="icon">
                          <EditIcon className="h-4 w-4 text-gray-500" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

/**
 * Company Create Posting Page
 */
export const CompanyCreatePosting = ({
  onCreatePosting,
  onNavClick,
}: {
  onCreatePosting: (newOpp: Omit<Opportunity, 'id'>) => void;
  onNavClick: (page: string) => void;
}) => {
  const [type, setType] = useState<Opportunity['type']>("Job");
  // Shared fields
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Online");
  const [deadline, setDeadline] = useState("");
  const [overview, setOverview] = useState("");
  const [tags, setTags] = useState("");
  const [rounds, setRounds] = useState("");
  // Conditional fields
  const [prize, setPrize] = useState(""); // For Hackathon/Competition
  const [salary, setSalary] = useState("");
  // For Job/Internship
  const [techStack, setTechStack] = useState(""); // For Hackathon
  const [experienceLevel, setExperienceLevel] = useState("Entry Level");
  // For Job

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isJob = type === 'Job' || type === 'Internship';
    const newPosting: Omit<Opportunity, 'id'> = {
      title,
      type,
      prize: isJob ? salary : prize,
      location,
      deadline,
      organization: "Tech Corp (Demo)", // Hardcoded for demo
      tags: tags.split(',').map(t => t.trim()),
      image: `https://placehold.co/600x400/6366F1/FFFFFF?text=${encodeURIComponent(title)}`,
      details: {
        overview,
        prizes: isJob ? [salary, "Health Benefits", "Stock Options"] : [prize, "Certificates", "Swag"], // Simplified
        rounds: rounds.split('\n').map(r => ({ name: r, description: "Details to be announced." })), // Simplified
      },
    };
    onCreatePosting(newPosting);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Create New Posting</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">Fill out the form to post a new opportunity.</p>

      <form onSubmit={handleSubmit}>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="dark:text-gray-100">Core Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="type">Opportunity Type</Label>
                <Select id="type" value={type} onChange={e => setType(e.target.value as Opportunity['type'])}>
                  <option value="Job">Job</option>
                  <option value="Internship">Internship</option>
                  <option value="Hackathon">Hackathon</option>
                  <option value="Competition">Competition</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" value={title} onChange={e => setTitle(e.target.value)} required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select id="location" value={location} onChange={e => setLocation(e.target.value)}>
                   {uniqueLocations.filter(l => l !== 'All').map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                   ))}
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Application Deadline</Label>
                <Input id="deadline" type="date" value={deadline} onChange={e => setDeadline(e.target.value)} required />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Conditional Fields */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="dark:text-gray-100">{type} Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            { (type === 'Job' || type === 'Internship') && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="salary">{type === 'Job' ? 'Salary Range (e.g., ₹18-24 LPA)' : 'Stipend (e.g., ₹25,000/mo)'}</Label>
                  <Input id="salary" value={salary} onChange={e => setSalary(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experienceLevel">Experience Level</Label>
                  <Select id="experienceLevel" value={experienceLevel} onChange={e => setExperienceLevel(e.target.value)}>
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                  </Select>
                </div>
              </>
            )}
          
            { (type === 'Hackathon' || type === 'Competition') && (
              <div className="space-y-2">
                <Label htmlFor="prize">Prize Pool (e.g., ₹1,00,000)</Label>
                <Input id="prize" value={prize} onChange={e => setPrize(e.target.value)} required />
              </div>
            )}
            
            { type === 'Hackathon' && (
              <div className="space-y-2">
                <Label htmlFor="techStack">Tech Stack (e.g., React, Node.js, AI)</Label>
                <Input id="techStack" value={techStack} onChange={e => setTechStack(e.target.value)} />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="overview">Overview / Description</Label>
              <Textarea id="overview" value={overview} onChange={e => setOverview(e.target.value)} rows={5} required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="rounds">Rounds / Stages (one per line)</Label>
              <Textarea id="rounds" value={rounds} onChange={e => setRounds(e.target.value)} rows={3} placeholder="e.g., Round 1: Online Quiz..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input id="tags" value={tags} onChange={e => setTags(e.target.value)} placeholder="e.g. React, AI, Marketing" />
            </div>
          </CardContent>
          <CardFooter className="justify-end space-x-2 p-6">
            <Button type="button" variant="ghost" onClick={() => onNavClick("postings")}>Cancel</Button>
            <Button type="submit" size="lg">Create Posting</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};