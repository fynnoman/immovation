export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 90 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="9.99996"
        y1="0.0289736"
        x2="10.0543"
        y2="18.7746"
        stroke="#B8860B"
        strokeWidth="20"
      />
      <path
        d="M0 33.058H20V100.058L0 84.058V33.058Z"
        fill="url(#paint0_linear_14_169)"
      />
      <rect
        x="3.26062"
        y="86.3054"
        width="110.125"
        height="22"
        transform="rotate(-51.0679 3.26062 86.3054)"
        fill="url(#paint1_linear_14_169)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_14_169"
          x1="10"
          y1="33.058"
          x2="10"
          y2="72.558"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B8860B" />
          <stop offset="1" stopColor="#9a8400" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_14_169"
          x1="113.386"
          y1="97.3054"
          x2="24.3394"
          y2="95.2957"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B8860B" />
          <stop offset="1" stopColor="#9a8400" />
        </linearGradient>
      </defs>
    </svg>
  );
}
