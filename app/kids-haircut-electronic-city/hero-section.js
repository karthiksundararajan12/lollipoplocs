'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CalendarDays, ChevronRight, Heart, Scissors, Sparkles, Star, ToyBrick } from 'lucide-react';
import {
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  PRICING,
  formatInr,
} from '../../lib/site-config';
import { PHONE_HREF, PHONE_NUMBER, WHATSAPP_HREF } from './contact-details';
import { BTN_PRIMARY, BTN_WHATSAPP, GoogleLogo } from './ui-primitives';

const HERO_PHOTO = {
  src: '/images/gallery-kids-haircut.webp',
  alt: 'Kids haircut in Electronic City — stylist giving a child a haircut in a themed chair at Lollipop Locs',
};

const HERO_FEATURES = [
  { label: 'Patient Stylists', Icon: Scissors, circle: 'md:bg-pink-100 md:text-pink-500', mobileIcon: 'text-[#EC2F7B]', desktopBg: 'bg-pink-100', desktopIcon: 'text-pink-500' },
  { label: 'Themed Chairs', Icon: Sparkles, circle: 'md:bg-teal-100 md:text-teal-500', mobileIcon: 'text-[#9333EA]', desktopBg: 'bg-teal-100', desktopIcon: 'text-teal-500' },
  { label: 'Play Area', Icon: ToyBrick, circle: 'md:bg-amber-100 md:text-amber-500', mobileIcon: 'text-[#E11D48]', desktopBg: 'bg-yellow-100', desktopIcon: 'text-yellow-500' },
  { label: 'Kid-Friendly', Icon: Heart, circle: 'md:bg-purple-100 md:text-purple-500', mobileIcon: 'text-[#A855F7]', desktopBg: 'bg-purple-100', desktopIcon: 'text-purple-500' },
];

function WhatsAppIcon({ className = 'h-5 w-5 shrink-0' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
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

const HeroCta = ({ href, variant, icon, label }) => {
  const mobileStyles =
    variant === 'whatsapp'
      ? 'bg-[#16A765] text-white'
      : 'bg-[#EC2F7B] text-white';
  const desktopStyles =
    variant === 'whatsapp'
      ? 'md:bg-green-500 md:text-white md:shadow-none'
      : 'md:bg-pink-500 md:shadow-none';

  return (
    <a
      href={href}
      className={`inline-flex h-12 w-full items-center justify-center gap-1.5 overflow-visible whitespace-nowrap rounded-full px-3 text-white shadow-md max-[340px]:px-2 ${mobileStyles} ${desktopStyles} md:h-11 md:w-auto md:max-w-none md:shrink-0 md:justify-center md:gap-2 md:px-3 md:py-0 md:text-[13px]`}
    >
      {icon}
      <span className="text-[12px] font-bold leading-none max-[340px]:text-[11px] md:text-[13px] md:leading-normal">
        {label}
      </span>
      <ChevronRight className="hidden h-4 w-4 shrink-0 md:inline" aria-hidden="true" />
    </a>
  );
};

function HeroGoogleRating() {
  return (
    <div className="mt-3 flex flex-col items-start gap-1 md:mt-0 md:inline-flex md:w-fit md:gap-0.5 md:rounded-2xl md:bg-white md:px-2.5 md:py-1.5 md:shadow-md">
      <div className="flex items-center gap-2">
        <GoogleLogo className="h-6 w-6 shrink-0 md:h-5 md:w-5" />
        <span className="text-xl font-extrabold text-[#2A1F6B] md:text-base md:font-bold md:text-indigo-950">{GOOGLE_RATING}</span>
        <span aria-hidden="true" className="inline-flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400 md:h-3.5 md:w-3.5" />
          ))}
        </span>
      </div>
      <p className="whitespace-nowrap text-[13px] font-semibold text-[#2A1F6B] md:text-[11px] md:font-normal md:text-slate-600">
        {GOOGLE_REVIEW_COUNT} Google Reviews
      </p>
    </div>
  );
}

