import {
  BUSINESS,
  LANDING_PATH,
  LANDING_URL,
  OG_IMAGE,
  PAGE_DESCRIPTION,
  PAGE_TITLE,
  SITE_URL,
} from './site-config';

export function buildLandingMetadata() {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: LANDING_PATH,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: LANDING_URL,
      siteName: BUSINESS.shortName,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: 'Kids haircut at Lollipop Locs salon in Electronic City, Bengaluru',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: [OG_IMAGE],
    },
  };
}
