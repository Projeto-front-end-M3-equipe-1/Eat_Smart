import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { createProductSchema } from './createProductSchema';
import { useContext } from 'react';
import { CommerceContext } from '../../../providers/CommerceProvider';

export interface ICreateProductFormValues {
  title: string;
  quantity: string;
  originalPrice: string;
  discount: string;
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

  const { createNewProduct } = useContext(CommerceContext);

  const createProductSubmit: SubmitHandler<ICreateProductFormValues> = (
    productFormData
  ) => {
    console.log(productFormData);
    createNewProduct(productFormData);

    setValue('title', '');
    setValue('quantity', '');
    setValue('originalPrice', '');
    setValue('discount', '');
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
      <button type='submit'>Cadastrar sacola surpresa</button>
    </form>
  );
};
