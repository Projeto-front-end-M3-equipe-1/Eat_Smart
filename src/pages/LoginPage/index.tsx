import { LoginForm } from '../../components/Form/LoginForm';
import { StyledButton } from '../../styles/button';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const typeofRoute = localStorage.getItem('@handle:typUser');
  const typeNav = localStorage.getItem('@handle:nav');
  const navigate = useNavigate();
  const handleClick = () => {
    if (typeofRoute === 'userLogin' && typeNav === 'login') {
      localStorage.setItem('@handle:typUser', 'userRegister');
      localStorage.setItem('@handle:nav', 'register');
      navigate('/register');
    }
    if (typeofRoute === 'companyLogin' && typeNav === 'login') {
      localStorage.setItem('@handle:typUser', 'companyRegister');
      localStorage.setItem('@handle:nav', 'register');
      navigate('/signup');
    }
  };
  if (typeofRoute === 'userLogin') {
    return (
      <>
        <main>
          <section>
            <p>Fatos, coisas bonitinhas</p>
            <img src='Imagem' alt=''></img>
          </section>
          <LoginForm />
          <div>
            <p>Ainda não é cadastrado?</p>

            <StyledButton
              $buttonSize='default'
              $buttonStyle='buttonGreenLight'
              onClick={() => {
                handleClick();
              }}
            >
              Cadastre-ses
            </StyledButton>
          </div>
        </main>
      </>
    );
  }
  if (typeofRoute === 'companyLogin') {
    return (
      <>
        <main>
          <section>
            <p>Fatos, coisas bonitinhas</p>
            <img src='Imagem' alt=''></img>
          </section>
          <LoginForm />
          <div>
            <p>Ainda não é cadastrado?</p>

            <StyledButton
              $buttonSize='default'
              $buttonStyle='buttonGreenLight'
              onClick={() => {
                handleClick();
              }}
            >
              Cadastre-se
            </StyledButton>
          </div>
        </main>
      </>
    );
  }
  return null;
};
