import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How Meku Solutions handles information submitted through this website.',
};
export default function Page() {
  return (
    <>
      <div className="ph1">
        <div className="wrap">
          <span className="section-label">Legal</span>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>Privacy</h1>
          <p>Draft for legal review before launch. Last updated: October 2026.</p>
        </div>
      </div>
      <section>
        <div className="wrap" style={{ maxWidth: '40rem' }}>
          <h2 className="h3" style={{ fontSize: '1.25rem' }}>What we collect</h2>
          <p>
            When you submit a Restflow demo request or project enquiry, we collect the details you provide:
            name, email, optional phone or WhatsApp, company or restaurant name, role, and your message.
          </p>
          <h2 className="h3" style={{ fontSize: '1.25rem', marginTop: '1.75rem' }}>How we use it</h2>
          <p>
            We use this information only to respond to your enquiry, schedule demonstrations where relevant,
            and qualify the request. We do not sell personal data.
          </p>
          <h2 className="h3" style={{ fontSize: '1.25rem', marginTop: '1.75rem' }}>Storage and providers</h2>
          <p>
            Form submissions are processed so that an email can be delivered to Meku Solutions
            (mekusolutions@gmail.com). The website does not store enquiries in its own database.
            Delivery may use a transactional email provider configured by Meku.
          </p>
          <h2 className="h3" style={{ fontSize: '1.25rem', marginTop: '1.75rem' }}>Analytics</h2>
          <p>
            If analytics is enabled, the site may use Plausible (or a similar privacy-conscious tool)
            that does not rely on advertising cookies. Configuration is controlled by environment variables.
          </p>
          <h2 className="h3" style={{ fontSize: '1.25rem', marginTop: '1.75rem' }}>Contact</h2>
          <p>
            Privacy questions: <a href="mailto:mekusolutions@gmail.com">mekusolutions@gmail.com</a>
          </p>
          <p className="note" style={{ marginTop: '2rem' }}>
            <strong>Note:</strong> This is a working draft. A full review against Kenyan data-protection
            requirements (and any other applicable law) must be completed before treating this as final.
          </p>
        </div>
      </section>
    </>
  );
}
