import type { Metadata } from 'next';
import { Html } from '@/lib/content';
export const metadata: Metadata = { title: 'Restflow', description: 'Restflow connects restaurant inventory, kitchen production, recipes, menus, POS and analytics. Now in pilot.' };
export default function Page() {
  return <><Html name="restflow" /></>;
}
