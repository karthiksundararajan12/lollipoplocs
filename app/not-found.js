import Link from 'next/link';
import { LANDING_PATH, PHONE_HREF, PHONE_NUMBER } from '../lib/site-config';

export const metadata = {
  title: 'Page Not Found | Lollipop Locs',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blush px-5 py-16 text-center">
      <p className="font-heading text-6xl font-semibold text-brand">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-navy">Page not found</h1>
      <p className="mt-3 max-w-md text-body">
        We couldn&apos;t find that page. Head back to our kids salon landing page or call us
        to book.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href={LANDING_PATH}
          className="inline-flex min-h-12 items-center rounded-full bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
        >
          Kids Haircut in Electronic City
        </Link>
        <a
          href={PHONE_HREF}
          className="inline-flex min-h-12 items-center rounded-full border-2 border-brand px-6 py-3 text-sm font-bold text-brand hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
        >
          Call {PHONE_NUMBER}
        </a>
      </div>
    </main>
  );
}
