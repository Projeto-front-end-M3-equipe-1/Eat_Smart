import { Link } from 'react-router-dom';
import { SearchForm } from './SearchForm';

export const Header = () => {
  return (
    <header>
      <img src='' alt='Logo'>
        Logo
      </img>
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
          <button type='button'>
            <img src='' alt='Icon-Cart'>
              Abrir modal carrinho de compras
            </img>
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
