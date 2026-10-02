import {
  SECTION_DIVIDER_COLORS,
  SECTION_TONE_CLASSES,
} from '../../lib/site-config';
import { SectionDivider } from './section-divider';

export function Section({
  tone = 'blush',
  dividerBefore = false,
  id,
  ariaLabelledby,
  ariaLabel,
  className = '',
  innerClassName = '',
  hero = false,
  children,
}) {
  const backgroundClass =
    SECTION_TONE_CLASSES[tone] ?? SECTION_TONE_CLASSES.blush;
  const dividerFill = SECTION_DIVIDER_COLORS[tone];

  return (
    <>
      {dividerBefore && dividerFill ? (
        <SectionDivider fill={dividerFill} />
      ) : null}
      <section
        id={id}
        aria-labelledby={ariaLabelledby}
        aria-label={ariaLabel}
        className={`section w-full ${backgroundClass} ${hero ? 'section-hero' : ''} ${className}`}
      >
        <div className={`section-inner ${innerClassName}`}>{children}</div>
      </section>
    </>
  );
}
