import { UserDashboard } from './pages/UserDashboard';
import { CartProvider } from './providers/CartProvider';
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
    <CartProvider>
      <UserDashboard/>
    </CartProvider>
    </>
  );

};

export default App;