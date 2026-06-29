// Subtle PCB circuit trace background — stays at very low opacity so it
// adds texture without distracting from content.
export default function PCBBackground() {
  return (
    <div
      className="pointer-events-none select-none"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.028,
        overflow: "hidden",
      }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <pattern
            id="pcb-pattern"
            x="0"
            y="0"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            {/* ── Traces ── */}
            <line x1="0"   y1="60"  x2="90"  y2="60"  stroke="#00BFFF" strokeWidth="1.2" />
            <line x1="90"  y1="60"  x2="90"  y2="140" stroke="#00BFFF" strokeWidth="1.2" />
            <line x1="90"  y1="140" x2="200" y2="140" stroke="#00BFFF" strokeWidth="1.2" />
            <line x1="200" y1="140" x2="200" y2="240" stroke="#00BFFF" strokeWidth="1.2" />
            <line x1="150" y1="0"   x2="150" y2="60"  stroke="#00BFFF" strokeWidth="1.2" />
            <line x1="150" y1="60"  x2="240" y2="60"  stroke="#00BFFF" strokeWidth="1.2" />
            <line x1="0"   y1="180" x2="60"  y2="180" stroke="#00BFFF" strokeWidth="1.2" />
            <line x1="60"  y1="180" x2="60"  y2="240" stroke="#00BFFF" strokeWidth="1.2" />
            <line x1="30"  y1="0"   x2="30"  y2="40"  stroke="#00BFFF" strokeWidth="1.2" />
            <line x1="30"  y1="40"  x2="90"  y2="40"  stroke="#00BFFF" strokeWidth="1.2" />

            {/* ── Pads (junction dots) ── */}
            <circle cx="90"  cy="60"  r="3.5" fill="#00BFFF" />
            <circle cx="90"  cy="140" r="3.5" fill="#00BFFF" />
            <circle cx="200" cy="140" r="3.5" fill="#00BFFF" />
            <circle cx="150" cy="60"  r="3.5" fill="#00BFFF" />
            <circle cx="60"  cy="180" r="3.5" fill="#00BFFF" />
            <circle cx="30"  cy="40"  r="3.5" fill="#00BFFF" />

            {/* ── Via holes ── */}
            <circle cx="200" cy="60"  r="5" fill="none" stroke="#00BFFF" strokeWidth="1" />
            <circle cx="200" cy="60"  r="2" fill="#00BFFF" opacity="0.6" />
            <circle cx="30"  cy="180" r="5" fill="none" stroke="#00BFFF" strokeWidth="1" />
            <circle cx="30"  cy="180" r="2" fill="#00BFFF" opacity="0.6" />

            {/* ── SMD capacitor symbols ── */}
            <rect x="62"  y="53" width="16" height="14" fill="none" stroke="#00BFFF" strokeWidth="1" rx="1" />
            <line x1="70"  y1="56" x2="70" y2="64" stroke="#00BFFF" strokeWidth="1" />
            <line x1="73"  y1="56" x2="73" y2="64" stroke="#00BFFF" strokeWidth="1" />

            <rect x="123" y="133" width="16" height="14" fill="none" stroke="#00BFFF" strokeWidth="1" rx="1" />
            <line x1="131" y1="136" x2="131" y2="144" stroke="#00BFFF" strokeWidth="1" />
            <line x1="134" y1="136" x2="134" y2="144" stroke="#00BFFF" strokeWidth="1" />

            {/* ── Resistor symbols ── */}
            <rect x="25"  y="170" width="12" height="20" fill="none" stroke="#00BFFF" strokeWidth="1" rx="2" />
            <rect x="175" y="50"  width="12" height="20" fill="none" stroke="#00BFFF" strokeWidth="1" rx="2" />

            {/* ── IC chip outline ── */}
            <rect x="100" y="90" width="60" height="40" fill="none" stroke="#00BFFF" strokeWidth="1" rx="2" />
            {/* IC pins */}
            <line x1="100" y1="100" x2="90"  y2="100" stroke="#00BFFF" strokeWidth="1" />
            <line x1="100" y1="115" x2="90"  y2="115" stroke="#00BFFF" strokeWidth="1" />
            <line x1="160" y1="100" x2="170" y2="100" stroke="#00BFFF" strokeWidth="1" />
            <line x1="160" y1="115" x2="170" y2="115" stroke="#00BFFF" strokeWidth="1" />
            <circle cx="106" cy="96" r="2" fill="#00BFFF" opacity="0.5" />

            {/* ── Blueprint corner marks ── */}
            <line x1="0"   y1="10" x2="10"  y2="10"  stroke="#00BFFF" strokeWidth="0.8" opacity="0.5" />
            <line x1="10"  y1="0"  x2="10"  y2="10"  stroke="#00BFFF" strokeWidth="0.8" opacity="0.5" />
            <line x1="230" y1="10" x2="240" y2="10"  stroke="#00BFFF" strokeWidth="0.8" opacity="0.5" />
            <line x1="230" y1="0"  x2="230" y2="10"  stroke="#00BFFF" strokeWidth="0.8" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pcb-pattern)" />
      </svg>
    </div>
  );
}
