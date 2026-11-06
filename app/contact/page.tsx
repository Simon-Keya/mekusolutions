import type { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Request a Restflow demo or talk to Meku about custom software and integrations.',
};
const icon = (d: React.ReactNode) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
export default async function Page({ searchParams }: { searchParams: Promise<{ t?: string }> }) {
  const { t } = await searchParams;
  return (
    <>
      <div className="ph1">
        <div className="wrap-wide">
          <h1>Talk to Meku</h1>
          <p>Request a Restflow demonstration or start a conversation about custom software and system integration.</p>
        </div>
      </div>
      <section>
        <div className="wrap-wide contact-grid">
          <div className="contact-side">
            <h2>Tell us what you need</h2>
            <p className="lead">Pick the kind of enquiry, share a few details, and we will reply by email or phone.</p>
            <div className="contact-methods">
              <a href="mailto:mekusolutions@gmail.com">
                <span className="cm-ico">{icon(<><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></>)}</span>
                <span>Email<small>mekusolutions@gmail.com</small></span>
              </a>
              <a href="https://instagram.com/meku.solutions" rel="noopener">
                <span className="cm-ico">{icon(<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>)}</span>
                <span>Instagram<small>@meku.solutions</small></span>
              </a>
            </div>
          </div>
          <div className="form-card">
            <EnquiryForm key={t} initial={t === 'build' ? 'build' : 'demo'} />
          </div>
        </div>
      </section>
    </>
  );
}
