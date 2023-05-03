import { InputDark, InputLight } from '../Input';
import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext/UserContext';
import { LoginFormSchema, TLoginFormSchema } from './loginFormSchema';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
<<<<<<< HEAD
import { loginFormSchema } from './loginFormSchema';
import { useContext, useState} from 'react';

import {
  StyledFormUserDark,
  StyledInputContainerDark,
} from '../../../styles/form';
import { StyledTitleGreen } from '../../../styles/typography';
import { UserCommerceContext } from '../../../providers/UserCommerceProvider';
import { StyledButton } from '../../../styles/button';

export interface ILoginFormData {
  email: string;
  password: string;
}
=======
import { StyledFormUserDark, StyledFormUserLight } from '../../../styles/form';
import { StyledTitleGreen, StyledTitleWhite } from '../../../styles/typography';
import { StyledButton } from '../../../styles/button';
>>>>>>> d235a65c4032b9bf16b198a37dfb143b83946d24

export const LoginForm = () => {
  const typeofRoute = localStorage.getItem('@handle:typUser');
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormSchema>({ resolver: zodResolver(LoginFormSchema) });

  const submit: SubmitHandler<TLoginFormSchema> = (formData) => {
    signIn(formData, setLoading);
  };
<<<<<<< HEAD

  return (
    <StyledFormUserDark onSubmit={handleSubmit(loginFormSubmit)}>
      <StyledTitleGreen tag='h1' $fontSize='titleForm'>
        Faça login na sua conta
      </StyledTitleGreen>
      <StyledInputContainerDark>
        <Input
          type='email'
          label='Endereço de Email'
          placeholder=''
          id='email'
=======
  if (typeofRoute === 'companyLogin') {
    return (
      <StyledFormUserLight onSubmit={handleSubmit(submit)}>
        <StyledTitleWhite tag='h1' $fontSize='titleForm' textAlign='center'>
          Faça login na sua conta
        </StyledTitleWhite>
        <InputLight
          id='login'
          type='email'
          disabled={loading}
          label={'Email'}
>>>>>>> d235a65c4032b9bf16b198a37dfb143b83946d24
          {...register('email')}
        />
<<<<<<< HEAD
      </StyledInputContainerDark>
      <Input
        type='password'
        label='Senha'
        placeholder=''
        id='password'
        {...register('password')}
        error={errors.password}
      />
      <StyledButton type='submit' disabled={loading} $buttonStyle='buttonGreenLight' >
      {loading ? 'Entrando' : 'Login'}
        
      </StyledButton>

      {/* <button type='submit' disabled={loading}>
        {loading ? 'Entrando' : 'Login'}
      </button> */}
    </StyledFormUserDark>
  );
=======
        {errors ? <span>{errors.email?.message}</span> : null}
        <InputLight
          id='senha'
          type='password'
          label='Senha'
          {...register('password')}
        />
        {errors ? <span>{errors.password?.message}</span> : null}
        <StyledButton
          $buttonSize='default'
          $buttonStyle='buttonGreenDark'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </StyledButton>
      </StyledFormUserLight>
    );
  }
  if (typeofRoute === 'userLogin') {
    return (
      <StyledFormUserDark onSubmit={handleSubmit(submit)}>
        <StyledTitleGreen tag='h1' $fontSize='titleForm' textAlign='center'>
          Faça login na sua conta
        </StyledTitleGreen>
        <InputDark
          id='login'
          type='email'
          disabled={loading}
          label={'Email'}
          placeholder='Digite seu email'
          {...register('email')}
        />
        {errors ? <p>{errors.email?.message}</p> : null}
        <InputDark
          id='senha'
          type='password'
          label='Senha'
          placeholder='Digite sua senha'
          {...register('password')}
        />
        {errors ? <p>{errors.password?.message}</p> : null}
        <StyledButton
          $buttonSize='default'
          $buttonStyle='buttonGreenLight'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </StyledButton>
      </StyledFormUserDark>
    );
  }
  return null;
>>>>>>> d235a65c4032b9bf16b198a37dfb143b83946d24
};

export default LoginForm;
