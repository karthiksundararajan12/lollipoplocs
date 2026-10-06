'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CalendarDays, ChevronRight, Star } from 'lucide-react';
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

function PhoneIcon({ className = 'h-5 w-5' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
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

function BoyFaceIcon({ className = 'h-9 w-9 shrink-0 md:h-7 md:w-7' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" className={className}>
      <path fill="#6B4423" d="M9 20c.4-8 4.4-13 11-13s10.6 5 11 13v2H9v-2Z" />
      <circle cx="9.2" cy="23" r="2.3" fill="#FFD3A8" />
      <circle cx="30.8" cy="23" r="2.3" fill="#FFD3A8" />
      <ellipse cx="20" cy="24" rx="9.2" ry="8.4" fill="#FFD7B5" />
      <path fill="#6B4423" d="M11.2 19.2C12.6 13.4 15.8 10.2 20 10.2s7.4 3.2 8.8 9c-2.2-2.4-5-3.4-8.8-3.4s-6.6 1-8.8 3.4Z" />
      <circle cx="16.4" cy="23.2" r="1.2" fill="#3A2A1A" />
      <circle cx="23.6" cy="23.2" r="1.2" fill="#3A2A1A" />
      <path d="M16.8 27.2c1 1.1 2 1.6 3.2 1.6s2.2-.5 3.2-1.6" fill="none" stroke="#E0896A" strokeLinecap="round" strokeWidth="1.3" />
      <ellipse cx="13.8" cy="25.6" rx="1.4" ry="0.85" fill="#F4A6B5" />
      <ellipse cx="26.2" cy="25.6" rx="1.4" ry="0.85" fill="#F4A6B5" />
    </svg>
  );
}

function GirlFaceIcon({ className = 'h-9 w-9 shrink-0 md:h-7 md:w-7' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" className={className}>
      <path fill="#6B4423" d="M8.5 24c.2-8.2 4.2-14.2 11.5-14.2S31.3 15.8 31.5 24c0 2.2-.8 4-2 5.2H10.5c-1.2-1.2-2-3-2-5.2Z" />
      <ellipse cx="20" cy="24.4" rx="8.4" ry="7.8" fill="#FFD7B5" />
      <path fill="#6B4423" d="M12 19.4C13.4 13.8 16.2 11 20 11s6.6 2.8 8 8.4c-2-2.2-4.6-3.2-8-3.2s-6 1-8 3.2Z" />
      <ellipse cx="16.2" cy="9.6" rx="3" ry="1.8" fill="#F25C8A" transform="rotate(-28 16.2 9.6)" />
      <ellipse cx="23.8" cy="9.6" rx="3" ry="1.8" fill="#F25C8A" transform="rotate(28 23.8 9.6)" />
      <circle cx="20" cy="10.6" r="1.35" fill="#EC2F7B" />
      <circle cx="16.4" cy="23.4" r="1.15" fill="#3A2A1A" />
      <circle cx="23.6" cy="23.4" r="1.15" fill="#3A2A1A" />
      <path d="M16.8 27.4c.9 1 1.9 1.5 3.2 1.5s2.3-.5 3.2-1.5" fill="none" stroke="#E0896A" strokeLinecap="round" strokeWidth="1.3" />
      <ellipse cx="13.6" cy="25.8" rx="1.3" ry="0.8" fill="#F4A6B5" />
      <ellipse cx="26.4" cy="25.8" rx="1.3" ry="0.8" fill="#F4A6B5" />
    </svg>
  );
}

const HeroCta = ({ href, variant, icon, label, mobileLabel }) => {
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
      <span className="text-[13px] font-bold leading-none max-[359px]:text-[12px] md:hidden">
        {mobileLabel || label}
      </span>
      <span className="hidden text-[13px] font-bold leading-normal md:inline">
        {label}
      </span>
      <ChevronRight className="hidden h-4 w-4 shrink-0 md:inline" aria-hidden="true" />
    </a>
  );
};

function HeroGoogleRating() {
  return (
    <div className="mt-1 flex w-full min-w-0 max-w-full flex-row flex-nowrap items-center gap-[0.5vw] whitespace-nowrap rounded-full bg-[#FFF9E8] px-[2vw] py-2.5 shadow-sm md:mt-0 md:w-fit md:max-w-none md:gap-2 md:px-3">
      <GoogleLogo className="h-[clamp(22px,7vw,30px)] w-[clamp(22px,7vw,30px)] shrink-0 filter-none md:h-6 md:w-6" />
      <span className="shrink-0 text-[clamp(17px,5.6vw,24px)] font-bold leading-none text-[#2A1F6B] md:text-xl">
        {GOOGLE_RATING}
      </span>
      <span aria-hidden="true" className="inline-flex shrink-0 items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            strokeWidth={0}
            className="h-[clamp(14px,4.4vw,22px)] w-[clamp(14px,4.4vw,22px)] fill-[#FFC107] text-[#FFC107] md:h-5 md:w-5"
          />
        ))}
      </span>
      <span aria-hidden="true" className="h-5 w-px shrink-0 bg-slate-300" />
      <span className="shrink-0 whitespace-nowrap text-[clamp(13px,4.2vw,16px)] font-semibold leading-none text-[#2A1F6B] md:text-sm">
        {GOOGLE_REVIEW_COUNT} Happy Customers
      </span>
    </div>
  );
}

