/** Production website URL. Override with NEXT_PUBLIC_SITE_URL if needed. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lollipoplocs.com';

export const LANDING_PATH = '/kids-haircut-electronic-city';
export const LANDING_URL = `${SITE_URL}${LANDING_PATH}`;
export const MUNDAN_PATH = '/mundan-electronic-city';
export const MUNDAN_URL = `${SITE_URL}${MUNDAN_PATH}`;

export const PHONE_NUMBER = '+91 89043 13999';
export const PHONE_HREF = 'tel:+918904313999';
export const WHATSAPP_HREF =
  'https://wa.me/918904313999?text=Hi%2C%20I%27d%20like%20to%20book%20a%20kids%20haircut%20at%20Lollipop%20Locs.';
export const WHATSAPP_MOBILE_HREF = 'https://wa.me/918904313999';

export const CERTIFICATE_PRICE = 699;

/** Section background tones — full-bleed zones, tweak colours here. */
export const SECTION_TONES = {
  hero: 'blush',
  experience: 'experienceLight',
  chairs: 'lavenderLight',
  benefits: 'benefitsLight',
  whyFamilies: 'mint',
  nervousChild: 'peach',
  pricing: 'lavenderLight',
  firstHaircut: 'blush',
  reviews: 'butterLight',
  faq: 'skyLight',
  visitUs: 'mint',
  finalCta: 'peach',
  footer: 'lavender',
  mundanBook: 'butter',
};

export const SECTION_TONE_CLASSES = {
  blush: 'section-tone-blush',
  sky: 'section-tone-sky',
  butter: 'section-tone-butter',
  mint: 'section-tone-mint',
  lavender: 'section-tone-lavender',
  peach: 'section-tone-peach',
  experienceLight: 'section-tone-experience-light',
  benefitsLight: 'section-tone-benefits-light',
  skyLight: 'section-tone-sky-light',
  butterLight: 'section-tone-butter-light',
  lavenderLight: 'section-tone-lavender-light',
};

/** Fill colour for the wavy divider at the top of a section. */
export const SECTION_DIVIDER_COLORS = {
  blush: '#FFE9F1',
  sky: '#E3F3FF',
  butter: '#FFF4D6',
  mint: '#E2F6EC',
  lavender: '#EFE8FF',
  peach: '#FFEBDD',
  experienceLight: '#F4FBFF',
  benefitsLight: '#F2FBF6',
  skyLight: '#EEF8FF',
  butterLight: '#FFF9E8',
  lavenderLight: '#F6F2FF',
};

export const PRICING = {
  boysHaircut: 899,
  girlsHaircut: 999,
  boysHaircutWithWash: 1099,
  girlsHaircutWithWash: 1299,
  certificate: CERTIFICATE_PRICE,
};

export const BUSINESS = {
  name: 'Lollipop Locs Premium Salon and Spa for Kids and Tweens',
  shortName: 'Lollipop Locs',
  tagline: 'Premium Kids & Tweens Salon',
  telephone: PHONE_NUMBER,
  website: SITE_URL,
  priceRange: '₹899–₹1,299',
  areaServed: 'Electronic City, Bengaluru',
  floorNote: '3rd Floor, JP Complex',
  address: {
    streetAddress: 'No 13, JP Complex, 3rd Floor, K No 156/35',
    locality: 'Electronic City Phase I, Hulimangala',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560105',
    country: 'IN',
  },
  geo: {
    latitude: 12.8290193,
    longitude: 77.6488006,
  },
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Lollipop+Locs+Premium+Salon+and+Spa+for+kids+and+Tweens+Electronic+City+Phase+I+Bengaluru+560105',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=12.8290193,77.6488006&z=16&output=embed',
  hours: {
    weekday: {
      label: 'Monday–Friday',
      opens: '11:00',
      closes: '20:00',
      display: '11:00 AM – 8:00 PM',
    },
    weekend: {
      label: 'Saturday–Sunday',
      opens: '09:30',
      closes: '20:30',
      display: '9:30 AM – 8:30 PM',
    },
  },
};

