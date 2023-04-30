import { useContext, useState } from 'react';
import { CommerceContext, IProduct } from '../../../providers/CommerceProvider';
import { EditOfferModal } from '../../Form/EditOfferModal';

export interface IOfferProductCard {
  offer: IProduct;
}

export const OfferCard = ({ offer }: IOfferProductCard) => {
  const userNameCommerce = localStorage.getItem('@USERNAMECOMMERCE');
  const newPrice =
    (offer.originalPrice - (offer.discount / 100) * offer.originalPrice);

  const { removeOfferFromOfferList } = useContext(CommerceContext);

  const [isEditOfferModalOpen, setIsEditOfferModalOpen] = useState(false);

  return (
    <li>
      <img src='Logo da sacola ou prato' alt=''></img>
      <p>{offer.title}</p>
      <small>{offer.quantity}</small>
      <p>R$ {newPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
      <p>{userNameCommerce}</p>

      <button onClick={() => setIsEditOfferModalOpen(true)}>Edit</button>
      {isEditOfferModalOpen ? (
        <EditOfferModal
          offer={offer}
          setIsEditOfferModalOpen={setIsEditOfferModalOpen}
        />
      ) : null}

      <button onClick={() => removeOfferFromOfferList(offer.id)}>Remove</button>
    </li>
  );
};