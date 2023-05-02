import { StyledProductCard } from "./style";
import backGroundCart from "../../../assets/images/image3.svg"
import heart from "../../../assets/icons/coração.svg"
import { useContext } from "react";
import { CartContext, IOffer } from "../../../providers/CartProvider";
import { StyledCartSale } from "../../Styles/containerStyles";

interface IOffersCartProps {
  offer: IOffer;
}


export const ProductCard = ({ offer }: IOffersCartProps) => {
  const { addItemToCart } = useContext(CartContext);
  const newPrice = offer.originalPrice - (offer.discount / 100) * offer.originalPrice;

  return (
    <StyledCartSale>
        <div>
          <div className='img'>
            <span>
              <p className='info'>{offer.quantity} Sacolas</p>
              <i className='fa-solid fa-heart'></i>
            </span>
            <h3 className='name'>{offer.company}</h3>
          </div>
          <h4>Paragrafo</h4>
          <h5>Horario</h5>
          <span>
            <p>
              <i className='fa-solid fa-star'></i>
              <small>4.2</small>
            </p>
            <p>{newPrice.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}</p>
          </span>
        </div>
      </StyledCartSale>
    
  );
};
