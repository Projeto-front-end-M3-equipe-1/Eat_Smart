import { useContext } from "react";
import { CartContext, IOffer } from "../../../../providers/CartProvider";

interface IOfferCartProps {
  currentOffer: IOffer;
}

export const CartProductCard = ({currentOffer}: IOfferCartProps) => {
  const { removeItemFromCart } = useContext(CartContext);
  return (
    <li>
      <h1>{currentOffer.company}</h1>
      <p>{currentOffer.title}</p>
      <small>{currentOffer.quantity}</small>
     
        <button onClick={() => removeItemFromCart(currentOffer.id)} type='button'>Excluir produto</button>
      
    </li>
  );
};
