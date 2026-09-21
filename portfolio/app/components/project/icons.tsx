// Pipeline stage marks for the PodcastIQ deep-dive stepper.
// Ported from the shared portfolio icon set. Decorative only: each is rendered
// aria-hidden, so none carries meaning a reader needs.

type IconProps = { className?: string };

export function LayersIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M2 13l10 5 10-5" />
      <path d="M2 18l10 5 10-5" />
    </svg>
  );
}

export function DatabaseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function stroke(className?: string) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
}

export function CaptionsIcon({ className }: IconProps) {
  return (
    <svg {...stroke(className)}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M7 11h4M7 15h7M15 11h2" />
    </svg>
  );
}

export function MagnifierIcon({ className }: IconProps) {
  return (
    <svg {...stroke(className)}>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" />
      <path d="M8 11h6" />
    </svg>
  );
}

export function GridIcon({ className }: IconProps) {
  return (
    <svg {...stroke(className)}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export function SpeakerIcon({ className }: IconProps) {
  return (
    <svg {...stroke(className)}>
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v4M8 22h8" />
    </svg>
  );
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg {...stroke(className)}>
      <path d="M7 7H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v3a4 4 0 0 1-4 4" />
      <path d="M20 7h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v3a4 4 0 0 1-4 4" />
    </svg>
  );
}

export function NetworkIcon({ className }: IconProps) {
  return (
    <svg {...stroke(className)}>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M10.5 7L6.5 15.8M13.5 7l4 8.8M7.5 18h9" />
    </svg>
  );
}

export function RouteIcon({ className }: IconProps) {
  return (
    <svg {...stroke(className)}>
      <path d="M12 3v6" />
      <path d="M12 9c0 4-7 3-7 8" />
      <path d="M12 9c0 4 7 3 7 8" />
      <circle cx="12" cy="3" r="1.6" />
      <circle cx="5" cy="19" r="1.6" />
      <circle cx="19" cy="19" r="1.6" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...stroke(className)}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
