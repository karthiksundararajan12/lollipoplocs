import Image from 'next/image';
import { Award, Check, Scissors, Sparkles, Star } from 'lucide-react';
import {
  CERTIFICATE_IMAGE,
  PACKAGE_INCLUDES,
  PRICING,
  PRICING_PACKAGE_IMAGES,
  SECTION_TONES,
  formatInr,
} from '../../lib/site-config';
import { BeforeAfterSlider } from './section-interactions';
import { PricingComparison } from './pricing-comparison';
import { Section } from './section';
import { BTN_PRIMARY } from './ui-primitives';
import { PHONE_HREF } from './contact-details';

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

function IncludedList() {
  return (
    <ul className="mt-4 space-y-2.5">
      <li className="text-xs font-bold uppercase tracking-wide text-[#4B2A8A]/70">
        What&apos;s included
      </li>
      {PACKAGE_INCLUDES.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-[#1A1A2E]">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E2F6EC]">
            <Check className="h-3 w-3 text-[#17963f]" aria-hidden="true" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function PackagePhoto({ src, alt, caption }) {
  return (
    <div className="relative mx-auto mt-4 aspect-[4/3] w-full max-w-[200px] overflow-hidden rounded-2xl">
      <Image src={src} alt={alt} fill sizes="200px" className="object-cover" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1A2E]/70 to-transparent pt-8"
      />
      {caption ? (
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-[#4B2A8A] shadow-sm">
          {caption}
        </span>
      ) : null}
    </div>
  );
}

function PopularRibbon() {
  return (
    <div className="popular-ribbon absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-[#E91E7A] px-3 py-1.5 text-xs font-bold text-white shadow-[0_4px_12px_rgb(233_30_122_/0.4)]">
      <Star className="h-3.5 w-3.5 fill-white" aria-hidden="true" />
      Most Popular
    </div>
  );
}

function PackageCard({
  title,
  icon: Icon,
  price,
  priceNote,
  image,
  featured = false,
  children,
  orderClass = '',
}) {
  return (
    <article
      className={`pricing-package-card relative flex flex-col overflow-visible rounded-3xl bg-white p-5 sm:p-6 ${orderClass} ${
        featured
          ? 'pricing-package-card--featured md:scale-[1.05] md:shadow-[0_16px_48px_rgb(233_30_122_/0.18)]'
          : ''
      }`}
    >
      {featured ? <PopularRibbon /> : null}

      <div
        className={`flex flex-col items-center text-center ${featured ? 'pt-10 md:pt-0' : ''}`}
      >
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-full ${
            featured ? 'bg-[#FFE0EC]' : 'bg-[#EFE8FF]'
          }`}
        >
          <Icon
            className={`h-7 w-7 ${featured ? 'text-[#E91E7A]' : 'text-[#4B2A8A]'}`}
            aria-hidden="true"
          />
        </span>
        <h3 className="mt-3 text-xl font-bold text-[#4B2A8A]">{title}</h3>
        <PackagePhoto src={image.src} alt={image.alt} />
        <p className="mt-4 font-heading text-4xl font-extrabold leading-none text-[#4B2A8A]">
          {typeof price === 'number' ? formatInr(price) : price}
        </p>
        <p className="mt-2 text-xs font-medium leading-snug text-[#1A1A2E]/70">
          {priceNote}
        </p>
      </div>

      <IncludedList />

      {children}

      <a href={PHONE_HREF} className={`${BTN_PRIMARY} mt-5 w-full`}>
        <PhoneIcon />
        Book Appointment
      </a>
    </article>
  );
}

function FirstHaircutExtras() {
  const { firstHaircutBaby } = PRICING_PACKAGE_IMAGES;

  return (
    <div className="mt-4 rounded-2xl border border-[#FFE0EC] bg-[#FFF8FB] p-4">
      <p className="text-sm font-bold text-[#4B2A8A]">
        Personalised First Haircut Certificate
      </p>
      <p className="mt-1 text-xs font-medium text-[#1A1A2E]/80">
        {formatInr(PRICING.certificate)} extra · optional add-on
      </p>
      <div className="relative mx-auto mt-3 h-[120px] w-full max-w-[220px]">
        <div className="absolute left-0 top-0 z-10 aspect-[4/5] w-[100px] overflow-hidden rounded-xl border-2 border-white shadow-md">
          <Image
            src={CERTIFICATE_IMAGE}
            alt="Personalised First Haircut Certificate at Lollipop Locs"
            fill
            sizes="100px"
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 z-20 aspect-square w-[88px] overflow-hidden rounded-full border-4 border-white shadow-lg">
          <Image
            src={firstHaircutBaby.src}
            alt={firstHaircutBaby.alt}
            fill
            sizes="88px"
            className="object-cover"
          />
        </div>
      </div>
      <p className="mt-3 rounded-full bg-[#FFE0EC] px-3 py-2 text-center text-xs font-bold text-[#E91E7A]">
        Memory to keep
      </p>
    </div>
  );
}

export function PricingSection() {
  const images = PRICING_PACKAGE_IMAGES;

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
          Whether you&apos;re searching for a kids haircut near me, planning your
          toddler&apos;s regular trim or choosing a new growing-up style, our stylists
          work with you to understand the haircut you want.
        </p>
        <p className="mt-3 font-medium">
          Have a style in mind? Bring us a reference photo.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-4 lg:mt-10 lg:gap-6">
        <PackageCard
          title="First Haircut Special"
          icon={Award}
          price={`From ${formatInr(PRICING.boysHaircut)}`}
          priceNote={`Haircut only, hair wash not included · Girls from ${formatInr(PRICING.girlsHaircut)}`}
          image={images.firstHaircut}
          featured
          orderClass="order-1 md:order-2"
        >
          <FirstHaircutExtras />
        </PackageCard>

        <PackageCard
          title="Boys Haircut"
          icon={Scissors}
          price={PRICING.boysHaircut}
          priceNote="Haircut only, hair wash not included"
          image={images.boys}
          orderClass="order-2 md:order-1"
        />

        <PackageCard
          title="Girls Haircut"
          icon={Sparkles}
          price={PRICING.girlsHaircut}
          priceNote="Haircut only, hair wash not included"
          image={images.girls}
          orderClass="order-3 md:order-3"
        />
      </div>

      <div className="mt-10 lg:mt-12">
        <h3 className="text-center text-lg font-bold text-[#4B2A8A]">
          Compare packages at a glance
        </h3>
        <div className="mt-4">
          <PricingComparison />
        </div>
      </div>

      <div className="mt-10 lg:mt-12">
        <BeforeAfterSlider />
      </div>
    </Section>
  );
}
