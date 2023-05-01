import { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import { CartProductList } from "./CartProductList";

export const CartModal = () => {
  const { listOffersCart, setIsCartModalOpen } = useContext(CartContext);
  return (
    <div role="dialog">
      <header>
        <h1>Carrinho de compras</h1>
        <button onClick={() => setIsCartModalOpen(false)} type="button">
          Fechar modal carrinho de compras
        </button>
      </header>
      <div>
        {listOffersCart.length != 0 ? (
          <CartProductList />
        ) : (
          <>
            <h1>Seu carrinho está vazio</h1>
            <h2>Adicione ofertas ao carrinho</h2>
          </>
        )}
      </div>
    </div>
  );
};
