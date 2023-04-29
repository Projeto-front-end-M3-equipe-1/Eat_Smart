import { Header } from '../../components/Header';
import { CreateProductForm } from '../../components/Form/CreateProductForm';
import { ReservedProductsList } from '../../components/ReservedProductsList';
import { OfferList } from '../../components/OfferList';
import { useState } from 'react';
import { EditCommerceProfile } from '../../components/Form/EditCommerceProfile';

export const CommerceDashboard = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  return (
    <div>
      <Header />
      <button onClick={() => setIsEditProfileModalOpen(true)}>Edit profile</button>
      {isEditProfileModalOpen ? (
        <EditCommerceProfile
          setIsEditProfileModalOpen={setIsEditProfileModalOpen}
        />
      ) : null}
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
