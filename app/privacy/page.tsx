import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy' };
export default function Page() {
  return (<><div className="ph1"><div className="wrap"><h1 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>Privacy</h1><p>Draft for legal review before launch.</p></div></div>
    <section><div className="wrap"><p>When you submit a contact form, your name, email, optional phone, company, role and message are sent by email to Meku Solutions so we can reply. The website does not store them in a database. Our email provider processes them in order to deliver the message.</p>
      <p>If analytics is enabled, the site uses Plausible, which does not use cookies. This notice must be reviewed against Meku's actual setup and Kenyan data-protection requirements before launch.</p></div></section></>);
}
