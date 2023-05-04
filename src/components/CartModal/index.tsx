import styled from 'styled-components';
import backgroundImage from '../../assets/images/backgroundCart.svg';
import { AnimationFadeIn } from '../../styles/animations';
import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider';
import { CartProductList } from './CartProductList';
import { StyledCartModalBox } from './style';

export const CartModal = () => {
  const { listOffersCart, setIsCartModalOpen } = useContext(CartContext);

  let discountList: number[] = [];

  listOffersCart.forEach((offer) => {
    discountList = discountList.concat(
      offer.originalPrice - (offer.discount / 100) * offer.originalPrice
    );
  });
  const sumDiscount: number = discountList.reduce(
    (previousValue, currentItem) => {
      return previousValue + currentItem;
    },
    0
  );

  const sumOldPrice: number = listOffersCart.reduce(
    (previousValue, currentItem) => {
      return previousValue + currentItem.originalPrice;
    },
    0
  );

  const totalDiscount: number = sumOldPrice - sumDiscount;
};
