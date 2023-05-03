import { CartProvider } from './providers/CartProvider';
import { RoutesMain } from './routes';
import { GlobalStyles } from './styles/global';
const App = () => {
  return (
    <>
      {'apagar'}
      <GlobalStyles />
      <CartProvider>
        <RoutesMain />
      </CartProvider>
    </>
  );
};

export default App;
