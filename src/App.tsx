import { CartProvider } from "./providers/CartProvider";
import { UserCommerceProvider } from "./providers/UserCommerceProvider";

import { RoutesMain } from "./routes";

const App = () => {
  return (
    <div>
      <UserCommerceProvider>
        <CartProvider>
          <RoutesMain />
        </CartProvider>
      </UserCommerceProvider>
    </div>
  );
};

export default App;
