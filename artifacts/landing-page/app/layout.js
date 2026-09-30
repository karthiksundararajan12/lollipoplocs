import './globals.css';

export const metadata = {
  title: 'Landing Page',
  description: 'A static landing page.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}