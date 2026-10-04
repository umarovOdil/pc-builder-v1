const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-neutral-950 opacity-30 blur-[3px]">
      <style>{`
        @keyframes circuit-color-cycle {
          0%   { color: #39ff88; }
          33%  { color: #4f8cff; }
          66%  { color: #ff2fb8; }
          100% { color: #39ff88; }
        }
      `}</style>

      <svg
        className="w-full h-full opacity-40 animate-[circuit-color-cycle_10s_ease-in-out_infinite] motion-reduce:animate-none"
        style={{ filter: "drop-shadow(0 0 6px currentColor)" }}
      >
        <defs>
          <pattern id="circuit-pattern" width="220" height="220" patternUnits="userSpaceOnUse">
            {/* trace chiziqlar */}
            <path
              d="M0 40 H80 V120 H220 M60 220 V160 H160 V0 M0 180 H40 V220"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            {/* via nuqtalar */}
            <circle cx="80" cy="40" r="3" fill="currentColor" />
            <circle cx="80" cy="120" r="3" fill="currentColor" />
            <circle cx="220" cy="120" r="3" fill="currentColor" />
            <circle cx="60" cy="220" r="3" fill="currentColor" />
            <circle cx="160" cy="160" r="3" fill="currentColor" />
            <circle cx="160" cy="0" r="3" fill="currentColor" />
            {/* kichik chip */}
            <rect x="130" y="40" width="28" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M138 40 V30 M150 40 V30 M138 68 V78 M150 68 V78" stroke="currentColor" strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
  )
}

export default AnimatedBackground
