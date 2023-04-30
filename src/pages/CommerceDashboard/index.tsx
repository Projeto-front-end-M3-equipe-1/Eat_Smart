import { Header } from '../../components/Header';
import { CreateProductForm } from '../../components/Form/CreateProductForm';
import { ReservedProductsList } from '../../components/ReservedProductsList';
import { OfferList } from '../../components/OfferList';
import { useState } from 'react';
import { EditCommerceProfile } from '../../components/Form/EditCommerceProfile';
import { Footer } from '../../components/Footer';
import {
  StyledCommerceDashboard,
  StyledCommerceDashboardMainContainer,
  StyledCommerceDataContainer,
} from './style';
import logoCommerce from '../../assets/icons/lanches.svg';

export const CommerceDashboard = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] =
    useState<boolean>(false);
  const userNameCommerce = localStorage.getItem('@EatSmart:userNameCommerce');

  return (
    <StyledCommerceDashboard>
      <Header />
      <button onClick={() => setIsEditProfileModalOpen(true)}>
        Edit profile
      </button>
      {isEditProfileModalOpen ? (
        <EditCommerceProfile
          setIsEditProfileModalOpen={setIsEditProfileModalOpen}
        />
      ) : null}
      <StyledCommerceDataContainer>
        {/* Criar renderização dinâmica para logo */}
        <img src={logoCommerce} alt='icon'></img>
        <h2>{userNameCommerce}</h2>
      </StyledCommerceDataContainer>
      <StyledCommerceDashboardMainContainer>
        <section>
          <h2>Cadastrar nova Oferta</h2>
          <CreateProductForm />
        </section>
        <section>
          <h2>Ofertas cadastradas</h2>
          <OfferList />
        </section>
        <section>
          <h2>Reservas</h2>
          <ReservedProductsList />
        </section>
      </StyledCommerceDashboardMainContainer>
      <Footer />
    </StyledCommerceDashboard>
  );
};
