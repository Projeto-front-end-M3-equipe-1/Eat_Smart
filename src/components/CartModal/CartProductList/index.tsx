<<<<<<< HEAD
import { useContext } from 'react';
import { CartContext, IOffer } from '../../../providers/CartProvider';
import { CartProductCard } from './CartProductCard';
=======
import { useContext } from "react";
import { CartContext } from "../../../providers/CartProvider";
import { CartProductCard } from "./CartProductCard";
import { StyledCartProductList } from "./style";
import trash from "../../../assets/icons/lixoGrande.svg"
>>>>>>> 5e92851e94802cde87a7fa787cacf3cb863a7875

interface ISumDiscountProps {
  sumDiscount: number;
}

export const CartProductList = ({ sumDiscount }: ISumDiscountProps) => {
  const { listOffersCart, removeAllOffersFromCart } = useContext(CartContext);

<<<<<<< HEAD
  let newList: number[] = [];

  listOffersCart.forEach((offer) => {
    newList = newList.concat(
      offer.originalPrice - (offer.discount / 100) * offer.originalPrice
    );
  });
  const sum = newList.reduce((previousValue, currentItem) => {
    return previousValue + currentItem;
  }, 0);

=======
>>>>>>> 5e92851e94802cde87a7fa787cacf3cb863a7875
  return (
    <StyledCartProductList>
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
<<<<<<< HEAD
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
=======
        <p>Total:</p>
        <small>
          {sumDiscount.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </small>
      </div>
      <div>
        <img src={trash} alt="" />
        <button onClick={() => removeAllOffersFromCart()}>Remover todos os itens</button>
        <button type="button">Finalizar compra</button>
      </div>
    </StyledCartProductList>
>>>>>>> 5e92851e94802cde87a7fa787cacf3cb863a7875
  );
};
