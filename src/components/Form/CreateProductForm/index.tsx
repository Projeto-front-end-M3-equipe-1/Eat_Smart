import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { createProductSchema } from './createProductSchema';

export interface ICreateProductFormValues {
  title: string;
  quantity: number;
  originalPrice: number;
  discount: number;
  newPrice: number;
}

export const CreateProductForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICreateProductFormValues>({
    resolver: zodResolver(createProductSchema),
  });

  const createProductSubmit: SubmitHandler<ICreateProductFormValues> = (
    productFormData
  ) => {
    console.log(productFormData);
    // Executar função de criar produto, recebendo productFormData como parâmetro;
    setValue('title', '');
    setValue('quantity', 0);
    setValue('originalPrice', 0);
    setValue('discount', 0);
    setValue('newPrice', 0);
  };

  return (
    <form onSubmit={handleSubmit(createProductSubmit)}>
      <Input
        type='text'
        label='Nome do produto'
        placeholder='Nome do produto'
        id='title'
        {...register('title')}
        error={errors.title}
      />
      <Input
        type='number'
        label='Qt.'
        placeholder='Qt.'
        id='quantity'
        {...register('quantity')}
        error={errors.quantity}
      />
      <Input
        type='number'
        label='Preço original'
        placeholder='Preço original'
        id='originalPrice'
        {...register('originalPrice')}
        error={errors.originalPrice}
      />
      <Input
        type='number'
        label='Desconto %'
        placeholder='Desconto %'
        id='discount'
        {...register('discount')}
        error={errors.discount}
      />
      <Input
        type='number'
        label='Valor final'
        placeholder='Valor final'
        id='newPrice'
        {...register('newPrice')}
        error={errors.newPrice}
      />
      <button type='submit'>Cadastrar sacola surpresa</button>
    </form>
  );
};
