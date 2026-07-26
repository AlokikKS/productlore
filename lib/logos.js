// Central logo registry. Uses simple-icons where available, falls back to a
// premium monogram for brands not in the library. Renders in currentColor so
// logos adapt to light/dark themes automatically.

import {
  siNetflix,
  siApple,
  siAirbnb,
  siUber,
  siSpotify,
  siTesla,
  siFigma,
  siNotion,
  siTata,
  siJio,
  siInfosys,
  siAmul,
  siZerodha,
  siRazorpay,
  siPostman,
} from 'simple-icons';

const REGISTRY = {
  netflix: siNetflix,
  apple: siApple,
  airbnb: siAirbnb,
  uber: siUber,
  spotify: siSpotify,
  tesla: siTesla,
  figma: siFigma,
  notion: siNotion,
  tata: siTata,
  jio: siJio,
  infosys: siInfosys,
  amul: siAmul,
  zerodha: siZerodha,
  razorpay: siRazorpay,
  postman: siPostman,
};

// Brands not in simple-icons: rendered as monogram fallbacks.
const FALLBACK_MONOGRAM = {
  amazon: 'a',
  openai: 'A', // uses a circle-K style symbol below
  asianpaints: 'AP',
  freshworks: 'Fw',
  cred: 'CRED',
};

export function LogoIcon({ slug, className = 'h-5 w-5', title }) {
  const icon = REGISTRY[slug];
  if (icon) {
    return (
      <svg
        role="img"
        aria-label={title || icon.title}
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
      >
        <path d={icon.path} />
      </svg>
    );
  }

  // Custom paths for brands missing from simple-icons.
  if (slug === 'openai') {
    // Minimal OpenAI-style hex-knot approximation, monochrome.
    return (
      <svg
        role="img"
        aria-label="OpenAI"
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3.2 5.2 7.1v7.8L12 18.8l6.8-3.9V7.1L12 3.2z" />
        <path d="M12 3.2v7.8M12 18.8v-7.8M5.2 7.1l6.8 3.9M18.8 7.1l-6.8 3.9" />
      </svg>
    );
  }

  if (slug === 'amazon') {
    // Custom monochrome wordmark-esque glyph: lowercase 'a' with smile arc.
    return (
      <svg role="img" aria-label="Amazon" viewBox="0 0 32 24" className={className} fill="currentColor">
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="800"
          fontSize="14"
          letterSpacing="-0.5"
        >
          amazon
        </text>
        <path
          d="M6 18 Q16 22 26 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Generic premium monogram fallback for any remaining brand.
  const text = FALLBACK_MONOGRAM[slug] || (slug ? slug[0].toUpperCase() : '?');
  return (
    <svg role="img" aria-label={slug} viewBox="0 0 32 24" className={className} fill="currentColor">
      <text
        x="50%"
        y="62%"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize={text.length > 2 ? 9 : text.length === 2 ? 12 : 16}
        letterSpacing="-0.5"
      >
        {text}
      </text>
    </svg>
  );
}
