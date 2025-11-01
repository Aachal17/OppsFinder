import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardTitle, CardFooter, CardHeader, CardDescription } from '../components/ui/Card';
const CompanyDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Company Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <span className="text-indigo-600 dark:text-indigo-400">🏢</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Company Dashboard</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Welcome, Tech Corp</p>
              </div>
            </div>
            <Button>
              Create New Posting
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Postings</CardTitle>
              <span className="text-indigo-500">📋</span>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">3</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">1 Hackathon, 2 Jobs</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">New Applicants</CardTitle>
              <span className="text-green-500">👥</span>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">5</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">+3 this week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Interviews</CardTitle>
              <span className="text-blue-500">🎯</span>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">2</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Scheduled this week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Hired</CardTitle>
              <span className="text-green-500">✅</span>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gray-900 dark:text-gray-50">1</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="dark:text-gray-100">Recent Applicants</CardTitle>
              <CardDescription>Latest applications for your opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://placehold.co/40x40/6366F1/FFFFFF?text=U${item}`}
                        alt="Applicant"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">Applicant {item}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Applied 2 days ago</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="dark:text-gray-100">Your Opportunities</CardTitle>
              <CardDescription>Active postings and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Frontend Developer", applicants: 12, status: "Active" },
                  { title: "AI Hackathon", applicants: 25, status: "Active" },
                  { title: "Marketing Intern", applicants: 8, status: "Closing soon" }
                ].map((opp, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">{opp.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{opp.applicants} applicants</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      opp.status === "Active" 
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}>
                      {opp.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CompanyDashboard;