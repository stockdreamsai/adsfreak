// Decorative background elements — the page's visual signature:
// marker sparkles, offset pixel squares and a squiggle, in brand colors.
// Purely presentational; parent section needs position:relative.

function Star({ className }) {
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 2 C21.5 12 24 16 38 20 C24 24 21.5 28 20 38 C18.5 28 16 24 2 20 C16 16 18.5 12 20 2 Z" />
    </svg>
  );
}

function Squares({ className }) {
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 60 60" aria-hidden="true">
      <rect x="4" y="26" width="16" height="16" rx="2" />
      <rect x="26" y="8" width="12" height="12" rx="2" opacity="0.55" />
      <rect x="36" y="34" width="20" height="20" rx="3" opacity="0.35" />
    </svg>
  );
}

function Squiggle({ className }) {
  return (
    <svg className={`doodle ${className}`} viewBox="0 0 120 24" aria-hidden="true">
      <path d="M3 18 C15 4 25 4 37 16 C49 28 59 6 71 10 C83 14 93 22 117 6" fill="none" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function Doodles() {
  return (
    <div className="doodles" aria-hidden="true">
      <Star className="doodle-star-a" />
      <Star className="doodle-star-b" />
      <Squares className="doodle-squares" />
      <Squiggle className="doodle-squiggle" />
    </div>
  );
}
