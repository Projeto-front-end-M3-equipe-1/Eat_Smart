import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SchemaFormRegister, TRegisterFormSchema } from './SchemaFormRegister';
import { Input } from '../Input';
import { useState, useContext } from 'react';
import { UserContext } from './../../../providers/UserContext/UserContext';

export interface IRegisterUserFormData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  foodCategory: string;
}

export const RegisterCommerceForm = () => {
  const [loading, setLoading] = useState(false);
  const { newUserRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserFormData>({
    resolver: zodResolver(SchemaFormRegister),
  });

  const submit: SubmitHandler<TRegisterFormSchema> = (Formdata) => {
    newUserRegister(Formdata, setLoading);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type='text'
        label='Nome'
        placeholder='Nome'
        id='userName'
        disabled={loading}
        {...register('userName')}
        error={errors.userName}
      />
      <Input
        type='email'
        label='Email'
        placeholder='Email'
        id='email'
        disabled={loading}
        {...register('email')}
        error={errors.email}
      />
      <Input
        type='password'
        label='Senha'
        placeholder='Senha'
        id='password'
        {...register('password')}
        disabled={loading}
        error={errors.password}
      />
      <Input
        type='password'
        label='Confirmar senha'
        placeholder='Confirmar senha'
        id='confirmPassword'
        disabled={loading}
        {...register('confirmPassword')}
        error={errors.confirmPassword}
      />
      <label htmlFor='typeOfCompany'>Selecionar setor alimentício</label>
      <select id='typeOfCompany' {...register('foodCategory')}>
        <option value=''>Categorias</option>
        <option value='Padaria'>Padaria</option>
        <option value='Lanches'>Lanches</option>
        <option value='Cafeteria'>Cafeteria</option>
        <option value='Restaurante'>Restaurante</option>
        <option value='Bares'>Bares</option>
        <option value='Mercado'>Mercado</option>
      </select>
      <p>
        {errors.foodCategory?.message ? errors.foodCategory?.message : null}
      </p>

      <button type='submit'>Cadastrar</button>
    </form>
  );
};
