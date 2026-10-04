import Image from 'next/image';
import { buildLandingMetadata } from '../../lib/seo-metadata';
import { buildAllStructuredData } from '../../lib/structured-data';
import {
  CAPTIONED_GALLERY,
  EXPERIENCE_COPY,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  HERO_IMAGE,
  POSTER_IMAGE,
  PRICING,
  SECTION_TONES,
  formatInr,
} from '../../lib/site-config';
import { CalloutBand } from './callout-band';
import { HeroSalonTourLink } from './hero-salon-tour-link';
import { PricingSection } from './pricing-section';
import { ProofBadge } from './proof-badge';
import { PhotoGallery } from './photo-gallery';
import { Section } from './section';
import { ExperienceVideo, SalonGallery } from './section-interactions';
import { ChooseChairSection } from './choose-chair-section';
import {
  FinalCallToAction,
  FirstHaircutSection,
  LocationSection,
  QuestionsSection,
  ReviewsSection,
} from './support-sections';
import { WhyFamiliesSection } from './why-families-section';
import {
  PHONE_HREF,
  PHONE_NUMBER,
  WHATSAPP_HREF,
} from './contact-details';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import {
  BTN_PRIMARY,
  BTN_WHATSAPP,
  GoogleLogo,
  GoogleRatingBadge,
} from './ui-primitives';

const experienceVideoUrl = '/videos/lollipop-video.mp4';
const experiencePosterUrl = POSTER_IMAGE;
const experienceCopy = EXPERIENCE_COPY;
const structuredData = buildAllStructuredData();

export const metadata = buildLandingMetadata();

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

function BookingLink({ children, href, variant = 'primary', icon, className = '', ...props }) {
  const variantClass = variant === 'whatsapp' ? BTN_WHATSAPP : BTN_PRIMARY;

  return (
    <a href={href} className={`${variantClass} ${className}`} {...props}>
      {icon}
      {children}
    </a>
  );
}

