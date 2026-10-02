import { promises as fs } from 'fs';
import path from 'path';
export async function Html({ name }: { name: string }) {
  const html = await fs.readFile(path.join(process.cwd(), 'content', `${name}.html`), 'utf8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
