import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const site = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const pl = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: 'Meku Solutions — Connect your operations. See your business clearly.',
    template: '%s | Meku Solutions',
  },
  description: 'Meku Solutions builds software that connects inventory, operations and business data—giving companies the visibility they need to make informed decisions.',
  openGraph: {
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Meku Solutions' }],
    siteName: 'Meku Solutions',
    type: 'website',
    title: 'Meku Solutions — Connect your operations. See your business clearly.',
    description: 'Software and business systems built around the way real operations work.',
  },
};

const nav = [
  ['/', 'Home'],
  ['/restflow', 'Restflow'],
  ['/solutions', 'Solutions'],
  ['/about', 'About'],
  ['/work', 'Work'],
  ['/contact', 'Contact'],
] as const;

export const viewport = { themeColor: '#211f20' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Meku Solutions',
    email: 'mekusolutions@gmail.com',
    foundingDate: '2025-10',
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </head>
      <body>
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="mkg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#fac513" />
              <stop offset=".5" stopColor="#f6a52d" />
              <stop offset="1" stopColor="#ec693d" />
            </linearGradient>
          </defs>
        </svg>
        <Script src="/motion.js" strategy="afterInteractive" />
        <header>
          <div className="wrap">
            <a className="logo" href="/" aria-label="Meku Solutions home">
              <img src="/images/ui/meku-mark-on-dark.png" alt="" width="36" height="35" />
              <span className="logo-word">Meku</span>
              <span className="logo-tag">Solutions</span>
            </a>
            <nav aria-label="Main navigation">
              <div className="nav-links">
                {nav.map(([href, label]) => <a key={href} className="dl" href={href}>{label}</a>)}
              </div>
              <a className="btn btn-m" href="/contact">Request a Restflow Demo</a>
              <details className="mm">
                <summary aria-label="Open menu">Menu</summary>
                <div>
                  {nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
                  <a href="/contact">Request a Restflow Demo</a>
                  <a href="/contact?t=build">Build With Meku</a>
                </div>
              </details>
            </nav>
          </div>
        </header>
        <main id="top">{children}</main>
        <footer>
          <div className="wrap foot">
            <div className="foot-top">
              <div className="foot-brand">
                <a className="logo" href="/" aria-label="Meku Solutions home">
                  <img src="/images/ui/meku-mark-on-dark.png" alt="" width="36" height="35" />
                  <span className="logo-word">Meku</span>
                  <span className="logo-tag">Solutions</span>
                </a>
                <p>Software that connects inventory, operations and business data, built from the ground perspective.</p>
              </div>
              <div className="foot-cols">
                <nav className="foot-col" aria-label="Product">
                  <h4>Product</h4>
                  <a href="/restflow">Restflow</a>
                  <a href="/#trace">Restflow Trace</a>
                  <a href="/contact">Request a demo</a>
                </nav>
                <nav className="foot-col" aria-label="Company">
                  <h4>Company</h4>
                  <a href="/solutions">Solutions</a>
                  <a href="/about">About</a>
                  <a href="/work">Work</a>
                  <a href="/privacy">Privacy</a>
                </nav>
                <nav className="foot-col" aria-label="Contact">
                  <h4>Contact</h4>
                  <a href="/contact">Talk to Meku</a>
                  <a href="mailto:mekusolutions@gmail.com">mekusolutions@gmail.com</a>
                  <a href="https://instagram.com/meku.solutions" rel="noopener">Instagram</a>
                  {wa && <a href={`https://wa.me/${wa}`}>WhatsApp</a>}
                </nav>
              </div>
            </div>
            <div className="foot-end">
              <span>© {new Date().getFullYear()} Meku Solutions</span>
              <div className="foot-social">
                <a className="foot-icon" href="mailto:mekusolutions@gmail.com" aria-label="Email Meku Solutions">
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></svg>
                </a>
                <a className="foot-icon" href="https://instagram.com/meku.solutions" aria-label="Meku Solutions on Instagram" rel="noopener">
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
        {pl && <Script defer data-domain={pl} src="https://plausible.io/js/script.js" />}
      </body>
    </html>
  );
}
