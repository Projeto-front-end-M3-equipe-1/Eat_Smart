import { useNavigate } from 'react-router-dom';
import { RegisterCommerceForm } from '../../components/Form/RegisterCommerceForm';
import { RegisterUserForm } from '../../components/Form/RegisterUserForm';
import { StyledButton } from '../../styles/button';
import companyRegister from '../../assets/images/companyRegister.svg';

export const RegisterPage = () => {
  const typeofRoute = localStorage.getItem('@handle:typUser');
  const typeNav = localStorage.getItem('@handle:nav');
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeofRoute === 'userRegister' && typeNav === 'register') {
      localStorage.setItem('@handle:typUser', 'userLogin');
      localStorage.setItem('@handle:nav', 'login');
      navigate('/login');
    }
    if (typeofRoute === 'companyRegister' && typeNav === 'register') {
      localStorage.setItem('@handle:typUser', 'companyLogin');
      localStorage.setItem('@handle:nav', 'login');
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
              handleClick();
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
      <main>
        <section>
          <StyledButton
            $buttonSize='default'
            $buttonStyle='buttonGreenLight'
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </StyledButton>

          <RegisterCommerceForm />
          <div>
            <p>Já é cadastrado?</p>
            <StyledButton
              $buttonSize='default'
              $buttonStyle='buttonGreenLight'
              onClick={() => {
                handleClick();
              }}
            >
              Login
            </StyledButton>
          </div>
        </section>
        <section>
          <p>Logo</p>
          <img src={companyRegister} alt='cadastro' />
        </section>
      </main>
    );
  }
};
