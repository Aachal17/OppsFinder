// src/pages/student/profile-pages.tsx

import React, { useState } from 'react';
import { StudentProfile } from '../../data/mock-data';
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label, Modal, Textarea } from '../../components/ui';
import { AwardIcon, BuildingIcon, CodeIcon, EditIcon, GraduationCapIcon, LogOutIcon, PlusIcon, TrashIcon } from '../../components/icons';

// --- NEW Edit Profile Modal ---
export const EditProfileModal = ({
  profile,
  onClose,
  onSave,
}: {
  profile: StudentProfile;
  onClose: () => void;
  onSave: (newProfile: StudentProfile) => void;
}) => {
  const [formData, setFormData] = useState(profile);
  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  // Generic handler for nested fields (education, exp, etc.)
  const handleNestedChange = (
    section: keyof StudentProfile,
    id: number,
    field: string,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [section]: (prev[section] as any[]).map(item => 
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  // Handler to add a new item to a section
  const handleAddItem = (section: 'education' | 'experience' | 'projects' | 'awards') => {
    setFormData(prev => {
      const currentItems = prev[section] as any[];
      const newId = Math.max(0, ...currentItems.map(i => i.id)) + 1;
      let newItem: any;
      switch (section) {
        case 'education': newItem = { id: newId, degree: '', school: '', year: '' }; break;
        case 'experience': newItem = { id: newId, title: '', company: '', duration: '', description: '' }; break;
        case 'projects': newItem = { id: newId, name: '', description: '', link: '' }; break;
        case 'awards': newItem = { id: newId, name: '', issuer: '', year: '' }; break;
        default: newItem = { id: newId };
      }
      return { ...prev, [section]: [...currentItems, newItem] };
    });
  };

  // Handler to remove an item from a section
  const handleRemoveItem = (section: 'education' | 'experience' | 'projects' | 'awards', id: number) => {
    setFormData(prev => ({
      ...prev,
      [section]: (prev[section] as any[]).filter(item => item.id !== id),
    }));
  };
  
  // Handler for simple string fields (name, email)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handler for skills (comma-separated string)
  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, skills: e.target.value.split(',').map(s => s.trim()) }));
  };

  return (
    <Modal title="Edit Profile" onClose={onClose} size="3xl">
      <div className="max-h-[75vh] overflow-y-auto p-1 pr-4 space-y-6">
        {/* Basic Info */}
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="dark:text-gray-100">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills">Skills (comma-separated)</Label>
              <Input id="skills" name="skills" value={formData.skills.join(', ')} onChange={handleSkillsChange} />
            </div>
          </CardContent>
        </Card>
        
        {/* Education */}
        <Card className="dark:bg-gray-800">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="dark:text-gray-100">Education</CardTitle>
            <Button type="button" size="sm" onClick={() => handleAddItem('education')}><PlusIcon className="mr-2 h-4 w-4"/>Add</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.education.map((edu, index) => (
              <div key={edu.id} className="space-y-3 rounded-lg border p-4 dark:border-gray-700">
                <div className="flex justify-end">
                  <Button type="button" variant="destructive" size="icon" onClick={() => handleRemoveItem('education', edu.id)}><TrashIcon className="h-4 w-4"/></Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`edu-degree-${index}`}>Degree/Program</Label>
                  <Input id={`edu-degree-${index}`} value={edu.degree} onChange={(e) => handleNestedChange('education', edu.id, 'degree', e.target.value)} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`edu-school-${index}`}>School/University</Label>
                    <Input id={`edu-school-${index}`} value={edu.school} onChange={(e) => handleNestedChange('education', edu.id, 'school', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`edu-year-${index}`}>Year (e.g., 2020-2024)</Label>
                    <Input id={`edu-year-${index}`} value={edu.year} onChange={(e) => handleNestedChange('education', edu.id, 'year', e.target.value)} />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        {/* Experience */}
        <Card className="dark:bg-gray-800">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="dark:text-gray-100">Experience</CardTitle>
            <Button type="button" size="sm" onClick={() => handleAddItem('experience')}><PlusIcon className="mr-2 h-4 w-4"/>Add</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.experience.map((exp, index) => (
              <div key={exp.id} className="space-y-3 rounded-lg border p-4 dark:border-gray-700">
                <div className="flex justify-end">
                  <Button type="button" variant="destructive" size="icon" onClick={() => handleRemoveItem('experience', exp.id)}><TrashIcon className="h-4 w-4"/></Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`exp-title-${index}`}>Job Title</Label>
                  <Input id={`exp-title-${index}`} value={exp.title} onChange={(e) => handleNestedChange('experience', exp.id, 'title', e.target.value)} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`exp-company-${index}`}>Company</Label>
                    <Input id={`exp-company-${index}`} value={exp.company} onChange={(e) => handleNestedChange('experience', exp.id, 'company', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`exp-duration-${index}`}>Duration</Label>
                    <Input id={`exp-duration-${index}`} value={exp.duration} onChange={(e) => handleNestedChange('experience', exp.id, 'duration', e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`exp-desc-${index}`}>Description</Label>
                  <Textarea id={`exp-desc-${index}`} value={exp.description} onChange={(e) => handleNestedChange('experience', exp.id, 'description', e.target.value)} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="dark:bg-gray-800">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="dark:text-gray-100">Projects</CardTitle>
            <Button type="button" size="sm" onClick={() => handleAddItem('projects')}><PlusIcon className="mr-2 h-4 w-4"/>Add</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.projects.map((proj, index) => (
              <div key={proj.id} className="space-y-3 rounded-lg border p-4 dark:border-gray-700">
                <div className="flex justify-end">
                  <Button type="button" variant="destructive" size="icon" onClick={() => handleRemoveItem('projects', proj.id)}><TrashIcon className="h-4 w-4"/></Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`proj-name-${index}`}>Project Name</Label>
                  <Input id={`proj-name-${index}`} value={proj.name} onChange={(e) => handleNestedChange('projects', proj.id, 'name', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`proj-link-${index}`}>Link (Optional)</Label>
                  <Input id={`proj-link-${index}`} value={proj.link} onChange={(e) => handleNestedChange('projects', proj.id, 'link', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`proj-desc-${index}`}>Description</Label>
                  <Textarea id={`proj-desc-${index}`} value={proj.description} onChange={(e) => handleNestedChange('projects', proj.id, 'description', e.target.value)} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        {/* Awards */}
        <Card className="dark:bg-gray-800">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="dark:text-gray-100">Awards & Achievements</CardTitle>
            <Button type="button" size="sm" onClick={() => handleAddItem('awards')}><PlusIcon className="mr-2 h-4 w-4"/>Add</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {formData.awards.map((award, index) => (
              <div key={award.id} className="space-y-3 rounded-lg border p-4 dark:border-gray-700">
                <div className="flex justify-end">
                  <Button type="button" variant="destructive" size="icon" onClick={() => handleRemoveItem('awards', award.id)}><TrashIcon className="h-4 w-4"/></Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`award-name-${index}`}>Award Name</Label>
                    <Input id={`award-name-${index}`} value={award.name} onChange={(e) => handleNestedChange('awards', award.id, 'name', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`award-issuer-${index}`}>Issuer</Label>
                    <Input id={`award-issuer-${index}`} value={award.issuer} onChange={(e) => handleNestedChange('awards', award.id, 'issuer', e.target.value)} />
                  </div>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor={`award-year-${index}`}>Year</Label>
                    <Input id={`award-year-${index}`} value={award.year} onChange={(e) => handleNestedChange('awards', award.id, 'year', e.target.value)} />
                  </div>
              </div>
            ))}
          </CardContent>
        </Card>

      </div>
      <div className="mt-6 flex justify-end gap-2 border-t border-gray-200 dark:border-gray-800 pt-4">
        <Button variant="ghost" onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </Modal>
  );
};

/**
 * Profile Page Component (NEW: Displays data from state, opens Edit Modal)
 */
export const ProfilePage = ({
  profile,
  onLogout,
  onSaveProfile,
}: {
  profile: StudentProfile;
  onLogout: () => void;
  onSaveProfile: (newProfile: StudentProfile) => void;
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  return (
    <main className="flex-grow bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        
        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <img
                src={profile.avatar}
                alt="User"
                className="h-28 w-28 rounded-full border-4 border-white shadow-lg"
              />
              <div className="mt-4 sm:mt-0">
                <CardTitle className="text-3xl font-bold text-white">{profile.name}</CardTitle>
                <CardDescription className="text-lg text-indigo-100">{profile.email}</CardDescription>
              </div>
              <Button variant="secondary" size="sm" onClick={() => setIsEditModalOpen(true)} className="mt-4 sm:mt-0 sm:ml-auto bg-white/20 text-white hover:bg-white/30">
                <EditIcon className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 lg:p-8 space-y-10">
            {/* Skills */}
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">My Skills</h4>
              <div className="flex flex-wrap gap-3">
                {profile.skills.map(skill => (
                  <span key={skill} className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            
            {/* Education */}
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Education</h4>
              <div className="space-y-6">
                {profile.education.map(edu => (
                  <div key={edu.id} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-gray-800">
                      <GraduationCapIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
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
          
            {/* Experience */}
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Experience</h4>
               <div className="space-y-6">
                {profile.experience.map(exp => (
                  <div key={exp.id} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-gray-800">
                      <BuildingIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold dark:text-gray-100">{exp.title}</h5>
                      <p className="text-gray-700 dark:text-gray-300">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            
            {/* Projects */}
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Projects</h4>
               <div className="space-y-6">
                {profile.projects.map(proj => (
                  <div key={proj.id} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-gray-800">
                      <CodeIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold dark:text-gray-100">{proj.name}</h5>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">{proj.description}</p>
                      {proj.link && (
                        <Button variant="link" as="a" href={proj.link} target="_blank" className="p-0">
                          View Project
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Awards */}
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Awards & Achievements</h4>
              <div className="space-y-6">
                {profile.awards.map(award => (
                  <div key={award.id} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-gray-800">
                      <AwardIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold dark:text-gray-100">{award.name}</h5>
                      <p className="text-gray-700 dark:text-gray-300">{award.issuer}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{award.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Settings */}
            <section>
              <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Settings</h4>
              <div className="space-x-2">
                <Button variant="destructive" onClick={onLogout}>
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>

      {isEditModalOpen && (
        <EditProfileModal
          profile={profile}
          onClose={() => setIsEditModalOpen(false)}
          onSave={onSaveProfile}
        />
      )}
    </main>
  );
};