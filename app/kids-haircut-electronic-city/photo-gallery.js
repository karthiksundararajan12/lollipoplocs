'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const DESKTOP_INITIAL_COUNT = 9;

function GalleryTile({ photo, eager = false, sizes }) {
  return (
    <figure className="min-w-0">
      <div className="gallery-tile-frame group relative aspect-square overflow-hidden rounded-2xl">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={eager}
          sizes={sizes}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1A2E]/75 to-transparent pt-12"
        />
        <figcaption className="absolute bottom-2 left-1/2 max-w-[90%] -translate-x-1/2 truncate rounded-full bg-white/95 px-3 py-1 text-center text-xs font-bold text-[#4B2A8A] shadow-sm sm:text-[0.8125rem]">
          {photo.caption}
        </figcaption>
      </div>
    </figure>
  );
}

export function PhotoGallery({ photos }) {
  const scrollRef = useRef(null);
  const slideRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllDesktop, setShowAllDesktop] = useState(false);

  const hasMoreDesktop = photos.length > DESKTOP_INITIAL_COUNT;

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
  }, [photos.length]);

  if (!photos.length) {
    return null;
  }

  return (
    <div className="min-w-0 max-w-full overflow-hidden">
      <p className="mb-4 text-center text-sm font-bold text-[#4B2A8A]">
        Real photos from our salon
      </p>
      <div
        ref={scrollRef}
        aria-label="Photo gallery"
        className="no-scrollbar relative -mx-4 flex w-[calc(100%+2rem)] snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-4 md:-mx-6 md:w-[calc(100%+3rem)] md:px-6 lg:mx-0 lg:w-full lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-hidden lg:px-0 lg:snap-none"
      >
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            className={`w-[82%] shrink-0 snap-start lg:w-auto lg:shrink lg:snap-align-none ${
              !showAllDesktop && index >= DESKTOP_INITIAL_COUNT ? 'lg:hidden' : ''
            }`}
          >
            <GalleryTile
              photo={photo}
              eager={index === 0}
              sizes="(max-width: 767px) 82vw, 30vw"
            />
          </div>
        ))}
      </div>

      <div
        className="mt-4 flex justify-center gap-2 lg:hidden"
        role="tablist"
        aria-label="Gallery slides"
      >
        {photos.map((photo, index) => (
          <button
            key={`dot-${photo.src}`}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to ${photo.caption}`}
            onClick={() => scrollToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-6 bg-brand' : 'w-2 bg-black/20'
            }`}
          />
        ))}
      </div>

      {hasMoreDesktop ? (
        <div className="mt-6 hidden justify-center lg:flex">
          <button
            type="button"
            onClick={() => setShowAllDesktop((expanded) => !expanded)}
            className="rounded-full border-2 border-[#4B2A8A]/20 bg-white px-6 py-2.5 text-sm font-bold text-[#4B2A8A] shadow-sm transition hover:border-[#E91E7A]/40 hover:text-[#E91E7A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B2A8A]"
          >
            {showAllDesktop
              ? 'Show less'
              : `View more (${photos.length - DESKTOP_INITIAL_COUNT} more)`}
          </button>
        </div>
      ) : null}
    </div>
  );
}
