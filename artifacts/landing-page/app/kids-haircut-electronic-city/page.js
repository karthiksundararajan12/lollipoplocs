import Image from 'next/image';

const heroImage =
  '/images/9_e041d01a-9b54-4e65-a423-b91cf3493d86_1790778166822.jpeg';

const description =
  'A colourful kids salon in Electronic City with patient stylists, themed haircut chairs, toys and play—designed to make haircut time easier for little ones and parents.';

export const metadata = {
  title: 'Kids Haircut in Electronic City, Bangalore | Lollipop Locs',
  description,
  openGraph: {
    title: 'Kids Haircut in Electronic City, Bangalore | Lollipop Locs',
    description,
    type: 'website',
  },
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lollipop Locs',
  description,
  areaServed: {
    '@type': 'Place',
    name: 'Electronic City, Bangalore',
  },
  priceRange: '₹899–₹1,299',
};

const trustPoints = [
  { icon: '✂️', label: 'Patient Stylists' },
  { icon: '🚗', label: 'Themed Chairs' },
  { icon: '🛝', label: 'Play Area' },
  { icon: '🫧', label: 'Kid-Friendly Products' },
];

function CandyMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-10 w-10 shrink-0"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M28 27.5 39 41"
        stroke="#D98AAE"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <circle cx="21" cy="18" r="13.5" fill="#E75396" stroke="white" strokeWidth="2" />
      <path
        d="M18.3 10.5c-3.8 1.2-5.6 5.2-4.3 8.7 1.2 3.4 5.2 5.1 8.6 3.9 3.1-1.1 4.5-4.4 3.4-7.1-.9-2.2-3.4-3.3-5.5-2.5-1.8.7-2.7 2.5-2 4.1.5 1.2 1.8 1.8 3 1.3"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M7.2 3.8h2.5l1.2 4.3-1.8 1.8a15 15 0 0 0 5 5l1.8-1.8 4.3 1.2v2.5a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 5.2 6a2 2 0 0 1 2-2.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M20.4 11.8a8.4 8.4 0 0 1-12.5 7.3l-4.1 1.1 1.1-4A8.4 8.4 0 1 1 20.4 11.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9 8.3c.3-.5.7-.4 1-.1l.8 1.7c.1.3 0 .5-.2.8l-.5.5c.6 1.2 1.5 2 2.7 2.6l.5-.6c.2-.2.5-.3.8-.1l1.6.8c.3.2.4.5.2.8-.4.8-1.1 1.2-1.9 1.1-2.7-.4-5.9-3.5-6.2-6.2-.1-.6.3-1.1 1.2-1.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function RatingStars() {
  return (
    <span aria-label="5 stars" className="flex items-center gap-0.5 text-[#F4B72F]">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          aria-hidden="true"
          key={index}
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-current"
        >
          <path d="m10 1.6 2.5 5.1 5.6.8-4.1 4 .9 5.6-4.9-2.6-5 2.6 1-5.6-4.1-4 5.6-.8L10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}

function BookingLink({ children, href, tone, icon, className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold leading-none text-white shadow-[0_8px_18px_rgba(46,32,42,0.12)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_22px_rgba(46,32,42,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a] ${tone} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}

function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-[#f2e5ec] bg-white/95">
      <div className="mx-auto flex min-h-[76px] max-w-[1240px] items-center justify-between gap-5 px-5 py-3 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <CandyMark />
          <span className="min-w-0">
            <span className="block font-[family-name:var(--font-fredoka)] text-[1.35rem] font-semibold leading-none tracking-[-0.03em] text-[#d94186]">
              Lollipop Locs
            </span>
            <span className="mt-1 block text-[0.64rem] font-bold leading-none text-[#75616d]">
              Premium Kids &amp; Tweens Salon
            </span>
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-[0.82rem] font-bold text-[#59434f] xl:flex"
        >
          <a className="transition hover:text-[#c52f76]" href="#experience">
            Our Experience
          </a>
          <a className="transition hover:text-[#c52f76]" href="#pricing">
            Pricing
          </a>
          <a className="transition hover:text-[#c52f76]" href="#reviews">
            Reviews
          </a>
          <a className="transition hover:text-[#c52f76]" href="#questions">
            FAQs
          </a>
          <a className="transition hover:text-[#c52f76]" href="#location">
            Visit Us
          </a>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <BookingLink
            href="tel:+91XXXXXXXXXX"
            tone="bg-[#c52f76] hover:bg-[#ad2868]"
            icon={<PhoneIcon />}
            className="min-h-10 px-4 text-xs"
          >
            Call to Book
          </BookingLink>
          <BookingLink
            href="https://wa.me/91XXXXXXXXXX"
            tone="bg-[#008b59] hover:bg-[#00764c]"
            icon={<WhatsAppIcon />}
            className="min-h-10 px-4 text-xs"
          >
            WhatsApp
          </BookingLink>
        </div>
      </div>
    </header>
  );
}

function PriceCard({ label, price, theme }) {
  return (
    <div
      className={`rounded-[1.1rem] border px-4 py-3 ${theme === 'blue' ? 'border-[#d7e9f0] bg-[#f1f9fc]' : 'border-[#f4d5e3] bg-[#fff5fa]'}`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-sm font-bold text-[#342330]">{label}</p>
        <p className="font-[family-name:var(--font-fredoka)] text-[1.35rem] font-semibold leading-none text-[#c52f76]">
          ₹{price}
        </p>
      </div>
      <p className="mt-1 text-[0.72rem] font-semibold leading-snug text-[#6d5b65]">
        Haircut only • Hair wash not included
      </p>
    </div>
  );
}

function LollipopDecoration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 90 110"
      className="absolute -right-3 top-5 z-10 hidden h-24 w-20 drop-shadow-[0_8px_10px_rgba(75,42,61,0.15)] sm:block lg:-right-7 lg:top-9 lg:h-28 lg:w-24"
      fill="none"
    >
      <path d="m45 61 16 42" stroke="#D98AAE" strokeLinecap="round" strokeWidth="6" />
      <circle cx="38" cy="37" r="29" fill="#E75396" stroke="white" strokeWidth="5" />
      <path
        d="M35 20c-8 2-12 10-9 18 2 7 10 10 17 7 6-2 8-9 6-14-2-5-7-7-12-5-4 2-5 6-4 9 1 3 4 4 7 3"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="3"
      />
    </svg>
  );
}

function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fffafd_0%,#fff4f9_54%,#fff_100%)]"
      id="top"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 top-14 h-64 w-64 rounded-full bg-[#fce8f1] opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#e9f7f1] opacity-75 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-5 pb-9 pt-8 sm:px-8 sm:pb-12 sm:pt-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14 lg:pb-10 lg:pt-14">
        <div className="relative z-10">
          <h1
            className="max-w-[17ch] text-[clamp(2.25rem,7vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-[#2e202a]"
            id="hero-title"
          >
            Kids Haircut in Electronic City, Bangalore
          </h1>
          <h2 className="mt-3 max-w-[25ch] text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-[#c52f76]">
            Haircut Time, Made Happier for Kids{' '}
            <span className="whitespace-nowrap" aria-label="candy and scissors">
              🍭✂️
            </span>
          </h2>

          <p className="mt-4 max-w-[61ch] text-[1.0625rem] leading-[1.6] text-[#5f4d58] sm:mt-5 sm:text-lg">
            Welcome to Lollipop Locs, a colourful kids salon in Electronic City
            with patient stylists, themed haircut chairs, toys and play—designed
            to make haircut time easier for little ones and parents.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#f4df72] bg-[#fffdf2] px-3.5 py-2">
            <RatingStars />
            <span className="text-sm font-bold text-[#3d3037]">
              4.9 on Google
            </span>
          </div>

          <div className="mt-5 grid max-w-[540px] grid-cols-2 gap-2.5 sm:gap-3">
            <PriceCard label="👦 Boys Haircut" price="899" theme="blue" />
            <PriceCard label="👧 Girls Haircut" price="999" theme="pink" />
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <BookingLink
              href="tel:+91XXXXXXXXXX"
              tone="bg-[#c52f76] hover:bg-[#ad2868]"
              icon={<PhoneIcon />}
            >
              Call to Book
            </BookingLink>
            <BookingLink
              href="https://wa.me/91XXXXXXXXXX"
              tone="bg-[#008b59] hover:bg-[#00764c]"
              icon={<WhatsAppIcon />}
            >
              WhatsApp
            </BookingLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[570px] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-3 -rotate-2 rounded-[2.2rem] bg-[#f4d9e7] sm:-inset-4 sm:rounded-[2.6rem]"
          />
          <div className="relative aspect-[1.12/1] overflow-hidden rounded-[1.8rem] border-[5px] border-white shadow-[0_24px_56px_rgba(123,67,97,0.19)] sm:aspect-[1.13/1] sm:rounded-[2.2rem] lg:aspect-[0.96/1]">
            <Image
              src={heroImage}
              alt="A stylist giving a child a haircut in a themed salon chair at Lollipop Locs"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 48vw"
              className="object-cover object-[50%_58%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#341d2c]/15 to-transparent"
            />
          </div>
          <LollipopDecoration />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 pb-7 pt-4 sm:px-8 sm:pb-9">
        <div className="grid grid-cols-2 gap-2 rounded-[1.4rem] border border-[#e4eef2] bg-white/90 p-3 shadow-[0_10px_30px_rgba(52,35,48,0.05)] sm:grid-cols-4 sm:gap-3 sm:p-4">
          {trustPoints.map((point) => (
            <div
              key={point.label}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl px-1.5 text-center sm:justify-start sm:px-2"
            >
              <span aria-hidden="true" className="text-lg leading-none">
                {point.icon}
              </span>
              <span className="text-[0.76rem] font-bold leading-tight text-[#51424b] sm:text-sm">
                {point.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/20 bg-[#fffafd]/95 px-3 pt-2 shadow-[0_-8px_24px_rgba(46,32,42,0.15)] backdrop-blur sm:hidden">
      <BookingLink
        href="tel:+91XXXXXXXXXX"
        tone="bg-[#c52f76] hover:bg-[#ad2868]"
        icon={<PhoneIcon />}
        className="min-h-11 px-3 text-xs"
      >
        Call to Book
      </BookingLink>
      <BookingLink
        href="https://wa.me/91XXXXXXXXXX"
        tone="bg-[#008b59] hover:bg-[#00764c]"
        icon={<WhatsAppIcon />}
        className="min-h-11 px-3 text-xs"
      >
        WhatsApp
      </BookingLink>
      <div className="col-span-2 h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}

export default function KidsHaircutElectronicCityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
      </main>
      <MobileBookingBar />
    </>
  );
}