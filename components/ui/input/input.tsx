"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md border bg-zinc-800/50 px-3 py-2 text-sm text-[#DEDEDE] placeholder:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 disabled:pointer-events-none disabled:opacity-50",
          error
            ? "border-red-500 focus-visible:ring-red-500"
            : "border-zinc-600 focus-visible:ring-zinc-500",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
