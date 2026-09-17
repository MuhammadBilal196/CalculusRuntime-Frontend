import React from "react";

export const LimitsIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12c2 0 4-4 6-4 2 0 4 8 6 8 2 0 4-4 6-4" />
    <circle cx="10" cy="8" r="1.5" fill={color} />
    <circle cx="16" cy="16" r="1.5" fill={color} />
  </svg>
);

export const DerivativeIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20C8 12 16 12 20 4" />
    <line x1="12" y1="2" x2="22" y2="12" />
  </svg>
);

export const IntegralIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 20c-2 0-3-1-3-3V7c0-2 1-3 3-3" />
    <path d="M14 4c2 0 3 1 3 3v10c0 2-1 3-3 3" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <path d="M4 20h16" />
    <path d="M4 4h16" />
  </svg>
);

export const SeriesIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 6 12 12 4 18" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

export const ConicsIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="8" ry="4" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);

export const VectorIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="20" x2="20" y2="4" />
    <polyline points="10 4 20 4 20 14" />
  </svg>
);

export const SurfaceIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12c4-4 12-4 16 0M4 16c4-4 12-4 16 0" />
    <path d="M12 4v16" />
  </svg>
);

export const IntegrationMultiIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 20c-1.5 0-2-1-2-2.5V6.5C6 5 6.5 4 8 4" />
    <path d="M12 20c-1.5 0-2-1-2-2.5V6.5C10 5 10.5 4 12 4" />
    <path d="M16 20c-1.5 0-2-1-2-2.5V6.5C14 5 14.5 4 16 4" />
  </svg>
);

export const VectorCalculusIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8" />
    <line x1="12" y1="4" x2="12" y2="20" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="10 6 12 4 14 6" />
    <polyline points="10 18 12 20 14 18" />
    <polyline points="6 10 4 12 6 14" />
    <polyline points="18 10 20 12 18 14" />
  </svg>
);

export const MatrixIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 4H5v16h2" />
    <path d="M17 4h2v16h-2" />
    <circle cx="10" cy="9" r="1" fill={color} />
    <circle cx="14" cy="9" r="1" fill={color} />
    <circle cx="10" cy="15" r="1" fill={color} />
    <circle cx="14" cy="15" r="1" fill={color} />
  </svg>
);

export const ProbabilityIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16" />
    <path d="M4 16c4-8 12-8 16 0" />
    <line x1="12" y1="8" x2="12" y2="20" />
  </svg>
);
