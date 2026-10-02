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

function ContactButton({ href, tone, children, icon, className = '', ...props }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold leading-none text-white shadow-[0_8px_18px_rgba(46,32,42,0.12)] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a] ${tone} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </a>
  );
}

function CallToBook({ className = '' }) {
  return (
    <ContactButton
      href={PHONE_HREF}
      tone="bg-[#c52f76] hover:bg-[#ad2868]"
      icon={<PhoneIcon />}
      className={className}
    >
      Call to Book
    </ContactButton>
  );
}

function WhatsAppToBook({ className = '' }) {
  return (
    <ContactButton
      href={WHATSAPP_HREF}
      tone="bg-[#00764c] hover:bg-[#006b45]"
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
      <div className="mx-auto max-w-[760px]">
        <h2
          id="parent-child-title"
          className="text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em]"
        >
          {heading}
        </h2>
        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.label}
              className="card-surface rounded-[1.35rem] px-5 py-4 shadow-[0_10px_28px_rgba(82,42,64,0.07)] sm:px-6 sm:py-5"
            >
              <p className="text-[1.02rem] font-semibold leading-snug">
                {item.label}
              </p>
              <p className="text-price mt-2 text-2xl font-bold leading-none">
                {formatInr(item.price)}*
              </p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-[52ch] text-center text-sm font-medium leading-relaxed text-[#2e202a] sm:mt-6">
          {footnote}
        </p>
      </div>
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
      <div className="mx-auto max-w-[760px]">
        <article className="card-surface rounded-[1.8rem] p-5 shadow-[0_16px_40px_rgba(52,83,94,0.07)] sm:p-7">
          <h2
            id="first-haircut-title"
            className="text-2xl font-semibold leading-tight sm:text-[1.75rem]"
          >
            {copy.heading}
          </h2>
          <p className="mt-4 text-[1.02rem] leading-[1.65]">
            {copy.introBeforeBold}
            <strong>{copy.introBold}</strong>
            {copy.introAfterBold}
          </p>
          <p className="mt-3 text-[1.02rem] leading-[1.65]">{copy.body}</p>
          <h3 className="text-accent mt-6 text-lg font-semibold leading-snug sm:text-xl">
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
          <p className="mt-2 text-sm italic leading-relaxed text-[#2e202a]">
            {copy.disclaimer}
          </p>
          <a
            href={PHONE_HREF}
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#c52f76] px-6 py-3 text-sm font-bold leading-none text-white shadow-[0_8px_18px_rgba(46,32,42,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ad2868] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a]"
          >
            {copy.callToBookLabel}
          </a>
        </article>
      </div>
    </Section>
  );
}

export function CertificateSection() {
  return (
    <Section ariaLabel="First haircut certificate" tone="white">
      <div className="mx-auto max-w-[760px]">
        <article className="card-surface grid gap-5 rounded-[1.8rem] p-5 shadow-[0_16px_40px_rgba(52,83,94,0.07)] sm:p-7 md:grid-cols-[1fr_160px] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold leading-tight sm:text-[1.75rem]">
              Personalised First Haircut Certificate
            </h2>
            <p className="mt-4 font-bold leading-relaxed">
              Optional add-on — {formatInr(PRICING.certificate)} extra
            </p>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              Haircut charged separately.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[190px] overflow-hidden rounded-[1.2rem] border-4 border-white shadow-[0_12px_30px_rgba(82,42,64,0.14)] md:max-w-none">
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
      </div>
    </Section>
  );
}

export function ReviewsSection() {
  return (
    <Section id="reviews" ariaLabelledby="reviews-title" tone="cream">
      <div className="mx-auto max-w-[1120px]">
        <h2
          id="reviews-title"
          className="text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em]"
        >
          Loved by Parents &amp; Little Ones 💛
        </h2>
        <p className="mx-auto mt-3 max-w-[42ch] text-center text-[1.0625rem] font-medium leading-[1.6] text-[#111827]">
          Real reviews from Google
        </p>

        {GOOGLE_REVIEWS_AGGREGATE ? (
          <div className="mt-4 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2">
              <span aria-hidden="true" className="text-[#946200]">
                ★
              </span>
              <span className="text-sm font-bold text-[#111827]">
                {GOOGLE_REVIEWS_AGGREGATE.value} on Google ·{' '}
                {GOOGLE_REVIEWS_AGGREGATE.count} reviews
              </span>
            </div>
          </div>
        ) : null}

        <div className="mt-7 min-w-0 sm:mt-9">
          <GoogleReviews reviews={GOOGLE_REVIEWS} />
        </div>
      </div>
    </Section>
  );
}

