export function WavyBackground({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 1200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 80C200 20 400 140 600 80C800 20 1000 140 1200 80V200H0V80Z"
        fill="currentColor"
        opacity="0.03"
      />
      <path
        d="M0 120C150 60 350 160 600 100C850 40 1050 160 1200 100"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.06"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M0 140C200 90 400 170 600 120C800 70 1000 170 1200 120"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.04"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="8 12"
      />
    </svg>
  );
}

export function BlobDecoration({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.7,-76.4C58.8,-69.2,71.8,-58.7,79.6,-45.2C87.4,-31.7,90,-15.9,88.4,-0.9C86.9,14,81.2,28,73.1,40.5C65,53,54.5,64,41.8,71.5C29.1,79,14.6,83,-1.2,85C-17,87,-34,87,-47.3,79.6C-60.6,72.2,-70.2,57.4,-77.1,42C-84,26.6,-88.2,10.6,-86.1,-4.2C-84,-19,-75.6,-32.6,-65.6,-44.8C-55.6,-57,-44,-67.8,-31,-74.2C-18,-80.6,-3.6,-82.6,9.4,-79.2C22.4,-75.8,30.6,-83.6,44.7,-76.4Z"
        transform="translate(100 100)"
        fill={color}
        opacity="0.04"
      />
    </svg>
  );
}

export function DotGrid({ className = "" }: { className?: string }) {
  const dots = [];
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 8; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={col * 24 + 12}
          cy={row * 24 + 12}
          r="1.5"
          fill="currentColor"
          opacity={0.08 + Math.random() * 0.06}
        />
      );
    }
  }
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 204 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {dots}
    </svg>
  );
}

export function LoopLine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 300 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 50C30 50 30 10 60 10C90 10 90 90 120 90C150 90 150 10 180 10C210 10 210 90 240 90C270 90 270 50 300 50"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.08"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ScribbleUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8C30 2 50 10 80 4C110 -2 130 10 160 6C180 3 195 8 198 6"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.15"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 50C15 35 25 20 45 12"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.1"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M38 8L46 12L40 18"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
