import { products, statusLabel } from '@/lib/registry';

type Props = { /** Render even when there is only one product (used on /products). */ always?: boolean; heading?: boolean };

export default function ProductGrid({ always = false, heading = true }: Props) {
  if (!always && products.length < 2) return null;
  const grid = (
    <div className="product-cards">
      {products.map((p) => (
        <a key={p.slug} className="product-card" href={p.href}>
          {p.image && (
            <div className="product-card-shot">
              <img src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} loading="lazy" />
            </div>
          )}
          <div className="product-card-body">
            <span className={`status status-${p.status}`}>{statusLabel[p.status]}</span>
            <h3>{p.name}</h3>
            <p className="product-card-tag">{p.tagline}</p>
            <p>{p.summary}</p>
            <span className="tile-link">Explore {p.name}</span>
          </div>
        </a>
      ))}
    </div>
  );
  if (!heading) return grid;
  return (
    <section id="products" className="mist">
      <div className="wrap-wide">
        <div className="sec-head">
          <h2>Products built by Meku</h2>
          <p className="lead">Purpose-built software for operations that depend on accurate inventory and clear data.</p>
        </div>
        {grid}
      </div>
    </section>
  );
}
