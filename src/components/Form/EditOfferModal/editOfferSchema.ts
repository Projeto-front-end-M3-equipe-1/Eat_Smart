import { z } from 'zod';

export const editOfferSchema = z.object({
  title: z
    .string().optional(),
  //   .transform((name) => {
  //     return name
  //       .trim()
  //       .split(' ')
  //       .map((word) => word[0]?.toLocaleUpperCase().concat(word.substring(1)))
  //       .join('');
  //   }),
   
  quantity: z
    .string().optional(),
  //   .transform((value) => Number(parseInt(value))),
   
  originalPrice: z
    .string().optional(),
  //   .transform((value) => Number(parseInt(value))),
  discount: z
    .string().optional(),
  //   .transform((value) => Number(parseInt(value))),
  // userId: z.string().transform((value) => Number(parseInt(value))),
  userId: z.string().optional(),
});
