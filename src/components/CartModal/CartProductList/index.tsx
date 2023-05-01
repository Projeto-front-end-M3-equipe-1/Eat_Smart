import { useContext } from 'react';
import { CartContext, IOffer } from '../../../providers/CartProvider';
import { CartProductCard } from './CartProductCard';

export const CartProductList = () => {
  const { listOffersCart, removeAllOffersFromCart } = useContext(CartContext);

  let newList: number[] = [];

  listOffersCart.forEach((offer) => {
    newList = newList.concat(
      offer.originalPrice - (offer.discount / 100) * offer.originalPrice
    );
  });
  const sum = newList.reduce((previousValue, currentItem) => {
    return previousValue + currentItem;
  }, 0);

  return (
    <div>
      <ul>
        {listOffersCart.map((currentOffer) => {
          return (
            <CartProductCard
              key={currentOffer.id}
              currentOffer={currentOffer}
            />
          );
        })}
      </ul>

      <div>
        <p>
          <strong>
            Total:{' '}
            {sum.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>
        </p>
      </div>

      <button onClick={() => removeAllOffersFromCart()}>Remover todos</button>

      <button type='button'>Finalizar compra</button>
    </div>
  );
};