function StarCluster() {
  return (
    <span aria-hidden="true" className="grid shrink-0 grid-cols-3 gap-[1px]">
      {Array.from({ length: 6 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-[7px] w-[7px] fill-[#FFC107] sm:h-2 sm:w-2"
        >
          <path d="m10 1.6 2.5 5.1 5.6.8-4.1 4 .9 5.6-4.9-2.6-5 2.6 1-5.6-4.1-4 5.6-.8L10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}

function CertificateIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 md:h-7 md:w-7"
      fill="none"
      stroke="#4B2A8A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="9" r="6" />
      <path d="M15.5 13.6 17 22l-5-3-5 3 1.5-8.4" />
    </svg>
  );
}

function ParentChildIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 md:h-7 md:w-7"
      fill="none"
      stroke="#E91E7A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <circle cx="8.5" cy="7" r="3.5" />
      <path d="M2.5 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <circle cx="18" cy="12" r="2.5" />
      <path d="M21.5 21v-2.5a3 3 0 0 0-3-3" />
    </svg>
  );
}

function SparkleBadgeIcon() {
  return (
    <span
      aria-hidden="true"
      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E91E7A]"
    >
      <svg viewBox="0 0 24 24" className="h-[10px] w-[10px] fill-white">
        <path d="M12 2.5l2 6.1a1.4 1.4 0 0 0 .9.9l6.1 2-6.1 2a1.4 1.4 0 0 0-.9.9l-2 6.1-2-6.1a1.4 1.4 0 0 0-.9-.9l-6.1-2 6.1-2a1.4 1.4 0 0 0 .9-.9l2-6.1Z" />
      </svg>
    </span>
  );
}

function PioneerBadge({ className = '' }) {
  return (
    <p
      className={`hero-pioneer-badge inline-flex max-w-full items-center gap-2 rounded-full border border-[#F8B6D0] bg-[#FFE0EC] px-3 py-2 text-sm font-bold leading-snug text-[#E91E7A] shadow-sm ${className}`}
    >
      <SparkleBadgeIcon />
      One of India&apos;s pioneering premium kids salons
    </p>
  );
}

function HeroTrustStrip({ className = '' }) {
  const itemClass = 'flex min-w-0 items-center gap-2';
  const textBlockClass = 'min-w-0 flex flex-col leading-tight';
  const captionClass = 'text-[11px] font-bold leading-tight text-gray-700 md:text-xs';
  const boldLabelClass = 'text-[13px] font-bold leading-tight text-[#4B2A8A] md:text-sm';
  const regularLabelClass =
    'text-[13px] font-semibold leading-tight text-[#15151F] md:text-sm';

  return (
    <div
      className={`hero-trust-strip grid w-full grid-cols-2 gap-x-4 gap-y-3 rounded-2xl bg-white/90 p-3 ring-1 ring-black/5 backdrop-blur md:flex md:w-fit md:items-center md:gap-6 md:bg-white/70 md:px-4 md:py-3 ${className}`}
    >
      <div className={itemClass}>
        <span className={`${textBlockClass} gap-1`}>
          <span className="flex items-center gap-1.5">
            <span className="text-xl font-extrabold leading-none text-[#15151F] md:text-2xl">
              {GOOGLE_RATING}
            </span>
            <StarCluster />
          </span>
          <span className={captionClass}>Google Rating</span>
        </span>
      </div>

      <div className={itemClass}>
        <GoogleLogo className="h-6 w-6 shrink-0 md:h-7 md:w-7" />
        <span className={`${textBlockClass} gap-1`}>
          <span className="text-xl font-extrabold leading-none text-[#15151F] md:text-xl">
            {GOOGLE_REVIEW_COUNT}
          </span>
          <span className={captionClass}>Google Reviews</span>
        </span>
      </div>

      <div className={itemClass}>
        <CertificateIcon />
        <span className={textBlockClass}>
          <span className={boldLabelClass}>First Haircut</span>
          <span className={regularLabelClass}>Certificates</span>
        </span>
      </div>

      <div className={itemClass}>
        <ParentChildIcon />
        <span className={textBlockClass}>
          <span className={boldLabelClass}>Parent &amp; Child</span>
          <span className={regularLabelClass}>Experiences</span>
        </span>
      </div>
    </div>
  );
}

function PriceCard({ label, price, variant = 'boys' }) {
  const tintClass =
    variant === 'girls' ? 'hero-price-card--girls' : 'hero-price-card--boys';

  return (
    <div className={`price-card hero-price-card min-w-0 px-5 py-4 ${tintClass}`}>
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-sm font-bold text-navy">{label}</p>
        <p className="text-price !font-extrabold text-navy text-2xl leading-none md:text-3xl">
          {formatInr(price)}
        </p>
      </div>
      <p className="text-muted mt-2 text-xs font-medium leading-snug">
        Haircut only • Hair wash not included
      </p>
    </div>
  );
}

function HeroPhotoFrame({ className = '' }) {
  return (
    <div className={`hero-photo relative w-full overflow-visible p-3 ${className}`}>
      <div aria-hidden="true" className="hero-photo__offset" />
      <div className="hero-photo__frame">
        <div className="hero-photo__media relative mx-auto aspect-[4/5] w-full max-h-[640px]">
          <Image
            src={HERO_IMAGE}
            alt="Kids haircut in Electronic City — stylist giving a child a haircut in a themed salon chair at Lollipop Locs"
            width={1140}
            height={1018}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 52vw"
            className="h-full w-full object-cover object-[50%_58%]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1A2E]/50 to-transparent pt-16"
          />
          <ProofBadge className="absolute bottom-4 left-4">
            Google Rated {GOOGLE_RATING}
          </ProofBadge>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <Section
      ariaLabelledby="hero-title"
      className="hero-section relative"
      hero
      id="top"
      tone={SECTION_TONES.hero}
    >
      <div aria-hidden="true" className="hero-mobile-bg md:hidden">
        <Image
          src={HERO_IMAGE}
          alt=""
          width={1140}
          height={1018}
          priority
          sizes="130vw"
          className="hero-mobile-image"
        />
        <div className="hero-mobile-gradient" />
      </div>

      <div className="hero-content relative z-10 grid min-h-0 items-center gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
        <div className="min-w-0 space-y-5 lg:space-y-0">
          <h1
            className="hero-title max-w-[22ch] text-[clamp(2rem,6vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em] text-brand-navy"
            id="hero-title"
          >
            Kids Haircut in Electronic City at Lollipop Locs Kids Salon &amp; Spa
          </h1>
          <p className="hero-subhead text-accent max-w-[25ch] text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]">
            Haircut Time, Made Happier for Kids{' '}
            <span className="whitespace-nowrap" aria-label="candy and scissors">
              🍭✂️
            </span>
          </p>
          <p className="hero-lede max-w-[61ch] text-[1.0625rem] leading-[1.6] sm:text-lg">
            Welcome to Lollipop Locs, a colourful kids salon near me in Electronic
            City, Bengaluru with patient stylists, themed haircut chairs, toys and
            play—designed to make haircut time easier for little ones and parents.
          </p>

          <div className="hidden md:block">
            <GoogleRatingBadge
              rating={GOOGLE_RATING}
              label={`on Google · ${GOOGLE_REVIEW_COUNT} reviews`}
            />
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3">
            <PriceCard
              label="👦 Boys Haircut"
              price={PRICING.boysHaircut}
              variant="boys"
            />
            <PriceCard
              label="👧 Girls Haircut"
              price={PRICING.girlsHaircut}
              variant="girls"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <BookingLink href={PHONE_HREF} variant="primary" icon={<PhoneIcon />}>
              Call {PHONE_NUMBER} to Book
            </BookingLink>
            <BookingLink href={WHATSAPP_HREF} variant="whatsapp" icon={<WhatsAppIcon />}>
              WhatsApp Lollipop Locs
            </BookingLink>
            <HeroSalonTourLink />
          </div>

          <PioneerBadge />

          <HeroTrustStrip />
        </div>

        <div className="hero-photo-glow relative hidden w-full min-w-0 overflow-visible md:block lg:max-w-none">
          <HeroPhotoFrame />
        </div>
      </div>
    </Section>
  );
}

function MobileBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-black/5 bg-white/95 px-3 pt-2 shadow-[0_-8px_24px_rgba(27,42,92,0.15)] backdrop-blur sm:hidden">
      <BookingLink
        href={PHONE_HREF}
        variant="whatsapp"
        icon={<PhoneIcon />}
        className="h-11 px-4 text-xs"
        aria-label={`Call Lollipop Locs at ${PHONE_NUMBER} to book a kids haircut`}
      >
        Call to Book
      </BookingLink>
      <BookingLink
        href={WHATSAPP_HREF}
        variant="primary"
        icon={<WhatsAppIcon />}
        className="h-11 px-4 text-xs"
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
    <a href={PHONE_HREF} className={`${BTN_PRIMARY} ${className}`}>
      <PhoneIcon />
      Call to Book
    </a>
  );
}

