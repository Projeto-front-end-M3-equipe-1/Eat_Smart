import { z } from 'zod';

export const editOfferSchema = z.object({
  title: z
    .string()
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join('');
    }),
    // .optional(),
  quantity: z
    .string()
    .transform((value) => Number(parseInt(value))),
    // .optional(),
  originalPrice: z
    .string()
    .transform((value) => Number(parseInt(value))),
    // .optional(),
  discount: z
    .string()
    .transform((value) => Number(parseInt(value))),
    // .optional(),
  userId: z.string().transform((value) => Number(parseInt(value))),
});
