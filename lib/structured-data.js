import {
  BUSINESS,
  EXPERIENCE_COPY,
  FAQ_ITEMS,
  GOOGLE_REVIEWS,
  GOOGLE_REVIEWS_AGGREGATE,
  HERO_IMAGE,
  LANDING_URL,
  POSTER_IMAGE,
  SERVICES,
  SITE_URL,
  buildOpeningHoursSpecification,
} from './site-config';

function absoluteUrl(path) {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`;
}

export function buildLocalBusinessSchema() {
  const { address, geo } = BUSINESS;
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
    name: BUSINESS.name,
    telephone: BUSINESS.telephone,
    url: BUSINESS.website,
    image: absoluteUrl(HERO_IMAGE),
    description: `${EXPERIENCE_COPY.firstParagraph} ${EXPERIENCE_COPY.secondParagraph}`,
    areaServed: {
      '@type': 'Place',
      name: BUSINESS.areaServed,
    },
    priceRange: BUSINESS.priceRange,
    serviceType: SERVICES.map((service) => service.name),
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: `${address.locality}, ${address.city}`,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification: buildOpeningHoursSpecification(),
  };

  if (GOOGLE_REVIEWS.length) {
    schema.review = GOOGLE_REVIEWS.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
      url: review.link,
    }));
  }

  if (GOOGLE_REVIEWS_AGGREGATE) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_REVIEWS_AGGREGATE.value,
      reviewCount: GOOGLE_REVIEWS_AGGREGATE.count,
      bestRating: 5,
    };
  }

  return schema;
}

export function buildServiceSchemas() {
  return SERVICES.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'HealthAndBeautyBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.telephone,
      url: BUSINESS.website,
    },
    areaServed: {
      '@type': 'Place',
      name: BUSINESS.areaServed,
    },
  }));
}

export function buildFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function buildVideoSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'See the Lollipop Locs Experience',
    description: `${EXPERIENCE_COPY.firstParagraph} ${EXPERIENCE_COPY.secondParagraph}`,
    thumbnailUrl: absoluteUrl(POSTER_IMAGE),
    contentUrl: absoluteUrl('/videos/lollipop-video.mp4'),
    uploadDate: '2026-10-01',
  };
}

export function buildBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Kids Haircut in Electronic City',
        item: LANDING_URL,
      },
    ],
  };
}

export function buildAllStructuredData() {
  return [
    buildLocalBusinessSchema(),
    ...buildServiceSchemas(),
    buildFaqSchema(),
    buildVideoSchema(),
    buildBreadcrumbSchema(),
  ];
}
