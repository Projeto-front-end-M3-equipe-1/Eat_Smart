import { ProductCard } from './ProductCard';

export const ProductList = ({offers}) => {
  return (
    <ul>
      {offers.map((offer) => {
        return <ProductCard key={offer.id} offer={offer} />
      })}
    </ul>
  );
};
