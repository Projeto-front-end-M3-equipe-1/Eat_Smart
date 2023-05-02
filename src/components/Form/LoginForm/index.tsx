import { Input } from '../Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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

export const LoginForm = () => {
   const [loading, setLoading] = useState(false);
   const { login } = useContext(UserCommerceContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });


  const loginFormSubmit: SubmitHandler<ILoginFormData> = (loginFormData) => {
    login(loginFormData);
  };

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
          {...register('email')}
          error={errors.email}
        />
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
};
