import { SearchForm } from './SearchForm';
import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';
import { StyledUserPageHeader } from './style';
import { StyledTitleGreen } from '../../styles/typography';
import { UserContext } from '../../providers/UserContext/UserContext';

export const Header = ({ setIsEditProfileModalOpen }) => {
  const user = localStorage.getItem('@EatSmart:userName');
  const company = localStorage.getItem('@EatSmart:userNameCommerce');
  const userName = user && user[0].toUpperCase() + user.substring(1);
  const companyName =
    company && company[0].toUpperCase() + company.substring(1);

  const { setIsCartModalOpen } = useContext(CartContext);

  const { logout, setIsEditUserProfileModalOpen } = useContext(UserContext);


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
              <button onClick={() => setIsEditUserProfileModalOpen(true)} type='button'>
                <i className='fa-solid fa-gears'></i>
              </button>
            </nav>
          </div>
          <section>
            <SearchForm />
            console.log(apagar)
          </section>
          <section>
            <h2>Olá, {userName}</h2>
            <h1></h1>
          </section>
        </li>
      </StyledUserPageHeader>
    );
  }
  if (company && company) {
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
              <button type='button'>
                <i className='fa-solid fa-right-from-bracket'></i>
              </button>
              <button
                type='button'
                onClick={() => setIsEditProfileModalOpen(true)}
              >
                <i className='fa-solid fa-gears'></i>
              </button>
            </nav>
          </div>
          <section>
            <SearchForm />
          </section>
          <section>
            <h1></h1>
            <h2>{companyName}</h2>
          </section>
        </li>
      </StyledUserPageHeader>
    );
  }
  return null;
};
