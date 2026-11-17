/**
 * Single source of truth for what Meku offers.
 * Add a product or a service here and the navigation, footer, sitemap, home page,
 * solutions page, products index and enquiry form all pick it up.
 */

export type ProductStatus = 'pilot' | 'live' | 'coming-soon';

export type Product = {
  slug: string;
  name: string;
  status: ProductStatus;
  tagline: string;
  summary: string;
  /** Page for the product. Existing product pages keep their own URL; new ones use /products/<slug>. */
  href: string;
  /** Label for the primary demo / enquiry call to action. */
  cta: string;
  image?: { src: string; alt: string; width: number; height: number };
};

export const products: Product[] = [
  {
    slug: 'restflow',
    name: 'Restflow',
    status: 'pilot',
    tagline: 'Restaurant operational visibility',
    summary:
      'Connects inventory, kitchen production, recipes, menus, POS and business analytics into one operational visibility system.',
    href: '/restflow',
    cta: 'Request a Restflow Demo',
    image: {
      src: '/images/restflow-dashboard.webp',
      alt: 'Restflow dashboard showing revenue, orders, stock alerts and approvals',
      width: 1366,
      height: 530,
    },
  },
];

export const statusLabel: Record<ProductStatus, string> = {
  pilot: 'In pilot',
  live: 'Available now',
  'coming-soon': 'Coming soon',
};

export type ServiceArtKey = 'code' | 'integrate' | 'inventory' | 'automate' | 'web' | 'generic';

export type Service = {
  key: string;
  title: string;
  /** Short line for the home page. */
  short: string;
  /** Longer line for the solutions page. */
  long: string;
  cta: string;
  art: ServiceArtKey;
};

export const services: Service[] = [
  {
    key: 'software',
    title: 'Software development',
    short: 'Custom systems built around real operational workflows.',
    long: 'Custom systems built from an understanding of real operational processes, not generic feature lists.',
    cta: 'See how we build',
    art: 'code',
  },
  {
    key: 'integration',
    title: 'System integration',
    short: 'Connect existing tools so data flows where it is needed.',
    long: 'Connect existing tools and data sources so information flows where it is needed for visibility and decisions.',
    cta: 'Connect your tools',
    art: 'integrate',
  },
  {
    key: 'inventory',
    title: 'Inventory & operations',
    short: 'Visibility systems for inventory-intensive businesses.',
    long: 'Visibility systems for inventory-intensive businesses, starting with restaurants and expanding to other raw-material environments.',
    cta: 'Learn more',
    art: 'inventory',
  },
  {
    key: 'automation',
    title: 'Business automation',
    short: 'Automate repeatable steps while keeping process clarity.',
    long: 'Automate repeatable operational steps while keeping the ground-level process perspective.',
    cta: 'Learn more',
    art: 'automate',
  },
  {
    key: 'web',
    title: 'Web development',
    short: 'Digital tools that support the same operational focus.',
    long: 'Digital presence and tools that support the same clarity and operational focus as our systems work.',
    cta: 'Learn more',
    art: 'web',
  },
];

const single = products.length === 1 ? products[0] : null;

/** Primary navigation. With one product it links straight to it; with several it links to the index. */
export const nav: ReadonlyArray<readonly [href: string, label: string]> = [
  ['/', 'Home'],
  single ? [single.href, single.name] : ['/products', 'Products'],
  ['/solutions', 'Solutions'],
  ['/about', 'About'],
  ['/work', 'Work'],
  ['/contact', 'Contact'],
];

/** Wording for the header button and shared calls to action. */
export const primaryCta = single ? single.cta : 'Request a demo';

/** Product pages that live under /products/<slug> (those without a bespoke route). */
export const templatedProducts = products.filter((p) => p.href === `/products/${p.slug}`);

export const siteRoutes = [
  '',
  ...(products.length > 1 ? ['/products'] : []),
  ...products.map((p) => p.href),
  '/solutions',
  '/work',
  '/about',
  '/contact',
  '/privacy',
];
