'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

function GalleryTile({ photo, eager = false, sizes }) {
  return (
    <figure className="min-w-0">
      <div className="group relative aspect-square overflow-hidden rounded-2xl">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={eager}
          sizes={sizes}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <figcaption className="mt-2 text-center text-sm font-bold leading-snug text-navy sm:text-[0.9375rem]">
        {photo.caption}
      </figcaption>
    </figure>
  );
}

export function PhotoGallery({ photos }) {
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
  }, [photos.length]);

  if (!photos.length) {
    return null;
  }

  return (
    <div className="min-w-0 max-w-full overflow-hidden">
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
            className="w-[82%] shrink-0 snap-start lg:w-auto lg:shrink lg:snap-align-none"
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
    </div>
  );
}
