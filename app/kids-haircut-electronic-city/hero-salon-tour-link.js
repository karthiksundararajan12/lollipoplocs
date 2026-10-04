'use client';

export function HeroSalonTourLink({ className = '' }) {
  const handleClick = (event) => {
    event.preventDefault();
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      href="#experience"
      onClick={handleClick}
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-[#E91E7A] bg-white px-6 text-sm font-semibold leading-none text-[#E91E7A] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FFF3F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B2A8A] ${className}`}
    >
      <span aria-hidden="true">▶</span>
      Watch Salon Tour
    </a>
  );
}
