'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { GALLERY_IMAGES } from '../../lib/site-config';
import { BTN_PRIMARY, GoogleLogo } from './ui-primitives';

const photos = GALLERY_IMAGES;

function MuteIcon({ muted }) {
  if (muted) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M9 9v6h4l5 5V4l-5 5H9Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="m19 9 2 2m0-2-2 2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="M9 9v6h4l5 5V4l-5 5H9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M15 9a4 4 0 0 1 0 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ExperienceVideo({
  videoUrl,
  posterUrl,
  descriptionId,
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const toggleMuted = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-3xl shadow-[0_8px_24px_rgb(30_27_75_/_0.08)]"
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={videoUrl}
        muted
        loop
        playsInline
        preload="metadata"
        poster={posterUrl}
        aria-label="Lollipop Locs salon tour video"
        aria-describedby={descriptionId}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] bg-gradient-to-b from-[#1A1A2E]/50 to-transparent px-4 pb-10 pt-4">
        <span className="inline-flex items-center rounded-full bg-[#E91E7A] px-3 py-1.5 text-xs font-bold text-white shadow-md sm:text-sm">
          Salon Tour
        </span>
        <p className="mt-2 max-w-[28ch] text-sm font-semibold leading-snug text-white drop-shadow-sm sm:text-base">
          See where little ones have their happiest haircuts
        </p>
      </div>
      <button
        type="button"
        onClick={toggleMuted}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        aria-pressed={!muted}
        className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <MuteIcon muted={muted} />
      </button>
    </div>
  );
}

const gallerySlides = [
  { caption: 'Car Chair', src: photos.car, alt: 'A child sitting in the colourful car chair at Lollipop Locs' },
  { caption: 'Unicorn Chair', src: photos.unicorn, alt: 'The unicorn-themed haircut chair at Lollipop Locs' },
  {
    caption: 'Airplane Chair',
    src: photos.airplane,
    alt: 'White airplane-themed kids haircut chair at Lollipop Locs',
  },
  { caption: 'Play Area', src: photos.play, alt: 'The playful salon interior at Lollipop Locs' },
  { caption: 'Happy Haircuts', src: photos.stylist, alt: 'A stylist giving a child a haircut at Lollipop Locs' },
];

function SalonGalleryImage({ slide }) {
  const [failed, setFailed] = useState(false);

  if (!slide.src) {
    return null;
  }

  if (failed) {
    return (
      <div
        className="h-full w-full bg-pink-100"
        aria-hidden="true"
      />
    );
  }

  return (
    <Image
      src={slide.src}
      alt={slide.alt}
      width={800}
      height={600}
      loading="lazy"
      sizes="(max-width: 640px) 82vw, 300px"
      className="h-full w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export function SalonGallery() {
  return (
    <div
      role="region"
      aria-label="Lollipop Locs salon gallery"
      tabIndex={0}
      className="flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-color:#f5a3c7_transparent] [scrollbar-width:thin] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      {gallerySlides.map((slide) => (
        <figure
          key={slide.caption}
          className="card-surface w-[82vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-2xl p-2.5 sm:w-[300px]"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-blush">
            <SalonGalleryImage slide={slide} />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1A2E]/70 to-transparent pt-10"
            />
            <figcaption className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#4B2A8A] shadow-sm">
              {slide.caption}
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}

const BEFORE_IMAGE = {
  src: '/images/gallery-play-area.webp',
  alt: 'Child in the colourful ball pit at Lollipop Locs before a haircut',
};

const AFTER_IMAGE = {
  src: '/images/gallery-kids-haircut.webp',
  alt: 'Stylist giving a child a haircut in the airplane chair at Lollipop Locs',
};

function ComparisonPhoto({ src, alt, label }) {
  return (
    <div className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 780px"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1A2E]/75 to-transparent pt-12"
      />
      <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#4B2A8A] shadow-sm">
        {label}
      </span>
    </div>
  );
}

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="mx-auto max-w-[780px]">
      <p className="mb-3 text-center text-sm font-bold text-[#4B2A8A]">
        Real photos from our salon
      </p>
      <div className="card-surface relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/9]">
        <ComparisonPhoto
          src={AFTER_IMAGE.src}
          alt={AFTER_IMAGE.alt}
          label="During the haircut"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <ComparisonPhoto
            src={BEFORE_IMAGE.src}
            alt={BEFORE_IMAGE.alt}
            label="Play & settle in first"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-10 w-1 bg-white shadow-[0_0_0_1px_rgba(27,42,92,0.18)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-brand text-xl font-bold text-white shadow-[0_4px_14px_rgba(27,42,92,0.25)]">
            ↔
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Drag to compare before and after haircut images"
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0 focus-visible:rounded-[1.25rem] focus-visible:outline-4 focus-visible:outline-brand"
        />
      </div>
    </div>
  );
}

function ReviewStars() {
  return (
    <span aria-label="Rated 5 out of 5" className="flex items-center gap-0.5 text-star">
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

function reviewerInitial(name) {
  return name.trim().charAt(0).toUpperCase();
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="price-card review-card flex h-full flex-col p-5 sm:p-6">
      <header className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFE0EC] text-base font-bold text-[#E91E7A]"
        >
          {reviewerInitial(review.name)}
        </span>
        <div className="min-w-0">
          <p className="font-bold leading-tight text-navy">{review.name}</p>
          <div className="mt-1">
            <ReviewStars />
          </div>
        </div>
      </header>
      <blockquote
        className={`mt-4 flex-1 whitespace-pre-line text-[0.98rem] font-medium leading-[1.65] text-navy ${
          expanded ? '' : 'line-clamp-6'
        }`}
      >
        {review.text}
      </blockquote>
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="text-accent mt-2 self-start text-sm font-bold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
      <footer className="mt-4 flex items-center gap-1.5 border-t border-black/5 pt-4">
        <GoogleLogo className="h-4 w-4 shrink-0" />
        <span className="text-muted text-xs font-medium">Google review</span>
      </footer>
    </article>
  );
}

export function GoogleReviews({ reviews, mapsLink }) {
  const scrollRef = useRef(null);
  const slideRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = useCallback((index) => {
    const container = scrollRef.current;
    const slide = slideRefs.current[index];
    if (!container || !slide) {
      return;
    }

    container.scrollTo({
      left: slide.offsetLeft,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) {
      return undefined;
    }

    const slides = slideRefs.current.filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const index = slides.indexOf(entry.target);
          if (index >= 0) {
            setActiveIndex(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.6,
      },
    );

    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, [reviews.length]);

  if (!reviews.length) {
    return null;
  }

  return (
    <div className="min-w-0 max-w-full">
      <div
        ref={scrollRef}
        aria-label="Google reviews"
        className="no-scrollbar -mx-4 flex w-[calc(100%+2rem)] snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-4 md:mx-0 md:grid md:w-full md:grid-cols-2 md:items-stretch md:gap-4 md:overflow-visible md:px-0 md:snap-none lg:grid-cols-3"
      >
        {reviews.map((review, index) => (
          <div
            key={`${review.name}-${index}`}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            className="h-full w-[85%] shrink-0 snap-start md:w-auto md:shrink md:snap-align-none"
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      <div
        className="mt-4 flex justify-center gap-2 md:hidden"
        role="tablist"
        aria-label="Review slides"
      >
        {reviews.map((review, index) => (
          <button
            key={`dot-${review.name}-${index}`}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to review by ${review.name}`}
            onClick={() => scrollToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-6 bg-brand' : 'w-2 bg-black/20'
            }`}
          />
        ))}
      </div>

      {mapsLink ? (
        <div className="mt-8 flex justify-center">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className={BTN_PRIMARY}
          >
            Read More Reviews
          </a>
        </div>
      ) : null}
    </div>
  );
}