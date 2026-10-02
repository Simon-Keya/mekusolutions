import { describe, it, expect } from 'vitest';
import { enquirySchema } from './enquiry';
const ok = { type: 'demo', name: 'Amina', email: 'a@b.co', message: 'We run two kitchens.' };
describe('enquirySchema', () => {
  it('accepts a valid enquiry', () => expect(enquirySchema.safeParse(ok).success).toBe(true));
  it('rejects a bad email', () => expect(enquirySchema.safeParse({ ...ok, email: 'x' }).success).toBe(false));
  it('rejects a short message', () => expect(enquirySchema.safeParse({ ...ok, message: 'hi' }).success).toBe(false));
  it('rejects an unknown type', () => expect(enquirySchema.safeParse({ ...ok, type: 'x' }).success).toBe(false));
});
