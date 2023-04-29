import { useContext } from 'react';
import { CommerceContext } from '../../providers/CommerceProvider';
import { OfferCard } from './OfferCard';

export const OfferList = () => {
  const userId = Number(localStorage.getItem('@USERIDCOMMERCE'));
  const { productsList, removeAllOffers } = useContext(CommerceContext);

  const newListByCommerce = productsList.filter(
    (product) => product.userId === userId
  );

  const total = newListByCommerce
    .reduce((previousValue, currentValue) => {
      return (
        previousValue +
        currentValue.originalPrice -
        (currentValue.discount / 100) * currentValue.originalPrice
      );
    }, 0)
    .toLocaleString('pt-br', { minimumFractionDigits: 2 });

  return (
    <div>
      <h1>Ofertas Cadastradas</h1>
      <ul>
        {newListByCommerce.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </ul>
      <div>
        <p>Total</p>
        <small>R$ {total}</small>
      </div>
      <button onClick={removeAllOffers}>Remover ofertas</button>
    </div>
  );
};
