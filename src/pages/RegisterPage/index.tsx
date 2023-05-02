import { useNavigate } from 'react-router-dom';
import { RegisterCommerceForm } from '../../components/Form/RegisterCommerceForm';
import { RegisterUserForm } from '../../components/Form/RegisterUserForm';
import { StyledButton } from '../../styles/button';

export const RegisterPage = () => {
  const typeofRoute = localStorage.getItem('@handle:typUser');
  const navigate = useNavigate();

  const handleClick = (type: string) => {
    const typeNav = localStorage.getItem('@handle:nav');
    console.log(typeNav);

    if (type === 'user' && typeNav === 'register') {
      localStorage.setItem('@handle:typUser', 'userLogin');
      navigate('/login');
    }
    if (type === 'company' && typeNav === 'register') {
      localStorage.setItem('@handle:typUser', 'companyLogin');
      navigate('/signin');
    }
  };
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
          <StyledButton
            $buttonSize='default'
            $buttonStyle='buttonGreenLight'
            onClick={() => {
              handleClick('user');
            }}
          >
            Login
          </StyledButton>
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
          <StyledButton
            $buttonSize='default'
            $buttonStyle='buttonGreenLight'
            onClick={() => {
              handleClick('company');
            }}
          >
            Login
          </StyledButton>
        </div>
      </div>
    );
  }
};
