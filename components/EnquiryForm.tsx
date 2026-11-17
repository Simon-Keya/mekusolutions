'use client';
import { useRef, useState } from 'react';
import { enquirySchema, type EnquiryType } from '@/lib/enquiry';
import { track } from '@/lib/analytics';
import { products } from '@/lib/registry';
import { buildWhatsAppMessage, cleanNumber, whatsAppUrl } from '@/lib/whatsapp';

const WA = cleanNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER);

type FP = { n: string; label: string; req?: boolean; error?: string; hint?: string; wide?: boolean } & React.InputHTMLAttributes<HTMLInputElement>;

function Field({ n, label, req, error, hint, wide, ...p }: FP) {
  const id = `f-${n}`;
  const desc = [hint ? `${id}-h` : '', error ? `${id}-e` : ''].filter(Boolean).join(' ') || undefined;
  return (
    <div className={`field${wide ? ' field-wide' : ''}`}>
      <label htmlFor={id}>{label}{req && <span className="req" aria-hidden="true"> *</span>}</label>
      <input id={id} name={n} aria-invalid={!!error} aria-required={req || undefined} aria-describedby={desc} {...p} />
      {hint && !error && <span className="hint" id={`${id}-h`}>{hint}</span>}
      {error && <span className="err" id={`${id}-e`}>{error}</span>}
    </div>
  );
}

export default function EnquiryForm({ initial }: { initial: EnquiryType }) {
  const [type, setType] = useState<EnquiryType>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [waLink, setWaLink] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const demo = type === 'demo';
  const multi = products.length > 1;

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = enquirySchema.safeParse({ ...fd, type, product: demo ? fd.product || products[0]?.name || '' : '' });
    if (!parsed.success) {
      const m: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { m[String(i.path[0])] ??= i.message; });
      setErrors(m);
      const first = ['name', 'email', 'message'].find((k) => m[k]);
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setErrors({});
    const d = parsed.data;
    const body = JSON.stringify(d);
    const post = () => fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true });

    if (WA) {
      // Open WhatsApp synchronously inside the click handler so mobile popup blockers allow it.
      const url = whatsAppUrl(WA, buildWhatsAppMessage(d));
      const w = window.open(url, '_blank');
      if (w) w.opener = null; else window.location.assign(url);
      post().catch(() => {}); // silent email record; never blocks the visitor
      setWaLink(url);
      setStatus('ok');
      track(demo ? 'demo_form_submit_whatsapp' : 'project_form_submit_whatsapp');
      return;
    }

    setStatus('sending');
    post()
      .then((r) => { if (!r.ok) throw new Error('rejected'); setStatus('ok'); track(demo ? 'demo_form_submit_success' : 'project_form_submit_success'); })
      .catch(() => setStatus('error'));
  }

  if (status === 'ok') {
    return (
      <div className="ok" role="status">
        <h3>{WA ? 'Your message is ready in WhatsApp' : 'Thank you'}</h3>
        {WA ? (
          <>
            <p>Press send in WhatsApp to reach the Meku team. If it did not open, use the button below.</p>
            <a className="btn btn-m" href={waLink} target="_blank" rel="noopener">Open WhatsApp</a>
          </>
        ) : (
          <p>We have your enquiry and will reply by email or phone.</p>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="seg" role="group" aria-label="Enquiry type">
        <button type="button" aria-pressed={demo} onClick={() => setType('demo')}>{multi ? 'Product demo' : `${products[0]?.name ?? 'Product'} demo`}</button>
        <button type="button" aria-pressed={!demo} onClick={() => setType('build')}>Custom software or integration</button>
      </div>
      <form ref={formRef} noValidate onSubmit={submit}>
        <p className="req-note"><span aria-hidden="true">*</span> Required</p>
        <div className="fields">
          <Field n="name" label="Name" req autoComplete="name" error={errors.name} />
          <Field n="company" label={demo ? 'Restaurant or company' : 'Company'} autoComplete="organization" />
          <Field n="email" label="Email" req type="email" inputMode="email" autoComplete="email" error={errors.email} />
          <Field n="phone" label="Phone or WhatsApp" type="tel" inputMode="tel" autoComplete="tel" />
          {demo && <Field n="role" label="Your role" autoComplete="organization-title" />}
          {demo && multi && (
            <div className="field">
              <label htmlFor="f-product">Product</label>
              <select id="f-product" name="product" defaultValue={products[0].name}>
                {products.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
              </select>
            </div>
          )}
          <div className="field field-wide">
            <label htmlFor="f-message">{demo ? 'What would you like to see?' : 'What do you need?'}<span className="req" aria-hidden="true"> *</span></label>
            <textarea id="f-message" name="message" rows={5} aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'f-message-e' : undefined} />
            {errors.message && <span className="err" id="f-message-e">{errors.message}</span>}
          </div>
        </div>
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
        <div className="form-actions">
          <button className="btn btn-m" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : WA ? 'Continue on WhatsApp' : demo ? (products[0]?.cta ?? 'Request a demo') : 'Send enquiry'}
          </button>
          <p className="form-note">
            {WA ? 'This opens WhatsApp with your message ready to send. Nothing is sent until you press send there.' : 'We will reply by email or phone.'}
          </p>
        </div>
        {status === 'error' && <p className="err form-error" role="alert">We couldn&apos;t send your enquiry. Please try again, or email mekusolutions@gmail.com.</p>}
      </form>
    </div>
  );
}
