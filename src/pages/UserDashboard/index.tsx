import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { offers } from "../../../lixo.tsx"

export const UserDashboard = () => {
  return (
    <div>
      {/* <Header /> */}
      <main>
        <div>
          <h1>Categorias</h1>
          <nav>
            <figure>
              <img src="" alt="" />
              <p></p>
            </figure>
          </nav>
        </div>
        <section>
          <h1>Ofertas</h1>
          {offers.length == 0 ? (
            <h2>Nenhuma oferta cadastrada</h2>
          ) : (
            <ProductList offers={offers} />
          )}
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};
