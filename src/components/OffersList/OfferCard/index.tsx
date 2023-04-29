import { useState } from 'react';
import { CommerceContext, IProduct } from '../../../providers/CommerceProvider';

export interface IOfferProductCard {
  offer: IProduct;
}

export const OfferCard = ({ offer }: IOfferProductCard) => {
  const userNameCommerce = localStorage.getItem('@USERNAMECOMMERCE');
  const newPrice = offer.originalPrice * (offer.discount / 100);

  const {updateProduct} = useState(CommerceContext);

  return (
    <li>
      <img src='Logo da sacola ou prato' alt=''></img>
      <p>{offer.title}</p>
      <small>{offer.quantity}</small>
      <p>R$ {newPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
      <p>{userNameCommerce};</p>
      <button onClick={() => updateProduct(offer.id)}>
        Edit
      </button>
      <button type='button'>Excluir sacola surpresa</button>
    </li>
  );
};
