import Image from 'next/image';
import {
  BUSINESS,
  CERTIFICATE_IMAGE,
  FAQ_ITEMS,
  FIRST_HAIRCUT_COPY,
  GOOGLE_REVIEWS,
  GOOGLE_REVIEWS_AGGREGATE,
  PARENT_CHILD_COMBOS,
  PRICING,
  SECTION_TONES,
  formatFullAddress,
  formatHoursDisplay,
  formatInr,
} from '../../lib/site-config';
import { GoogleReviews } from './section-interactions';
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

export function ParentChildSection() {
  const { heading, items, footnote } = PARENT_CHILD_COMBOS;

  return (
    <Section
      id="parent-child"
      ariaLabelledby="parent-child-title"
      tone={SECTION_TONES.parentChild}
    >
      <h2
        id="parent-child-title"
        className="section-heading text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]"
      >
        {heading}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
    </Section>
  );
}

export function FirstHaircutSection() {
  const copy = FIRST_HAIRCUT_COPY;
  const keepsakePrice = formatInr(PRICING.certificate);

  return (
    <Section
      id="first-time"
      ariaLabelledby="first-haircut-title"
      tone={SECTION_TONES.firstHaircut}
    >
      <article className="mx-auto max-w-[760px]">
        <h2
          id="first-haircut-title"
          className="section-heading text-2xl font-bold leading-tight sm:text-[1.75rem]"
        >
          {copy.heading}
        </h2>
          <p className="mt-4 text-[1.02rem] leading-[1.65]">
            {copy.introBeforeBold}
            <strong>{copy.introBold}</strong>
            {copy.introAfterBold}
          </p>
          <p className="mt-3 text-[1.02rem] leading-[1.65]">{copy.body}</p>
          <h3 className="text-accent mt-6 text-lg font-bold leading-snug sm:text-xl">
            {copy.subheading}
          </h3>
          <p className="mt-4 text-[1.02rem] leading-[1.65]">
            {copy.keepsakeBeforeBold}
            <strong>
              {copy.keepsakeBold} — {keepsakePrice}
              {copy.keepsakeBoldSuffix}
            </strong>
            {copy.keepsakeAfterBold}
          </p>
          <ul className="mt-4 space-y-2.5 text-[1.02rem] leading-[1.65]">
            {copy.keepsakeItems.map((item) => (
              <li key={item.bold} className="flex gap-2">
                <span aria-hidden="true">{item.emoji}</span>
                <span>
                  {item.beforeBold}
                  <strong>{item.bold}</strong>
                  {item.afterBold}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 font-bold leading-relaxed">{copy.tagline}</p>
          <p className="mt-2 text-sm italic leading-relaxed text-body">
            {copy.disclaimer}
          </p>
        <a href={PHONE_HREF} className={`${BTN_PRIMARY} mt-6`}>
          {copy.callToBookLabel}
        </a>
      </article>
    </Section>
  );
}

export function CertificateSection() {
  return (
    <Section ariaLabel="First haircut certificate" tone={SECTION_TONES.certificate}>
      <article className="mx-auto grid max-w-[760px] gap-5 md:grid-cols-[1fr_160px] md:items-center">
        <div>
          <h2 className="section-heading text-2xl font-bold leading-tight sm:text-[1.75rem]">
            Personalised First Haircut Certificate
          </h2>
            <p className="mt-4 font-bold leading-relaxed">
              Optional add-on — {formatInr(PRICING.certificate)} extra
            </p>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              Haircut charged separately.
            </p>
          </div>
          <div className="price-card relative mx-auto aspect-[4/5] w-full max-w-[190px] overflow-hidden border-2 border-brand bg-white md:max-w-none">
            <Image
              src={CERTIFICATE_IMAGE}
              alt="Baby tonsure and first haircut certificate at Lollipop Locs, Electronic City"
              width={760}
              height={950}
              loading="lazy"
              sizes="(max-width: 768px) 190px, 160px"
              className="h-full w-full object-cover"
            />
          </div>
        <CallToBook className="md:col-span-2 md:justify-self-start" />
      </article>
    </Section>
  );
}

export function ReviewsSection() {
  return (
    <Section id="reviews" ariaLabelledby="reviews-title" tone="pinkDeep">
      <div className="mb-6 text-center lg:mb-8">
        <h2
          id="reviews-title"
          className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-navy"
        >
          Loved by Parents &amp; Little Ones 💛
        </h2>
        <p className="mx-auto mt-3 max-w-[42ch] text-[1.0625rem] font-medium leading-[1.6] text-body">
          Real reviews from Google
        </p>

        {GOOGLE_REVIEWS_AGGREGATE ? (
          <div className="mt-4 flex justify-center">
            <GoogleRatingBadge
              rating={String(GOOGLE_REVIEWS_AGGREGATE.value)}
              label={`on Google · ${GOOGLE_REVIEWS_AGGREGATE.count} reviews`}
            />
          </div>
        ) : (
          <div className="mt-4 flex justify-center">
            <GoogleRatingBadge />
          </div>
        )}
      </div>

      <div className="min-w-0">
        <GoogleReviews reviews={GOOGLE_REVIEWS} />
      </div>
    </Section>
  );
}

export function QuestionsSection() {
  return (
    <Section id="questions" ariaLabelledby="questions-title" tone="white">
      <h2
        id="questions-title"
        className="section-heading text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]"
      >
        Quick Questions Parents Ask
      </h2>
      <div className="mx-auto max-w-[900px] space-y-3">
        {FAQ_ITEMS.map(({ question, answer }) => (
          <details
            key={question}
            className="price-card group overflow-hidden bg-white"
          >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 font-bold leading-snug marker:hidden focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                <span>{question}</span>
                <span
                  aria-hidden="true"
                  className="text-accent flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blush text-xl leading-none transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="border-t border-black/5 px-4 py-4 text-[0.98rem] leading-[1.7] sm:px-6">
                {answer}
              </p>
            </details>
        ))}
      </div>
    </Section>
  );
}

export function LocationSection() {
  const address = formatFullAddress();
  const hours = formatHoursDisplay();

  return (
    <Section id="location" ariaLabelledby="location-title" tone={SECTION_TONES.visitUs}>
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
              <GoogleRatingBadge className="w-full justify-center sm:w-auto" />
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
      className="pb-20 sm:pb-8"
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
          <p className="price-card bg-skyfade px-4 py-3 text-left font-bold text-navy">
            👦 Boys Haircut Only —{' '}
            <span className="text-price text-xl">{formatInr(PRICING.boysHaircut)}</span>
          </p>
          <p className="price-card bg-tint-pink px-4 py-3 text-left font-bold text-navy">
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
