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
        />
      </svg>
    </div>
  );
}
