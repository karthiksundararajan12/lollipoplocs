import Image from 'next/image';
import Link from 'next/link';
import { LOGO_ALT, LOGO_INTRINSIC, LOGO_PATHS } from '../lib/logo-config';

export function HeaderWordmarkLink({ className = '' }) {
  const { width, height } = LOGO_INTRINSIC.brand;

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy ${className}`}
    >
      <Image
        src={LOGO_PATHS.brand}
        alt={LOGO_ALT}
        width={width}
        height={height}
        priority
        className="h-auto w-[200px] border-0 object-contain shadow-none outline-none ring-0 md:w-[260px]"
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
  return <BrandLogo className={className} />;
}

export function IntroFullLogo({ className = '' }) {
  return <BrandLogo className={`mx-auto ${className}`} />;
}
