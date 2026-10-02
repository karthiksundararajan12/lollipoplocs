'use client';

import { useCallback, useEffect, useState } from 'react';
import { PHONE_HREF, WHATSAPP_HREF } from './contact-details';
import { WHATSAPP_MOBILE_HREF } from '../../lib/site-config';

const navLinks = [
  { href: '#experience', label: 'Our Experience' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#questions', label: 'FAQs' },
  { href: '#location', label: 'Visit Us' },
];

const navLinkClassName =
  'text-muted flex min-h-11 items-center rounded px-2 text-[0.95rem] font-bold transition hover:text-[#c52f76] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a]';

function CandyMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-10 w-10 shrink-0"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M28 27.5 39 41"
        stroke="#D98AAE"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <circle cx="21" cy="18" r="13.5" fill="#E75396" stroke="white" strokeWidth="2" />
      <path
        d="M18.3 10.5c-3.8 1.2-5.6 5.2-4.3 8.7 1.2 3.4 5.2 5.1 8.6 3.9 3.1-1.1 4.5-4.4 3.4-7.1-.9-2.2-3.4-3.3-5.5-2.5-1.8.7-2.7 2.5-2 4.1.5 1.2 1.8 1.8 3 1.3"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

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

function BookingLink({ children, href, tone, icon, className = '', onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold leading-none text-white shadow-[0_8px_18px_rgba(46,32,42,0.12)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_22px_rgba(46,32,42,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a] ${tone} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}

export function SiteHeader() {
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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="mx-auto flex min-h-[76px] max-w-[1240px] items-center justify-between gap-5 px-5 py-3 sm:px-8">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a]"
        >
          <CandyMark />
          <span className="min-w-0">
            <span className="block font-[family-name:var(--font-fredoka)] text-[1.35rem] font-semibold leading-none tracking-[-0.03em] text-[#c52f76]">
              Lollipop Locs
            </span>
            <span className="text-muted mt-1 block text-[0.64rem] font-bold leading-none">
              Premium Kids &amp; Tweens Salon
            </span>
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="text-muted hidden items-center gap-5 text-[0.82rem] font-bold xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="rounded transition hover:text-[#c52f76] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a]"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <BookingLink
            href={PHONE_HREF}
            tone="bg-[#c52f76] hover:bg-[#ad2868]"
            icon={<PhoneIcon />}
            className="min-h-10 px-4 text-xs"
          >
            Call to Book
          </BookingLink>
          <BookingLink
            href={WHATSAPP_HREF}
            tone="bg-[#00764c] hover:bg-[#006b45]"
            icon={<WhatsAppIcon />}
            className="min-h-10 px-4 text-xs"
          >
            WhatsApp
          </BookingLink>
        </div>

        <button
          type="button"
          className="text-muted inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg transition hover:bg-pastel-blush hover:text-[#c52f76] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a] xl:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile navigation"
          className="xl:hidden border-t border-black/5 bg-white shadow-[0_12px_28px_rgba(46,32,42,0.08)]"
        >
          <div className="mx-auto flex max-w-[1240px] flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={navLinkClassName}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 grid gap-2 border-t border-black/5 pt-4">
              <BookingLink
                href={PHONE_HREF}
                tone="bg-[#c52f76] hover:bg-[#ad2868]"
                icon={<PhoneIcon />}
                className="w-full min-h-11"
                onClick={closeMenu}
              >
                Call
              </BookingLink>
              <BookingLink
                href={WHATSAPP_MOBILE_HREF}
                tone="bg-[#00764c] hover:bg-[#006b45]"
                icon={<WhatsAppIcon />}
                className="w-full min-h-11"
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
