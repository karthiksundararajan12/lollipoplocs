import {
  Armchair,
  Award,
  Baby,
  Blocks,
  Candy,
  Droplets,
  HeartHandshake,
  Monitor,
  Scissors,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { SECTION_TONES, WHY_FAMILIES_ITEMS } from '../../lib/site-config';
import { Section } from './section';

const ICON_MAP = {
  Scissors,
  Droplets,
  ShieldCheck,
  Sparkles,
  Armchair,
  Candy,
  Blocks,
  Monitor,
  Award,
  Users,
  Baby,
  HeartHandshake,
};

const TINTS = [
  { circle: 'bg-[#FFE0EC]', icon: 'text-[#E91E7A]' },
  { circle: 'bg-[#E2F6EC]', icon: 'text-[#17963f]' },
  { circle: 'bg-[#EFE8FF]', icon: 'text-[#4B2A8A]' },
  { circle: 'bg-[#FFF4D6]', icon: 'text-[#B8860B]' },
  { circle: 'bg-[#E3F3FF]', icon: 'text-[#1b2a5c]' },
];

export function WhyFamiliesSection() {
  return (
    <Section
      id="why-families"
      ariaLabelledby="why-families-title"
      dividerBefore
      tone={SECTION_TONES.whyFamilies}
    >
      <h2
        id="why-families-title"
        className="section-heading mx-auto max-w-[24ch]"
      >
        Why Families Choose Lollipop Locs
      </h2>

      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
        {WHY_FAMILIES_ITEMS.map((item, index) => {
          const Icon = ICON_MAP[item.icon];
          const tint = TINTS[index % TINTS.length];

          return (
            <li key={item.label}>
              <article className="flex h-full flex-col items-center rounded-2xl bg-white px-3 py-4 text-center shadow-[0_4px_16px_rgb(26_26_46_/0.06)] sm:px-4 sm:py-5">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full sm:h-12 sm:w-12 ${tint.circle}`}
                  aria-hidden="true"
                >
                  {Icon ? (
                    <Icon className={`h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem] ${tint.icon}`} />
                  ) : null}
                </span>
                <p className="mt-3 min-h-[2.75rem] text-xs font-bold leading-snug text-[#1A1A2E] sm:min-h-[3rem] sm:text-[0.8125rem]">
                  {item.label}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
