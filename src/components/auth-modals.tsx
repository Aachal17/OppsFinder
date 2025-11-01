// src/components/auth-modals.tsx

import React, { useState } from 'react';
import { Button, Input, Label } from './ui'; 

/**
 * Login/Sign Up Modals (Role toggle uses accent color)
 */
export const LoginModal = ({
  onLogin,
  onSwitchToSignUp,
}: {
  onLogin: (role: "student" | "company") => void;
  onSwitchToSignUp: () => void;
}) => {
  const [role, setRole] = useState<"student" | "company">("student");

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
        <Button
          variant={role === "student" ? "default" : "ghost"}
          size="sm"
          onClick={() => setRole("student")}
          className={role === 'student' ? 'shadow-md' : 'text-gray-500 dark:text-gray-300'}
        >
          Student
        </Button>
        <Button
          variant={role === "company" ? "default" : "ghost"}
          size="sm"
          onClick={() => setRole("company")}
          className={role === 'company' ? 'shadow-md' : 'text-gray-500 dark:text-gray-300'}
        >
          Company
        </Button>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Enter your {role} account credentials.
      </p>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="name@company.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="••••••••" />
      </div>
      <Button className="w-full" onClick={() => onLogin(role)}>
        Login as {role.charAt(0).toUpperCase() + role.slice(1)}
      </Button>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        Don't have an account?{" "}
        <Button variant="link" className="p-0" onClick={onSwitchToSignUp}>
          Sign Up
        </Button>
      </p>
    </div>
  );
};

export const SignUpModal = ({
  onSignUp,
  onSwitchToLogin,
}: {
  onSignUp: (role: "student" | "company") => void;
  onSwitchToLogin: () => void;
}) => {
  const [role, setRole] = useState<"student" | "company">("student");

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
        <Button
          variant={role === "student" ? "default" : "ghost"}
          size="sm"
          onClick={() => setRole("student")}
          className={role === 'student' ? 'shadow-md' : 'text-gray-500 dark:text-gray-300'}
        >
          I'm a Student
        </Button>
        <Button
          variant={role === "company" ? "default" : "ghost"}
          size="sm"
          onClick={() => setRole("company")}
          className={role === 'company' ? 'shadow-md' : 'text-gray-500 dark:text-gray-300'}
        >
          I'm a Company
        </Button>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Create a new {role} account to get started.
      </p>
      <div className="space-y-2">
        <Label htmlFor="signup-name">
          {role === "student" ? "Full Name" : "Company Name"}
        </Label>
        <Input 
          type="text" 
          id="signup-name" 
          placeholder={role === "student" ? "Jane Doe" : "Tech Corp"} 
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="signup-email">Email</Label>
        <Input type="email" id="signup-email" placeholder="name@company.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="signup-password">Password</Label>
        <Input type="password" id="signup-password" placeholder="••••••••" />
      </div>
      <Button className="w-full" onClick={() => onSignUp(role)}>
        Create Account
      </Button>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Button variant="link" className="p-0" onClick={onSwitchToLogin}>
          Login
        </Button>
      </p>
    </div>
  );
};