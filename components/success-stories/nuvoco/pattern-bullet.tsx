/* Reusable Motadata pattern-mark bullet.
   Use in place of a bullet/icon for any pointer list on the case study pages. */
export function PatternBullet({ className = "mt-1.5 h-3 w-3" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.9 14.9"
      aria-hidden
      className={`shrink-0 ${className}`}
    >
      <path fill="#f17463" d="M0,10.4c0,2.5,2,4.4,4.4,4.4h0V6h0C2,6,0,8,0,10.4Z" />
      <path fill="#f17463" d="M14.9,4.4c0-2.5-2-4.4-4.4-4.4h0v8.9h0c2.4,0,4.4-2,4.4-4.4Z" />
      <path fill="#f17463" d="M6,10.4c0,2.5,2,4.4,4.4,4.4s4.4-2,4.4-4.4h0c0,0-8.9,0-8.9,0h0Z" />
      <path fill="#f17463" d="M8.9,4.4C8.9,2,6.9,0,4.4,0S0,2,0,4.4h0c0,0,8.9,0,8.9,0h0Z" />
    </svg>
  );
}
