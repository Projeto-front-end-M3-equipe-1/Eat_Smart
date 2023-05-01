import { CartProvider } from './providers/CartProvider';
import { UserCommerceProvider } from './providers/UserCommerceProvider';

import { RoutesMain } from './routes';

const App = () => {
  return (
    <UserCommerceProvider>
    <CartProvider>
      <RoutesMain />
    </CartProvider>
  </UserCommerceProvider>

  
  );
};

export default App;
