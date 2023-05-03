import { CartProvider } from './providers/CartProvider';
import { RoutesMain } from './routes';
import { GlobalStyles } from './styles/global';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <CartProvider>
        <RoutesMain />
      </CartProvider>
    </>
  );
};

export default App;
