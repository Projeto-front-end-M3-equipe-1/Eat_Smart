import { UserProvider } from './providers/UserProvider';
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
