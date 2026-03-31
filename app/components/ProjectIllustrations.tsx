export function MarketplaceIllustration() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Connection lines */}
      <path d="M120 120C160 80 240 80 280 120" stroke="white" strokeWidth="1.5" opacity="0.3" strokeDasharray="6 4" strokeLinecap="round" />
      <path d="M120 120C160 160 240 160 280 120" stroke="white" strokeWidth="1.5" opacity="0.2" strokeDasharray="6 4" strokeLinecap="round" />

      {/* Left card - Buyer */}
      <rect x="60" y="90" width="80" height="60" rx="8" stroke="white" strokeWidth="1.5" opacity="0.4" />
      <circle cx="85" cy="110" r="8" stroke="white" strokeWidth="1.5" opacity="0.5" />
      <path d="M98 105H128" stroke="white" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <path d="M98 112H122" stroke="white" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <path d="M70 130H130" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      <path d="M70 137H120" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />

      {/* Right card - Supplier */}
      <rect x="260" y="90" width="80" height="60" rx="8" stroke="white" strokeWidth="1.5" opacity="0.4" />
      <circle cx="285" cy="110" r="8" stroke="white" strokeWidth="1.5" opacity="0.5" />
      <path d="M298 105H328" stroke="white" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <path d="M298 112H322" stroke="white" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <path d="M270 130H330" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      <path d="M270 137H320" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />

      {/* Center - AI brain */}
      <circle cx="200" cy="120" r="20" stroke="white" strokeWidth="1.5" opacity="0.5" />
      <path d="M192 115C195 108 205 108 208 115" stroke="white" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <path d="M192 125C195 118 205 118 208 125" stroke="white" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <circle cx="193" cy="120" r="2" fill="white" opacity="0.5" />
      <circle cx="207" cy="120" r="2" fill="white" opacity="0.5" />

      {/* Floating elements */}
      <rect x="170" y="55" width="24" height="18" rx="3" stroke="white" strokeWidth="1" opacity="0.2" />
      <path d="M175 62H189" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" />
      <rect x="215" y="170" width="24" height="18" rx="3" stroke="white" strokeWidth="1" opacity="0.2" />
      <path d="M220 177H234" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" />

      {/* Stars/sparkles */}
      <path d="M155 70L157 65L159 70L157 75Z" fill="white" opacity="0.3" />
      <path d="M250 165L252 160L254 165L252 170Z" fill="white" opacity="0.3" />
    </svg>
  );
}

export function CommerceIllustration() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chat bubbles */}
      <rect x="60" y="70" width="100" height="50" rx="10" stroke="white" strokeWidth="1.5" opacity="0.3" />
      <path d="M80 88H140" stroke="white" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
      <path d="M80 96H130" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      <path d="M80 104H120" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" />
      <path d="M90 120L80 130L100 120" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinejoin="round" />

      {/* Order/cart */}
      <rect x="200" y="60" width="70" height="90" rx="6" stroke="white" strokeWidth="1.5" opacity="0.35" />
      <path d="M212 78H258" stroke="white" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <path d="M212 90H250" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      <path d="M212 102H245" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      <path d="M212 118H258" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      <circle cx="218" cy="136" r="3" stroke="white" strokeWidth="1" opacity="0.3" />
      <path d="M226 136H258" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />

      {/* Chart - growth */}
      <rect x="300" y="80" width="70" height="60" rx="4" stroke="white" strokeWidth="1" opacity="0.25" />
      <path d="M310 130L325 115L340 120L355 100L360 105" stroke="white" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Channels icons */}
      <circle cx="90" cy="170" r="14" stroke="white" strokeWidth="1" opacity="0.2" />
      <circle cx="130" cy="170" r="14" stroke="white" strokeWidth="1" opacity="0.2" />
      <circle cx="170" cy="170" r="14" stroke="white" strokeWidth="1" opacity="0.2" />
      <path d="M83 170H97" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      <path d="M125 165L135 170L125 175" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      <circle cx="170" cy="170" r="5" stroke="white" strokeWidth="1" opacity="0.2" />

      {/* Connection arrows */}
      <path d="M104 170L116 170" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" strokeDasharray="3 3" />
      <path d="M144 170L156 170" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" strokeDasharray="3 3" />
    </svg>
  );
}

