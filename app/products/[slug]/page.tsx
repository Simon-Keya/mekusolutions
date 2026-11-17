import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Html } from '@/lib/content';
import { templatedProducts } from '@/lib/registry';

export const dynamicParams = false;

export function generateStaticParams() {
  return templatedProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = templatedProducts.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.summary } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!templatedProducts.some((p) => p.slug === slug)) notFound();
  return <Html name={`products/${slug}`} />;
}
