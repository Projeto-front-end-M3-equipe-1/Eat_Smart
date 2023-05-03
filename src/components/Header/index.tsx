import { Link } from 'react-router-dom';
import { SearchForm } from './SearchForm';
import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';
import { StyledUserPageHeader } from './style';
import { StyledTitleGreen } from '../../styles/typography';

export const Header = () => {
  const { setIsCartModalOpen } = useContext(CartContext);

  return (
    <StyledUserPageHeader>
      <StyledTitleGreen tag='h1' $fontSize='logo' textAlign='center'>
        Eat<span>Smart</span>
      </StyledTitleGreen>
      <nav>
        <div>
          <button type='button'>
            {' '}
            <Link to='' />
            Home
          </button>
        </div>
        <div>
          <button>Login</button>
          <button>Cadastre-se</button>
        </div>
        {/*SearchForm e button de carrinho será renderizado apenas na commerceDashboard */}
        <SearchForm />
        <div>
          <button onClick={() => setIsCartModalOpen(true)} type='button'>
            <img
              src='Abrir modal carrinho de compras'
              alt='Abrir modal carrinho de compras'
            ></img>
          </button>
          <div>
            <button type='button'>Logout</button>
            <button type='button'>Abrir modal para editar perfil</button>
          </div>
        </div>
      </nav>
    </StyledUserPageHeader>
  );
};
