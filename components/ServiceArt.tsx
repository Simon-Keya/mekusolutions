import type { ServiceArtKey } from '@/lib/registry';

/** Decorative illustrations for service tiles. Shared gradient #mkg is defined once in the layout. */
export default function ServiceArt({ name }: { name: ServiceArtKey }) {
  switch (name) {
    case 'code':
      return (
        <svg viewBox="0 0 360 140" fill="none" aria-hidden="true">
          <rect x="8" y="8" width="344" height="124" rx="10" stroke="rgba(255,255,255,.22)" strokeWidth="2" />
          <circle cx="28" cy="26" r="4.5" fill="#ec693d" />
          <circle cx="44" cy="26" r="4.5" fill="#fac513" />
          <circle cx="60" cy="26" r="4.5" fill="rgba(255,255,255,.3)" />
          <path d="m60 66-22 20 22 20M300 66l22 20-22 20" stroke="url(#mkg)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M172 112 188 60" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
          <rect x="88" y="58" width="56" height="8" rx="2" fill="rgba(255,255,255,.35)" />
          <rect x="88" y="78" width="96" height="8" rx="2" fill="rgba(255,255,255,.2)" />
          <rect x="200" y="98" width="72" height="8" rx="2" fill="rgba(255,255,255,.2)" />
        </svg>
      );
    case 'integrate':
      return (
        <svg viewBox="0 0 360 140" fill="none" aria-hidden="true">
          <path d="M52 70h70c28 0 28-40 56-40h60M122 70c28 0 28 40 56 40h60" stroke="#211f20" strokeWidth="5" strokeLinecap="round" />
          <rect x="24" y="48" width="44" height="44" rx="10" fill="#211f20" />
          <rect x="38" y="62" width="16" height="16" rx="4" fill="#fac513" />
          <rect x="278" y="8" width="44" height="44" rx="10" fill="#fff" />
          <rect x="292" y="22" width="16" height="16" rx="4" fill="#211f20" />
          <rect x="278" y="88" width="44" height="44" rx="10" fill="#fff" />
          <rect x="292" y="102" width="16" height="16" rx="4" fill="#211f20" />
          <circle cx="178" cy="70" r="6" fill="#211f20" />
        </svg>
      );
    case 'inventory':
      return (
        <svg viewBox="0 0 360 120" fill="none" aria-hidden="true">
          <path d="M20 108h320" stroke="#211f20" strokeWidth="3" strokeLinecap="round" opacity=".25" />
          <rect x="40" y="62" width="48" height="46" rx="6" fill="#211f20" />
          <rect x="108" y="40" width="48" height="68" rx="6" fill="#f6a52d" />
          <rect x="176" y="22" width="48" height="86" rx="6" fill="#ec693d" />
          <rect x="244" y="8" width="48" height="100" rx="6" fill="#fac513" />
        </svg>
      );
    case 'automate':
      return (
        <svg viewBox="0 0 360 120" fill="none" aria-hidden="true">
          <path d="M30 90h60V50h70V90h70V30h70" stroke="#211f20" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="21" y="81" width="18" height="18" rx="4" fill="#211f20" />
          <rect x="151" y="41" width="18" height="18" rx="4" fill="#211f20" />
          <rect x="221" y="81" width="18" height="18" rx="4" fill="#211f20" />
          <rect x="312" y="12" width="36" height="36" rx="8" fill="url(#mkg)" />
          <path d="m333 20-8 10h6l-2 8 8-10h-6l2-8Z" fill="#211f20" />
        </svg>
      );
    case 'web':
      return (
        <svg viewBox="0 0 360 120" fill="none" aria-hidden="true">
          <rect x="40" y="6" width="280" height="108" rx="8" fill="#fff" stroke="#211f20" strokeWidth="4" />
          <path d="M40 32h280" stroke="#211f20" strokeWidth="4" />
          <circle cx="58" cy="19" r="3.5" fill="#ec693d" />
          <circle cx="72" cy="19" r="3.5" fill="#fac513" />
          <rect x="60" y="48" width="110" height="10" rx="2" fill="#211f20" />
          <rect x="60" y="66" width="78" height="8" rx="2" fill="#d7d2cf" />
          <rect x="60" y="86" width="54" height="16" rx="4" fill="url(#mkg)" />
          <rect x="200" y="48" width="100" height="54" rx="6" fill="url(#mkg)" opacity=".9" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 360 120" fill="none" aria-hidden="true">
          <rect x="120" y="20" width="120" height="80" rx="10" stroke="#211f20" strokeWidth="4" />
          <rect x="144" y="44" width="72" height="10" rx="2" fill="#211f20" />
          <rect x="144" y="64" width="48" height="8" rx="2" fill="url(#mkg)" />
        </svg>
      );
  }
}
