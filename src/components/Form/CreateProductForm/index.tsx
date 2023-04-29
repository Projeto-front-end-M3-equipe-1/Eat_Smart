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
  userId: string;
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
      <h1>Cadastrar nova oferta</h1>
      <Input
        type='text'
        label='Preferências'
        placeholder='Ex: Vegana, Vegetariana, Zero Lactose'
        id='title'
        {...register('title')}
        error={errors.title}
      />
      <Input
        type='number'
        label='Itens disponíveis'
        placeholder='1'
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
        label='Desconto'
        placeholder='20%'
        id='discount'
        {...register('discount')}
        error={errors.discount}
      />
      <button type='submit'>Cadastrar oferta</button>
    </form>
  );
};
