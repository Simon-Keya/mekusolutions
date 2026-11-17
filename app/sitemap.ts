import type { MetadataRoute } from 'next';
import { siteRoutes } from '@/lib/registry';
export default function sitemap(): MetadataRoute.Sitemap {
  const b = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  return siteRoutes.map((p) => ({ url: b + p }));
}
