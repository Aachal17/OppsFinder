// src/components/ui.tsx

import React from 'react';
import { XCircleIcon } from './icons'; // Assuming icons are in a separate file

// --- Reusable UI Components (Based on shadcn/ui) ---

/**
 * Button Component (Styled with new accent color)
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  as?: "button" | "a";
  href?: string;
  target?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", as = "button", href, target, ...props }, ref) => {
    const baseStyle =
      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default:
        "bg-indigo-600 text-white hover:bg-indigo-600/90 shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
      destructive:
        "bg-red-600 text-white hover:bg-red-600/90 shadow-sm hover:shadow-md",
      outline:
        "border border-indigo-500 bg-transparent hover:bg-indigo-500 hover:text-white text-indigo-500 dark:border-indigo-500 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white",
      secondary:
        "bg-indigo-100 text-indigo-700 hover:bg-indigo-200/80 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
      ghost:
        "hover:bg-indigo-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300",
      link: "text-indigo-500 dark:text-indigo-400 underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8 text-base",
      icon: "h-10 w-10",
    };

    const Comp = as === "a" ? "a" : "button";
    const buttonProps = {
      className: `${baseStyle} ${variants[variant]} ${sizes[size]} ${className || ''}`,
      ...(as === "a" ? { href, target } : {}),
      ...props,
    };
    return <Comp ref={ref as any} {...buttonProps} />;
  }
);
Button.displayName = "Button";

/**
 * Card Components (Enhanced styling)
 */
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div
    className={`rounded-xl border border-gray-200 bg-white text-gray-950 shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50 ${className}`}
    {...props}
  />
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => (
  <h3 className={`text-xl font-semibold leading-none tracking-tight ${className}`} {...props} />
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, ...props }) => (
  <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`} {...props} />
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
);

/**
 * Input Component (Enhanced styling)
 */
export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus-visible:ring-indigo-500 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => {
  return (
    <select
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus-visible:ring-indigo-500 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Select.displayName = "Select";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus-visible:ring-indigo-500 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

/**
 * Label Component
 */
export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ className, ...props }) => (
  <label
    className={`text-sm font-medium leading-none text-gray-800 dark:text-gray-200 ${className}`}
    {...props}
  />
);

/**
 * Modal Component (Enhanced styling)
 */
export const Modal = ({
  title,
  onClose,
  children,
  size = "md"
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  size?: "md" | "lg" | "xl" | "3xl";
}) => {
  
  const sizes = {
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "3xl": "max-w-3xl",
  }
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative z-50 w-full ${sizes[size]} rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-900 dark:border dark:border-gray-700`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            <XCircleIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};