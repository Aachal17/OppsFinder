import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';

interface StudentDashboardProps {
  currentPage: string;
  studentProfile: any;
  onSaveProfile: (profile: any) => void;
  onLogout: () => void;
  opportunities: any[];
  practiceItems: any[];
  onNavClick: (page: string, filter?: string) => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({
  currentPage,
  studentProfile,
  onSaveProfile,
  onLogout,
  opportunities,
  practiceItems,
  onNavClick
}) => {
  if (currentPage === "profile") {
    return (
      <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <img
                src={studentProfile.avatar}
                alt="User"
                className="h-28 w-28 rounded-full border-4 border-white shadow-lg"
              />
              <div className="mt-4 sm:mt-0">
                <CardTitle className="text-3xl font-bold text-white">{studentProfile.name}</CardTitle>
                <CardDescription className="text-lg text-indigo-100">{studentProfile.email}</CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 lg:p-8 space-y-10">
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">My Skills</h4>
              <div className="flex flex-wrap gap-3">
                {studentProfile.skills.map((skill: string) => (
                  <span key={skill} className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Education</h4>
              <div className="space-y-6">
                {studentProfile.education.map((edu: any) => (
                  <div key={edu.id} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-gray-800">
                      <span className="text-indigo-600 dark:text-indigo-400">🎓</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold dark:text-gray-100">{edu.degree}</h5>
                      <p className="text-gray-700 dark:text-gray-300">{edu.school}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Settings</h4>
              <div className="space-x-2">
                <Button variant="destructive" onClick={onLogout}>
                  Logout
                </Button>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Add other student pages here (opportunities, practice, etc.)
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Student Dashboard</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">Welcome to your student dashboard.</p>
    </div>
  );
};

export default StudentDashboard;