export function HealthcareIllustration() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hospital building */}
      <rect x="150" y="60" width="100" height="120" rx="4" stroke="white" strokeWidth="1.5" opacity="0.3" />
      <path d="M190 60V45H210V60" stroke="white" strokeWidth="1.5" opacity="0.3" />
      {/* Cross */}
      <rect x="192" y="48" width="16" height="4" rx="1" fill="white" opacity="0.4" />
      <rect x="198" y="42" width="4" height="16" rx="1" fill="white" opacity="0.4" />
      {/* Windows */}
      <rect x="165" y="80" width="18" height="14" rx="2" stroke="white" strokeWidth="1" opacity="0.2" />
      <rect x="217" y="80" width="18" height="14" rx="2" stroke="white" strokeWidth="1" opacity="0.2" />
      <rect x="165" y="105" width="18" height="14" rx="2" stroke="white" strokeWidth="1" opacity="0.2" />
      <rect x="217" y="105" width="18" height="14" rx="2" stroke="white" strokeWidth="1" opacity="0.2" />
      {/* Door */}
      <rect x="188" y="150" width="24" height="30" rx="4" stroke="white" strokeWidth="1.5" opacity="0.3" />

      {/* Patient card left */}
      <rect x="40" y="90" width="70" height="50" rx="6" stroke="white" strokeWidth="1" opacity="0.25" />
      <circle cx="62" cy="106" r="7" stroke="white" strokeWidth="1" opacity="0.3" />
      <path d="M74 102H100" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      <path d="M74 110H95" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" />
      <path d="M50 126H100" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" />

      {/* EMR card right */}
      <rect x="290" y="85" width="75" height="65" rx="6" stroke="white" strokeWidth="1" opacity="0.25" />
      <path d="M302 100H352" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      <path d="M302 110H345" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" />
      <path d="M302 120H340" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" />
      <path d="M302 134H320" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      <circle cx="350" cy="134" r="6" stroke="white" strokeWidth="1" opacity="0.25" />
      <path d="M347 134L350 137L354 131" stroke="white" strokeWidth="1" opacity="0.3" strokeLinecap="round" />

      {/* Heartbeat line */}
      <path d="M80 190L120 190L135 175L145 205L155 185L165 195L200 195L220 195L235 180L245 210L255 190L265 195L320 195" stroke="white" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ConsultingIllustration() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central hub */}
      <circle cx="200" cy="120" r="30" stroke="white" strokeWidth="1.5" opacity="0.4" />
      <path d="M188 115H212" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      <path d="M188 122H208" stroke="white" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
      <path d="M188 129H205" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />

      {/* Spoke 1 - Sports */}
      <path d="M175 95L120 60" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" strokeLinecap="round" />
      <circle cx="110" cy="55" r="18" stroke="white" strokeWidth="1" opacity="0.3" />
      <circle cx="110" cy="55" r="7" stroke="white" strokeWidth="1" opacity="0.2" />

      {/* Spoke 2 - MMO */}
      <path d="M225 95L280 60" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" strokeLinecap="round" />
      <rect x="265" y="40" width="36" height="28" rx="4" stroke="white" strokeWidth="1" opacity="0.3" />
      <path d="M272 50H294" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      <path d="M272 57H288" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" />

      {/* Spoke 3 - Outsourcing */}
      <path d="M175 145L120 180" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" strokeLinecap="round" />
      <rect x="85" y="168" width="40" height="30" rx="4" stroke="white" strokeWidth="1" opacity="0.3" />
      <circle cx="98" cy="179" r="4" stroke="white" strokeWidth="1" opacity="0.2" />
      <circle cx="112" cy="179" r="4" stroke="white" strokeWidth="1" opacity="0.2" />
      <path d="M92 190H118" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" />

      {/* Spoke 4 */}
      <path d="M225 145L280 180" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" strokeLinecap="round" />
      <rect x="268" y="170" width="36" height="28" rx="4" stroke="white" strokeWidth="1" opacity="0.3" />
      <path d="M276 180L296 180" stroke="white" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      <path d="M276 188L290 188" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" />

      {/* Floating plus signs */}
      <path d="M160 70L160 62M156 66H164" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" />
      <path d="M240 170L240 162M236 166H244" stroke="white" strokeWidth="1" opacity="0.15" strokeLinecap="round" />
    </svg>
  );
}

export function getIllustration(slug: string) {
  switch (slug) {
    case "arobid":
      return <MarketplaceIllustration />;
    case "haravan":
      return <CommerceIllustration />;
    case "qa-solutions":
      return <HealthcareIllustration />;
    case "laztar":
      return <ConsultingIllustration />;
    default:
      return null;
  }
}
