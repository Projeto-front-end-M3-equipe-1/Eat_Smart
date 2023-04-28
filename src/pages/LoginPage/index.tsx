import { Header } from '../../components/Header';
import { LoginForm } from '../../components/Form/LoginForm';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <p>Fatos, coisas bonitinhas</p>
          <img src='' alt=''>
            Imagem
          </img>
        </section>
        <LoginForm />
        <div>
          <p>Ainda não é cadastrado?</p>
          <button>
            <Link to='' />
            Cadastre-se
          </button>
        </div>
      </main>
    </>
  );
};
