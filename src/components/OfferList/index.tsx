import { useContext } from 'react';
import { OfferCard } from './OfferCard';
import { CommerceContext} from '../../providers/CommerceProvider';


export const OfferList = () => {
  const userId = Number(localStorage.getItem('@USERIDCOMMERCE'));
  const { productsList } = useContext(CommerceContext);

  const newListByCommerce = productsList.filter((product) => product.userId === userId);

  return (
    <div>
      <h1>Ofertas Cadastradas</h1>
      <ul>
        {newListByCommerce.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </ul>
    </div>
  );
};
