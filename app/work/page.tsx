import type { Metadata } from 'next';
import { Html } from '@/lib/content';
export const metadata: Metadata = { title: 'Work', description: "Restflow, Meku's flagship product, currently in pilot." };
export default function Page() {
  return <><Html name="work" /></>;
}
