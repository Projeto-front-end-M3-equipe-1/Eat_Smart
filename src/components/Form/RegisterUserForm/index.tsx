import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  SchemaFormUserRegister,
  TRegisterFormUserSchema,
} from './registerUserFormSchema';
import { Input } from '../Input';
import { useState, useContext } from 'react';
import { UserContext } from './../../../providers/UserContext/UserContext';

export interface IRegisterUserFormData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterUserForm = () => {
  const [loading, setLoading] = useState(false);
  const { newUserRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserFormData>({
    resolver: zodResolver(SchemaFormUserRegister),
  });

  const submit: SubmitHandler<TRegisterFormUserSchema> = (FormData) => {
    newUserRegister(FormData, setLoading);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type='text'
        label='Nome'
        placeholder='Nome'
        id='userName'
        {...register('userName')}
        disabled={loading}
        error={errors.userName}
      />
      <Input
        type='email'
        label='Email'
        placeholder='Email'
        id='email'
        {...register('email')}
        disabled={loading}
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
      <button type='submit'>Cadastrar</button>
    </form>
  );
};
