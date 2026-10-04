export function SectionDivider({ fill = '#FFE9F1' }) {
  return (
    <div aria-hidden="true" className="section-divider">
      <svg
        viewBox="0 0 1440 32"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-8 w-full"
      >
        <path
          fill={fill}
          d="M0,20 C240,6 480,28 720,16 C960,4 1200,26 1440,14 L1440,32 L0,32 Z"
          opacity="0.95"
        />
        <path
          fill={fill}
          d="M0,24 C180,10 360,30 540,18 C720,6 900,28 1080,16 C1260,4 1440,22 1440,22 L1440,32 L0,32 Z"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}