export function formatInr(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function formatFullAddress() {
  const { address, floorNote } = BUSINESS;
  return {
    lines: [
      address.streetAddress,
      address.locality,
      `${address.city}, ${address.state} ${address.postalCode}`,
    ],
    floorNote,
    singleLine: `${address.streetAddress}, ${address.locality}, ${address.city}, ${address.state} ${address.postalCode}`,
  };
}

export function formatHoursDisplay() {
  const { hours } = BUSINESS;
  return [
    { label: hours.weekday.label, time: hours.weekday.display },
    { label: hours.weekend.label, time: hours.weekend.display },
  ];
}

export function buildOpeningHoursSpecification() {
  const { hours } = BUSINESS;
  return [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: hours.weekday.opens,
      closes: hours.weekday.closes,
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: hours.weekend.opens,
      closes: hours.weekend.closes,
    },
  ];
}

export const PAGE_TITLE =
  'Kids Haircut in Electronic City, Bengaluru | Lollipop Locs Kids Salon & Spa';

export const PAGE_DESCRIPTION =
  "Kids' haircuts, baby tonsure, anti-lice treatment, puberty spa & birthday spa parties in Electronic City, Bengaluru. Call +91 89043 13999 to book.";

export const HERO_IMAGE = '/images/hero-stylist.webp';
export const OG_IMAGE = '/images/og-image.webp';
export const POSTER_IMAGE = '/videos/lollipop-poster.webp';

export const EXPERIENCE_COPY = {
  heading: 'See the Lollipop Locs Experience 🍭',
  firstParagraph:
    'Step into our colourful Candyland-themed Kids & Tweens Salon, designed to make haircut time more fun and comfortable for little ones.',
  secondParagraph:
    "From themed haircut chairs and playful interiors to toys, a play area and patient stylists, there's plenty to keep little minds happy and engaged while they're here.",
};

/**
 * Prices for the First-Time Haircut Experiences section.
 * Combo order is the accordion order. Certificate follows PRICING.certificate.
 */
export const PARENT_CHILD_COMBOS = {
  heading: 'Parent + Child Combos',
  certificate: PRICING.certificate,
  items: [
    { label: 'Dad + Son', price: 1199 },
    { label: 'Mom + Son', price: 1299 },
    { label: 'Dad + Daughter', price: 1299 },
    { label: 'Mom + Daughter', price: 1499 },
  ],
};

export const FIRST_TIME_EXPERIENCES = {
  heading: 'First-Time Haircut Experiences',
  callToBookLabel: '📞 CALL TO BOOK',
  watch: {
    title: '❤️ Let Them Watch You First',
    subheading: 'Nervous about their haircut?',
    body: 'Sometimes watching Mom or Dad comfortably get a haircut first can make the experience feel more familiar.',
    bold: 'Go First. Let Them Watch. Then Let Them Try.',
  },
  firstHaircut: {
    title: '✂️ Their First Haircut Happens Only Once',
    body: "Looking for a baby salon near me for your little one's first haircut? Give them time to explore, play and settle in while our patient stylists gently introduce them to the experience.",
    bold: 'Make the Milestone a Memory ❤️',
    certificateLabel: 'Personalised First Haircut Certificate',
    note: 'Optional add-on. Haircut charged separately.',
  },
};

export const SERVICES = [
  {
    id: 'kids-haircut',
    name: "Kids' Haircut",
    description: `Kids' haircuts at Lollipop Locs in Electronic City with patient stylists, themed chairs, toys and play. Boys haircut only from ${formatInr(PRICING.boysHaircut)}; girls from ${formatInr(PRICING.girlsHaircut)}.`,
  },
  {
    id: 'baby-tonsure',
    name: 'Baby Tonsure',
    description:
      'Baby tonsure and first-haircut experiences with patient stylists who give little ones time to explore, play and settle in before beginning.',
  },
  {
    id: 'anti-lice',
    name: 'Anti-Lice Treatment for Kids',
    description:
      'Anti-lice treatments for kids at Lollipop Locs Premium Kids Salon & Spa in Electronic City.',
  },
  {
    id: 'puberty-spa',
    name: 'Puberty Spa',
    description:
      'Puberty spa for tweens at Lollipop Locs Premium Kids Salon & Spa in Electronic City.',
  },
  {
    id: 'birthday-spa-party',
    name: 'Birthday Spa Party for Kids',
    description:
      'Birthday spa parties for kids at Lollipop Locs Premium Kids Salon & Spa in Electronic City.',
  },
];

