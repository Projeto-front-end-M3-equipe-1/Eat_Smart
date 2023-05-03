import { CartProvider } from './providers/CartProvider';
import { RoutesMain } from './routes';

const App = () => {
  return (
    <CartProvider>
      <RoutesMain />
    </CartProvider>
  );
};

export default App;
