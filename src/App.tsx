import { CartProvider } from './providers/CartProvider';
import { UserCommerceProvider } from './providers/UserCommerceProvider';

import { RoutesMain } from './routes';

const App = () => {
  return (
    <UserCommerceProvider>
      <CartProvider>
        <RoutesMain />
<<<<<<< HEAD
      </UserCommerceProvider>
    </div>
=======
      </CartProvider>
    </UserCommerceProvider>
>>>>>>> 3e57697c78a06b7999227fbe36c679df10bfa72c
  );
};

export default App;
