import { Header } from '../../components/Header';
import { CreateProductForm } from '../../components/Form/CreateProductForm';
import { ReservedProductsList } from '../../components/ReservedProductsList';
import { OfferList } from '../../components/OfferList';

export const CommerceDashboard = () => {
  return (
    <div>
      <Header />
      <main>
        <CreateProductForm />
        <section>
          <ReservedProductsList />
        </section>
        <section>
          <OfferList />
        </section>
      </main>
    </div>
  );
};
