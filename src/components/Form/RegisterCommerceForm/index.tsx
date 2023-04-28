import { Input } from '../Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerCommerceFormSchema } from './registerCommerceFormSchema';

export interface IRegisterUserFormData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  foodCategory: string;
}

export const RegisterCommerceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserFormData>({
    resolver: zodResolver(registerCommerceFormSchema),
  });

  const registerUserFormSubmit: SubmitHandler<IRegisterUserFormData> = (
    registerCommerceFormData
  ) => {
    console.log(registerCommerceFormData);
    // Executar função de request de Cadastro/Comércio, recebendo registerCommerceFormData como parâmetro
  };

  return (
    <form onSubmit={handleSubmit(registerUserFormSubmit)}>
      <Input
        type='text'
        label='Nome'
        placeholder='Nome'
        id='userName'
        {...register('userName')}
        error={errors.userName}
      />
      <Input
        type='email'
        label='Email'
        placeholder='Email'
        id='email'
        {...register('email')}
        error={errors.email}
      />
      <Input
        type='password'
        label='Senha'
        placeholder='Senha'
        id='password'
        {...register('password')}
        error={errors.password}
      />
      <Input
        type='password'
        label='Confirmar senha'
        placeholder='Confirmar senha'
        id='confirmPassword'
        {...register('confirmPassword')}
        error={errors.confirmPassword}
      />
      {/* Checar se validação do select no schema está correta*/}
      <label htmlFor='typeOfCompany'>Selecionar setor alimentício</label>
      <select
        id='typeOfCompany'
        {...register('foodCategory')}
        error={errors.foodCategory?.message}
      >
        <option value='' disabled selected>
          Categorias
        </option>
        <option value='Padaria'>Padaria</option>
        <option value='Lanches'>Lanches</option>
        <option value='Cafeteria'>Cafeteria</option>
        <option value='Restaurante'>Restaurante</option>
        <option value='Bares'>Bares</option>
        <option value='Mercado'>Mercado</option>
      </select>

      <button type='submit' disabled>
        Cadastrar
      </button>
    </form>
  );
};