function ExperienceSection() {
  return (
    <Section
      id="experience"
      ariaLabelledby="experience-title"
      className="experience-section"
      dividerBefore
      tone={SECTION_TONES.experience}
    >
      <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
        <div className="min-w-0">
          <h2
            id="experience-title"
            className="section-heading text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]"
          >
            {experienceCopy.heading}
          </h2>
          <div
            id="experience-copy"
            className="space-y-3 text-[1.0625rem] leading-[1.6]"
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
      <div className="gallery-band relative left-1/2 mt-8 w-screen max-w-[100vw] -translate-x-1/2 px-4 py-10 md:px-6 md:py-16 lg:mt-10 lg:px-8 lg:py-[72px]">
        <PhotoGallery photos={CAPTIONED_GALLERY} />
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
    <Section
      ariaLabelledby="parents-title"
      dividerBefore
      tone={SECTION_TONES.benefits}
    >
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        <ProofBadge>Parent-Friendly</ProofBadge>
        <ProofBadge>Hygienic</ProofBadge>
      </div>
      <h2
        id="parents-title"
        className="section-heading mx-auto max-w-[22ch] text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]"
      >
        Made for Kids. Easier for Parents. ❤️
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
        {reasons.map((reason) => (
          <article
            key={reason.title}
            className="benefit-card p-5 text-center md:p-6"
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
      <p className="mx-auto mt-6 max-w-[76ch] text-center text-[1.0625rem] leading-[1.7] sm:text-lg">
        Searching for a kids salon near me for your child&apos;s next haircut? At Lollipop Locs Electronic City, the experience is designed around children—from patient stylists and playful surroundings to themed chairs and plenty of distraction.
      </p>
    </Section>
  );
}

function ComfortableSection() {
  return (
    <Section
      ariaLabelledby="comfortable-title"
      dividerBefore
      tone={SECTION_TONES.nervousChild}
    >
      <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-8">
        <div className="min-w-0">
          <h2
            id="comfortable-title"
            className="section-heading text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]"
          >
            Worried They Won&apos;t Sit for a Haircut? ❤️
          </h2>
          <p className="text-[1.0625rem] leading-[1.6]">
            That&apos;s okay. Some children simply need a little more time.
          </p>
          <p className="mt-3 text-[1.0625rem] leading-[1.6]">
            Let them look around, meet their stylist, play and get comfortable before we begin.
          </p>
          <p className="text-accent mt-4 font-heading text-xl font-bold leading-snug sm:text-2xl">
            Let Them Explore. Let Them Play. Then Let Them Try.
          </p>
          <CallToBook className="mt-5" />
        </div>
        <div className="relative min-w-0">
          <SalonGallery />
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
        <ChooseChairSection />
        <ParentsSection />
        <ComfortableSection />
        <PricingSection />
        <FirstHaircutSection />
        <WhyFamiliesSection />
        <CalloutBand />
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