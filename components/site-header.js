'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  BUSINESS,
  PHONE_HREF,
  WHATSAPP_HREF,
  WHATSAPP_MOBILE_HREF,
} from '../lib/site-config';
import {
  BTN_PRIMARY,
  BTN_SECONDARY,
  BTN_WHATSAPP,
} from '../app/kids-haircut-electronic-city/ui-primitives';
import { HeaderWordmarkLink } from './site-logo';

export const KIDS_NAV_LINKS = [
  { href: '#experience', label: 'Our Experience' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#questions', label: 'FAQs' },
  { href: '#location', label: 'Visit Us' },
  { href: '#parent-child-combo', label: 'Parent + Child Combo' },
];

const navLinkClassName =
  'text-muted flex min-h-11 items-center rounded px-2 text-[0.95rem] font-bold transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy';

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

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function BookingLink({ children, href, variant = 'primary', icon, className = '', onClick }) {
  const variantClass = variant === 'whatsapp' ? BTN_WHATSAPP : BTN_PRIMARY;

  return (
    <a href={href} onClick={onClick} className={`${variantClass} ${className}`}>
      {icon}
      {children}
    </a>
  );
}

export function SiteHeader({ navLinks = KIDS_NAV_LINKS }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [closeMenu]);

  useEffect(() => {
    const onHashChange = () => {
      closeMenu();
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [closeMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex h-16 max-w-[1240px] flex-nowrap items-center gap-3 px-5 sm:h-[72px] sm:gap-4 sm:px-8">
        <HeaderWordmarkLink />

        <nav
          aria-label="Main navigation"
          className="text-muted hidden min-w-max flex-1 flex-nowrap items-center justify-center gap-3 text-[0.8rem] font-bold xl:flex 2xl:gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="whitespace-nowrap rounded transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 flex-nowrap items-center gap-2">
          <div className="hidden shrink-0 flex-nowrap items-center gap-2 xl:flex">
            <BookingLink
              href={PHONE_HREF}
              variant="primary"
              icon={<PhoneIcon />}
              className="h-10 shrink-0 whitespace-nowrap px-4 text-xs"
            >
              Call to Book
            </BookingLink>
            <BookingLink
              href={WHATSAPP_HREF}
              variant="whatsapp"
              icon={<WhatsAppIcon />}
              className="h-10 shrink-0 whitespace-nowrap px-4 text-xs"
            >
              WhatsApp
            </BookingLink>
            <a
              href={BUSINESS.mapsLink}
              className={`${BTN_SECONDARY} h-10 shrink-0 whitespace-nowrap px-4 text-xs`}
            >
              Get Directions
            </a>
          </div>

          <button
            type="button"
            className="text-muted inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg transition hover:bg-blush hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile navigation"
          className="xl:hidden border-t border-black/5 bg-white shadow-[0_12px_28px_rgba(27,42,92,0.08)]"
        >
          <div className="mx-auto flex max-w-[1240px] flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={navLinkClassName}
                onClick={(event) => {
                  if (link.href.startsWith('#')) {
                    const target = document.querySelector(link.href);
                    if (target) {
                      event.preventDefault();
                      document.body.style.overflow = '';
                      closeMenu();
                      window.setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 0);
                      window.history.pushState(null, '', link.href);
                      return;
                    }
                  }
                  closeMenu();
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 grid gap-2 border-t border-black/5 pt-4">
              <BookingLink
                href={PHONE_HREF}
                variant="primary"
                icon={<PhoneIcon />}
                className="w-full"
                onClick={closeMenu}
              >
                Call
              </BookingLink>
              <BookingLink
                href={WHATSAPP_MOBILE_HREF}
                variant="whatsapp"
                icon={<WhatsAppIcon />}
                className="w-full"
                onClick={closeMenu}
              >
                WhatsApp
              </BookingLink>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
