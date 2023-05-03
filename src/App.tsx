import { CartProvider } from './providers/CartProvider';
import { RoutesMain } from './routes';
import { GlobalStyles } from './styles/global';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ToastContainer position='top-right' theme='light' limit={1} />
      <CartProvider>
        <RoutesMain />
      </CartProvider>
    </>
  );
};

export default App;
