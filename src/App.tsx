import { UserDashboard } from './pages/UserDashboard';
import { UserProvider } from './providers/UserProvider';
import { RoutesMain } from './routes';

const App = () => {
  return (
    // <div>
    //   <UserProvider>
    //     <RoutesMain />
    //   </UserProvider>
    // </div>
    <UserDashboard/>
  );

};

export default App;