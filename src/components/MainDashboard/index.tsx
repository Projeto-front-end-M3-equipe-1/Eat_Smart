import logo from '../../assets/images/image1.svg';
import { StyledMainDashboard, StyledMainDashboardHeader } from './style';
import { StyledButtonLink } from '../../styles/button';
import { StyledTitleGreen } from '../../styles/typography';

export const MainDashboardComponent = () => {
  return (
    <>
      <StyledMainDashboardHeader>
        <StyledTitleGreen tag='h1' $fontSize='logo' textAlign='center'>
          Eat<span>Smart</span>
        </StyledTitleGreen>
        <div>
          <StyledButtonLink
            $buttonSize='default'
            $buttonStyle='buttonGreenLight'
            to='/register'
          >
            Cadastro
          </StyledButtonLink>
          <StyledButtonLink
            $buttonSize='default'
            $buttonStyle='buttonGreenLight'
            to='/login'
          >
            Login
          </StyledButtonLink>
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
