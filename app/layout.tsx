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
    siteName: 'Meku Solutions',
    type: 'website',
    title: 'Meku Solutions — Connect your operations. See your business clearly.',
    description: 'Software and business systems built around the way real operations work.',
  },
};

const nav = [
  ['/restflow', 'Restflow'],
  ['/solutions', 'Solutions'],
  ['/work', 'Work'],
  ['/about', 'About'],
] as const;

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
        <Script src="/motion.js" strategy="afterInteractive" />
        <header>
          <div className="wrap">
            <a className="logo" href="/" aria-label="Meku Solutions home">
              <img src="/meku-logo.jpg" alt="Meku Solutions" />
            </a>
            <nav aria-label="Main navigation">
              {nav.map(([href, label]) => <a key={href} className="dl" href={href}>{label}</a>)}
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
          <div className="wrap">
            <span>© Meku Solutions</span>
            <span>
              <a href="/contact">Contact</a>
              <a href="/privacy">Privacy</a>
              {wa && <a href={`https://wa.me/${wa}`}>WhatsApp</a>}
              <a href="mailto:mekusolutions@gmail.com">mekusolutions@gmail.com</a>
            </span>
          </div>
        </footer>
        {pl && <Script defer data-domain={pl} src="https://plausible.io/js/script.js" />}
      </body>
    </html>
  );
}
