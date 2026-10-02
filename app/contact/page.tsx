import type { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';
export const metadata: Metadata = { title: 'Contact', description: 'Request a Restflow demo or talk to Meku about custom software and integrations.' };
export default async function Page({ searchParams }: { searchParams: Promise<{ t?: string }> }) {
  const { t } = await searchParams;
  return (<>
    <div className="ph1"><div className="wrap"><h1 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)' }}>Contact</h1>
      <p>Choose what you need. You can also email mekusolutions@gmail.com or find us on Instagram @meku.solutions.</p></div></div>
    <section><div className="wrap"><EnquiryForm key={t} initial={t === 'build' ? 'build' : 'demo'} /></div></section>
  </>);
}
