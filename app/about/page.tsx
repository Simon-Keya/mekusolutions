import type { Metadata } from 'next';
import { Html } from '@/lib/content';
export const metadata: Metadata = { title: 'About', description: 'Why Meku started, our approach, vision and mission.' };
export default function Page() {
  return <><Html name="about" /></>;
}
