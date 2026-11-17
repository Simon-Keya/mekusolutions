'use client';
import { usePathname } from 'next/navigation';

type Props = { items: ReadonlyArray<readonly [string, string]>; variant: 'bar' | 'menu' };

/** Client component only so aria-current is correct in server-rendered HTML and on client navigation. */
export default function NavLinks({ items, variant }: Props) {
  const path = (usePathname() || '/').replace(/\/+$/, '') || '/';
  const current = (href: string) => (href === path || (href !== '/' && path.startsWith(href + '/')) ? 'page' : undefined);
  return (
    <>
      {items.map(([href, label]) => (
        <a key={href} className={variant === 'bar' ? 'dl' : undefined} href={href} aria-current={current(href)}>
          {label}
        </a>
      ))}
    </>
  );
}
