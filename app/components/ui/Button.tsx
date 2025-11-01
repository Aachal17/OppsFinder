import React from 'react';

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