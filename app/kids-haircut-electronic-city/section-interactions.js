'use client';

import Image from 'next/image';
import { useState } from 'react';

const photos = {
  stylist: '/images/9_e041d01a-9b54-4e65-a423-b91cf3493d86_1790778166822.jpeg',
  unicorn: '/images/3_78eabd8e-201c-4064-a621-0ea72eeec8fb_1790778166805.jpeg',
  play: '/images/7_b2014115-9170-409b-b33a-588d04c6d1f1_1790778166815.jpeg',
  car: '/images/8_d5fe1812-bc0a-4c8b-838f-8a773055d4af_1790778166817.jpeg',
};

export function ExperienceVideo({
  videoUrl,
  posterUrl,
  descriptionId,
}) {
  const [activated, setActivated] = useState(false);

  return (
    <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-[#f1dce7] bg-[#2e202a] shadow-[0_16px_38px_rgba(82,42,64,0.14)]">
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
            alt="A child and an adult in the colourful Lollipop Locs salon"
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="bg-black object-contain transition-transform duration-500 group-hover:scale-[1.025]"
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
          className="w-[82vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-[1.4rem] border border-[#f1dce7] bg-white p-2.5 shadow-[0_10px_26px_rgba(82,42,64,0.08)] sm:w-[300px]"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-[#fff4f9]">
            {slide.todo ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#fff4f9] p-5 text-center">
                <span aria-hidden="true" className="text-3xl">✈</span>
                <span className="font-bold text-[#a34a74]">TODO: Airplane chair photo needed</span>
              </div>
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                fill
                sizes="(max-width: 640px) 82vw, 300px"
                className="object-cover"
              />
            )}
          </div>
          <figcaption className="px-2 pb-1 pt-3 font-[family-name:var(--font-fredoka)] text-lg font-semibold text-[#342330]">
            {slide.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function ComparisonPanel({ title }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_20%_20%,#fffafd_0%,#fff1f7_52%,#f4e9f0_100%)] p-4 text-center">
      <div className="rounded-[1.2rem] border-2 border-dashed border-[#dfa9c2] bg-white/75 px-4 py-5 sm:px-7">
        <span aria-hidden="true" className="mb-2 block text-3xl text-[#cf5c91]">＋</span>
        <span className="block font-[family-name:var(--font-fredoka)] text-xl font-semibold text-[#c52f76]">
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
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border-[5px] border-white bg-[#fff4f9] shadow-[0_16px_38px_rgba(82,42,64,0.12)] sm:aspect-[16/9]">
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