function HeroPriceRow() {
  return (
    <div className="max-md:mt-0 md:mt-0 md:px-4 md:py-4 lg:mt-0 lg:p-0">
      <div className="mb-4 grid grid-cols-2 gap-3 md:mb-0 lg:flex lg:flex-row lg:justify-start lg:gap-4">
        <div className="rounded-2xl border border-[#CFE6FA] bg-[#E8F4FF] p-3 md:border-sky-200 md:bg-sky-100 md:px-3 md:py-2 md:text-sky-900 lg:w-full lg:max-w-sm">
          <p className="text-sm font-bold text-[#2A1F6B] md:font-semibold md:text-inherit">Boys Haircut</p>
          <p className="text-2xl font-extrabold text-[#2A1F6B] md:text-xl md:text-inherit">{formatInr(PRICING.boysHaircut)}</p>
        </div>
        <div className="rounded-2xl border border-[#F9CBDD] bg-[#FFE4EF] p-3 md:border-pink-200 md:bg-pink-100 md:px-3 md:py-2 md:text-pink-900 lg:w-full lg:max-w-sm">
          <p className="text-sm font-bold text-[#2A1F6B] md:font-semibold md:text-inherit">Girls Haircut</p>
          <p className="text-2xl font-extrabold text-[#2A1F6B] md:text-xl md:text-inherit">{formatInr(PRICING.girlsHaircut)}</p>
        </div>
      </div>
      <p className="mt-0 text-center text-[11px] text-slate-600 md:mt-2 md:text-left lg:text-left">
        Haircut-only prices. Hair wash not included.
      </p>
    </div>
  );
}

