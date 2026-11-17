import { describe, it, expect } from 'vitest';
import { buildWhatsAppMessage, cleanNumber, whatsAppUrl } from './whatsapp';
import { products, services, nav, siteRoutes } from './registry';

describe('cleanNumber', () => {
  it('strips formatting', () => expect(cleanNumber('+254 712 345 678')).toBe('254712345678'));
  it('rejects empty and too short', () => {
    expect(cleanNumber('')).toBe('');
    expect(cleanNumber(undefined)).toBe('');
    expect(cleanNumber('12345')).toBe('');
  });
  it('rejects too long', () => expect(cleanNumber('1'.repeat(16))).toBe(''));
});

describe('buildWhatsAppMessage', () => {
  const base = { type: 'demo' as const, name: 'Amina', email: 'a@b.co', message: 'We run two kitchens.' };
  it('names the product for demo requests', () =>
    expect(buildWhatsAppMessage({ ...base, product: 'Restflow' })).toContain('request a Restflow demo'));
  it('uses the custom wording for build enquiries', () =>
    expect(buildWhatsAppMessage({ ...base, type: 'build' })).toContain('custom software or integration'));
  it('omits empty optional fields', () => {
    const t = buildWhatsAppMessage(base);
    expect(t).not.toContain('Company:');
    expect(t).not.toContain('Phone:');
    expect(t).toContain('Name: Amina');
  });
  it('clips very long messages', () =>
    expect(buildWhatsAppMessage({ ...base, message: 'x'.repeat(5000) }).length).toBeLessThan(1500));
});

describe('whatsAppUrl', () => {
  it('encodes the text', () => expect(whatsAppUrl('254712345678', 'a b\nc')).toBe('https://wa.me/254712345678?text=a%20b%0Ac'));
  it('works without text', () => expect(whatsAppUrl('254712345678')).toBe('https://wa.me/254712345678'));
});

describe('registry invariants', () => {
  it('has unique product slugs', () => expect(new Set(products.map((p) => p.slug)).size).toBe(products.length));
  it('has unique service keys', () => expect(new Set(services.map((s) => s.key)).size).toBe(services.length));
  it('uses root-relative product links', () => products.forEach((p) => expect(p.href.startsWith('/')).toBe(true)));
  it('keeps navigation links unique', () => expect(new Set(nav.map(([h]) => h)).size).toBe(nav.length));
  it('lists every product in the sitemap', () => products.forEach((p) => expect(siteRoutes).toContain(p.href)));
});
