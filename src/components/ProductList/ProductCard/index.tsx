export const ProductCard = ({offer}) => {
  const newPrice =
    offer.originalPrice - (offer.discount / 100) * offer.originalPrice;
    
  return (
    <li>
      <div>
        <img src="" alt="" />
        <h3>{offer.quantity}</h3>
        <h4>{offer.company}</h4>
      </div>
      <div>
        <div>
          <h3>Oferta: {offer.title}</h3>
          <p>Retirar hoje até às 22:00h</p>
        </div>
        <div>
          <h4>* 4.2</h4>
          <h4>{newPrice}</h4>
        </div>
      </div>
    </li>
  );
};
