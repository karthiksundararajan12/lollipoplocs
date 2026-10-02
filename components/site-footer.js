import {
  BUSINESS,
  PHONE_HREF,
  PHONE_NUMBER,
  WHATSAPP_HREF,
  formatFullAddress,
  formatHoursDisplay,
} from '../lib/site-config';
import { BTN_PRIMARY, BTN_WHATSAPP } from '../app/kids-haircut-electronic-city/ui-primitives';
import { FooterFullLogo } from './site-logo';

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
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
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
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

export function SiteFooter({ copyrightNote = 'Kids haircut Electronic City, Bengaluru.' }) {
  const address = formatFullAddress();
  const hours = formatHoursDisplay();

  return (
    <footer className="border-t border-black/5 bg-white px-4 py-8 md:px-6">
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <FooterFullLogo />
          <address className="mt-4 not-italic text-sm leading-relaxed">
            <span className="block font-bold">{BUSINESS.name}</span>
            <a
              href={BUSINESS.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              {address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
            <span className="text-muted mt-2 block font-semibold">
              {address.floorNote}
            </span>
            <a
              href={PHONE_HREF}
              className="text-accent mt-3 inline-flex items-center gap-2 font-bold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              <PhoneIcon />
              {PHONE_NUMBER}
            </a>
          </address>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <div className="text-sm">
            <p className="font-bold">Store hours</p>
            <ul className="text-muted mt-2 space-y-1">
              {hours.map(({ label, time }) => (
                <li key={label}>
                  <span className="font-semibold">{label}:</span>{' '}
                  {time}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm font-bold">Book a kids haircut</p>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            <a href={PHONE_HREF} className={BTN_PRIMARY}>
              <PhoneIcon />
              Call to Book
            </a>
            <a href={WHATSAPP_HREF} className={BTN_WHATSAPP}>
              <WhatsAppIcon />
              WhatsApp Lollipop Locs
            </a>
          </div>
        </div>
      </div>
      <p className="text-muted mx-auto mt-8 max-w-[1240px] text-center text-xs">
        © {new Date().getFullYear()} {BUSINESS.shortName}. {copyrightNote}
      </p>
    </footer>
  );
}
