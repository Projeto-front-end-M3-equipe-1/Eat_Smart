import { useContext } from 'react';
import { OfferCard } from './OfferCard';
import { CommerceContext } from '../../providers/CommerceProvider';

export const OffersList = () => {
  const userId = Number(localStorage.getItem('@USERIDCOMMERCE'));
  const { productsList } = useContext(CommerceContext);

  const newList = productsList.filter((product) => product.userId === userId);

  return (
    <div>
      <h1>Reservas</h1>
      <ul>
        {newList.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </ul>
    </div>
  );
};
