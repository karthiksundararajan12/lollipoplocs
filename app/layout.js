import './globals.css';
import { Fredoka, Nunito } from 'next/font/google';
import { BUSINESS, SITE_URL } from '../lib/site-config';

const fredoka = Fredoka({
  variable: '--font-fredoka',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BUSINESS.shortName,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className={`${fredoka.variable} ${nunito.variable} font-sans text-base`}>
        {children}
      </body>
    </html>
  );
}
