import { RegisterCommerceForm } from '../../components/Form/RegisterCommerceForm';
import { RegisterUserForm } from '../../components/Form/RegisterUserForm';
import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <div>
      <Header />
      <div>
        {/* Lógica: Se estabelecimento, renderizar formulario de registro para este perfil */}
        <RegisterCommerceForm />
        {/* Lógica: Se consumidor, renderizar formulario de registro para este perfil */}
        <RegisterUserForm />
      </div>
      <div>
        <p>Fatos, coisas bonitinhas</p>
      </div>
      <div>
        <p>Já é cadastrado?</p>
        <button>
          <Link to='/login' />
          Login
        </button>
      </div>
    </div>
  );
};
