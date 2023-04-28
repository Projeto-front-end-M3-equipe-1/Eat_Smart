import { z } from 'zod';

export const createProductSchema = z.object({
  title: z
    .string()
    .nonempty('Preencha a descrição do produto')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join('');
    }),
  quantity: z.number().min(1, 'Preencha a quantidade que deseja cadastrar'),
  originalPrice: z.number().min(1, 'Preencha o valor original do produto'),
  discount: z.number().min(1, 'Preencha o percentual da oferta'),
  newPrice: z.number().min(1, 'Preencha o valor final do produto'),
});
