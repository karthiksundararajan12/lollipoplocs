export function ProofBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white/95 px-3 py-1.5 text-xs font-bold leading-snug text-[#4B2A8A] shadow-sm backdrop-blur sm:text-[0.8125rem] ${className}`}
    >
      {children}
    </span>
  );
}
