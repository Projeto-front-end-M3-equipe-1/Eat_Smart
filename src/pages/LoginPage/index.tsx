import { Footer } from "../../components/Footer";
import { LoginForm } from "../../components/Form/LoginForm";
import { Header } from "../../components/Header";

export const LoginPage = () => {
  return (
    <>
      <Header />
      <main>
        <div>
          <p>Fatos, coisas bonitinhas</p>
          <img src="" alt="">
            Imagem
          </img>
        </div>
        <LoginForm />
      </main>
      <Footer />
    </>
  );
};
