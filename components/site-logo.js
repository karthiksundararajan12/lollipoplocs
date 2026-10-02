import Image from 'next/image';
import Link from 'next/link';
import { LOGO_ALT, LOGO_INTRINSIC, LOGO_PATHS } from '../lib/logo-config';

export function HeaderWordmarkLink({ className = '' }) {
  const { width, height } = LOGO_INTRINSIC.wordmark;

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy ${className}`}
    >
      <Image
        src={LOGO_PATHS.wordmark}
        alt={LOGO_ALT}
        width={width}
        height={height}
        priority
        className="h-auto w-[170px] object-contain md:w-[260px]"
      />
    </Link>
  );
}

export function FooterFullLogo({ className = '' }) {
  const { width, height } = LOGO_INTRINSIC.full;

  return (
    <Image
      src={LOGO_PATHS.full}
      alt={LOGO_ALT}
      width={width}
      height={height}
      className={`h-auto w-[240px] object-contain md:w-[320px] ${className}`}
    />
  );
}

export function IntroFullLogo({ className = '' }) {
  const { width, height } = LOGO_INTRINSIC.full;

  return (
    <Image
      src={LOGO_PATHS.full}
      alt={LOGO_ALT}
      width={width}
      height={height}
      className={`mx-auto h-auto w-[240px] object-contain md:w-[320px] ${className}`}
    />
  );
}
