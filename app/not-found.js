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
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#fffafd] px-5 py-16 text-center">
      <p className="font-[family-name:var(--font-fredoka)] text-6xl font-semibold text-[#c52f76]">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-[#2e202a]">Page not found</h1>
      <p className="mt-3 max-w-md text-[#5f4d58]">
        We couldn&apos;t find that page. Head back to our kids salon landing page or call us
        to book.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href={LANDING_PATH}
          className="inline-flex min-h-12 items-center rounded-full bg-[#c52f76] px-6 py-3 text-sm font-bold text-white hover:bg-[#ad2868] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a]"
        >
          Kids Haircut in Electronic City
        </Link>
        <a
          href={PHONE_HREF}
          className="inline-flex min-h-12 items-center rounded-full border-2 border-[#c52f76] px-6 py-3 text-sm font-bold text-[#c52f76] hover:bg-[#fff3f8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a]"
        >
          Call {PHONE_NUMBER}
        </a>
      </div>
    </main>
  );
}
