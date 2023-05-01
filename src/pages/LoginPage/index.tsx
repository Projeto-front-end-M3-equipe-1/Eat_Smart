import { LoginForm } from '../../components/Form/LoginForm';
import { StyledButtonLink } from '../../styles/button';

export const LoginPage = () => {
  const typeofRoute = localStorage.getItem('@handle:typUser');

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

            <StyledButtonLink
              $buttonSize='default'
              $buttonStyle='buttonGreenLight'
              to='/register'
            >
              Cadastre-se
            </StyledButtonLink>
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

            <StyledButtonLink
              $buttonSize='default'
              $buttonStyle='buttonGreenLight'
              to='/signup'
            >
              Cadastre-se
            </StyledButtonLink>
          </div>
        </main>
      </>
    );
  }
  return null;
};
