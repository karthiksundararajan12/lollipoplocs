import { GOOGLE_REVIEW_COUNT } from '../../lib/site-config';

export function CalloutBand() {
  return (
    <div
      aria-label="Social proof"
      className="callout-band relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 bg-gradient-to-r from-[#4B2A8A] via-[#6B3FA8] to-[#E91E7A] px-4 py-5 text-center md:px-6 md:py-6"
    >
      <p className="font-heading text-[clamp(1.125rem,3.5vw,1.5rem)] font-bold leading-snug text-white">
        Over {GOOGLE_REVIEW_COUNT.replace('+', '')} happy families across Bangalore
      </p>
    </div>
  );
}
