import { z } from 'zod';

export const editOfferSchema = z.object({
  title: z.string().optional(),
  quantity: z.string().optional(),
  // originalPrice: z.string().optional(),
  discount: z.string().optional(),
});
