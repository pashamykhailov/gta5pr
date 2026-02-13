"use client";

import { cn } from "@/lib/cn";

export interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

export function FormField({
  label,
  error,
  children,
  className,
  htmlFor,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-[#DEDEDE]"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
