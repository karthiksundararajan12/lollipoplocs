import Image from 'next/image';
import { buildLandingMetadata } from '../../lib/seo-metadata';
import { buildAllStructuredData } from '../../lib/structured-data';
import {
  CAPTIONED_GALLERY,
  EXPERIENCE_COPY,
  HERO_IMAGE,
  PARENT_CHILD_COMBOS,
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
  FinalCallToAction,
  FirstHaircutSection,
  LocationSection,
  QuestionsSection,
  ReviewsSection,
} from './support-sections';
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
  GoogleRatingBadge,
} from './ui-primitives';

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

function BookingLink({ children, href, variant = 'primary', icon, className = '', ...props }) {
  const variantClass = variant === 'whatsapp' ? BTN_WHATSAPP : BTN_PRIMARY;

  return (
    <a href={href} className={`${variantClass} ${className}`} {...props}>
      {icon}
      {children}
    </a>
  );
}

function PriceCard({ label, price, tint = 'bg-white' }) {
  return (
    <div className={`price-card min-w-0 px-5 py-4 ${tint}`}>
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-2 top-12 hidden h-5 w-5 rounded-full bg-[#FBD3E3] lg:block" />
        <span className="absolute bottom-20 right-2 hidden h-4 w-4 rounded-full bg-mint lg:block" />
        <span className="absolute right-12 top-2 hidden text-lg text-star lg:block">★</span>
        <span className="absolute bottom-2 left-8 hidden h-3 w-3 rounded-full bg-tint-yellow lg:block" />
      </div>
      <div aria-hidden="true" className="hero-photo__offset" />
      <div className="hero-photo__frame">
        <div className="relative mx-auto aspect-[4/5] w-full max-h-[640px] lg:aspect-[5/6]">
          <Image
            src={HERO_IMAGE}
            alt="Kids haircut in Electronic City — stylist giving a child a haircut in a themed salon chair at Lollipop Locs"
            width={1140}
            height={1018}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 52vw"
            className="h-full w-full object-cover object-[50%_58%]"
          />
        </div>
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 90 110"
        className="absolute right-2 top-2 z-10 h-20 w-16 drop-shadow-[0_8px_10px_rgba(27,42,92,0.15)] sm:h-24 sm:w-20 lg:h-28 lg:w-24"
        fill="none"
      >
        <path d="m45 61 16 42" stroke="#F5A3C7" strokeLinecap="round" strokeWidth="6" />
        <circle cx="38" cy="37" r="29" fill="#E91E7A" stroke="white" strokeWidth="5" />
        <path
          d="M35 20c-8 2-12 10-9 18 2 7 10 10 17 7 6-2 8-9 6-14-2-5-7-7-12-5-4 2-5 6-4 9 1 3 4 4 7 3"
          stroke="white"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

function HeroSection() {
  return (
    <Section
      ariaLabelledby="hero-title"
      className="relative"
      hero
      id="top"
      tone={SECTION_TONES.hero}
    >
      <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0 space-y-5">
          <h1
            className="max-w-[22ch] text-[clamp(2rem,6vw,3.35rem)] font-bold leading-[1.08] tracking-[-0.035em] text-brand-navy"
            id="hero-title"
          >
            Kids Haircut in Electronic City at Lollipop Locs Kids Salon &amp; Spa
          </h1>
          <p className="text-accent max-w-[25ch] text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]">
            Haircut Time, Made Happier for Kids{' '}
            <span className="whitespace-nowrap" aria-label="candy and scissors">
              🍭✂️
            </span>
          </p>
          <p className="max-w-[61ch] text-[1.0625rem] leading-[1.6] sm:text-lg">
            Welcome to Lollipop Locs, a colourful kids salon near me in Electronic
            City, Bengaluru with patient stylists, themed haircut chairs, toys and
            play—designed to make haircut time easier for little ones and parents.
          </p>

          <GoogleRatingBadge />

          <div className="grid min-w-0 grid-cols-2 gap-3">
            <PriceCard label="👦 Boys Haircut" price={PRICING.boysHaircut} />
            <PriceCard label="👧 Girls Haircut" price={PRICING.girlsHaircut} />
          </div>

          <div className="flex flex-wrap gap-3">
            <BookingLink href={PHONE_HREF} variant="primary" icon={<PhoneIcon />}>
              Call {PHONE_NUMBER} to Book
            </BookingLink>
            <BookingLink href={WHATSAPP_HREF} variant="whatsapp" icon={<WhatsAppIcon />}>
              WhatsApp Lollipop Locs
            </BookingLink>
          </div>
        </div>

        <div className="hero-photo-glow relative w-full min-w-0">
          <HeroPhotoFrame />
        </div>
      </div>
    </Section>
  );
}

function TrustStripSection() {
  return (
    <Section dividerBefore tone={SECTION_TONES.trustStrip}>
      <div className="price-card grid grid-cols-2 gap-2 bg-white p-3 sm:grid-cols-4 sm:gap-3 sm:p-4">
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
      <div className="mt-8 lg:mt-10">
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
          <p className="text-accent mt-4 font-[family-name:var(--font-fredoka)] text-xl font-bold leading-snug sm:text-2xl">
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

function PricingSection() {
  const { heading, items, footnote } = PARENT_CHILD_COMBOS;

  return (
    <Section
      id="pricing"
      ariaLabelledby="pricing-title"
      dividerBefore
      tone={SECTION_TONES.pricing}
    >
      <div className="mx-auto max-w-[760px] text-center">
        <h2
          id="pricing-title"
          className="section-heading text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]"
        >
          Cute Salon. Serious Haircuts. ✂️
        </h2>
        <p className="text-left text-[1.0625rem] leading-[1.7] sm:text-center">
          Whether you&apos;re searching for a kids haircut near me, planning your toddler&apos;s regular trim or choosing a new growing-up style, our stylists work with you to understand the haircut you want.
        </p>
        <p className="mt-3 font-medium">
          Have a style in mind? Bring us a reference photo.
        </p>
      </div>

      <div className="price-card mt-6 overflow-hidden bg-white">
        <div className="border-b border-black/5 px-4 py-5 text-center sm:px-7">
          <h3 className="text-accent text-2xl font-bold">
            Clear &amp; Transparent Pricing
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-black/5">
                <th scope="col" className="w-[27%] px-4 py-3 sm:px-7" />
                <th scope="col" className="text-muted px-4 py-3 text-xs font-medium sm:px-7">
                  Haircut Only
                </th>
                <th scope="col" className="text-muted px-4 py-3 text-xs font-medium sm:px-7">
                  Haircut + Hair Wash
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              <tr className="bg-white">
                <th scope="row" className="px-4 py-5 text-base font-bold text-navy sm:px-7">
                  👦 Boys
                </th>
                <td className="text-price px-4 py-5 text-2xl sm:px-7">{formatInr(PRICING.boysHaircut)}</td>
                <td className="text-price px-4 py-5 text-2xl sm:px-7">{formatInr(PRICING.boysHaircutWithWash)}</td>
              </tr>
              <tr className="bg-white">
                <th scope="row" className="px-4 py-5 text-base font-bold text-navy sm:px-7">
                  👧 Girls
                </th>
                <td className="text-price px-4 py-5 text-2xl sm:px-7">{formatInr(PRICING.girlsHaircut)}</td>
                <td className="text-price px-4 py-5 text-2xl sm:px-7">{formatInr(PRICING.girlsHaircutWithWash)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted px-4 pb-5 pt-3 text-sm font-medium sm:px-7">
          Haircut-only prices do not include hair wash.
        </p>
      </div>
      <div className="mt-5 flex justify-center">
        <CallToBook />
      </div>
      <div className="mt-6 lg:mt-8">
        <BeforeAfterSlider />
      </div>

      <div className="mt-10 lg:mt-12">
        <h2
          id="parent-child-title"
          className="section-heading text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]"
        >
          {heading}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.label}
              className="price-card bg-white px-5 py-4 sm:px-6 sm:py-5"
            >
              <p className="text-[1.02rem] font-bold leading-snug text-navy">
                {item.label}
              </p>
              <p className="text-price mt-2 text-2xl font-bold leading-none">
                {formatInr(item.price)}*
              </p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-[52ch] text-center text-sm font-medium leading-relaxed text-body">
          {footnote}
        </p>
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
        <TrustStripSection />
        <ExperienceSection />
        <ParentsSection />
        <ComfortableSection />
        <PricingSection />
        <FirstHaircutSection />
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