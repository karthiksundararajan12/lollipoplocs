'use client';

import { useState } from 'react';
import {
  Armchair,
  Baby,
  Calendar,
  ChevronDown,
  Heart,
  Users,
} from 'lucide-react';
import { FAQ_ITEMS } from '../../lib/site-config';

const ICON_MAP = {
  Baby,
  Users,
  Heart,
  Armchair,
  Calendar,
};

const TINTS = [
  { circle: 'bg-[#FFE0EC]', icon: 'text-[#E91E7A]' },
  { circle: 'bg-[#E2F6EC]', icon: 'text-[#17963f]' },
  { circle: 'bg-[#EFE8FF]', icon: 'text-[#4B2A8A]' },
  { circle: 'bg-[#FFF4D6]', icon: 'text-[#B8860B]' },
  { circle: 'bg-[#E3F3FF]', icon: 'text-[#1b2a5c]' },
];

export function FaqAccordion() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="mx-auto max-w-[900px] space-y-3">
      {FAQ_ITEMS.map((item, index) => {
        const Icon = ICON_MAP[item.icon];
        const tint = TINTS[index % TINTS.length];
        const isOpen = openId === item.id;
        const buttonId = `faq-button-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_4px_16px_rgb(26_26_46_/0.05)] ${
              isOpen ? 'border-l-4 border-l-[#E91E7A]' : ''
            }`}
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className={`flex min-h-12 w-full cursor-pointer items-center gap-3 px-3 py-3 text-left sm:gap-4 sm:px-6 sm:py-5 ${
                isOpen ? 'bg-[rgb(255_224_236_/_0.35)]' : ''
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11 ${tint.circle}`}
                aria-hidden="true"
              >
                {Icon ? <Icon className={`h-5 w-5 ${tint.icon}`} /> : null}
              </span>
              <span className="min-w-0 flex-1 font-bold leading-snug text-[#1A1A2E]">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFE0EC] text-[#E91E7A] transition-transform duration-200"
                style={{ transform: isOpen ? 'rotate(180deg)' : undefined }}
              >
                <ChevronDown className="h-5 w-5" />
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
            >
              <p className="border-t border-black/5 px-3 py-3 pl-14 text-[0.98rem] leading-[1.7] sm:px-6 sm:py-4 sm:pl-[4.5rem]">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
