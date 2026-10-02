import type { Metadata } from 'next';
import { Html } from '@/lib/content';
export const metadata: Metadata = { title: 'Solutions', description: 'Custom software, system integration, inventory and operations systems, automation and web development.' };
export default function Page() {
  return <><Html name="solutions" /></>;
}
