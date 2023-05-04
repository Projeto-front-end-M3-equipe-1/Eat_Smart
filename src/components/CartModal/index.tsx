
import { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import { CartProductList } from "./CartProductList";
import { StyledCartModalBox } from "./style";

export const CartModal = () => {
  const { listOffersCart, setIsCartModalOpen } = useContext(CartContext);

  let discountList: number[] = [];

  listOffersCart.forEach((offer) => {
    discountList = discountList.concat(
      offer.originalPrice - (offer.discount / 100) * offer.originalPrice
    );
  });
  const sumDiscount: number = discountList.reduce((previousValue, currentItem) => {
    return previousValue + currentItem;
  }, 0);

  const sumOldPrice: number = listOffersCart.reduce((previousValue, currentItem) => {
    return previousValue + currentItem.originalPrice;
  }, 0);

  const totalDiscount: number = sumOldPrice - sumDiscount;

  return (
    <>
      <StyledCartModalBox>
        <div role="dialog">
          <header>
            <h1>Carrinho de compras</h1>
            <button onClick={() => setIsCartModalOpen(false)} type="button">
              X
            </button>
          </header>
          <section>
            <div>
              <p>Economizou</p>
              <h1>
                {totalDiscount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h1>
            </div>
          </section>
        </div>
        <div className="cartList__container">
          <h1>Sacolas</h1>
          {listOffersCart.length != 0 ? (
            <CartProductList sumDiscount={sumDiscount} />
          ) : (
            <div>
              <h2>Seu carrinho está vazio</h2>
              <h3>Adicione ofertas ao carrinho</h3>
            </div>
          )}
        </div>
      </StyledCartModalBox>
    </>
  );
};