function HeroFeatureStrip() {
  return (
    <ul className="max-md:mt-0 grid grid-cols-4 gap-1 max-md:gap-2 text-center md:relative md:z-30 md:mt-0 md:gap-2 md:rounded-t-3xl md:bg-orange-50 md:px-3 md:py-5">
      {HERO_FEATURES.map(({ label, Icon, desktopBg, desktopIcon }) => (
        <li key={label} className="flex flex-col items-center gap-1.5 text-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full md:h-12 md:w-12 ${desktopBg}`}
          >
            <Icon className={`h-5 w-5 ${desktopIcon}`} aria-hidden="true" />
          </div>
          <span className="text-[11px] font-semibold leading-tight text-[#2A1F6B] md:text-xs md:text-indigo-950">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}

function HeroFeaturesSection() {
  return (
    <section
      aria-label="Salon features"
      className="mt-0 hidden w-full bg-orange-50 py-8 md:py-12 lg:block"
    >
      <div className="w-full max-w-7xl px-6 lg:px-12">
        <ul className="grid w-full grid-cols-4 gap-6">
          {HERO_FEATURES.map(({ label, Icon, desktopBg, desktopIcon }) => (
            <li key={label} className="flex flex-col items-center gap-2 text-center">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${desktopBg}`}
              >
                <Icon className={`h-6 w-6 ${desktopIcon}`} aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold leading-tight text-indigo-950">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HeroSection() {
  const heroIntro =
    'Welcome to Lollipop Locs, a colourful kids salon in Electronic City with patient stylists, themed haircut chairs, toys and play, designed to make haircut time easier for little ones and parents.';

  return (
    <>
      <section
        id="top"
        aria-labelledby="hero-title"
        className="relative flex w-full max-md:gap-0 flex-col scroll-mt-16 bg-[#FFF5F9] max-md:mx-0 max-md:mb-0 max-md:mt-0 md:grid md:h-auto md:min-h-0 md:grid-cols-[minmax(0,42%)_minmax(0,58%)] md:grid-rows-[auto_auto_auto] md:items-stretch md:overflow-visible md:bg-[#FFF8FB] md:scroll-mt-[4.5rem] lg:grid-rows-[auto]"
      >
        <div className="relative order-1 h-[300px] w-full overflow-hidden md:order-none md:col-start-2 md:row-start-1 md:aspect-auto md:h-auto md:min-h-[640px] lg:h-full lg:min-h-[600px]">
          <Image
            src={HERO_PHOTO.src}
            alt={HERO_PHOTO.alt}
            fill
            priority
            sizes="(min-width: 768px) 58vw, 100vw"
            quality={90}
            className="object-cover object-[75%_60%] md:max-lg:object-[55%_42%] lg:object-[center_75%]"
          />
          <svg
            aria-hidden
            className="absolute bottom-0 left-0 h-6 w-full md:hidden"
            viewBox="0 0 375 24"
            preserveAspectRatio="none"
          >
            <path d="M0 18C60 6 120 0 187.5 8C255 16 315 22 375 10V24H0Z" fill="#FFF5F9" />
          </svg>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-[28%] md:block"
            style={{
              background:
                'linear-gradient(to right, rgba(255,248,251,0.96) 0%, rgba(255,248,251,0.55) 38%, rgba(255,248,251,0.18) 68%, rgba(255,248,251,0) 100%)',
            }}
          />
        </div>

        <div className="contents md:col-start-1 md:row-start-1 md:flex md:w-full md:max-w-7xl md:flex-col md:justify-end md:gap-3 md:px-8 md:pt-12 md:pb-0 lg:px-12">
          <div className="order-2 px-4 pt-3 md:order-none md:p-0">
            <h1
              id="hero-title"
              className="font-heading font-extrabold leading-[1.1] md:leading-[0.95]"
            >
              <span className="block text-[2rem] text-[#EC2F7B] md:text-6xl md:leading-none md:text-pink-600">
                Kids Haircut
              </span>
              <span className="block text-[2rem] text-[#2A1F6B] md:mt-0 md:inline md:text-4xl md:text-indigo-950">
                in Electronic City,{' '}
              </span>
              <span className="block text-[2rem] text-[#2A1F6B] md:inline md:text-4xl md:text-indigo-950">
                Bangalore
              </span>
            </h1>
            <p className="mt-2 text-sm font-bold text-[#EC2F7B] md:mt-0 md:max-w-md md:text-2xl md:text-pink-600">
              Haircut Time, Made Happier for Kids 🍭✂️
            </p>
            <p className="hidden max-w-xl text-sm font-semibold leading-relaxed text-[#1E3A8A] md:block md:text-lg lg:text-xl">
              {heroIntro}
            </p>

            <HeroGoogleRating />
          </div>

          <div className="order-4 mt-4 mb-4 grid w-full grid-cols-2 gap-3 px-4 md:order-none md:my-0 md:flex md:w-auto md:flex-row md:flex-wrap md:items-center md:gap-4 md:px-0">
            <HeroCta
              href={PHONE_HREF}
              variant="book"
              icon={<CalendarDays className="h-4 w-4 shrink-0 md:h-5 md:w-5" aria-hidden="true" />}
              label="Book an Appointment"
            />
            <HeroCta
              href={WHATSAPP_HREF}
              variant="whatsapp"
              icon={
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-white md:h-5 md:w-5 md:text-current" />
              }
              label="Chat on WhatsApp"
            />
          </div>

          <div className="hidden lg:block lg:w-full lg:pt-2">
            <HeroPriceRow />
          </div>
        </div>

        <div className="order-3 mt-4 px-4 md:order-none md:col-span-2 md:row-start-3 md:mt-0 md:px-0 lg:hidden">
          <HeroPriceRow />
        </div>

        <div className="order-5 max-md:pt-0 max-md:pb-4 px-4 md:order-none md:col-span-2 md:row-start-2 md:px-0 md:pb-0 lg:hidden">
          <HeroFeatureStrip />
        </div>

        <p className="order-6 w-full bg-[#FFF5F9] px-4 py-4 text-[1.375rem] font-semibold leading-snug text-[#2A1F6B] max-md:mb-0 max-md:mt-0 md:hidden">
          {heroIntro}
        </p>
      </section>

      <HeroFeaturesSection />
    </>
  );
}

export function MobileBookingBar() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBar(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!showBar) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-black/5 bg-white/95 px-3 pt-2 shadow-[0_-8px_24px_rgba(27,42,92,0.15)] backdrop-blur sm:hidden">
      <a
        href={PHONE_HREF}
        className={`${BTN_PRIMARY} h-11 px-4 text-xs`}
        aria-label={`Call Lollipop Locs at ${PHONE_NUMBER} to book a kids haircut`}
      >
        <PhoneIcon />
        Call to Book
      </a>
      <a
        href={WHATSAPP_HREF}
        className={`${BTN_WHATSAPP} h-11 px-4 text-xs`}
        aria-label="WhatsApp Lollipop Locs to book a kids haircut"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
      <div className="col-span-2 h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
