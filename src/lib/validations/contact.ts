import { z } from 'zod';

/**
 * Zod validation schema for the contact form.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must be at most 50 characters long' }),
  email: z.email({ message: 'Please enter a valid email address' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(1000, { message: 'Message must be at most 1000 characters long' }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
