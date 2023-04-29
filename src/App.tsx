import { UserProvider } from './providers/UserCommerceProvider';
import { RoutesMain } from './routes';

const App = () => {
  return (
    <div>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </div>
  );

};

export default App;