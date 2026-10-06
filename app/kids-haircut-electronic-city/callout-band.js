export function CalloutBand() {
  return (
    <div
      aria-label="Social proof"
      className="callout-band w-full bg-gradient-to-r from-[#4B2A8A] via-[#6B3FA8] to-[#E91E7A] px-4 py-8 text-center md:px-8 md:py-12 lg:px-12"
    >
      <p className="font-heading text-[clamp(1.125rem,3.5vw,1.5rem)] font-bold leading-snug text-white">
        Loved by Little Ones.
        <span className="hidden md:inline"> </span>
        <br className="md:hidden" />
        Trusted by Parents. 💗
      </p>
    </div>
  );
}