/** FAQ entries — icon keys map to lucide-react in FaqAccordion. */
export const FAQ_ITEMS = [
  {
    id: 'nervous-child',
    icon: 'Heart',
    question: 'My child cries during haircuts. Can you manage?',
    answer:
      'Our stylists regularly work with little ones who may be nervous or find it difficult to sit still. We take a patient approach and use toys and distractions to help them feel more comfortable.',
  },
  {
    id: 'baby-haircuts',
    icon: 'Baby',
    question: "Is Lollipop Locs suitable for my baby's first haircut?",
    answer:
      'Yes. We give little ones time to become familiar with the salon and stylist before beginning.',
  },
  {
    id: 'parents-stay',
    icon: 'Users',
    question: 'Can I stay beside my child?',
    answer: 'Yes. Parents can stay close during the haircut.',
  },
  {
    id: 'themed-chair',
    icon: 'Armchair',
    question: 'Can my child choose a themed chair?',
    answer:
      "Yes, subject to availability and suitability for your child's age and size.",
  },
  {
    id: 'appointment',
    icon: 'Calendar',
    question: 'Do I need an appointment?',
    answer:
      "Appointments are recommended, particularly on weekends. Call us to book your child's haircut.",
  },
];

/** Shared inclusions for haircut package cards. */
export const PACKAGE_INCLUDES = [
  'Themed chair of your choice',
  'Patient kid-friendly stylist',
  'Toys & distraction',
  'Kid-safe products',
  'Play area access',
];

/** Pricing comparison table rows (prices in INR). */
export const PRICING_COMPARISON = {
  columns: ['Boys', 'Girls', 'First Haircut'],
  rows: [
    {
      label: 'Haircut',
      boys: PRICING.boysHaircut,
      girls: PRICING.girlsHaircut,
      firstHaircut: { boys: PRICING.boysHaircut, girls: PRICING.girlsHaircut },
    },
    {
      label: 'Haircut + Wash',
      boys: PRICING.boysHaircutWithWash,
      girls: PRICING.girlsHaircutWithWash,
      firstHaircut: {
        boys: PRICING.boysHaircutWithWash,
        girls: PRICING.girlsHaircutWithWash,
      },
    },
    {
      label: 'Themed chair',
      boys: true,
      girls: true,
      firstHaircut: true,
    },
    {
      label: 'Toys & play area',
      boys: true,
      girls: true,
      firstHaircut: true,
    },
    {
      label: 'Certificate',
      boys: false,
      girls: false,
      firstHaircut: PRICING.certificate,
    },
  ],
};

/** Package card photos — real salon images only. */
export const PRICING_PACKAGE_IMAGES = {
  boys: {
    src: '/images/gallery-kids-haircut.webp',
    alt: 'Stylist giving a boy a haircut in the airplane chair at Lollipop Locs',
  },
  girls: {
    src: '/images/gallery-stylist.webp',
    alt: 'Stylist giving a child a haircut at Lollipop Locs',
  },
  firstHaircut: {
    src: '/images/gallery-kids-haircut.webp',
    alt: 'Child during a first haircut experience at Lollipop Locs',
  },
  // TODO: Replace with a dedicated baby first-haircut photo from photos-lollipop when available.
  firstHaircutBaby: {
    src: '/images/photos-lollipop/WhatsApp Image 2026-10-01 at 12.42.21.jpeg',
    alt: 'Toddler in the play area at Lollipop Locs before a first haircut visit',
  },
  // TODO: Add a dedicated family or parent-child photo from photos-lollipop when available.
  // family: { src: '/images/photos-lollipop/...', alt: '...' },
};

