import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createProductSchema } from './createProductSchema';
import { useContext } from 'react';
import { CommerceContext } from '../../../providers/CommerceProvider';
import { Input } from '../Input';
import { StyledCreateProductForm } from './style';
import { StyledInputContainerLight } from '../../../styles/form';

export interface ICreateProductFormValues {
  title: string;
  quantity: string;
  originalPrice: string;
  discount: string;
  userId: string | null;
  company: string | null;
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
    <StyledCreateProductForm onSubmit={handleSubmit(createProductSubmit)}>
      <header>
        <h1>Cadastrar nova oferta</h1>
        <StyledInputContainerLight>
          <Input
            label='Horário de Retirada' className=''
            placeholder='A partir das 22:00'
            disabled
            id='retirement'
          />
        </StyledInputContainerLight>
      </header>
      <StyledInputContainerLight>
        <Input
          type='text'
          label='Descrição'
          placeholder='Vegana, Vegetariana, etc.'
          id='title'
          {...register('title')}
          error={errors.title}
        />
      </StyledInputContainerLight>
      <StyledInputContainerLight>
        <StyledInputContainerLight>
          <Input
            type='number'
            label='Quantidade'
            placeholder='1'
            id='quantity'
            {...register('quantity')}
            error={errors.quantity}
          />
        </StyledInputContainerLight>
      </StyledInputContainerLight>
      <StyledInputContainerLight>
        <Input
          type='number'
          label='Valor Real'
          placeholder='R$80,00'
          id='originalPrice'
          {...register('originalPrice')}
          error={errors.originalPrice}
        />
      </StyledInputContainerLight>
      <StyledInputContainerLight>
        <Input
          type='number'
          label='Desconto'
          placeholder='20%'
          id='discount'
          {...register('discount')}
          error={errors.discount}
        />
      </StyledInputContainerLight>
      <button type='submit'>Cadastrar oferta</button>
    </StyledCreateProductForm>
  );
};
