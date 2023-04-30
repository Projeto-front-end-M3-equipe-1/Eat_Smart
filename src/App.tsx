
import { UserCommerceProvider } from './providers/UserCommerceProvider';

import { RoutesMain } from './routes';

const App = () => {
  return (
    <div>
      <UserCommerceProvider>
        <RoutesMain />
      </UserCommerceProvider>
    </div>
  );
<<<<<<< HEAD

=======
    <div>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
      <GlobalStyles />
    </div>

  );
>>>>>>> 90f74cc7573b79620535c354a0b796905b6ff6f4
};

export default App;
