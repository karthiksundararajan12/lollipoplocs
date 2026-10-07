import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '../../lib/site-config';

export function RatingStars({ size = 'hero', className = '' }) {
  const starClass =
    className ||
    (size === 'review'
      ? 'h-4 w-4 md:h-[22px] md:w-[22px]'
      : size === 'hero'
        ? 'h-[18px] w-[18px] md:h-5 md:w-5'
        : 'h-3.5 w-3.5');

  return (
    <span aria-hidden="true" className="flex items-center gap-0.5 text-star">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className={`${starClass} fill-current`}
        >
          <path d="m10 1.6 2.5 5.1 5.6.8-4.1 4 .9 5.6-4.9-2.6-5 2.6 1-5.6-4.1-4 5.6-.8L10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}

export function GoogleLogo({ className = 'h-4 w-4 shrink-0' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function GoogleRatingBadge({
  rating = GOOGLE_RATING,
  label = 'on Google',
  starsSize = 'hero',
  className = '',
  logoClassName,
  ratingClassName = 'font-bold',
  labelClassName = 'text-sm font-medium text-muted',
  starsClassName = '',
}) {
  return (
    <div
      className={`google-rating-badge inline-flex flex-nowrap items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 shadow-sm ${className}`}
    >
      <GoogleLogo className={logoClassName} />
      <span
        className={`shrink-0 text-navy ${ratingClassName} ${
          starsSize === 'review' ? 'text-[1.0625rem] md:text-lg' : 'text-base md:text-[1.0625rem]'
        }`}
      >
        {rating}
      </span>
      <RatingStars size={starsSize} className={starsClassName} />
      <span className={labelClassName}>{label}</span>
    </div>
  );
}

export function HappyCustomersRating({
  className = '',
  starsClassName = '',
  logoClassName = 'h-6 w-6 shrink-0 md:h-4 md:w-4',
}) {
  return (
    <GoogleRatingBadge
      rating={GOOGLE_RATING}
      label={`${GOOGLE_REVIEW_COUNT} happy customers`}
      starsSize="review"
      logoClassName={logoClassName}
      ratingClassName="font-extrabold"
      labelClassName="whitespace-nowrap text-base font-extrabold text-[#4b5563]"
      starsClassName={starsClassName}
      className={className}
    />
  );
}

export const BTN_BASE =
  'btn inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold leading-none transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy';

export const BTN_PRIMARY = `${BTN_BASE} btn-primary text-white`;
export const BTN_WHATSAPP = `${BTN_BASE} btn-whatsapp text-white`;
export const BTN_SECONDARY = `${BTN_BASE} btn-secondary`;
