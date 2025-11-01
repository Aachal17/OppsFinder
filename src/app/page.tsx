// src/app/page.tsx

"use client"; 

import React, { useState } from 'react';
import { 
  mockOpportunitiesList, 
  mockPracticeItems, 
  defaultStudentProfile, 
  mockApplicantsList, 
  Opportunity, 
  StudentProfile 
} from '../data/mock-data';
import { Layout } from '../components/layout';
import { Modal } from '../components/ui';
import { LoginModal, SignUpModal } from '../components/auth-modals';

// Student Pages
import { HomePage } from '../pages/student/home-page'; 
import { OpportunitiesPage, OpportunityDetailPage } from '../pages/student/opportunities-pages'; 
import { PracticePage, PracticeDetailPage } from '../pages/student/practice-pages'; 
import { ProfilePage } from '../pages/student/profile-pages'; 

// Company Pages and Components
import { CompanyLayout } from '../pages/company/company-layout'; 
import { CompanyDashboardHome, CompanyManagePostings, CompanyCreatePosting } from '../pages/company/company-pages'; 
import { ApplicantProfilePage, AssignTaskModal, ScheduleInterviewModal, ViewApplicantsModal } from '../pages/company/applicant-management';


/**
 * Main App Component (Default export Page)
 */
export default function Page() {
  const [currentPage, setCurrentPage] = useState("home"); 
  const [companyPage, setCompanyPage] = useState("dashboard"); 
  const [selectedOpportunityId, setSelectedOpportunityId] = useState<number | null>(null); 
  const [selectedPracticeId, setSelectedPracticeId] = useState<number | null>(null); 
  const [opportunityFilter, setOpportunityFilter] = useState<string | null>(null); 

  // Lifted State
  const [opportunities, setOpportunities] = useState(mockOpportunitiesList); 
  const [applicants, setApplicants] = useState(mockApplicantsList); 
  const [studentProfile, setStudentProfile] = useState(defaultStudentProfile); 
  
  // Auth State
  const [userRole, setUserRole] = useState<"none" | "student" | "company">("none"); 
  const [modalView, setModalView] = useState<"login" | "signup" | null>(null); 
  
  // Company Action Modals/Pages State
  const [applicantsModalOppId, setApplicantsModalOppId] = useState<number | null>(null); 
  const [viewingApplicantId, setViewingApplicantId] = useState<number | null>(null); 
  const [assigningTaskApplicantId, setAssigningTaskApplicantId] = useState<number | null>(null); 
  const [schedulingInterviewApplicantId, setSchedulingInterviewApplicantId] = useState<number | null>(null); 


  // --- Auth Handlers ---
  const handleLogin = (role: "student" | "company") => {
    setUserRole(role);
    if (role === "student") { 
      setCurrentPage("home"); 
    } else {
      setCompanyPage("dashboard"); 
    }
    setModalView(null); 
  };

  const handleSignUp = (role: "student" | "company") => {
    setUserRole(role); 
    if (role === "student") { 
      setCurrentPage("home"); 
    } else {
      setCompanyPage("dashboard"); 
    }
    setModalView(null); 
  };

  const handleLogout = () => {
    setUserRole("none"); 
    setCurrentPage("home"); 
  };

  // --- Student Navigation Handler ---
  const handleNavClick = (page: string, filter?: string) => {
    setCurrentPage(page); 
    if (page === "opportunities") { 
      setOpportunityFilter(filter || ""); 
    } else {
      setOpportunityFilter(null); 
    }
    setSelectedOpportunityId(null); 
    setSelectedPracticeId(null); 
  };

  // --- Company Navigation Handler ---
  const handleCompanyNavClick = (page: string) => {
    setCompanyPage(page); 
    setViewingApplicantId(null); 
  };

  // --- Profile Save Handler ---
  const handleSaveProfile = (newProfile: StudentProfile) => {
    setStudentProfile(newProfile); 
  };

  // --- View Details Handlers ---
  const handleViewDetails = (id: number) => {
    setSelectedOpportunityId(id); 
    setCurrentPage("opportunityDetail"); 
  };

  const handleBackToOpportunities = () => {
    setSelectedOpportunityId(null); 
    setCurrentPage("opportunities"); 
  };

  // --- Practice Handlers ---
  const handleStartPractice = (id: number) => {
    setSelectedPracticeId(id); 
    setCurrentPage("practiceDetail"); 
  };

  const handleQuitPractice = () => {
    setSelectedPracticeId(null); 
    setCurrentPage("practice"); 
  };

  // --- Company Action Handlers ---
  const handleCreatePosting = (newOppData: Omit<Opportunity, 'id'>) => {
    const newOpp = {
      ...newOppData,
      id: opportunities.length + 100, 
    };
    setOpportunities(prevOps => [newOpp, ...prevOps]); 
    setCompanyPage("postings"); 
  };

  // --- Applicant Management Handlers (NEW) ---
  
  const handleViewApplicants = (oppId: number) => {
    setApplicantsModalOppId(oppId); 
  };
  
  const handleViewApplicantProfile = (applicantId: number) => {
    setViewingApplicantId(applicantId); 
    setApplicantsModalOppId(null); 
  };

  const handleBackToApplicants = () => {
    const applicant = applicants.find(a => a.id === viewingApplicantId); 
    setViewingApplicantId(null); 
    if (applicant) { 
      setApplicantsModalOppId(applicant.oppId); 
    }
  };

  const handleOpenAssignTask = (applicantId: number) => {
    setAssigningTaskApplicantId(applicantId); 
  };

  const handleSubmitTask = (applicantId: number, task: string) => {
    setApplicants(prev => 
      prev.map(app => 
        app.id === applicantId ? { ...app, task: task } : app
      )
    ); 
    // Also update profile if viewing
    if(viewingApplicantId === applicantId) { 
      setViewingApplicantId(null); 
      setViewingApplicantId(applicantId); 
    }
    setAssigningTaskApplicantId(null); 
  };

  const handleOpenScheduleInterview = (applicantId: number) => {
    setSchedulingInterviewApplicantId(applicantId); 
  };

  const handleSubmitInterview = (applicantId: number, dateTime: string) => {
    setApplicants(prev => 
      prev.map(app => 
        app.id === applicantId ? { ...app, interviewTime: dateTime } : app
      )
    ); 
    // Also update profile if viewing
    if(viewingApplicantId === applicantId) { 
      setViewingApplicantId(null); 
      setViewingApplicantId(applicantId); 
    }
    setSchedulingInterviewApplicantId(null); 
  };

  const closeModals = () => { 
    setModalView(null); 
    setApplicantsModalOppId(null); 
    setAssigningTaskApplicantId(null); 
    setSchedulingInterviewApplicantId(null); 
  };

  // --- ------------------- ---
  // --- MAIN RENDER LOGIC ---
  // --- ------------------- ---

  // 1. Check if user is a company, render company dashboard
  if (userRole === "company") { 
    let companyContent;
    if (viewingApplicantId) { 
      const applicant = applicants.find(a => a.id === viewingApplicantId); 
      if (applicant) { 
        companyContent = (
          <ApplicantProfilePage
            applicant={applicant}
            onBack={handleBackToApplicants}
            onAssignTask={handleOpenAssignTask}
            onScheduleInterview={handleOpenScheduleInterview}
          />
        );
      } else { 
        setViewingApplicantId(null); 
        companyContent = <CompanyDashboardHome />; 
      }
    } else {
      switch (companyPage) { 
        case "dashboard":
          companyContent = <CompanyDashboardHome />; 
          break;
        case "postings":
          companyContent = (
            <CompanyManagePostings
              opportunities={opportunities}
              onViewApplicants={handleViewApplicants}
              onNavClick={handleCompanyNavClick}
            />
          ); 
          break;
        case "create":
          companyContent = (
            <CompanyCreatePosting
              onCreatePosting={handleCreatePosting}
              onNavClick={handleCompanyNavClick}
            />
          ); 
          break;
        default:
          companyContent = <CompanyDashboardHome />; 
      }
    }

    return (
      <>
        <CompanyLayout
          activePage={companyPage}
          onNavClick={handleCompanyNavClick}
          onLogout={handleLogout}
        >
          {companyContent}
        </CompanyLayout>

        {/* Company Modals */}
        {applicantsModalOppId && ( 
          <ViewApplicantsModal
            opp={opportunities.find(op => op.id === applicantsModalOppId)!}
            applicants={applicants}
            onClose={closeModals}
            onViewProfile={handleViewApplicantProfile}
            onAssignTask={handleOpenAssignTask}
            onScheduleInterview={handleOpenScheduleInterview}
          /> 
        )}
        
        {assigningTaskApplicantId && ( 
          <AssignTaskModal
            applicant={applicants.find(a => a.id === assigningTaskApplicantId)!}
            onClose={closeModals}
            onSubmit={handleSubmitTask}
          />
        )}
        
        {schedulingInterviewApplicantId && ( 
          <ScheduleInterviewModal
            applicant={applicants.find(a => a.id === schedulingInterviewApplicantId)!}
            onClose={closeModals}
            onSubmit={handleSubmitInterview}
          />
        )}
      </>
    ); 
  }

  // 2. User is a student or guest, render student-facing site
  let pageToRender;
  switch (currentPage) { 
    case "home":
      pageToRender = (
        <HomePage
          onNavClick={handleNavClick}
          onViewDetails={handleViewDetails}
          onStartPractice={handleStartPractice}
        />
      ); 
      break;
    case "opportunities":
      pageToRender = (
        <OpportunitiesPage
          opportunities={opportunities} 
          onViewDetails={handleViewDetails}
          initialFilter={opportunityFilter}
        />
      ); 
      break;
    case "opportunityDetail":
      const selectedOp = opportunities.find(
        (op) => op.id === selectedOpportunityId
      ); 
      if (selectedOp) { 
        pageToRender = (
          <OpportunityDetailPage op={selectedOp} onBack={handleBackToOpportunities} />
        ); 
      } else {
        pageToRender = (
          <OpportunitiesPage
            opportunities={opportunities} 
            onViewDetails={handleViewDetails}
            initialFilter={opportunityFilter}
          />
        ); 
      }
      break;
    case "practice":
      pageToRender = <PracticePage onStartPractice={handleStartPractice} />; 
      break;
    case "practiceDetail": 
      const selectedPractice = mockPracticeItems.find(
        item => item.id === selectedPracticeId
      ); 
      if (selectedPractice) { 
        pageToRender = (
          <PracticeDetailPage item={selectedPractice} onQuit={handleQuitPractice} />
        ); 
      } else {
        pageToRender = <PracticePage onStartPractice={handleStartPractice} />; 
      }
      break;
    case "profile":
      pageToRender = userRole === "student" ? ( 
        <ProfilePage
          profile={studentProfile}
          onLogout={handleLogout}
          onSaveProfile={handleSaveProfile}
        />
      ) : (
        <HomePage
          onNavClick={handleNavClick}
          onViewDetails={handleViewDetails}
          onStartPractice={handleStartPractice}
        /> 
      );
      break;
    default:
      pageToRender = (
        <HomePage
          onNavClick={handleNavClick}
          onViewDetails={handleViewDetails}
          onStartPractice={handleStartPractice}
        />
      ); 
  }

  return (
    <>
      <Layout
        onNavClick={handleNavClick}
        userRole={userRole}
        onLogout={handleLogout}
        setModalView={(view) => setModalView(view)}
      >
        {pageToRender}
      </Layout>

      {/* Render Auth Modals at the top level */}
      {modalView === "login" && (
        <Modal 
          title="Login" onClose={closeModals}> 
          <LoginModal
            onLogin={handleLogin} 
            onSwitchToSignUp={() => setModalView("signup")}
          />
        </Modal>
      )}
      {modalView === "signup" && (
        <Modal title="Sign Up" onClose={closeModals}>
          <SignUpModal
            onSignUp={handleSignUp} 
            onSwitchToLogin={() => setModalView("login")}
          />
        </Modal>
      )}
    </>
  ); 
}