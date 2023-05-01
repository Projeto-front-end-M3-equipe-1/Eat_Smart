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
  );
    <div>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
      <GlobalStyles />
    </div>

  
=======
      </CartProvider>
    </UserCommerceProvider>
  );
>>>>>>> 50d8108019a112fcfb88b955c46db58f70c74ab1
};

export default App;
