import Image from 'next/image';

const certificateImage =
  '/images/2_5be3a031-428d-4e15-8d0f-d6b5ad78456e_1790778166801.jpeg';

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

function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M19 10.2c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ContactButton({ href, tone, children, icon, className = '', ...props }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold leading-none text-white shadow-[0_8px_18px_rgba(46,32,42,0.12)] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a] ${tone} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </a>
  );
}

function CallToBook({ className = '' }) {
  return (
    <ContactButton
      href="tel:+91XXXXXXXXXX"
      tone="bg-[#c52f76] hover:bg-[#ad2868]"
      icon={<PhoneIcon />}
      className={className}
    >
      Call to Book
    </ContactButton>
  );
}

function WhatsAppToBook({ className = '' }) {
  return (
    <ContactButton
      href="https://wa.me/91XXXXXXXXXX"
      tone="bg-[#00764c] hover:bg-[#006b45]"
      icon={<WhatsAppIcon />}
      className={className}
    >
      WhatsApp
    </ContactButton>
  );
}

function ComboPrices() {
  const combos = [
    'Dad + Son — ₹1,199',
    'Mom + Son — ₹1,299',
    'Dad + Daughter — ₹1,299',
    'Mom + Daughter — ₹1,499',
  ];

  return (
    <details className="group mt-5 rounded-[1rem] border border-[#f1d6e3] bg-white/90">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-[1rem] px-4 py-3.5 font-bold text-[#713e58] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c52f76] [&::-webkit-details-marker]:hidden">
        <span>Parent + Child Combos from ₹1,199</span>
        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fce8f1] text-xl leading-none text-[#c52f76] transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <ul className="space-y-2 border-t border-[#f1dce7] px-4 py-3 text-sm font-semibold text-[#51424b]">
        {combos.map((combo) => (
          <li key={combo} className="flex items-center justify-between gap-3">
            <span>{combo.split(' — ')[0]}</span>
            <span className="font-[family-name:var(--font-fredoka)] text-base text-[#c52f76]">
              {combo.split(' — ')[1]}
            </span>
          </li>
        ))}
      </ul>
    </details>
  );
}

export function FirstHaircutSection() {
  return (
    <section
      id="first-time"
      aria-label="First-time haircut experiences"
      className="bg-[#fffafd] px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto grid max-w-[1120px] gap-5 lg:grid-cols-2 lg:gap-7">
        <article className="rounded-[1.8rem] border border-[#f0d9e5] bg-[linear-gradient(145deg,#fff4f9_0%,#fff_100%)] p-5 shadow-[0_16px_40px_rgba(82,42,64,0.07)] sm:p-7">
          <h2 className="font-[family-name:var(--font-fredoka)] text-2xl font-semibold leading-tight text-[#2e202a] sm:text-[1.75rem]">
            ❤️ Let Them Watch You First
          </h2>
          <p className="mt-4 font-bold text-[#51424b]">Nervous about their haircut?</p>
          <p className="mt-2 text-[1.02rem] leading-[1.65] text-[#5f4d58]">
            Sometimes watching Mom or Dad comfortably get a haircut first can
            make the experience feel more familiar.
          </p>
          <p className="mt-4 font-[family-name:var(--font-fredoka)] text-lg font-semibold leading-snug text-[#c52f76]">
            Go First. Let Them Watch. Then Let Them Try.
          </p>
          <ComboPrices />
          <CallToBook className="mt-5" />
        </article>

        <article className="grid gap-5 rounded-[1.8rem] border border-[#dcebf0] bg-[linear-gradient(145deg,#f0f9fc_0%,#fff_100%)] p-5 shadow-[0_16px_40px_rgba(52,83,94,0.07)] sm:p-7 md:grid-cols-[1fr_160px] md:items-center">
          <div>
            <h2 className="font-[family-name:var(--font-fredoka)] text-2xl font-semibold leading-tight text-[#2e202a] sm:text-[1.75rem]">
              ✂️ Their First Haircut Happens Only Once
            </h2>
            <p className="mt-4 text-[1.02rem] leading-[1.65] text-[#5f4d58]">
              Looking for a baby salon near me for your little one&apos;s first
              haircut? Give them time to explore, play and settle in while our
              patient stylists gently introduce them to the experience.
            </p>
            <p className="mt-4 font-[family-name:var(--font-fredoka)] text-lg font-semibold leading-snug text-[#c52f76]">
              Make the Milestone a Memory ❤️
            </p>
            <p className="mt-3 font-bold leading-relaxed text-[#51424b]">
              Personalised First Haircut Certificate — ₹699 extra
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#75616d]">
              Optional add-on. Haircut charged separately.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[190px] overflow-hidden rounded-[1.2rem] border-4 border-white shadow-[0_12px_30px_rgba(82,42,64,0.14)] md:max-w-none">
            <Image
              src={certificateImage}
              alt="The Lollipop Locs personalised first haircut certificate"
              loading="lazy"
              fill
              sizes="(max-width: 768px) 190px, 160px"
              className="object-cover"
            />
          </div>
          <CallToBook className="md:col-span-2 md:justify-self-start" />
        </article>
      </div>
    </section>
  );
}

const reviewTodos = [
  'TODO: Parent review about patient stylist / nervous child',
  'TODO: Parent review about haircut quality',
  'TODO: Parent review about first haircut / baby experience',
];

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="bg-[#fff4f9] px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-[1120px]">
        <h2
          id="reviews-title"
          className="text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-[#2e202a]"
        >
          Parents Say It Best ⭐
        </h2>
        <div className="mt-4 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f4df72] bg-[#fffdf2] px-4 py-2">
            <span aria-hidden="true" className="text-[#f4b72f]">
              ⭐
            </span>
            <span className="text-sm font-bold text-[#3d3037]">4.9 on Google</span>
          </div>
        </div>

        <div
          role="region"
          aria-label="Google reviews carousel"
          tabIndex={0}
          className="mt-7 flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-color:#e9afca_transparent] [scrollbar-width:thin] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c52f76] sm:mt-9"
        >
          {reviewTodos.map((review, index) => (
            <article
              key={review}
              className="flex min-h-[190px] w-[82vw] max-w-[360px] shrink-0 snap-start flex-col justify-between rounded-[1.4rem] border border-[#f1dce7] bg-white p-5 shadow-[0_12px_30px_rgba(82,42,64,0.07)] sm:min-h-[210px] sm:p-6"
            >
              <span className="font-[family-name:var(--font-fredoka)] text-sm font-semibold text-[#c52f76]">
                Review {index + 1}
              </span>
              <p className="mt-5 rounded-[1rem] border-2 border-dashed border-[#e4bfd0] bg-[#fff8fb] px-4 py-5 text-center font-bold leading-relaxed text-[#8a6576]">
                {review}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-3 flex justify-center">
          <a
            href="https://www.google.com/search?q=Lollipop+Locs+Electronic+City+Google+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#c52f76] px-5 py-3 text-center text-xs font-extrabold tracking-[0.04em] text-[#c52f76] transition hover:bg-[#c52f76] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e202a]"
          >
            READ MORE GOOGLE REVIEWS
          </a>
        </div>
      </div>
    </section>
  );
}

const questions = [
  {
    question: 'My child cries during haircuts. Can you manage?',
    answer:
      'Our stylists regularly work with little ones who may be nervous or find it difficult to sit still. We take a patient approach and use toys and distractions to help them feel more comfortable.',
  },
  {
    question: "Is Lollipop Locs suitable for my baby's first haircut?",
    answer:
      'Yes. We give little ones time to become familiar with the salon and stylist before beginning.',
  },
  {
    question: 'Can I stay beside my child?',
    answer: 'Yes. Parents can stay close during the haircut.',
  },
  {
    question: 'Can my child choose a themed chair?',
    answer:
      "Yes, subject to availability and suitability for your child's age and size.",
  },
  {
    question: 'Do I need an appointment?',
    answer:
      "Appointments are recommended, particularly on weekends. Call us to book your child's haircut.",
  },
];

export function QuestionsSection() {
  return (
    <section
      id="questions"
      aria-labelledby="questions-title"
      className="bg-[#fffafd] px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-[900px]">
        <h2
          id="questions-title"
          className="text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-[#2e202a]"
        >
          Quick Questions Parents Ask
        </h2>
        <div className="mt-7 space-y-3 sm:mt-9">
          {questions.map(({ question, answer }) => (
            <details
              key={question}
              className="group overflow-hidden rounded-[1.1rem] border border-[#f0dce6] bg-white shadow-[0_8px_22px_rgba(82,42,64,0.045)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 font-bold leading-snug text-[#43323d] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#c52f76] sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                <span>{question}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff0f6] text-xl leading-none text-[#c52f76] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="border-t border-[#f3e4eb] px-4 py-4 text-[0.98rem] leading-[1.7] text-[#66545e] sm:px-6">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-title"
      className="bg-[#f4f8fc] px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-[1120px]">
        <h2
          id="location-title"
          className="text-center text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-[#2e202a]"
        >
          Visit Lollipop Locs – Electronic City 📍
        </h2>
        <div className="mt-7 grid gap-5 sm:mt-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">
          <div className="rounded-[1.8rem] border border-[#dce7f0] bg-white p-5 shadow-[0_14px_36px_rgba(53,73,96,0.07)] sm:p-7">
            <p className="font-[family-name:var(--font-fredoka)] text-2xl font-semibold text-[#c52f76]">
              Lollipop Locs
            </p>
            <p className="mt-1 font-bold text-[#75616d]">
              Premium Kids &amp; Tweens Salon
            </p>
            <div className="mt-5 space-y-3 text-[0.98rem] leading-relaxed text-[#51424b]">
              <p className="rounded-xl bg-[#fff7fb] px-4 py-3 font-semibold">
                📍 TODO: Full address
              </p>
              <p>⭐ 4.9 on Google</p>
              <p className="rounded-xl bg-[#fff7fb] px-4 py-3 font-semibold">
                🕐 TODO: Confirmed store hours
              </p>
              <p className="rounded-xl bg-[#fff7fb] px-4 py-3 font-semibold">
                📞 TODO: Phone number
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallToBook />
              <WhatsAppToBook />
              <ContactButton
                href="https://www.google.com/maps/search/?api=1&query=Lollipop+Locs+Electronic+City+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                tone="bg-[#fffafd] text-[#c52f76] ring-1 ring-[#edc8d9] hover:bg-[#fff3f8]"
                icon={<MapPinIcon />}
                className="border border-[#edc8d9] !text-[#c52f76]"
              >
                Get Directions
              </ContactButton>
            </div>
          </div>

          <div
            role="img"
            aria-label="TODO: Compact Google Map after the full address is confirmed"
            className="relative flex min-h-[230px] items-center justify-center overflow-hidden rounded-[1.8rem] border-2 border-dashed border-[#c9d7e4] bg-[linear-gradient(135deg,#e9f3f7_0%,#f6f3fa_50%,#eaf7f0_100%)] p-6 text-center sm:min-h-[300px]"
          >
            <div
              aria-hidden="true"
              className="absolute -left-10 top-8 h-40 w-[130%] rotate-[-12deg] border-y-[14px] border-white/80"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-16 right-8 h-[130%] w-10 rotate-[28deg] border-x-[10px] border-white/80"
            />
            <div className="relative rounded-[1.2rem] border border-white bg-white/90 px-5 py-4 shadow-[0_12px_30px_rgba(53,73,96,0.1)]">
              <MapPinIcon />
              <p className="mt-2 font-bold leading-relaxed text-[#526877]">
                TODO: Compact Google Map
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCallToAction() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="bg-[linear-gradient(135deg,#f8ddea_0%,#fff2f8_54%,#eaf7f1_100%)] px-5 pb-28 pt-12 sm:px-8 sm:pb-16 sm:pt-16"
    >
      <div className="mx-auto max-w-[900px] rounded-[2rem] border border-white/80 bg-white/85 px-5 py-8 text-center shadow-[0_18px_48px_rgba(82,42,64,0.1)] backdrop-blur sm:px-10 sm:py-12">
        <h2
          id="final-cta-title"
          className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-[#2e202a]"
        >
          Ready for Their Next Haircut? 🍭✂️
        </h2>
        <p className="mx-auto mt-4 max-w-[58ch] text-[1.0625rem] leading-[1.6] text-[#5f4d58] sm:text-lg">
          A little play. A little patience. And a haircut they&apos;ll look great
          in.
        </p>
        <div className="mx-auto mt-6 grid max-w-[560px] gap-3 sm:grid-cols-2">
          <p className="rounded-[1.1rem] border border-[#d7e9f0] bg-[#f1f9fc] px-4 py-3 text-left font-bold text-[#342330]">
            👦 Boys Haircut Only —{' '}
            <span className="font-[family-name:var(--font-fredoka)] text-xl font-semibold text-[#c52f76]">
              ₹899
            </span>
          </p>
          <p className="rounded-[1.1rem] border border-[#f4d5e3] bg-[#fff5fa] px-4 py-3 text-left font-bold text-[#342330]">
            👧 Girls Haircut Only —{' '}
            <span className="font-[family-name:var(--font-fredoka)] text-xl font-semibold text-[#c52f76]">
              ₹999
            </span>
          </p>
        </div>
        <p className="mt-4 text-sm font-semibold leading-relaxed text-[#75616d]">
          Hair wash not included. Haircut + hair wash options available.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallToBook />
          <WhatsAppToBook />
        </div>
      </div>
    </section>
  );
}