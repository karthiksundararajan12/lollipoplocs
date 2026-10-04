import { Candy } from 'lucide-react';
import { CHAIR_CARDS, SECTION_TONES } from '../../lib/site-config';
import { ChooseChairCarousel } from './choose-chair-carousel';
import { Section } from './section';

export function ChooseChairSection() {
  return (
    <Section
      id="chairs"
      ariaLabelledby="chairs-title"
      dividerBefore
      tone={SECTION_TONES.chairs}
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <Candy
            className="h-5 w-5 shrink-0 text-[#E91E7A] sm:h-6 sm:w-6"
            aria-hidden="true"
          />
          <h2
            id="chairs-title"
            className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-[#1A1A2E]"
          >
            Choose Your Favorite Chair
          </h2>
          <Candy
            className="h-5 w-5 shrink-0 text-[#E91E7A] sm:h-6 sm:w-6"
            aria-hidden="true"
          />
        </div>
        <p className="mx-auto mt-3 max-w-[36ch] text-[1.0625rem] font-medium leading-[1.6] text-[#1A1A2E]/80">
          Every haircut becomes an adventure!
        </p>
      </div>

      <ChooseChairCarousel chairs={CHAIR_CARDS} />
    </Section>
  );
}
