import * as React from "react";

export function LockSolid(
  props: React.SVGProps<SVGSVGElement>
): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {/* Body */}
      <rect x="4" y="9" width="16" height="11" rx="2.5" fill="currentColor" />
      {/* Shackle */}
      <path
        d="M8 9V7a4 4 0 1 1 8 0v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LockSolid;
