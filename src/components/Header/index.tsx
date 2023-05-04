import pubIcon from '../../assets/icons/bares.svg';
import coffeeIcon from '../../assets/icons/cafeteria.svg';
import snacksIcon from '../../assets/icons/lanches.svg';
import marketIcon from '../../assets/icons/mercado.svg';
import bakeryIcon from '../../assets/icons/padaria.svg';
import restaurantIcon from '../../assets/icons/restaurantes.svg';

import { SearchForm } from './SearchForm';
import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';
import { StyledCompanyPageHeader, StyledUserPageHeader } from './style';
import { StyledTitleGreen } from '../../styles/typography';
import logoCategory from '../../assets/icons/lanches.svg';
import { UserContext } from '../../providers/UserContext/UserContext';

interface IOpenModal {
  setIsEditProfileModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ setIsEditProfileModalOpen }: IOpenModal) => {
  const user = localStorage.getItem('@EatSmart:userName');
  const company = localStorage.getItem('@EatSmart:userNameCommerce');
  const userName = user && user[0].toUpperCase() + user.substring(1);
  const companyName =
    company && company[0].toUpperCase() + company.substring(1);
  const foodCategory = localStorage
    .getItem('@EatSmart:userCommerceFoodCategory')
    ?.toUpperCase();

  const { setIsCartModalOpen } = useContext(CartContext);
  const {
    logout,
    setIsEditUserProfileModalOpen,
    user: userState,
  } = useContext(UserContext);

  if (user && user) {
    return (
      <StyledUserPageHeader>
        <StyledTitleGreen
          className='container__reverse'
          tag='h1'
          $fontSize='logo'
          textAlign='center'
        >
          Eat<span>Smart</span>
        </StyledTitleGreen>
        <li>
          <div>
            <StyledTitleGreen
              className='container__mobile'
              tag='h1'
              $fontSize='logo'
              textAlign='center'
            >
              Eat<span>Smart</span>
            </StyledTitleGreen>
            <nav>
              <button onClick={() => setIsCartModalOpen(true)} type='button'>
                <i className='fa-solid fa-cart-shopping'></i>
              </button>
              <button onClick={() => logout()} type='button'>
                <i className='fa-solid fa-right-from-bracket'></i>
              </button>
              <button
                onClick={() => setIsEditUserProfileModalOpen(true)}
                type='button'
              >
                <i className='fa-solid fa-gears'></i>
              </button>
            </nav>
          </div>
          <section>
            <SearchForm />
          </section>
         
            { <section>
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

          <h2>Olá, {userName}</h2>
          </section>}
        </li>
      </StyledUserPageHeader>
    );
  }
  if (company && company) {
    return (
      <StyledCompanyPageHeader>
        <StyledTitleGreen
          className='container__reverse'
          tag='h1'
          $fontSize='logo'
          textAlign='center'
        >
          Eat<span>Smart</span>
        </StyledTitleGreen>
        <li>
          <div>
            <StyledTitleGreen
              className='container__mobile'
              tag='h1'
              $fontSize='logo'
              textAlign='center'
            >
              Eat<span>Smart</span>
            </StyledTitleGreen>
            <nav>
              <button onClick={() => logout()} type='button'>
                <i className='fa-solid fa-right-from-bracket'></i>
              </button>

              <button
                type='button'
                onClick={() => setIsEditProfileModalOpen(true)}
              >
                <i className='fa-solid fa-gears'></i>
              </button>
              <i className='fa-solid fa-gears'></i>
            </nav>
          </div>
          <section>
            <h2>
              <img src={logoCategory} alt='' />
              {companyName}
            </h2>
          </section>
        </li>
      </StyledCompanyPageHeader>
    );
  }
  return null;
};
