import Image from 'next/image';
import {
  BUSINESS,
  CERTIFICATE_IMAGE,
  FIRST_TIME_EXPERIENCES,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS,
  PARENT_CHILD_COMBOS,
  PRICING,
  SECTION_TONES,
  formatFullAddress,
  formatHoursDisplay,
  formatInr,
} from '../../lib/site-config';
import { FaqAccordion } from './faq-accordion';
import { GoogleReviews } from './section-interactions';
import { ProofBadge } from './proof-badge';
import {
  PHONE_HREF,
  PHONE_NUMBER,
  WHATSAPP_HREF,
} from './contact-details';
import { Section } from './section';
import {
  BTN_PRIMARY,
  BTN_SECONDARY,
  BTN_WHATSAPP,
  GoogleRatingBadge,
} from './ui-primitives';

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

function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M19 10.2c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ContactButton({ href, variant = 'primary', children, icon, className = '', ...props }) {
  const variantClass =
    variant === 'whatsapp'
      ? BTN_WHATSAPP
      : variant === 'secondary'
        ? BTN_SECONDARY
        : BTN_PRIMARY;

  return (
    <a href={href} className={`${variantClass} ${className}`} {...props}>
      {icon}
      {children}
    </a>
  );
}

function CallToBook({ className = '' }) {
  return (
    <ContactButton href={PHONE_HREF} variant="primary" icon={<PhoneIcon />} className={className}>
      Call to Book
    </ContactButton>
  );
}

function WhatsAppToBook({ className = '' }) {
  return (
    <ContactButton
      href={WHATSAPP_HREF}
      variant="whatsapp"
      icon={<WhatsAppIcon />}
      className={className}
    >
      WhatsApp
    </ContactButton>
  );
}

function CallToBookExperiences() {
  return (
    <a href={PHONE_HREF} className={`${BTN_PRIMARY} w-full`}>
      {FIRST_TIME_EXPERIENCES.callToBookLabel}
    </a>
  );
}

export function FirstTimeExperiencesSection() {
  const copy = FIRST_TIME_EXPERIENCES;
  const combos = PARENT_CHILD_COMBOS.items;
  const comboFromPrice = Math.min(...combos.map((item) => item.price));

  return (
    <Section
      id="first-time"
      ariaLabelledby="first-time-title"
      dividerBefore
      tone={SECTION_TONES.firstHaircut}
    >
      <h2
        id="first-time-title"
        className="section-heading text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]"
      >
        {copy.heading}
      </h2>
      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-6">
        <article className="price-card flex h-full flex-col bg-[#FFEBDD] p-4 md:p-6">
          <h3 className="text-xl font-bold leading-snug text-navy sm:text-2xl">
            {copy.watch.title}
          </h3>
          <p className="text-accent mt-2 font-bold leading-snug">
            {copy.watch.subheading}
          </p>
          <p className="mt-3 text-[0.98rem] leading-[1.65] md:text-[1.02rem]">
            {copy.watch.body}
          </p>
          <p className="mt-4 font-bold leading-snug">{copy.watch.bold}</p>
          <details className="group mt-4 overflow-hidden rounded-xl border border-black/5 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-3 py-3 font-bold leading-snug marker:hidden [&::-webkit-details-marker]:hidden">
              <span>
                {PARENT_CHILD_COMBOS.heading} from {formatInr(comboFromPrice)}
              </span>
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFE0EC] text-lg leading-none text-[#E91E7A] transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <ul className="space-y-2 border-t border-black/5 px-3 py-3 text-[0.98rem] leading-relaxed">
              {combos.map((item) => (
                <li key={item.label}>
                  {item.label} — <span className="font-bold text-navy">{formatInr(item.price)}</span>
                </li>
              ))}
            </ul>
          </details>
          <div className="mt-auto pt-5">
            <CallToBookExperiences />
          </div>
        </article>

        <article className="price-card flex h-full flex-col bg-white p-4 md:p-6">
          <div className="mb-4 overflow-hidden rounded-2xl bg-[#FFF8FB]">
            <Image
              src={CERTIFICATE_IMAGE}
              alt="Lollipop Locs First Haircut Certificate, a personalised Mundan Ceremony card with a lollipop charm and a pink potli for the first cut of hair"
              width={760}
              height={950}
              loading="lazy"
              sizes="(max-width: 768px) 90vw, 400px"
              className="mx-auto h-auto w-full max-w-[280px] object-contain"
            />
          </div>
          <h3 className="text-xl font-bold leading-snug text-navy sm:text-2xl">
            {copy.firstHaircut.title}
          </h3>
          <p className="mt-3 text-[0.98rem] leading-[1.65] md:text-[1.02rem]">
            {copy.firstHaircut.body}
          </p>
          <p className="text-accent mt-4 font-bold leading-snug">
            {copy.firstHaircut.bold}
          </p>
          <p className="mt-3 font-extrabold leading-relaxed text-navy">
            {copy.firstHaircut.certificateLabel} — {formatInr(PARENT_CHILD_COMBOS.certificate)} extra
          </p>
          <p className="text-muted mt-1 text-sm leading-relaxed">
            {copy.firstHaircut.note}
          </p>
          <div className="mt-auto pt-5">
            <CallToBookExperiences />
          </div>
        </article>
      </div>
    </Section>
  );
}

