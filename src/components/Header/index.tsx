import { SearchForm } from './SearchForm';
import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';
import { StyledUserPageHeader } from './style';
import { StyledTitleGreen } from '../../styles/typography';

export const Header = () => {
  const userName = localStorage.getItem('@EatSmart:userName');
  const name = userName && userName[0].toUpperCase() + userName.substring(1);
  const { setIsCartModalOpen } = useContext(CartContext);

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
            <button type='button'>
              <i className='fa-solid fa-right-from-bracket'></i>
            </button>
            <button type='button'>
              <i className='fa-solid fa-gears'></i>
            </button>
          </nav>
        </div>
        <section>
          <SearchForm />
        </section>
        <section>
          <h2>Olá, {name}</h2>
        </section>
      </li>
    </StyledUserPageHeader>
  );
};
