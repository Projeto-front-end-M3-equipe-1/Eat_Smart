import { CreateProductForm } from '../../components/Form/CreateProductForm';
import { Header } from '../../components/Header';
import { OffersList } from '../../components/OffersList';

export const CommerceDashboard = () => {
  return (
    <div>
      <Header />
      <main>
        <CreateProductForm />
        <section>
          <OffersList />
        </section>
      </main>
    </div>
  );
};
