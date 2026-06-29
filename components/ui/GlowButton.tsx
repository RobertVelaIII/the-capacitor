"use client";

import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface GlowButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
}

const GlowButton = forwardRef<HTMLAnchorElement, GlowButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    const sizes = {
      sm: "px-5 py-2.5 text-xs",
      md: "px-7 py-3.5 text-xs",
      lg: "px-10 py-4 text-sm",
    };

    const base =
      "relative inline-flex items-center justify-center font-mono font-bold tracking-[0.18em] uppercase rounded transition-all duration-300 select-none btn-shimmer";

    const variants: Record<Variant, string> = {
      primary:
        "text-black bg-electric-blue hover:brightness-110 active:scale-[0.98]",
      secondary:
        "text-white border border-white/15 hover:border-electric-blue/60 hover:text-electric-blue hover:bg-electric-blue/5 active:scale-[0.98]",
      ghost:
        "text-electric-blue border border-electric-blue/30 hover:border-electric-blue hover:bg-electric-blue/8 active:scale-[0.98]",
    };

    const glows: Record<Variant, string> = {
      primary:
        "0 0 0 1px rgba(0,191,255,0.4), 0 0 20px rgba(0,191,255,0.3), 0 4px 24px rgba(0,0,0,0.5)",
      secondary:
        "0 4px 24px rgba(0,0,0,0.4)",
      ghost:
        "0 0 12px rgba(0,191,255,0.15)",
    };

    return (
      <a
        ref={ref}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        style={{ boxShadow: glows[variant] }}
        {...props}
      >
        {children}
      </a>
    );
  }
);

GlowButton.displayName = "GlowButton";
export default GlowButton;
