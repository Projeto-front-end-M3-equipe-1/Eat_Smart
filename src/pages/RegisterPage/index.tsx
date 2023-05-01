import { RegisterCommerceForm } from '../../components/Form/RegisterCommerceForm';
import { RegisterUserForm } from '../../components/Form/RegisterUserForm';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  const typeofRoute = localStorage.getItem('@handle:typUser');

  if (typeofRoute === 'userRegister') {
    return (
      <div>
        <div>
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
  }
  if (typeofRoute === 'companyRegister') {
    return (
      <div>
        <div>
          {/* Lógica: Se estabelecimento, renderizar formulario de registro para este perfil */}
          <RegisterCommerceForm />
        </div>
        <div>
          <p>Fatos, coisas bonitinhas</p>
        </div>
        <div>
          <p>Já é cadastrado?</p>
          <button>
            <Link to='/signup' />
            Login
          </button>
        </div>
      </div>
    );
  }
};
