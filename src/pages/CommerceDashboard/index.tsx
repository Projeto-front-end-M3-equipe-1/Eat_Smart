import pubIcon from '../../assets/icons/bares.svg';
import coffeeIcon from '../../assets/icons/cafeteria.svg';
import snacksIcon from '../../assets/icons/lanches.svg';
import marketIcon from '../../assets/icons/mercado.svg';
import bakeryIcon from '../../assets/icons/padaria.svg';
import restaurantIcon from '../../assets/icons/restaurantes.svg';
import {
  StyledCommerceDashboard,
  StyledCommerceDashboardMainContainer,
  StyledCommerceDataContainer,
  StyledCommerceLogoContainer,
  StyledFooterCommerce,
  StyledHeaderContainer,
  StyledMainSections,
} from './style';
import { Header } from '../../components/Header';
import { CreateProductForm } from '../../components/Form/CreateProductForm';
import { ReservedProductsList } from '../../components/ReservedProductsList';
import { OfferList } from '../../components/OfferList';
import { useState } from 'react';
import { EditCommerceProfile } from '../../components/Form/EditCommerceProfile';
import { Footer } from '../../components/Footer';
import { FooterMobileCommerce } from '../../components/Footer/FooterMobileCommerce';

export const CommerceDashboard = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const userNameCommerce = localStorage.getItem('@EatSmart:userNameCommerce');

  const closeProfileModalWrapper = () => {
    setIsEditProfileModalOpen(false);
  };

  const foodCategory = localStorage
    .getItem('@EatSmart:userCommerceFoodCategory')
    ?.toUpperCase();

  return (
    <StyledCommerceDashboard>
      <StyledHeaderContainer>
        <Header setIsEditProfileModalOpen={setIsEditProfileModalOpen}/>
        {/* <button onClick={() => setIsEditProfileModalOpen(true)}>
          Edit profile
        </button> */}
      </StyledHeaderContainer>
      {isEditProfileModalOpen ? (
        <EditCommerceProfile closeProfileModal={closeProfileModalWrapper} />
      ) : null}

      <StyledCommerceDataContainer>
        <StyledCommerceLogoContainer>
          {foodCategory === 'bares'.toUpperCase() ? (
            <img src={pubIcon} alt='icon'></img>
          ) : null}
          {foodCategory === 'cafeteria' ? (
            <img src={coffeeIcon} alt='icon'></img>
          ) : null}
          {foodCategory === 'lanches'.toUpperCase() ? (
            <img src={snacksIcon} alt='icon'></img>
          ) : null}
          {foodCategory === 'mercado'.toUpperCase() ? (
            <img src={marketIcon} alt='icon'></img>
          ) : null}
          {foodCategory === 'padaria'.toUpperCase() ? (
            <img src={bakeryIcon} alt='icon'></img>
          ) : null}
          {foodCategory === 'restaurante'.toUpperCase() ? (
            <img src={restaurantIcon} alt='icon'></img>
          ) : null}

          <h2>{userNameCommerce}</h2>
        </StyledCommerceLogoContainer>
      </StyledCommerceDataContainer>
      <StyledCommerceDashboardMainContainer>
        <StyledMainSections>
          <section className='section_createOffer'>
            <CreateProductForm />
          </section>
          <section className='section_reservations'>
            <ReservedProductsList />
          </section>
          <section className='section_registeredOffers'>
            <OfferList />
          </section>
        </StyledMainSections>
      </StyledCommerceDashboardMainContainer>
      <StyledFooterCommerce>
        <FooterMobileCommerce />
        <Footer />
      </StyledFooterCommerce>
    </StyledCommerceDashboard>
  );
};
