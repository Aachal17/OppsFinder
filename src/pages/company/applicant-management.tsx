// src/pages/company/applicant-management.tsx

import React, { useState } from 'react';
import { Opportunity, Applicant } from '../../data/mock-data';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label, Modal, Textarea } from '../../components/ui';
import { DownloadIcon, ClipboardCheckIcon, CalendarPlusIcon, ChevronLeftIcon } from '../../components/icons';

// --- View Applicants Modal (UPDATED with new features) ---
export const ViewApplicantsModal = ({
  opp,
  applicants,
  onClose,
  onViewProfile,
  onAssignTask,
  onScheduleInterview,
}: {
  opp: Opportunity;
  applicants: Applicant[];
  onClose: () => void;
  onViewProfile: (applicantId: number) => void;
  onAssignTask: (applicantId: number) => void;
  onScheduleInterview: (applicantId: number) => void;
}) => {
  const applicantsForOpp = applicants.filter(a => a.oppId === opp.id);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hired": return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200";
      case "Reviewed": return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200";
      case "Pending": default: return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200";
    }
  };
  return (
    <Modal title={`Applicants for ${opp.title}`} onClose={onClose} size="xl">
      <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
        {applicantsForOpp.length > 0 ? applicantsForOpp.map(app => (
          <div key={app.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <img src={app.avatar} alt={app.name} className="h-10 w-10 rounded-full"/>
                <div>
                  <Button variant="link" onClick={() => onViewProfile(app.id)} className="p-0 h-auto text-base font-medium text-gray-900 dark:text-gray-100">
                    {app.name}
                  </Button>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Applied: {app.applied}</p>
                </div>
              </div>
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusColor(app.status)} mt-2 sm:mt-0`}>
                {app.status}
              </span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" as="a" href={app.resumeUrl} target="_blank">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Resume
              </Button>
              <Button variant="outline" size="sm" onClick={() => onAssignTask(app.id)} disabled={!!app.task}>
                <ClipboardCheckIcon className="mr-2 h-4 w-4" />
                {app.task ? "Task Assigned" : "Assign Task"}
              </Button>
              <Button variant="outline" size="sm" onClick={() => onScheduleInterview(app.id)} disabled={!!app.interviewTime}>
                <CalendarPlusIcon className="mr-2 h-4 w-4" />
                {app.interviewTime ? "Scheduled" : "Schedule"}
              </Button>
            </div>
          </div>
        )) : (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">No applicants yet.</p>
        )}
      </div>
    </Modal>
  );
};

// --- Applicant Profile Page ---
export const ApplicantProfilePage = ({
  applicant,
  onBack,
  onAssignTask,
  onScheduleInterview,
}: {
  applicant: Applicant;
  onBack: () => void;
  onAssignTask: (applicantId: number) => void;
  onScheduleInterview: (applicantId: number) => void;
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Hired": return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200";
      case "Reviewed": return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200";
      case "Pending": default: return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200";
    }
  };
  return (
    <div className="text-gray-900 dark:text-gray-100">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-4 text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400"
      >
        <ChevronLeftIcon className="mr-2 h-4 w-4" />
        Back to Applicants
      </Button>

      <Card className="shadow-xl">
        <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-xl p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <img
              src={applicant.avatar}
              alt={applicant.name}
              className="h-28 w-28 rounded-full border-4 border-white shadow-lg"
            />
            <div className="mt-4 sm:mt-0">
              <CardTitle className="text-3xl font-bold text-white">{applicant.name}</CardTitle>
              <CardDescription className="text-lg text-indigo-100">{applicant.email}</CardDescription>
              <span className={`mt-2 inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusColor(applicant.status)}`}>
                {applicant.status}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - Actions */}
            <div className="md:col-span-1 space-y-4">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Actions</h4>
              <Button variant="outline" className="w-full" as="a" href={applicant.resumeUrl} target="_blank">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" className="w-full" onClick={() => onAssignTask(applicant.id)}>
                <ClipboardCheckIcon className="mr-2 h-4 w-4" />
                {applicant.task ? "View/Edit Task" : "Assign Task"}
              </Button>
              <Button variant="outline" className="w-full" onClick={() => onScheduleInterview(applicant.id)}>
                <CalendarPlusIcon className="mr-2 h-4 w-4" />
                {applicant.interviewTime ? "Reschedule" : "Schedule Interview"}
              </Button>
            </div>
            
            {/* Right Column - Details */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {applicant.skills.map(skill => (
                    <span key={skill} className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Assigned Task</h4>
                <Card className="bg-gray-50 dark:bg-gray-800">
                  <CardContent className="p-4 pt-6">
                    {applicant.task ? (
                      <p className="text-gray-700 dark:text-gray-300">{applicant.task}</p>
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400">No task assigned yet.</p>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Interview</h4>
                <Card className="bg-gray-50 dark:bg-gray-800">
                  <CardContent className="p-4 pt-6">
                    {applicant.interviewTime ? (
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        Scheduled for: {new Date(applicant.interviewTime).toLocaleString()}
                      </p>
                    ) : (
                      <p className="text-gray-500 dark:text-gray-400">No interview scheduled yet.</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


// --- NEW Modals for Company Actions ---
export const AssignTaskModal = ({
  applicant,
  onClose,
  onSubmit,
}: {
  applicant: Applicant;
  onClose: () => void;
  onSubmit: (applicantId: number, task: string) => void;
}) => {
  const [task, setTask] = useState(applicant.task || "");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(applicant.id, task);
  };
  return (
    <Modal title={`Assign Task to ${applicant.name}`} onClose={onClose} size="lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="task">Task Description</Label>
          <Textarea 
            id="task" 
            value={task} 
            onChange={(e) => setTask(e.target.value)}
            rows={5}
            placeholder="e.g., 'Complete the linked coding challenge within 48 hours...'"
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="ghost" type="button" onClick={onClose}>Cancel</Button>
          <Button type="submit">Assign Task</Button>
        </div>
      </form>
    </Modal>
  );
};

export const ScheduleInterviewModal = ({
  applicant,
  onClose,
  onSubmit,
}: {
  applicant: Applicant;
  onClose: () => void;
  onSubmit: (applicantId: number, dateTime: string) => void;
}) => {
  const [dateTime, setDateTime] = useState(applicant.interviewTime ? applicant.interviewTime.slice(0, 16) : "");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(applicant.id, dateTime);
  };
  return (
    <Modal title={`Schedule Interview with ${applicant.name}`} onClose={onClose} size="lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="interviewTime">Date and Time</Label>
          <Input 
            id="interviewTime"
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="ghost" type="button" onClick={onClose}>Cancel</Button>
          <Button type="submit">Schedule</Button>
        </div>
      </form>
    </Modal>
  );
};