export function QuestionsSection() {
  return (
    <Section id="questions" ariaLabelledby="questions-title" tone="white">
      <div className="mx-auto max-w-[900px]">
        <h2
          id="questions-title"
          className="text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em]"
        >
          Quick Questions Parents Ask
        </h2>
        <div className="mt-7 space-y-3 sm:mt-9">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <details
              key={question}
              className="card-surface group overflow-hidden rounded-[1.1rem] shadow-[0_8px_22px_rgba(82,42,64,0.045)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 font-bold leading-snug marker:hidden focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#c52f76] sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                <span>{question}</span>
                <span
                  aria-hidden="true"
                  className="text-accent flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pastel-blush text-xl leading-none transition-transform group-open:rotate-45"
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
      </div>
    </Section>
  );
}

export function LocationSection() {
  const address = formatFullAddress();
  const hours = formatHoursDisplay();

  return (
    <Section id="location" ariaLabelledby="location-title" tone={SECTION_TONES.visitUs}>
      <div className="mx-auto max-w-[1120px]">
        <h2
          id="location-title"
          className="text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em]"
        >
          Visit Lollipop Locs – Electronic City 📍
        </h2>
        <div className="mt-7 grid gap-5 sm:mt-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">
          <div className="card-surface rounded-[1.8rem] p-5 shadow-[0_14px_36px_rgba(53,73,96,0.07)] sm:p-7">
            <p className="text-accent text-xl font-semibold leading-snug sm:text-2xl">
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
                  className="mt-2 block hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c52f76]"
                >
                  {address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
                <p className="text-muted mt-2 font-bold">{address.floorNote}</p>
              </div>
              <p className="font-medium">⭐ 4.9 on Google</p>
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
                tone="bg-white text-[#c52f76] ring-1 ring-black/5 hover:bg-pastel-blush"
                icon={<MapPinIcon />}
                className="card-surface !text-[#c52f76]"
              >
                Get Directions
              </ContactButton>
            </div>
          </div>

          <div className="card-surface overflow-hidden rounded-[1.8rem] shadow-[0_14px_36px_rgba(53,73,96,0.07)]">
            <iframe
              title="Lollipop Locs location"
              src={BUSINESS.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] min-h-[230px] w-full sm:min-h-[300px] lg:aspect-auto lg:min-h-[360px]"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export function FinalCallToAction() {
  return (
    <Section
      ariaLabelledby="final-cta-title"
      className="pb-28 sm:pb-16"
      tone="white"
    >
      <div className="card-surface mx-auto max-w-[900px] rounded-[2rem] px-5 py-8 text-center shadow-[0_18px_48px_rgba(82,42,64,0.1)] sm:px-10 sm:py-12">
        <h2
          id="final-cta-title"
          className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em]"
        >
          Ready for Their Next Haircut? 🍭✂️
        </h2>
        <p className="mx-auto mt-4 max-w-[58ch] text-[1.0625rem] leading-[1.6] sm:text-lg">
          A little play. A little patience. And a haircut they&apos;ll look great
          in.
        </p>
        <div className="mx-auto mt-6 grid max-w-[560px] gap-3 sm:grid-cols-2">
          <p className="card-surface rounded-[1.1rem] px-4 py-3 text-left font-bold">
            👦 Boys Haircut Only —{' '}
            <span className="text-price text-xl">{formatInr(PRICING.boysHaircut)}</span>
          </p>
          <p className="card-surface rounded-[1.1rem] px-4 py-3 text-left font-bold">
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
