import Image from 'next/image';
import Link from 'next/link';
import { LOGO_ALT, LOGO_INTRINSIC, LOGO_PATHS } from '../lib/logo-config';

const HEADER_LOGO = {
  src: '/images/logo/logo-final.jpg',
  width: 1172,
  height: 273,
};

export function HeaderWordmarkLink({ className = '' }) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy ${className}`}
    >
      <Image
        src={HEADER_LOGO.src}
        alt={LOGO_ALT}
        width={HEADER_LOGO.width}
        height={HEADER_LOGO.height}
        priority
        className="h-11 w-auto max-w-none object-contain"
      />
    </Link>
  );
}

function BrandLogo({ className = '' }) {
  const { width, height } = LOGO_INTRINSIC.brand;

  return (
    <Image
      src={LOGO_PATHS.brand}
      alt={LOGO_ALT}
      width={width}
      height={height}
      className={`h-auto w-[240px] max-w-[240px] border-0 object-contain shadow-none outline-none ring-0 md:w-[300px] md:max-w-[300px] ${className}`}
    />
  );
}

export function FooterFullLogo({ className = '' }) {
  return (
    <Image
      src="/images/logo/logo-final.jpg"
      alt={LOGO_ALT}
      width={1172}
      height={273}
      className={`h-12 w-auto max-w-none object-contain ${className}`}
    />
  );
}

export function IntroFullLogo({ className = '' }) {
  return <BrandLogo className={`mx-auto ${className}`} />;
}
