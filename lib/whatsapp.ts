import type { EnquiryType } from './enquiry';

/** Keep digits only and accept plausible international numbers (country code included, 8–15 digits). */
export function cleanNumber(raw?: string | null): string {
  const digits = (raw ?? '').replace(/\D/g, '');
  return digits.length >= 8 && digits.length <= 15 ? digits : '';
}

export type WhatsAppEnquiry = {
  type: EnquiryType;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  role?: string;
  message: string;
  product?: string;
};

const MAX_MESSAGE = 1200;

/** Plain, readable message so the Meku team can reply without re-asking for details. */
export function buildWhatsAppMessage(e: WhatsAppEnquiry): string {
  const product = e.product?.trim() || 'Restflow';
  const opener =
    e.type === 'demo'
      ? `Hello Meku, I'd like to request a ${product} demo.`
      : "Hello Meku, I'd like to discuss a custom software or integration project.";
  const body = e.message.trim();
  const clipped = body.length > MAX_MESSAGE ? body.slice(0, MAX_MESSAGE - 1).trimEnd() + '…' : body;
  const details = [
    ['Name', e.name],
    ['Company', e.company],
    ['Role', e.role],
    ['Email', e.email],
    ['Phone', e.phone],
  ]
    .filter(([, v]) => v && String(v).trim())
    .map(([k, v]) => `${k}: ${String(v).trim()}`);
  return [opener, '', ...details, '', clipped].join('\n');
}

export function whatsAppUrl(number: string, text?: string): string {
  const base = `https://wa.me/${number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
