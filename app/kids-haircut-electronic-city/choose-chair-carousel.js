'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GAP_PX = 24;

function getScrollStep(container) {
  const card = container.querySelector('[data-chair-card]');
  return card ? card.offsetWidth + GAP_PX : 280;
}

export function ChooseChairCarousel({ chairs }) {
  const scrollRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, startScrollLeft: 0 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const maxScroll = container.scrollWidth - container.clientWidth;
    setCanScrollLeft(container.scrollLeft > 1);
    setCanScrollRight(container.scrollLeft < maxScroll - 1);
  }, []);

  const scroll = useCallback((direction) => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    container.scrollBy({
      left: direction * getScrollStep(container),
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) {
      return undefined;
    }

    updateScrollState();

    container.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      container.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [chairs.length, updateScrollState]);

  const handlePointerDown = (event) => {
    if (event.button !== 0) {
      return;
    }

    const container = scrollRef.current;
    if (!container) {
      return;
    }

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: container.scrollLeft,
    };
    container.setPointerCapture(event.pointerId);
    container.style.scrollSnapType = 'none';
    container.style.cursor = 'grabbing';
  };

  const handlePointerMove = (event) => {
    const container = scrollRef.current;
    const drag = dragRef.current;
    if (!container || !drag.active) {
      return;
    }

    container.scrollLeft = drag.startScrollLeft - (event.clientX - drag.startX);
  };

  const endDrag = (event) => {
    const container = scrollRef.current;
    const drag = dragRef.current;
    if (!container || !drag.active) {
      return;
    }

    dragRef.current.active = false;
    container.releasePointerCapture(event.pointerId);
    container.style.scrollSnapType = '';
    container.style.cursor = '';
    updateScrollState();
  };

  const handleWheel = (event) => {
    if (!event.shiftKey) {
      return;
    }

    const container = scrollRef.current;
    if (!container) {
      return;
    }

    event.preventDefault();
    container.scrollBy({ left: event.deltaY, behavior: 'auto' });
  };

  return (
    <div className="relative mx-auto mt-8 w-full max-w-7xl px-4 md:px-8 lg:mt-10">
      <button
        type="button"
        aria-label="Previous chair"
        onClick={() => scroll(-1)}
        disabled={!canScrollLeft}
        className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#E91E7A] text-white shadow-[0_4px_14px_rgb(233_30_122_/0.35)] transition hover:bg-[#d0186c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B2A8A] disabled:pointer-events-none disabled:opacity-40 md:flex"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>

      <button
        type="button"
        aria-label="Next chair"
        onClick={() => scroll(1)}
        disabled={!canScrollRight}
        className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#E91E7A] text-white shadow-[0_4px_14px_rgb(233_30_122_/0.35)] transition hover:bg-[#d0186c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B2A8A] disabled:pointer-events-none disabled:opacity-40 md:flex"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div
        ref={scrollRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onWheel={handleWheel}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] md:cursor-grab md:active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
      >
        {chairs.map((chair) => (
          <article
            key={chair.title}
            data-chair-card
            className="w-[85%] shrink-0 snap-start overflow-hidden rounded-3xl bg-white shadow-[0_8px_24px_rgb(26_26_46_/0.08)] sm:w-[60%] lg:w-[calc((100%-3rem)/3)]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[inherit]">
              <Image
                src={chair.src}
                alt={chair.alt}
                fill
                sizes="(min-width:1024px) 33vw, 85vw"
                className="object-cover"
                style={{ objectPosition: chair.objectPosition ?? 'center' }}
                draggable={false}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A1A2E]/70 to-transparent pt-10"
              />
              <span className="absolute bottom-2 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-[#4B2A8A] shadow-sm sm:text-xs">
                {chair.title}
              </span>
            </div>
            <div className="px-4 py-4 sm:px-5 sm:py-5">
              <h3 className="text-lg font-bold leading-snug text-[#4B2A8A] sm:text-xl">
                {chair.title}
              </h3>
              <p className="mt-1 text-sm font-medium leading-snug text-[#1A1A2E] sm:text-[0.9375rem]">
                {chair.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
