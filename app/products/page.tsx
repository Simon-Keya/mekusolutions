import type { Metadata } from 'next';
import ProductGrid from '@/components/ProductGrid';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Software products built by Meku Solutions for inventory-intensive businesses.',
};

export default function Page() {
  return (
    <>
      <div className="ph1 ph1-compact">
        <div className="wrap-wide">
          <h1>Products</h1>
          <p>Software built by Meku for businesses that depend on accurate inventory and clear operational data.</p>
        </div>
      </div>
      <section>
        <div className="wrap-wide">
          <ProductGrid always heading={false} />
        </div>
      </section>
    </>
  );
}
