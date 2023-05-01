import { Input } from '../Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from './loginFormSchema';
import { useContext, useState} from 'react';

<<<<<<< HEAD
=======
import { UserCommerceContext } from '../../../providers/UserCommerceProvider'
>>>>>>> 3e57697c78a06b7999227fbe36c679df10bfa72c
import {
  StyledFormUserDark,
  StyledInputContainerDark,
} from '../../../styles/form';
import { StyledTitleGreen } from '../../../styles/typography';
import { UserCommerceContext } from '../../../providers/UserCommerceProvider';


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
        Title
      </StyledTitleGreen>
      <StyledInputContainerDark>
        <Input
          type='email'
          label='Email'
          placeholder='Email'
          id='email'
          {...register('email')}
          error={errors.email}
        />
      </StyledInputContainerDark>
      <Input
        type='password'
        label='Senha'
        placeholder='Senha'
        id='password'
        {...register('password')}
        error={errors.password}
      />
      <button type='submit' disabled={loading}>
        {loading ? 'Entrando' : 'Login'}
      </button>
    </StyledFormUserDark>
  );
};