/** Gallery under the experience video — { src, alt, caption }. */
export const CAPTIONED_GALLERY = [
  {
    src: '/images/gallery-candyland-interior.webp',
    alt: 'Child standing among giant lollipop props in the Candyland-themed Lollipop Locs lobby',
    caption: 'Candyland Interior',
  },
  {
    src: '/images/gallery-play-area.webp',
    alt: 'Child sitting in the colourful ball pit at Lollipop Locs',
    caption: 'Play Area',
  },
  {
    src: '/images/gallery-car-chair.webp',
    alt: 'Child seated in the rainbow car haircut chair at Lollipop Locs',
    caption: 'Car Chair',
  },
  {
    src: '/images/gallery-unicorn-chair.webp',
    alt: 'Rainbow unicorn haircut chair at Lollipop Locs',
    caption: 'Unicorn Chair',
  },
  {
    src: '/images/gallery-airplane.webp',
    alt: 'White airplane-themed kids haircut chair at Lollipop Locs',
    caption: 'Airplane Chair',
  },
  {
    src: '/images/gallery-kids-haircut.webp',
    alt: 'Stylist giving a child a haircut in the airplane chair at Lollipop Locs',
    caption: 'Kids Haircut Experience',
  },
  {
    src: '/images/gallery-cupcake-counter.webp',
    alt: 'Cupcake-shaped reception counter at Lollipop Locs',
    caption: 'Cupcake Counter',
  },
  {
    src: '/images/gallery-toy-shelf.webp',
    alt: 'Illuminated toy shelf labelled Lollipop Locs Lane',
    caption: 'Toy Shelf',
  },
  {
    src: '/images/gallery-styling-station.webp',
    alt: 'Styling station with a lollipop-framed mirror and salon chair at Lollipop Locs',
    caption: 'Styling Station',
  },
  {
    src: '/images/gallery/salon-lollipop-fun.jpeg',
    alt: 'Young girl posing with a giant pink and white lollipop prop in front of the Lollipop Locs salon logo',
    caption: 'Salon Fun',
  },
  {
    src: '/images/gallery/kids-haircut-fade-design.jpeg',
    alt: 'Boy showing off a fresh haircut with shaved side-line design at Lollipop Locs',
    caption: 'Fresh Haircut Style',
  },
  {
    src: '/images/gallery/play-area-lollipop-slide.jpeg',
    alt: 'Giant swirled lollipop slide leading into a colourful ball pit at Lollipop Locs',
    caption: 'Lollipop Slide & Ball Pit',
  },
];

export const CERTIFICATE_IMAGE = '/images/certificate.webp';

const GOOGLE_REVIEWS_MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Lollipop+Locs+Premium+Salon+and+Spa+for+kids+and+Tweens+Electronic+City+Phase+I+Bengaluru+560105';

/** Google reviews — { name, rating, text, link }. */
export const GOOGLE_REVIEWS = [
  {
    name: 'Shravan Kashyap',
    rating: 5,
    link: GOOGLE_REVIEWS_MAPS_LINK,
    text: `We had a wonderful experience at Lollipop Locs Premium Salon and Spa for Kids. The entire setup is thoughtfully designed for children, making the environment fun, comfortable, and completely stress-free for both kids and parents.

A special mention to Sameer, who did an excellent job with my son’s haircut. He was incredibly patient, attentive, and really took the time to understand exactly what we wanted. It’s not always easy handling kids during a haircut, but Sameer managed it with great calmness and professionalism, ensuring my son was at ease throughout the process.

The end result was exactly what we had hoped for. Truly appreciate the effort and care put into the service. Highly recommend this place for parents looking for a quality grooming experience for their kids!`,
  },
  {
    name: 'Amarendra Kumar',
    rating: 5,
    link: GOOGLE_REVIEWS_MAPS_LINK,
    text: `We took our toddler here for his very first haircut, and it turned out to be a wonderful experience! Getting a haircut for toddlers is usually not easy, but this place made it so much smoother than we imagined.

The salon is clearly designed with kids in mind. The ambience is colorful and cheerful, with toys, a slide, and fun chairs shaped like an airplane, car, and even a unicorn. It instantly put our child at ease and made the whole process feel more like playtime than a chore. It’s definitely an amazing place that kids will love.

The staff were very friendly and patient. They understood that toddlers can get fussy, so they gave our little one enough time to calm down even in between the process. This really helped him settle in and feel comfortable. The people here are not just skilled at haircuts but also at handling babies and toddlers with care.

We also liked that there were options to choose from for different haircut styles, so you can pick what suits your child best. The haircut itself was done neatly and carefully.

Overall, this salon is a great choice for babies and toddlers, especially for milestone moments like a first haircut. The staff’s helpfulness, the kid-friendly setup, and the thoughtful approach to making children comfortable made it a highly recommended experience for us.`,
  },
  {
    name: 'Nishnu N.K',
    rating: 5,
    link: GOOGLE_REVIEWS_MAPS_LINK,
    text: `We had an amazing experience at Lolipop for our younger son’s very first haircut! As parents, we were a little nervous, but the entire team made the experience smooth, comfortable, and memorable.

The staff were incredibly patient, friendly, and professional, ensuring our son felt at ease throughout the haircut. The setup is perfectly designed for kids, making what could have been a stressful experience fun and enjoyable. The haircut itself was stylish, neat, and exactly what we wanted.

A special thank you to the team for turning such an important milestone into a wonderful memory for our family. We highly recommend Lolipop to any parent looking for a great first haircut experience for their little one!`,
  },
  {
    name: 'Kajin K',
    rating: 5,
    link: GOOGLE_REVIEWS_MAPS_LINK,
    text: `One of the finest salon for kids!
The staff is very good in handling kids. The interior is amazingggggg, which attracts kids and they forget the "tension" which kids have when they go to a saloon for haircut.

They have various packages, and even kid-parent package too. To keep kids engaged there is a small ball-pit too.

Definitely a must visit for your kids haircut! 👍🏼`,
  },
  {
    name: 'Karishma Sikdar',
    rating: 5,
    link: GOOGLE_REVIEWS_MAPS_LINK,
    text: `We recently had our little one’s mundan ceremony at Lollipop Locks, and I genuinely couldn’t have asked for a better experience 🤍

From the moment we walked in, the entire space felt so thoughtfully designed for children—bright, clean, cheerful, and instantly comforting. The salon itself is absolutely amazing, with a perfect blend of fun and luxury that keeps kids relaxed and happy.

What truly stood out was how gentle, patient, and professional the team was throughout the mundan process. They handled everything with such care and sensitivity, making sure our child was comfortable at every step. As a parent, that reassurance means everything.

The attention to detail, hygiene standards, and overall experience were just exceptional. It didn’t feel like a stressful ritual—it felt like a special, well-managed celebration.

Highly recommend Lollipop Locks to any parent looking for a premium, child-friendly salon experience—especially for something as important as a mundan. Truly grateful for such a smooth and memorable day 💛`,
  },
];

