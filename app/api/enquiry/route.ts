import { NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/enquiry';
const hits = new Map<string, number[]>(); // per-instance only; see README
function limited(ip: string) {
  const now = Date.now();
  const a = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  a.push(now); hits.set(ip, a);
  return a.length > 5;
}
export async function POST(req: Request) {
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (limited(ip)) return NextResponse.json({ ok: false }, { status: 429 });
  const p = enquirySchema.safeParse(body);
  if (!p.success) return NextResponse.json({ ok: false }, { status: 400 });
  const d = p.data;
  if (d.website) return NextResponse.json({ ok: true });
  const key = process.env.RESEND_API_KEY, to = process.env.ENQUIRY_TO_EMAIL, from = process.env.ENQUIRY_FROM_EMAIL;
  if (!key || !to || !from) { console.error('Enquiry email is not configured'); return NextResponse.json({ ok: false }, { status: 503 }); }
  const text = [`Type: ${d.type === 'demo' ? 'Restflow demo' : 'Custom software / integration'}`, `Name: ${d.name}`, `Company: ${d.company}`, `Role: ${d.role}`, `Email: ${d.email}`, `Phone: ${d.phone}`, '', d.message].join('\n');
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: d.email, subject: d.type === 'demo' ? 'Restflow demo request' : 'Project enquiry', text }),
    });
    if (!r.ok) { console.error('Email provider rejected enquiry', r.status); return NextResponse.json({ ok: false }, { status: 502 }); }
  } catch (e) { console.error('Email provider unreachable', e); return NextResponse.json({ ok: false }, { status: 502 }); }
  return NextResponse.json({ ok: true });
}
