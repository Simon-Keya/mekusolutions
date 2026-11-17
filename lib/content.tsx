import { promises as fs } from 'fs';
import path from 'path';
import { Fragment, type ReactNode } from 'react';
import ServiceGrid from '@/components/ServiceGrid';
import ProductGrid from '@/components/ProductGrid';

/** Dynamic modules that content files can embed with an HTML comment, e.g. <!--@services-home-->. */
const modules: Record<string, () => ReactNode> = {
  'services-home': () => <ServiceGrid variant="home" />,
  'services-full': () => <ServiceGrid variant="full" />,
  'products-home': () => <ProductGrid />,
};

export async function Html({ name }: { name: string }) {
  const html = await fs.readFile(path.join(process.cwd(), 'content', `${name}.html`), 'utf8');
  const parts = html.split(/<!--@([\w-]+)-->/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 0 ? (
          part.trim() ? <div key={i} dangerouslySetInnerHTML={{ __html: part }} /> : null
        ) : (
          <Fragment key={i}>{modules[part]?.()}</Fragment>
        ),
      )}
    </>
  );
}
