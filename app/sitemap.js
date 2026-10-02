import { LANDING_PATH, MUNDAN_PATH, SITE_URL } from '../lib/site-config';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}${LANDING_PATH}`,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}${MUNDAN_PATH}`,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
