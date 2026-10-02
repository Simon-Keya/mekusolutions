import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const b = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  return ['', '/restflow', '/solutions', '/work', '/about', '/contact', '/privacy'].map((p) => ({ url: b + p }));
}
