import logo from '../../assets/images/image1.svg';
import { StyledMainDashboard, StyledMainDashboardHeader } from './style';
import { StyledButton } from '../../styles/button';
import { StyledTitleGreen } from '../../styles/typography';
import { useState } from 'react';
import { LoginModal } from '../LoginModal';

export const MainDashboardComponent = () => {
  const [isModalOpenLogin, setIsModalOpenLogin] = useState<boolean>(false);
  const [isModalOpenRegister, setIsModalOpenRegister] =
    useState<boolean>(false);

  return (
    <>
      <StyledMainDashboardHeader>
        <StyledTitleGreen tag='h1' $fontSize='logo' textAlign='center'>
          Eat<span>Smart</span>
        </StyledTitleGreen>
        <div>
          {isModalOpenLogin ? <LoginModal /> : null}
          {isModalOpenRegister ? <LoginModal /> : null}

          <StyledButton
            $buttonSize='default'
            $buttonStyle='buttonGreenLight'
            id='register'
            onClick={() => {
              setIsModalOpenRegister(true);
              localStorage.setItem('@handle:nav', 'register');
            }}
          >
            Cadastro
          </StyledButton>
          <StyledButton
            $buttonSize='default'
            $buttonStyle='buttonGreenLight'
            id='login'
            onClick={() => {
              setIsModalOpenLogin(true);
              localStorage.setItem('@handle:nav', 'login');
            }}
          >
            Login
          </StyledButton>
        </div>
      </StyledMainDashboardHeader>
      <StyledMainDashboard>
        <div>
          <section>
            <h1>Vamos Economizar</h1>
            <h2>Comida</h2>
            <h2>Juntos</h2>
            <p>
              Junte-se à luta contra o desperdício de alimentos e ajude a salvar
              alimentos perfeitamente bons que de outra forma iriam para o lixo.
            </p>
            <small>
              Descubra lojas e restaurantes perto de você com a EatSmart e evite
              que sacolas surpresa de mantimentos excedentes sejam desperdiçadas
              - adquirindo por um ótimo preço.
            </small>
          </section>
          <section>
            <img src={logo} alt='produtos para entrega' />
          </section>
        </div>
      </StyledMainDashboard>
    </>
  );
};
