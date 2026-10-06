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
          <h2 id="chairs-title" className="section-heading">
            Choose Your Favorite Chair
          </h2>
          <Candy
            className="h-5 w-5 shrink-0 text-[#E91E7A] sm:h-6 sm:w-6"
            aria-hidden="true"
          />
        </div>
        <p className="section-subtext mx-auto mt-3 max-w-[36ch]">
          Every haircut becomes an adventure!
        </p>
      </div>

      <ChooseChairCarousel chairs={CHAIR_CARDS} />
    </Section>
  );
}