function HeroPriceRow() {
  return (
    <div className="max-md:mt-0 md:mt-0 md:px-4 md:py-4 lg:mt-0 lg:p-0">
      <div className="grid grid-cols-2 gap-2 md:mb-0 md:gap-3 lg:flex lg:flex-row lg:justify-start lg:gap-4">
        <div className="flex items-center gap-1 rounded-2xl border border-[#CFE6FA] bg-[#E8F4FF] py-2 pl-2 pr-2.5 md:gap-1.5 md:border-sky-200 md:bg-sky-100 md:px-3 md:py-2 md:text-sky-900 lg:w-full lg:max-w-sm">
          <BoyFaceIcon />
          <div className="min-w-0">
            <p className="text-xs font-bold text-[#2A1F6B] md:text-sm md:font-semibold md:text-inherit">Boys Haircut</p>
            <p className="text-2xl font-extrabold text-[#2A1F6B] md:text-2xl md:text-inherit">{formatInr(PRICING.boysHaircut)}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-2xl border border-[#F9CBDD] bg-[#FFE4EF] py-2 pl-2 pr-2.5 md:gap-1.5 md:border-pink-200 md:bg-pink-100 md:px-3 md:py-2 md:text-pink-900 lg:w-full lg:max-w-sm">
          <GirlFaceIcon />
          <div className="min-w-0">
            <p className="text-xs font-bold text-[#2A1F6B] md:text-sm md:font-semibold md:text-inherit">Girls Haircut</p>
            <p className="text-2xl font-extrabold text-[#2A1F6B] md:text-2xl md:text-inherit">{formatInr(PRICING.girlsHaircut)}</p>
          </div>
        </div>
      </div>
      <p className="mt-2 text-center text-[11px] text-slate-600 md:mt-2 md:text-left lg:text-left">
        <span className="md:hidden">Haircut-only prices do not include hair wash.</span>
        <span className="hidden md:inline">Haircut-only prices. Hair wash not included.</span>
      </p>
    </div>
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
        className="relative flex w-full max-md:gap-0 flex-col scroll-mt-16 overflow-x-hidden bg-[#FDEBF1] max-md:mx-0 max-md:mb-0 max-md:mt-0 md:grid md:h-auto md:min-h-0 md:grid-cols-[minmax(0,42%)_minmax(0,58%)] md:grid-rows-[auto_auto_auto] md:items-stretch md:overflow-visible md:bg-[#FFF8FB] md:scroll-mt-[4.5rem] lg:grid-rows-[auto]"
      >
        <div className="relative order-1 h-[clamp(243px,66.6vw,275px)] w-full overflow-hidden md:order-none md:col-start-2 md:row-start-1 md:aspect-auto md:h-auto md:min-h-[576px] lg:h-full lg:min-h-[540px]">
          <Image
            src={HERO_PHOTO.src}
            alt={HERO_PHOTO.alt}
            fill
            priority
            sizes="(min-width: 768px) 58vw, 100vw"
            quality={90}
            className="object-cover object-[center_58%] md:max-lg:object-[55%_42%] lg:object-[center_75%]"
          />
          <svg
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 h-3 w-full md:hidden"
            viewBox="0 0 390 12"
            preserveAspectRatio="none"
          >
            <path d="M0 4C60 7 120 12 170 12H390V12H0Z" fill="#FDEBF1" />
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
          <div className="order-2 px-4 pt-1 md:order-none md:p-0">
            <h1
              id="hero-title"
              className="font-heading font-extrabold leading-[1.05] md:leading-[0.95]"
            >
              <span className="block text-2xl text-[#EC2F7B] min-[390px]:text-[1.7rem] md:text-6xl md:leading-none md:text-pink-600">
                Kids Haircut
              </span>
              <span className="block text-2xl text-[#2A1F6B] min-[390px]:text-[1.7rem] md:mt-0 md:inline md:text-4xl md:leading-[0.95] md:text-indigo-950">
                in Electronic City,{' '}
              </span>
              <span className="block text-2xl text-[#2A1F6B] min-[390px]:text-[1.7rem] md:inline md:text-4xl md:leading-[0.95] md:text-indigo-950">
                Bangalore
              </span>
            </h1>
            <p className="mt-1 whitespace-nowrap text-[15px] font-semibold text-[#EC2F7B] min-[390px]:text-base md:mt-0 md:max-w-md md:whitespace-normal md:text-2xl md:font-bold md:text-pink-600">
              Haircut Time, Made Happier for Kids 🍭✂️
            </p>
            <p className="hidden max-w-xl text-sm font-semibold leading-relaxed text-[#1E3A8A] md:block md:text-lg lg:text-xl">
              {heroIntro}
            </p>

            <HeroGoogleRating />
          </div>

          <div className="order-4 mt-2 mb-2 grid w-full grid-cols-2 gap-3 px-4 md:order-none md:my-0 md:flex md:w-auto md:flex-row md:flex-wrap md:items-center md:gap-4 md:px-0">
            <HeroCta
              href={PHONE_HREF}
              variant="book"
              icon={
                <>
                  <PhoneIcon className="h-4 w-4 shrink-0 md:hidden" />
                  <CalendarDays className="hidden h-5 w-5 shrink-0 md:inline" aria-hidden="true" />
                </>
              }
              label="Call to Book"
              mobileLabel="Call to Book"
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

        <div className="order-3 mt-2 px-4 md:order-none md:col-span-2 md:row-start-3 md:mt-0 md:px-0 lg:hidden">
          <HeroPriceRow />
        </div>

        <p className="order-5 w-full px-4 py-4 text-[1.375rem] font-semibold leading-snug text-[#2A1F6B] max-md:mb-0 max-md:mt-0 md:hidden">
          {heroIntro}
        </p>
      </section>
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
