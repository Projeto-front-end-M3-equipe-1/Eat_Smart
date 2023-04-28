import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';

export const UserDashboard = () => {
  return (
    <div>
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};
