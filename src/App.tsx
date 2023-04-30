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

};

export default App;
