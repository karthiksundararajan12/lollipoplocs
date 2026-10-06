import { buildLandingMetadata } from '../../lib/seo-metadata';
import { buildAllStructuredData } from '../../lib/structured-data';
import {
  CAPTIONED_GALLERY,
  EXPERIENCE_COPY,
  POSTER_IMAGE,
  SECTION_TONES,
} from '../../lib/site-config';
import { CalloutBand } from './callout-band';
import { PricingSection } from './pricing-section';
import { PhotoGallery } from './photo-gallery';
import { Section } from './section';
import { ExperienceVideo } from './section-interactions';
import { ChooseChairSection } from './choose-chair-section';
import { HeroSection, MobileBookingBar } from './hero-section';
import {
  FinalCallToAction,
  FirstTimeExperiencesSection,
  LocationSection,
  QuestionsSection,
  ReviewsSection,
} from './support-sections';
import { WhyFamiliesSection } from './why-families-section';
import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

const experienceVideoUrl = '/videos/lollipop-video.mp4';
const experiencePosterUrl = POSTER_IMAGE;
const experienceCopy = EXPERIENCE_COPY;
const structuredData = buildAllStructuredData();

export const metadata = buildLandingMetadata();

function ExperienceSection() {
  return (
    <Section
      id="experience"
      ariaLabelledby="experience-title"
      className="experience-section"
      dividerBefore
      tone={SECTION_TONES.experience}
    >
      <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
        <div className="min-w-0">
          <h2
            id="experience-title"
            className="section-heading text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]"
          >
            {experienceCopy.heading}
          </h2>
          <div
            id="experience-copy"
            className="space-y-3 text-[1.0625rem] leading-[1.6]"
          >
            <p>{experienceCopy.firstParagraph}</p>
            <p>{experienceCopy.secondParagraph}</p>
          </div>
        </div>
        <ExperienceVideo
          videoUrl={experienceVideoUrl}
          posterUrl={experiencePosterUrl}
          descriptionId="experience-copy"
        />
      </div>
      <div className="gallery-band relative left-1/2 mt-8 w-screen max-w-[100vw] -translate-x-1/2 px-4 py-10 md:px-6 md:py-16 lg:mt-10 lg:px-8 lg:py-[72px]">
        <PhotoGallery photos={CAPTIONED_GALLERY} />
      </div>
    </Section>
  );
}

function ParentsSection() {
  const reasons = [
    { icon: '✂️', title: 'Patient Stylists', detail: 'Experienced with little ones.', circle: 'bg-pink-100' },
    { icon: '🚗', title: 'Themed Chairs', detail: 'Car, Unicorn & Airplane.', circle: 'bg-teal-100' },
    { icon: '🧸', title: 'Toys & Distractions', detail: 'Keeps little minds engaged.', circle: 'bg-amber-100' },
    { icon: '🛝', title: 'Play Area', detail: 'Let them settle in first.', circle: 'bg-yellow-100' },
    { icon: '🫧', title: 'Kid-Friendly Products', detail: 'Gentle care for little hair.', circle: 'bg-purple-100' },
  ];

  return (
    <section
      id="why-parents-choose-us"
      aria-labelledby="why-parents-choose-us-title"
      className="section-tone-benefits-light w-full py-8 md:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <p className="text-center text-sm text-pink-600">Why Parents Choose Us</p>
        <h2
          id="why-parents-choose-us-title"
          className="font-heading mx-auto mt-2 max-w-[22ch] text-center text-[clamp(1.75rem,4.5vw,2.5rem)] leading-[1.1] tracking-[-0.025em]"
        >
          Made for Kids. Easier for Parents. ❤️
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:mt-8 lg:grid-cols-5 lg:gap-4">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className={`rounded-2xl bg-white p-4 text-left shadow-[0_8px_24px_rgb(30_27_75_/_0.06)] ${index === reasons.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <span
                aria-hidden="true"
                className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${reason.circle}`}
              >
                {reason.icon}
              </span>
              <h3 className="mt-3 text-sm leading-snug">{reason.title}</h3>
              <p className="mt-1 text-sm leading-relaxed">{reason.detail}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-[76ch] text-center text-[1.0625rem] leading-[1.7]">
          Searching for a kids salon near me for your child&apos;s next haircut? At Lollipop Locs Electronic City, the experience is designed around children—from patient stylists and playful surroundings to themed chairs and plenty of distraction.
        </p>
      </div>
    </section>
  );
}

export default function KidsHaircutElectronicCityPage() {
  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={`ld-json-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <SiteHeader />
      <main className="flex w-full flex-col gap-0 bg-transparent">
        <HeroSection />
        <ExperienceSection />
        <ParentsSection />
        <ChooseChairSection />
        <PricingSection />
        <FirstTimeExperiencesSection />
        <WhyFamiliesSection />
        <CalloutBand />
        <ReviewsSection />
        <QuestionsSection />
        <LocationSection />
        <FinalCallToAction />
      </main>
      <SiteFooter />
      <MobileBookingBar />
    </>
  );
}