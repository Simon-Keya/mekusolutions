import { services } from '@/lib/registry';
import ServiceArt from './ServiceArt';

type Props = { variant: 'home' | 'full' };

/** Featured pair on top, then an adaptive grid. Stays balanced for any number of services. */
export default function ServiceGrid({ variant }: Props) {
  const home = variant === 'home';
  const href = home ? '/solutions' : '/contact?t=build';
  const [a, b, ...rest] = services;
  const tile = (s: (typeof services)[number], cls: string) => (
    <a key={s.key} className={`tile ${cls}`} href={href}>
      <div className="tile-art"><ServiceArt name={s.art} /></div>
      <div>
        <h3>{s.title}</h3>
        <p>{home ? s.short : s.long}</p>
      </div>
      <span className="tile-link">{home ? s.cta : 'Start a conversation'}</span>
    </a>
  );
  const grid = (
    <div className="bento">
      {a && tile(a, 'tile-dark tile-feature')}
      {b && tile(b, 'tile-grad tile-feature')}
      {rest.length > 0 && <div className="bento-more">{rest.map((s) => tile(s, ''))}</div>}
    </div>
  );
  if (!home) return <section><div className="wrap-wide">{grid}</div></section>;
  return (
    <section id="solutions">
      <div className="wrap-wide">
        <div className="sec-head">
          <h2>Your business doesn’t have to fit generic software</h2>
          <p className="lead">Meku designs and develops software around the way a business actually operates.</p>
        </div>
        {grid}
      </div>
    </section>
  );
}