export const GOOGLE_RATING = '4.9';

/** Display count shown in hero, badges, and trust strip (e.g. "800+"). */
export const GOOGLE_REVIEW_COUNT = '800+';

/** Aggregate rating for JSON-LD — reviewCount is numeric for schema.org. */
export const GOOGLE_REVIEWS_AGGREGATE = {
  value: 4.9,
  count: 800,
};

/** Themed styling chairs for the post-gallery carousel. */
export const CHAIR_CARDS = [
  {
    title: 'Airplane Chair',
    caption: 'Perfect for little pilots',
    src: '/images/chairs/airplane-chair.jpg',
    alt: 'White airplane-themed kids haircut chair with gold base at Lollipop Locs',
    objectPosition: 'center',
  },
  {
    title: 'Unicorn Chair',
    caption: 'A favorite among little dreamers',
    src: '/images/chairs/unicorn-chair.jpg',
    alt: 'White and pink unicorn-themed kids haircut chair at Lollipop Locs',
    objectPosition: 'center 30%',
  },
  {
    title: 'Car Chair',
    caption: 'Fun rides during every haircut',
    src: '/images/chairs/car-chair.jpg',
    alt: 'Rainbow car-themed kids haircut chair with a child seated at Lollipop Locs',
    objectPosition: 'center',
  },
];

/** Why families choose Lollipop Locs — icon keys map to lucide-react components. */
export const WHY_FAMILIES_ITEMS = [
  { icon: 'Scissors', label: 'Kid-Friendly Stylists' },
  { icon: 'Droplets', label: 'Kid-Friendly Products' },
  { icon: 'ShieldCheck', label: 'Sterilized Tools' },
  { icon: 'Sparkles', label: 'Hygienic Environment' },
  { icon: 'Armchair', label: 'Themed Styling Chairs' },
  { icon: 'Candy', label: 'Candy-Themed Interiors' },
  { icon: 'Blocks', label: 'Dedicated Play Area' },
  { icon: 'Monitor', label: 'Optional Screen Time (With Consent)' },
  { icon: 'Award', label: 'First Haircut Certificates' },
  { icon: 'Users', label: 'Parent & Child Experiences' },
  { icon: 'Baby', label: 'Breastfeeding-Friendly Space' },
  { icon: 'HeartHandshake', label: 'Family-Friendly Convenience' },
];
