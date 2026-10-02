import type { Metadata } from 'next';
import Script from 'next/script';
import { Html } from '@/lib/content';
export const metadata: Metadata = { title: { absolute: 'Meku Solutions: connect your operations, see your business clearly' }, description: 'Meku Solutions builds software that connects inventory, operations and business data.' };
export default function Page() {
  return <><Html name="home" /><Script src="/trace.js" strategy="afterInteractive" /></>;
}
