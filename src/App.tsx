import { UserDashboard } from './pages/UserDashboard';
import { UserProvider } from './providers/UserProvider';
import { RoutesMain } from './routes';
import { GlobalStyles } from './styles/global';

const App = () => {
  return (
    // <div>
    //   <UserProvider>
    //     <RoutesMain />
    //   </UserProvider>
    // </div>
    <>
    <GlobalStyles/>
    <UserDashboard/>
    </>
  );

};

export default App;