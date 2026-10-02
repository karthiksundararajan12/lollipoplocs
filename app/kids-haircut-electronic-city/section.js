import { SECTION_TONE_CLASSES } from '../../lib/site-config';

export function Section({
  tone = 'white',
  id,
  ariaLabelledby,
  ariaLabel,
  className = '',
  children,
}) {
  const backgroundClass =
    SECTION_TONE_CLASSES[tone] ?? SECTION_TONE_CLASSES.white;

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      aria-label={ariaLabel}
      className={`${backgroundClass} px-5 py-12 sm:px-8 sm:py-16 ${className}`}
    >
      {children}
    </section>
  );
}
