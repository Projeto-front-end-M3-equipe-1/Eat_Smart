import { ProductCard } from './ProductCard';
import { StyledProductList } from './style';

export const ProductList = ({offers}) => {
  return (
    <StyledProductList>
      {offers.map((offer) => {
        return <ProductCard key={offer.id} offer={offer} />
      })}
    </StyledProductList>
  );
};
