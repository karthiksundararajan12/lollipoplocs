import Image from 'next/image';
import { buildLandingMetadata } from '../../lib/seo-metadata';
import { buildAllStructuredData } from '../../lib/structured-data';
import {
  CAPTIONED_GALLERY,
  EXPERIENCE_COPY,
  HERO_IMAGE,
  POSTER_IMAGE,
  PRICING,
  SECTION_TONES,
  formatInr,
} from '../../lib/site-config';
import { PhotoGallery } from './photo-gallery';
import { Section } from './section';
import {
  BeforeAfterSlider,
  ExperienceVideo,
  SalonGallery,
} from './section-interactions';
import {
  CertificateSection,
  FinalCallToAction,
  FirstHaircutSection,
  LocationSection,
  ParentChildSection,
  QuestionsSection,
  ReviewsSection,
} from './support-sections';
import {
  PHONE_HREF,
  PHONE_NUMBER,
  WHATSAPP_HREF,
} from './contact-details';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

const experienceVideoUrl = '/videos/lollipop-video.mp4';
const experiencePosterUrl = POSTER_IMAGE;
const experienceCopy = EXPERIENCE_COPY;
const structuredData = buildAllStructuredData();

export const metadata = buildLandingMetadata();

const trustPoints = [
  { icon: '✂️', label: 'Patient Stylists' },
  { icon: '🚗', label: 'Themed Chairs' },
  { icon: '🛝', label: 'Play Area' },
  { icon: '🫧', label: 'Kid-Friendly Products' },
];

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
      <span aria-label="5 stars" className="flex items-center gap-0.5 text-[#946200]">
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

function BookingLink({ children, href, tone, icon, className = '', ...props }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold leading-none text-white shadow-[0_8px_18px_rgba(46,32,42,0.12)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_22px_rgba(46,32,42,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a] ${tone} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </a>
  );
}

