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
import { CartModal } from "../../components/CartModal/index.tsx";

export const UserDashboard = () => {
  const { offers, searchByCategory, isCartModalOpen } = useContext(CartContext);
 

  return (
    <div>
      <Header />
      <StyledUserDashboard>
      {isCartModalOpen ? <CartModal /> : null}
        <section>
          <h1>Categorias</h1>
          <nav>
            <UserDashboardComponent searchByCategory={searchByCategory} category={"Padaria"} srcLogo={padariaLogo} />
            <UserDashboardComponent searchByCategory={searchByCategory} category={"Lanches"} srcLogo={lanchesLogo} />
            <UserDashboardComponent searchByCategory={searchByCategory} category={"Cafeteria"} srcLogo={cafeteriaLogo} />
            <UserDashboardComponent searchByCategory={searchByCategory} category={"Restaurante"} srcLogo={restauranteLogo} />
            <UserDashboardComponent searchByCategory={searchByCategory} category={"Bares"} srcLogo={baresLogo} />
            <UserDashboardComponent searchByCategory={searchByCategory} category={"Mercado"} srcLogo={mercadoLogo} />
          </nav>
          <form>
            <select onChange={(event) => searchByCategory(event.target.value)}>
              <option value='' >Categorias</option>
              <option value='padaria' >Padaria</option>
              <option value='lanches' >Lanches</option>
              <option value='cafeteria' >Cafeteria</option>
              <option value='restaurante' >Restaurante</option>
              <option value='bares' >Bares</option>
              <option value='mercado' >Mercado</option>
            </select>
          </form>
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
      <Footer />
    </div>
  );
};
