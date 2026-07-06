import React from "react";

interface AppLogoProps {
  className?: string;
}

export default function AppLogo({ className = "w-full h-full" }: AppLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="app-vector-logo"
    >
      <defs>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />  {/* Amber 400 */}
          <stop offset="100%" stopColor="#D97706" /> {/* Amber 600 */}
        </linearGradient>
      </defs>

      {/* Minimalist modern thin outer ring */}
      <circle cx="50" cy="50" r="42" stroke="url(#gold-gradient)" strokeWidth="1.5" opacity="0.8" />
      
      {/* Clean open book icon representing khutbah/scriptures */}
      <path
        d="M28 42 C38 42 46 45 50 48 C54 45 62 42 72 42 V68 C62 68 54 71 50 74 C46 71 38 68 28 68 V42 Z"
        stroke="url(#gold-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Central binding line */}
      <path
        d="M50 48 V74"
        stroke="url(#gold-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Symmetrical minimalist crescent moon above the book */}
      <path
        d="M45 28 C45 32 48 35 52 35 C53 35 54 34.6 54.8 34.1 C52.5 34.8 50 34.4 48.5 32.7 C47 31 46.6 28.5 47.3 26.2 C46.8 26.9 45 28 45 28 Z"
        fill="url(#gold-gradient)"
      />
    </svg>
  );
}
