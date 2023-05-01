
import { UserCommerceProvider } from './providers/UserCommerceProvider';

import { RoutesMain } from './routes';
import { GlobalStyles } from './styles/global';

const App = () => {
  return (
    <div>
      <UserCommerceProvider>
        <RoutesMain />
      </UserCommerceProvider>
    </div>
  );
    <div>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
      <GlobalStyles />
    </div>

  
};

export default App;
