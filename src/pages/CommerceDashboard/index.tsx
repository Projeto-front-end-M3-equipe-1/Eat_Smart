import { CreateProductForm } from '../../components/Form/CreateProductForm';
import { Header } from '../../components/Header';

export const CommerceDashboard = () => {
  return (
    <div>
      <Header />
      <main>
        <CreateProductForm />
        <section>
          <h1>Sacola surpresa cadastrada</h1>
          <img src='' alt='product-bag'>
            Logo da sacola ou prato
          </img>
          <p>title</p>
          <small>quantity</small>
          <p>R$ new price</p>
          <button type='button'>Alterar compra</button>
          <button type='button'>Excluir sacola surpresa</button>
        </section>
      </main>
    </div>
  );
};
