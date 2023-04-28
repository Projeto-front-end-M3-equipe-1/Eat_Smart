import { CartProductCard } from './CartProductCard';

export const CartProductList = () => {
  return (
    <div>
      <ul>
        <CartProductCard />
      </ul>

      <div>
        <p>
          <strong>Total</strong>
        </p>
      </div>

      <button>Remover todos</button>

      <button type='button'>Finalizar compra</button>
    </div>
  );
};
