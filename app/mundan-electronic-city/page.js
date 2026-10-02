import { IntroFullLogo } from '../../components/site-logo';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';
import {
  BUSINESS,
  MUNDAN_PATH,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE_URL,
  WHATSAPP_HREF,
} from '../../lib/site-config';
import { Section } from '../kids-haircut-electronic-city/section';
import { BTN_PRIMARY, BTN_WHATSAPP } from '../kids-haircut-electronic-city/ui-primitives';

const mundanNavLinks = [
  { href: '#intro', label: 'About Mundan' },
  { href: '#book', label: 'Book Now' },
];

export const metadata = {
  title: `Baby Mundan in Electronic City, Bengaluru | ${BUSINESS.shortName}`,
  description:
    'Gentle baby mundan and tonsure ceremonies at Lollipop Locs in Electronic City. Patient stylists, a child-friendly salon, and a calm experience for little ones and parents.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: MUNDAN_PATH,
  },
};

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M7.2 3.8h2.5l1.2 4.3-1.8 1.8a15 15 0 0 0 5 5l1.8-1.8 4.3 1.2v2.5a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 5.2 6a2 2 0 0 1 2-2.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M20.4 11.8a8.4 8.4 0 0 1-12.5 7.3l-4.1 1.1 1.1-4A8.4 8.4 0 1 1 20.4 11.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9 8.3c.3-.5.7-.4 1-.1l.8 1.7c.1.3 0 .5-.2.8l-.5.5c.6 1.2 1.5 2 2.7 2.6l.5-.6c.2-.2.5-.3.8-.1l1.6.8c.3.2.4.5.2.8-.4.8-1.1 1.2-1.9 1.1-2.7-.4-5.9-3.5-6.2-6.2-.1-.6.3-1.1 1.2-1.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function MundanElectronicCityPage() {
  return (
    <>
      <SiteHeader navLinks={mundanNavLinks} />
      <main>
        <Section
          id="intro"
          ariaLabelledby="mundan-title"
          className="relative"
          hero
          tone="blush"
        >
          <div className="mx-auto max-w-[720px] text-center">
            <IntroFullLogo className="mb-6" />
            <h1
              id="mundan-title"
              className="text-[clamp(1.75rem,5vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-brand-navy"
            >
              Baby Mundan in Electronic City
            </h1>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] sm:text-lg">
              At Lollipop Locs, baby mundan and tonsure ceremonies are handled with patience,
              gentleness and care. Our stylists give little ones time to explore, play and settle
              in before beginning.
            </p>
          </div>
        </Section>

        <Section id="book" ariaLabel="Book a baby mundan" tone="white">
          <div className="mx-auto flex max-w-[520px] flex-col items-center gap-4 text-center">
            <p className="text-[1.0625rem] leading-[1.6]">
              Call or WhatsApp to book a baby mundan at our Electronic City salon.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={PHONE_HREF} className={BTN_PRIMARY}>
                <PhoneIcon />
                Call {PHONE_NUMBER}
              </a>
              <a href={WHATSAPP_HREF} className={BTN_WHATSAPP}>
                <WhatsAppIcon />
                WhatsApp Lollipop Locs
              </a>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter copyrightNote="Baby mundan in Electronic City, Bengaluru." />
    </>
  );
}
