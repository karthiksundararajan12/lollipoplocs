import { LANDING_PATH, SITE_URL } from '../lib/site-config';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}${LANDING_PATH}`,
      lastModified: new Date('2026-10-01'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
