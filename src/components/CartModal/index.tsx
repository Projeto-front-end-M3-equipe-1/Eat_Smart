import { CartProductList } from "./CartProductList";

export const CartModal = () => {
  return (
    <div role="dialog">
      <header>
        <h1>Carrinho de compras</h1>
        <button type="button">Fechar modal carrinho de compras</button>
      </header>
      <div>
        <CartProductList />
      </div>
    </div>
  );
};
