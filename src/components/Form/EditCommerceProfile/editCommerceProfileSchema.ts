import { z } from 'zod';

export const editCommerceProfileSchema = z
  .object({
    userName: z
      .string()
      .transform((name) => {
        return name
          .trim()
          .split('')
          .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join('');
      })
      .optional(),
    email: z.string().email('E-mail inválido').optional(),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: 'As senhas não correspondem. Por favor, tente novamente.',
    path: ['confirmPassword'],
  });
