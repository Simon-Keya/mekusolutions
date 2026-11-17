import type { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';
import { cleanNumber, whatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Request a Restflow demo or talk to Meku about custom software and integrations.',
};

const icon = (d: React.ReactNode) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

export default async function Page({ searchParams }: { searchParams: Promise<{ t?: string }> }) {
  const { t } = await searchParams;
  const wa = cleanNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER);
  return (
    <>
      <div className="ph1 ph1-compact">
        <div className="wrap-wide">
          <h1>Talk to Meku</h1>
          <p>Request a Restflow demonstration or start a conversation about custom software and system integration.</p>
        </div>
      </div>
      <section className="contact-section">
        <div className="wrap-wide contact-grid">
          <div className="contact-side">
            <h2>Tell us what you need</h2>
            <p className="lead">
              {wa
                ? 'Choose the kind of enquiry and share a few details. We will continue the conversation on WhatsApp.'
                : 'Choose the kind of enquiry and share a few details. We will reply by email or phone.'}
            </p>
            <div className="contact-methods">
              {wa && (
                <a href={whatsAppUrl(wa)} rel="noopener">
                  <span className="cm-ico">{icon(<path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.5L3 21Z" />)}</span>
                  <span>WhatsApp<small>Message the team directly</small></span>
                </a>
              )}
              <a href="mailto:mekusolutions@gmail.com">
                <span className="cm-ico">{icon(<><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></>)}</span>
                <span>Email<small>mekusolutions@gmail.com</small></span>
              </a>
              <a href="https://instagram.com/meku.solutions" rel="noopener">
                <span className="cm-ico">{icon(<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>)}</span>
                <span>Instagram<small>@meku.solutions</small></span>
              </a>
            </div>
            <ol className="next-steps" aria-label="What happens next">
              <li><b>Tell us what you need</b><span>Pick an enquiry type and fill in a few details.</span></li>
              <li><b>{wa ? 'Send it on WhatsApp' : 'Send your enquiry'}</b><span>{wa ? 'Your message opens ready to send.' : 'It reaches the Meku team by email.'}</span></li>
              <li><b>We reply</b><span>We follow up and talk through what fits your operation.</span></li>
            </ol>
          </div>
          <div className="form-card">
            <EnquiryForm key={t} initial={t === 'build' ? 'build' : 'demo'} />
          </div>
        </div>
      </section>
    </>
  );
}
