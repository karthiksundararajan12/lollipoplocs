import { SECTION_TONE_CLASSES } from '../../lib/site-config';

export function Section({
  tone = 'white',
  id,
  ariaLabelledby,
  ariaLabel,
  className = '',
  innerClassName = '',
  hero = false,
  children,
}) {
  const backgroundClass =
    SECTION_TONE_CLASSES[tone] ?? SECTION_TONE_CLASSES.white;

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      aria-label={ariaLabel}
      className={`section w-full ${backgroundClass} ${hero ? 'section-hero' : ''} ${className}`}
    >
      <div className={`section-inner ${innerClassName}`}>{children}</div>
    </section>
  );
}
