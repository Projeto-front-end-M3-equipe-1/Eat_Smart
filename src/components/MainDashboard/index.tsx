import logo from '../../assets/images/image1.svg';
import { StyledMainDashboard } from './style';

export const MainDashboardComponent = () => {
  return (
    <StyledMainDashboard>
      <section>
        <div>
          <h1>Vamos Economizar</h1>
          <h2>Comida Juntos</h2>
        </div>
        <div>
          <p>
            Junte-se à luta contra o desperdício de alimentos e ajude a salvar
            alimentos perfeitamente bons que de outra forma iriam para o lixo.
          </p>
          <small>
            Descubra lojas e restaurantes perto de você com a EatSmart e evite
            que sacolas surpresa de mantimentos excedentes sejam desperdiçadas -
            adquirindo por um ótimo preço.
          </small>
        </div>
      </section>
      <section>
        <img src={logo} alt='produtos para entrega' />
      </section>
    </StyledMainDashboard>
  );
};
