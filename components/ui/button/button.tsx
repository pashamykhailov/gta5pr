"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "sm" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "default", disabled, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" &&
            "bg-zinc-700 text-[#DEDEDE] hover:bg-zinc-600 focus-visible:ring-zinc-500",
          variant === "secondary" &&
            "border border-zinc-600 bg-transparent text-[#DEDEDE] hover:bg-zinc-800 focus-visible:ring-zinc-500",
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-8 rounded px-3 text-sm",
          size === "lg" && "h-12 rounded-md px-6 text-base",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
