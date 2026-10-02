'use client';
import { useState } from 'react';
import { enquirySchema, type EnquiryType } from '@/lib/enquiry';
import { track } from '@/lib/analytics';
type FP = { n: string; label: string; req?: boolean; error?: string } & React.InputHTMLAttributes<HTMLInputElement>;
function Field({ n, label, req, error, ...p }: FP) {
  return <label>{label}{req ? ' *' : ''}<input name={n} aria-invalid={!!error} {...p} /><span className="err" role="alert">{error}</span></label>;
}
export default function EnquiryForm({ initial }: { initial: EnquiryType }) {
  const [type, setType] = useState<EnquiryType>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const demo = type === 'demo';
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = enquirySchema.safeParse({ ...fd, type });
    if (!parsed.success) {
      const m: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { m[String(i.path[0])] ??= i.message; });
      setErrors(m); return;
    }
    setErrors({}); setStatus('sending');
    try {
      const r = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) });
      if (!r.ok) throw new Error('rejected');
      setStatus('ok'); track(demo ? 'demo_form_submit_success' : 'project_form_submit_success');
    } catch { setStatus('error'); }
  }
  if (status === 'ok') return <p className="ok" role="status">Thank you. We have your enquiry and will reply by email or phone.</p>;
  return (
    <div>
      <div className="chips" role="group" aria-label="Enquiry type">
        <button type="button" className="chip" aria-pressed={demo} onClick={() => setType('demo')}>Restflow demo</button>
        <button type="button" className="chip" aria-pressed={!demo} onClick={() => setType('build')}>Custom software or integration</button>
      </div>
      <form noValidate onSubmit={onSubmit} style={{ marginTop: 24, maxWidth: 560 }}>
        <Field n="name" label="Name" req autoComplete="name" error={errors.name} />
        <Field n="company" label={demo ? 'Restaurant or company' : 'Company'} />
        {demo && <Field n="role" label="Role" />}
        <Field n="email" label="Email" req type="email" autoComplete="email" error={errors.email} />
        <Field n="phone" label="Phone or WhatsApp" type="tel" autoComplete="tel" />
        <label>{demo ? 'What would you like to see?' : 'What do you need?'} *<textarea name="message" rows={4} aria-invalid={!!errors.message} /><span className="err" role="alert">{errors.message}</span></label>
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999 }} />
        <button className="btn btn-m" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : demo ? 'Request a Restflow Demo' : 'Send enquiry'}</button>
        {status === 'error' && <p className="err" role="alert">We couldn't send your enquiry. Please try again, or email mekusolutions@gmail.com.</p>}
      </form>
    </div>
  );
}