export function ReviewsSection() {
  return (
    <Section
      id="reviews"
      ariaLabelledby="reviews-title"
      dividerBefore
      tone={SECTION_TONES.reviews}
    >
      <div className="mb-6 text-center lg:mb-8">
        <h2
          id="reviews-title"
          className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-navy"
        >
          Trusted by Families Across Bangalore
        </h2>
        <p className="mx-auto mt-3 max-w-[42ch] text-[1.0625rem] font-medium leading-[1.6] text-body">
          Real reviews from Google
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <GoogleRatingBadge
            rating={GOOGLE_RATING}
            label={`on Google · ${GOOGLE_REVIEW_COUNT} reviews`}
            starsSize="review"
          />
          <ProofBadge>Google Rated {GOOGLE_RATING}</ProofBadge>
        </div>
      </div>

      <div className="min-w-0">
        <GoogleReviews reviews={GOOGLE_REVIEWS} mapsLink={BUSINESS.mapsLink} />
      </div>
    </Section>
  );
}

export function QuestionsSection() {
  return (
    <Section
      id="questions"
      ariaLabelledby="questions-title"
      dividerBefore
      tone={SECTION_TONES.faq}
    >
      <h2
        id="questions-title"
        className="section-heading text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]"
      >
        Quick Questions Parents Ask
      </h2>
      <FaqAccordion />
    </Section>
  );
}

export function LocationSection() {
  const address = formatFullAddress();
  const hours = formatHoursDisplay();

  return (
    <Section
      id="location"
      ariaLabelledby="location-title"
      dividerBefore
      tone={SECTION_TONES.visitUs}
    >
      <h2
        id="location-title"
        className="section-heading text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]"
      >
        Visit Lollipop Locs – Electronic City 📍
      </h2>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
        <div className="price-card bg-white p-5 sm:p-6">
            <p className="text-accent text-xl font-bold leading-snug sm:text-2xl">
              {BUSINESS.name}
            </p>
            <p className="text-muted mt-1 font-bold">{BUSINESS.tagline}</p>
            <div className="mt-5 space-y-3 text-[0.98rem] leading-relaxed">
              <div className="card-surface rounded-xl px-4 py-3 font-semibold">
                <p className="font-bold">📍 Address</p>
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
                <p className="text-muted mt-2 font-bold">{address.floorNote}</p>
              </div>
              <GoogleRatingBadge
                label={`on Google · ${GOOGLE_REVIEW_COUNT} reviews`}
                className="w-full justify-center sm:w-auto"
              />
              <div className="card-surface rounded-xl px-4 py-3 font-semibold">
                <p className="font-bold">🕐 Store hours</p>
                <ul className="mt-2 space-y-1">
                  {hours.map(({ label, time }) => (
                    <li key={label}>
                      <span className="font-medium">{label}:</span> {time}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="card-surface rounded-xl px-4 py-3 font-semibold">
                📞{' '}
                <a href={PHONE_HREF} className="text-accent font-bold hover:underline">
                  {PHONE_NUMBER}
                </a>
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallToBook />
              <WhatsAppToBook />
              <ContactButton
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                icon={<MapPinIcon />}
              >
                Get Directions
              </ContactButton>
            </div>
          </div>

        <div className="price-card overflow-hidden bg-white">
          <iframe
            title="Lollipop Locs location"
            src={BUSINESS.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] w-full lg:aspect-auto lg:min-h-[320px]"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
}

export function FinalCallToAction() {
  return (
    <Section
      ariaLabelledby="final-cta-title"
      dividerBefore
      tone={SECTION_TONES.finalCta}
    >
      <div className="price-card mx-auto max-w-[900px] bg-white px-5 py-6 text-center sm:px-8 sm:py-8">
        <h2
          id="final-cta-title"
          className="section-heading text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]"
        >
          Ready for Their Next Haircut? 🍭✂️
        </h2>
        <p className="mx-auto mt-4 max-w-[58ch] text-[1.0625rem] leading-[1.6] sm:text-lg">
          A little play. A little patience. And a haircut they&apos;ll look great
          in.
        </p>
        <div className="mx-auto mt-6 grid max-w-[560px] gap-3 sm:grid-cols-2">
          <p className="price-card bg-white px-4 py-3 text-left font-bold text-navy">
            👦 Boys Haircut Only —{' '}
            <span className="text-price text-xl">{formatInr(PRICING.boysHaircut)}</span>
          </p>
          <p className="price-card bg-white px-4 py-3 text-left font-bold text-navy">
            👧 Girls Haircut Only —{' '}
            <span className="text-price text-xl">{formatInr(PRICING.girlsHaircut)}</span>
          </p>
        </div>
        <p className="text-muted mt-4 text-sm leading-relaxed">
          Hair wash not included. Haircut + hair wash options available.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallToBook />
          <WhatsAppToBook />
        </div>
      </div>
    </Section>
  );
}