function PriceCard({ label, price }) {
  return (
    <div className="card-surface rounded-[1.1rem] px-4 py-3 shadow-[0_8px_22px_rgba(82,42,64,0.06)]">
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-sm font-bold">{label}</p>
        <p className="text-price text-[1.35rem] leading-none">{formatInr(price)}</p>
      </div>
      <p className="text-muted mt-1 text-[0.72rem] leading-snug">
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
    <Section
      ariaLabelledby="hero-title"
      className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-14"
      id="top"
      tone="white"
    >
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 pb-9 sm:pb-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14 lg:pb-10">
        <div className="relative z-10">
          <h1
            className="max-w-[22ch] text-[clamp(2rem,6vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.035em]"
            id="hero-title"
          >
            Kids Haircut in Electronic City at Lollipop Locs Kids Salon &amp; Spa
          </h1>
          <p className="text-accent mt-3 max-w-[25ch] text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em]">
            Haircut Time, Made Happier for Kids{' '}
            <span className="whitespace-nowrap" aria-label="candy and scissors">
              🍭✂️
            </span>
          </p>

          <p className="mt-4 max-w-[61ch] text-[1.0625rem] leading-[1.6] sm:mt-5 sm:text-lg">
            Welcome to Lollipop Locs, a colourful kids salon near me in Electronic
            City, Bengaluru with patient stylists, themed haircut chairs, toys and
            play—designed to make haircut time easier for little ones and parents.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/5 bg-pastel-cream px-3.5 py-2">
            <RatingStars />
            <span className="text-sm font-bold">
              4.9 on Google
            </span>
          </div>

          <div className="mt-5 grid max-w-[540px] grid-cols-2 gap-2.5 sm:gap-3">
            <PriceCard label="👦 Boys Haircut" price={PRICING.boysHaircut} />
            <PriceCard label="👧 Girls Haircut" price={PRICING.girlsHaircut} />
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <BookingLink
              href={PHONE_HREF}
              tone="bg-[#c52f76] hover:bg-[#ad2868]"
              icon={<PhoneIcon />}
            >
              Call {PHONE_NUMBER} to Book
            </BookingLink>
            <BookingLink
              href={WHATSAPP_HREF}
              tone="bg-[#00764c] hover:bg-[#006b45]"
              icon={<WhatsAppIcon />}
            >
              WhatsApp Lollipop Locs
            </BookingLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[570px] lg:max-w-none">
          <div className="card-surface relative aspect-[1.12/1] overflow-hidden rounded-[1.8rem] shadow-[0_24px_56px_rgba(123,67,97,0.12)] sm:aspect-[1.13/1] sm:rounded-[2.2rem] lg:aspect-[0.96/1]">
            <Image
              src={HERO_IMAGE}
              alt="Kids haircut in Electronic City — stylist giving a child a haircut in a themed salon chair at Lollipop Locs"
              width={1140}
              height={1018}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 48vw"
              className="h-full w-full object-cover object-[50%_58%]"
            />
          </div>
          <LollipopDecoration />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1240px] pb-7 pt-4 sm:pb-9">
        <div className="card-surface grid grid-cols-2 gap-2 rounded-[1.4rem] p-3 shadow-[0_10px_30px_rgba(52,35,48,0.05)] sm:grid-cols-4 sm:gap-3 sm:p-4">
          {trustPoints.map((point) => (
            <div
              key={point.label}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl px-1.5 text-center sm:justify-start sm:px-2"
            >
              <span aria-hidden="true" className="text-lg leading-none">
                {point.icon}
              </span>
              <span className="text-[0.76rem] font-bold leading-tight sm:text-sm">
                {point.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function MobileBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-black/5 bg-white/95 px-3 pt-2 shadow-[0_-8px_24px_rgba(46,32,42,0.15)] backdrop-blur sm:hidden">
      <BookingLink
        href={PHONE_HREF}
        tone="bg-[#c52f76] hover:bg-[#ad2868]"
        icon={<PhoneIcon />}
        className="min-h-11 px-3 text-xs"
        aria-label={`Call Lollipop Locs at ${PHONE_NUMBER} to book a kids haircut`}
      >
        Call to Book
      </BookingLink>
      <BookingLink
        href={WHATSAPP_HREF}
        tone="bg-[#00764c] hover:bg-[#006b45]"
        icon={<WhatsAppIcon />}
        className="min-h-11 px-3 text-xs"
        aria-label="WhatsApp Lollipop Locs to book a kids haircut"
      >
        WhatsApp
      </BookingLink>
      <div className="col-span-2 h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}

function CallToBook({ className = '' }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#c52f76] px-6 py-3 text-sm font-bold leading-none text-white shadow-[0_8px_18px_rgba(46,32,42,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ad2868] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a] ${className}`}
    >
      <PhoneIcon />
      Call to Book
    </a>
  );
}

function ExperienceSection() {
  return (
    <Section id="experience" ariaLabelledby="experience-title" tone="white">
      <div className="card-surface mx-auto max-w-[1120px] overflow-hidden rounded-[2rem] p-4 shadow-[0_18px_50px_rgba(82,42,64,0.08)] sm:p-7 lg:p-9">
        <div className="grid items-center gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div className="min-w-0 px-1 sm:px-3">
            <h2
              id="experience-title"
              className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em]"
            >
              {experienceCopy.heading}
            </h2>
            <div
              id="experience-copy"
              className="mt-4 space-y-3 text-[1.0625rem] leading-[1.6]"
            >
              <p>{experienceCopy.firstParagraph}</p>
              <p>{experienceCopy.secondParagraph}</p>
            </div>
          </div>
          <ExperienceVideo
            videoUrl={experienceVideoUrl}
            posterUrl={experiencePosterUrl}
            descriptionId="experience-copy"
          />
        </div>
        <div className="mt-8 min-w-0 sm:mt-10">
          <PhotoGallery photos={CAPTIONED_GALLERY} />
        </div>
      </div>
    </Section>
  );
}

function ParentsSection() {
  const reasons = [
    { icon: '✂️', title: 'Patient Stylists', detail: 'Experienced with little ones.' },
    { icon: '🚗', title: 'Themed Chairs', detail: 'Car, Unicorn & Airplane.' },
    { icon: '🧸', title: 'Toys & Distractions', detail: 'Keeps little minds engaged.' },
    { icon: '🛝', title: 'Play Area', detail: 'Let them settle in first.' },
    { icon: '🫧', title: 'Kid-Friendly Products', detail: 'Gentle care for little hair.' },
  ];

  return (
    <Section ariaLabelledby="parents-title" tone="white">
      <div className="mx-auto max-w-[1240px]">
        <h2
          id="parents-title"
          className="mx-auto max-w-[22ch] text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em]"
        >
            Made for Kids. Easier for Parents. ❤️
        </h2>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="card-surface rounded-[1.35rem] px-3 py-4 text-center shadow-[0_8px_22px_rgba(82,42,64,0.06)] sm:px-4 sm:py-5"
            >
              <span aria-hidden="true" className="text-3xl leading-none sm:text-4xl">
                {reason.icon}
              </span>
              <h3 className="mt-3 text-sm font-bold leading-snug sm:text-[0.98rem]">
                {reason.title}
              </h3>
              <p className="text-muted mt-1.5 text-xs leading-relaxed sm:text-sm">
                — {reason.detail}
              </p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[76ch] text-center text-[1.0625rem] leading-[1.7] sm:mt-10 sm:text-lg">
          Searching for a kids salon near me for your child&apos;s next haircut? At Lollipop Locs Electronic City, the experience is designed around children—from patient stylists and playful surroundings to themed chairs and plenty of distraction.
        </p>
      </div>
    </Section>
  );
}

function ComfortableSection() {
  return (
    <Section ariaLabelledby="comfortable-title" tone={SECTION_TONES.nervousChild}>
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="card-surface grid min-w-0 grid-cols-1 gap-7 rounded-[2rem] p-5 shadow-[0_18px_50px_rgba(82,42,64,0.08)] sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-10 lg:p-10">
          <div className="min-w-0">
            <h2 id="comfortable-title" className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em]">
              Worried They Won&apos;t Sit for a Haircut? ❤️
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.6]">
              That&apos;s okay. Some children simply need a little more time.
            </p>
            <p className="mt-3 text-[1.0625rem] leading-[1.6]">
              Let them look around, meet their stylist, play and get comfortable before we begin.
            </p>
            <p className="text-accent mt-5 font-[family-name:var(--font-fredoka)] text-xl font-semibold leading-snug sm:text-2xl">
              Let Them Explore. Let Them Play. Then Let Them Try.
            </p>
            <CallToBook className="mt-6" />
          </div>
          <div className="relative min-w-0">
            <SalonGallery />
          </div>
        </div>
      </div>
    </Section>
  );
}

function PricingSection() {
  return (
    <Section
      id="pricing"
      ariaLabelledby="pricing-title"
      className="pb-16 sm:pb-20"
      tone="white"
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 id="pricing-title" className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em]">
            Cute Salon. Serious Haircuts. ✂️
          </h2>
          <p className="mt-4 text-left text-[1.0625rem] leading-[1.7] sm:text-center">
            Whether you&apos;re searching for a kids haircut near me, planning your toddler&apos;s regular trim or choosing a new growing-up style, our stylists work with you to understand the haircut you want.
          </p>
          <p className="mt-3 font-semibold">
            Have a style in mind? Bring us a reference photo.
          </p>
        </div>

        <div className="card-surface mt-8 overflow-hidden rounded-[1.6rem] shadow-[0_16px_42px_rgba(82,42,64,0.08)]">
          <div className="border-b border-black/5 px-4 py-5 text-center sm:px-7">
            <h3 className="text-accent text-2xl font-semibold">
              Clear &amp; Transparent Pricing
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <thead>
                <tr className="border-b border-black/5">
                  <th scope="col" className="w-[27%] px-4 py-4 text-sm font-bold sm:px-7" />
                  <th scope="col" className="px-4 py-4 text-sm font-bold sm:px-7">Haircut Only</th>
                  <th scope="col" className="px-4 py-4 text-sm font-bold sm:px-7">Haircut + Hair Wash</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                <tr>
                  <th scope="row" className="px-4 py-5 font-bold sm:px-7">👦 Boys</th>
                  <td className="text-price px-4 py-5 text-xl sm:px-7">{formatInr(PRICING.boysHaircut)}</td>
                  <td className="text-price px-4 py-5 text-xl sm:px-7">{formatInr(PRICING.boysHaircutWithWash)}</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-5 font-bold sm:px-7">👧 Girls</th>
                  <td className="text-price px-4 py-5 text-xl sm:px-7">{formatInr(PRICING.girlsHaircut)}</td>
                  <td className="text-price px-4 py-5 text-xl sm:px-7">{formatInr(PRICING.girlsHaircutWithWash)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted px-4 pb-5 pt-3 text-sm sm:px-7">
            Haircut-only prices do not include hair wash.
          </p>
        </div>
        <div className="mt-5 flex justify-center">
          <CallToBook />
        </div>
        <div className="mt-10 sm:mt-12">
          <BeforeAfterSlider />
        </div>
      </div>
    </Section>
  );
}

export default function KidsHaircutElectronicCityPage() {
  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={`ld-json-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <SiteHeader />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ParentsSection />
        <ComfortableSection />
        <PricingSection />
        <ParentChildSection />
        <FirstHaircutSection />
        <CertificateSection />
        <ReviewsSection />
        <QuestionsSection />
        <LocationSection />
        <FinalCallToAction />
      </main>
      <SiteFooter />
      <MobileBookingBar />
    </>
  );
}