import { Link } from 'react-router-dom';
import { SearchForm } from './SearchForm';
import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';

export const Header = () => {
  const { setIsCartModalOpen } = useContext(CartContext);

  return (
    <header>
      <img src='Logo' alt='Logo'></img>
      {/*Será renderizado apenas na mainDashboard */}
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
          <button onClick={() => setIsCartModalOpen(true)}  type='button'>
            <img src='Abrir modal carrinho de compras' alt='Abrir modal carrinho de compras'></img>
          </button>
          <div>
            <button type='button'>Logout</button>
            <button type='button'>Abrir modal para editar perfil</button>
          </div>
        </div>
      </nav>
    </header>
  );
};
