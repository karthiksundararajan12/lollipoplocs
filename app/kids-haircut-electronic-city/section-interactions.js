'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { GALLERY_IMAGES } from '../../lib/site-config';

const photos = GALLERY_IMAGES;

export function ExperienceVideo({
  videoUrl,
  posterUrl,
  descriptionId,
}) {
  const [activated, setActivated] = useState(false);

  return (
    <div className="card-surface relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-[#2e202a] shadow-[0_16px_38px_rgba(82,42,64,0.14)]">
      {activated ? (
        <video
          className="absolute inset-0 h-full w-full bg-black object-contain"
          src={videoUrl}
          controls
          playsInline
          preload="metadata"
          poster={posterUrl}
          aria-label="Lollipop Locs Premium Kids Salon and Spa video"
          aria-describedby={descriptionId}
        />
      ) : (
        <button
          type="button"
          onClick={() => setActivated(true)}
          aria-label="Load the Lollipop Locs salon video. Use the player controls to play."
          className="group absolute inset-0 flex w-full items-center justify-center text-left focus-visible:outline-4 focus-visible:outline-offset-[-7px] focus-visible:outline-[#c52f76]"
        >
          <Image
            src={posterUrl}
            alt="Video preview of Lollipop Locs kids salon and spa in Electronic City"
            width={1280}
            height={720}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-full w-full bg-black object-contain transition-transform duration-500 group-hover:scale-[1.025]"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-[#2e202a]/20 transition-colors group-hover:bg-[#2e202a]/30" />
          <span className="relative inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#c52f76] px-6 text-base font-bold text-white shadow-[0_10px_25px_rgba(85,31,61,0.24)] transition-transform group-hover:scale-[1.03]">
            ▶ Load Video
          </span>
        </button>
      )}
    </div>
  );
}

const gallerySlides = [
  { caption: 'Car Chair', src: photos.car, alt: 'A child sitting in the colourful car chair at Lollipop Locs' },
  { caption: 'Unicorn Chair', src: photos.unicorn, alt: 'The unicorn-themed haircut chair at Lollipop Locs' },
  { caption: 'Airplane Chair', todo: true },
  { caption: 'Play Area', src: photos.play, alt: 'The playful salon interior at Lollipop Locs' },
  { caption: 'Happy Haircuts', src: photos.stylist, alt: 'A stylist giving a child a haircut at Lollipop Locs' },
];

export function SalonGallery() {
  return (
    <div
      role="region"
      aria-label="Lollipop Locs salon gallery"
      tabIndex={0}
      className="flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-color:#e9afca_transparent] [scrollbar-width:thin] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c52f76]"
    >
      {gallerySlides.map((slide) => (
        <figure
          key={slide.caption}
          className="card-surface w-[82vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-[1.4rem] p-2.5 shadow-[0_10px_26px_rgba(82,42,64,0.08)] sm:w-[300px]"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-pastel-blush">
            {slide.todo ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-pastel-blush p-5 text-center">
                <span aria-hidden="true" className="text-3xl">✈</span>
                <span className="text-accent font-bold">TODO: Airplane chair photo needed</span>
              </div>
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                width={800}
                height={600}
                loading="lazy"
                sizes="(max-width: 640px) 82vw, 300px"
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <figcaption className="px-2 pb-1 pt-3 text-lg font-semibold">
            {slide.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function ComparisonPanel({ title }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-pastel-blush p-4 text-center">
      <div className="card-surface rounded-[1.2rem] border-2 border-dashed border-black/10 px-4 py-5 sm:px-7">
        <span aria-hidden="true" className="text-accent mb-2 block text-3xl">＋</span>
        <span className="text-accent block text-xl font-semibold">
          TODO: {title} image needed
        </span>
      </div>
    </div>
  );
}

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="mx-auto max-w-[780px]">
      <div className="card-surface relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-[0_16px_38px_rgba(82,42,64,0.12)] sm:aspect-[16/9]">
        <ComparisonPanel title="After" />
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <ComparisonPanel title="Before" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-10 w-1 bg-white shadow-[0_0_0_1px_rgba(130,73,100,0.18)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-[#c52f76] text-xl font-bold text-white shadow-[0_4px_14px_rgba(82,42,64,0.25)]">
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
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0 focus-visible:rounded-[1.25rem] focus-visible:outline-4 focus-visible:outline-[#c52f76]"
        />
      </div>
    </div>
  );
}

function ReviewStars({ rating }) {
  return (
    <div className="flex items-center gap-2">
      <span
        aria-label={`Rated ${rating} out of 5`}
        className="flex items-center gap-0.5 text-[#946200]"
      >
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
      <span
        aria-hidden="true"
        className="text-sm font-bold text-gray-900"
      >
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="card-surface flex h-full flex-col rounded-2xl p-5 shadow-[0_12px_30px_rgba(82,42,64,0.07)] sm:p-6">
      <ReviewStars rating={review.rating} />
      <blockquote
        className={`mt-4 flex-1 whitespace-pre-line text-[0.98rem] font-medium leading-[1.65] text-[#111827] ${
          expanded ? '' : 'line-clamp-6'
        }`}
      >
        {review.text}
      </blockquote>
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="text-accent mt-2 self-start text-sm font-bold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c52f76]"
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
      <footer className="mt-5 border-t border-black/5 pt-4">
        <p className="font-bold text-[#111827]">{review.name}</p>
        <p className="text-muted mt-1 text-xs font-medium">Google review</p>
        <a
          href={review.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent mt-3 inline-flex min-h-10 items-center text-sm font-bold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c52f76]"
        >
          View on Google
        </a>
      </footer>
    </article>
  );
}

export function GoogleReviews({ reviews }) {
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
        className="no-scrollbar relative flex w-full snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain md:grid md:grid-cols-3 md:items-start md:gap-4 md:overflow-hidden md:snap-none"
      >
        {reviews.map((review, index) => (
          <div
            key={`${review.name}-${index}`}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            className="w-[85%] shrink-0 snap-start md:w-auto md:shrink md:snap-align-none"
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
    </div>
  );
}