import { Input } from '../Input';
import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext/UserContext';
import { LoginFormSchema, TLoginFormSchema } from './loginFormSchema';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


export const LoginForm = () => {
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
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        id='login'
        type='email'
        disabled={loading}
        label={'Email'}
        {...register('email')}
      />
      {errors ? <span>{errors.email?.message}</span> : null}
      <Input
        id='senha'
        type='password'
        label='Senha'
        {...register('password')}
      />
      {errors ? <span>{errors.password?.message}</span> : null}
      <button type='submit' disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
};

export default LoginForm;
