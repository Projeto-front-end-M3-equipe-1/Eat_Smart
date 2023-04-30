import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { UserDashboardComponent } from "../../components/UserDashboard/index.tsx";
import padariaLogo from "../../assets/icons/padaria.svg";
import lanchesLogo from "../../assets/icons/lanches.svg";
import cafeteriaLogo from "../../assets/icons/cafeteria.svg";
import restauranteLogo from "../../assets/icons/restaurantes.svg";
import baresLogo from "../../assets/icons/bares.svg";
import mercadoLogo from "../../assets/icons/mercado.svg";
import { StyledUserDashboard } from "../../components/UserDashboard/style.ts";
import { useContext } from "react";
import { CartContext } from "../../providers/CartProvider/index.tsx";

export const UserDashboard = () => {
  const { offers } = useContext(CartContext);
  return (
    <div>
      {/* <Header /> */}
      <StyledUserDashboard>
        <section>
          <h1>Categorias</h1>
          <nav>
            <UserDashboardComponent category={"Padaria"} srcLogo={padariaLogo} />
            <UserDashboardComponent category={"Lanches"} srcLogo={lanchesLogo} />
            <UserDashboardComponent category={"Cafeteria"} srcLogo={cafeteriaLogo} />
            <UserDashboardComponent category={"Restaurante"} srcLogo={restauranteLogo} />
            <UserDashboardComponent category={"Bares"} srcLogo={baresLogo} />
            <UserDashboardComponent category={"Mercado"} srcLogo={mercadoLogo} />
          </nav>
        </section>
        <section>
          <h1>Ofertas</h1>
          <div>
            {offers.length == 0 ? (
              <h2>Nenhuma oferta cadastrada</h2>
            ) : (
              <ProductList offers={offers} />
            )}
          </div>
        </section>
      </StyledUserDashboard>
      {/* <Footer /> */}
    </div>
  );
};
