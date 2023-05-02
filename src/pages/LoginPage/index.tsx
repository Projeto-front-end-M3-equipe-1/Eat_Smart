import { LoginForm } from '../../components/Form/LoginForm';
import { StyledButton } from '../../styles/button';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const typeofRoute = localStorage.getItem('@handle:typUser');
  const navigate = useNavigate();
  const handleClick = (type: string) => {
    const typeNav = localStorage.getItem('@handle:nav');
    console.log(typeNav);

    if (type === 'user' && typeNav === 'login') {
      localStorage.setItem('@handle:typUser', 'userRegister');
      navigate('/register');
    }
    if (type === 'company' && typeNav === 'signin') {
      localStorage.setItem('@handle:typUser', 'companyRegister');
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
                handleClick('user');
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
                handleClick('company');
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
