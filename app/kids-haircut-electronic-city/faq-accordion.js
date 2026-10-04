'use client';

import {
  Armchair,
  Award,
  Baby,
  Calendar,
  Droplets,
  Heart,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';
import { FAQ_ITEMS } from '../../lib/site-config';

const ICON_MAP = {
  Baby,
  Droplets,
  Users,
  Award,
  MapPin,
  Heart,
  Armchair,
  Calendar,
  Sparkles,
};

const TINTS = [
  { circle: 'bg-[#FFE0EC]', icon: 'text-[#E91E7A]' },
  { circle: 'bg-[#E2F6EC]', icon: 'text-[#17963f]' },
  { circle: 'bg-[#EFE8FF]', icon: 'text-[#4B2A8A]' },
  { circle: 'bg-[#FFF4D6]', icon: 'text-[#B8860B]' },
  { circle: 'bg-[#E3F3FF]', icon: 'text-[#1b2a5c]' },
];

export function FaqAccordion() {
  return (
    <div className="mx-auto max-w-[900px] space-y-3">
      {FAQ_ITEMS.map((item, index) => {
        const Icon = ICON_MAP[item.icon];
        const tint = TINTS[index % TINTS.length];

        return (
          <details
            key={item.id}
            className="faq-item group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_4px_16px_rgb(26_26_46_/0.05)]"
          >
            <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-4 marker:hidden sm:gap-4 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11 ${tint.circle}`}
                aria-hidden="true"
              >
                {Icon ? (
                  <Icon className={`h-5 w-5 ${tint.icon}`} />
                ) : null}
              </span>
              <span className="min-w-0 flex-1 font-bold leading-snug text-[#1A1A2E]">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFE0EC] text-xl leading-none text-[#E91E7A] transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="border-t border-black/5 px-4 py-4 pl-[3.25rem] text-[0.98rem] leading-[1.7] sm:px-6 sm:pl-[4.5rem]">
              {item.answer}
            </p>
          </details>
        );
      })}
    </div>
  );
}
