import { CreateProductForm } from '../../components/Form/CreateProductForm';
import { Header } from '../../components/Header';
import { OfferList } from '../../components/OfferList';
import { ReservedProductsList } from '../../components/ReservedProductsList';

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
