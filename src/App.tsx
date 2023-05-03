import { CartProvider } from './providers/CartProvider';
import { RoutesMain } from './routes';
import { GlobalStyles } from './styles/global';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
<<<<<<< HEAD
    <UserCommerceProvider>
    <CartProvider>
      <RoutesMain />
    </CartProvider>
  </UserCommerceProvider>

  
=======
    <>
      <GlobalStyles />
      <ToastContainer position='top-right' theme='light' limit={1} />
      <CartProvider>
        <RoutesMain />
      </CartProvider>
    </>
>>>>>>> d235a65c4032b9bf16b198a37dfb143b83946d24
  );
};

export default App;
