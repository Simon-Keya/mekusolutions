import { z } from 'zod';
export type EnquiryType = 'demo' | 'build';
export const enquirySchema = z.object({
  type: z.enum(['demo', 'build']),
  name: z.string().trim().min(2, 'Enter your name.').max(100),
  email: z.string().trim().email('Enter a valid email address.').max(200),
  phone: z.string().trim().max(30).optional().default(''),
  company: z.string().trim().max(150).optional().default(''),
  role: z.string().trim().max(100).optional().default(''),
  message: z.string().trim().min(10, 'Tell us a little more (at least 10 characters).').max(3000),
  website: z.string().optional().default(''),
});
export type Enquiry = z.infer<typeof enquirySchema>;
