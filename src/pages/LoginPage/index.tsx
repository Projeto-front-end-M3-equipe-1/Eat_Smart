<<<<<<< HEAD
import { LoginForm } from '../../components/Form/LoginForm';
import { Link } from 'react-router-dom';
import { StyledButton  } from '../../styles/button';
import { StyleDivContainer, DivContainer2 } from '../LoginPage/style';
import { StyledTitleGreen } from '../../styles/typography';

export const LoginPage = () => {
  return (
    
    
     <StyleDivContainer>
        <section>
        <StyledTitleGreen tag='h1' $fontSize='logo' textAlign='center'>
        Eat<span>Smart</span>
        </StyledTitleGreen>
          <img src="src\assets\images\Rectangle 3.svg" alt=''></img>
        </section>
        
        <DivContainer2>
          <StyledButton $buttonSize='default' $buttonStyle='buttonGreenLight'>Home</StyledButton>
          <LoginForm />
            <p>Ainda não é cadastrado?</p>
            <StyledButton $buttonSize='default' $buttonStyle='buttonGreenLight'>
              <Link to='' />
              Cadastre-se
            </StyledButton>
        </DivContainer2>
      </StyleDivContainer>
    
  );
=======
import { LoginForm } from "../../components/Form/LoginForm";
import { StyledButton } from "../../styles/button";
import { useNavigate } from "react-router-dom";
import {
  StyledColorBackground,
  StyledFormLoginCompany,
  StyledFormLoginUser,
  StyledLoginPageHeaderCompany,
  StyledLoginPageHeaderUser,
} from "./style";
import { StyledTitleGreen } from "../../styles/typography";

export const LoginPage = () => {
  const typeofRoute = localStorage.getItem("@handle:typUser");
  const typeNav = localStorage.getItem("@handle:nav");
  const navigate = useNavigate();
  const handleClick = () => {
    if (typeofRoute === "userLogin" && typeNav === "login") {
      localStorage.setItem("@handle:typUser", "userRegister");
      localStorage.setItem("@handle:nav", "register");
      navigate("/register");
    }
    if (typeofRoute === "companyLogin" && typeNav === "login") {
      localStorage.setItem("@handle:typUser", "companyRegister");
      localStorage.setItem("@handle:nav", "register");
      navigate("/signup");
    }
  };
  if (typeofRoute === "userLogin") {
    return (
      <StyledColorBackground>
        <StyledFormLoginUser>
          <StyledLoginPageHeaderUser>
            <StyledTitleGreen tag="h1" $fontSize="logo" textAlign="center">
              Eat<span>Smart</span>
            </StyledTitleGreen>
            <StyledButton
              $buttonSize="default"
              $buttonStyle="buttonGreenLight"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </StyledButton>
          </StyledLoginPageHeaderUser>
          <section className="container__principal">
            <section>
              <LoginForm />
              <div className="container_nav">
                <StyledTitleGreen tag="h1" $fontSize="small">
                  Ainda não é cadastrado?
                </StyledTitleGreen>
                <StyledButton
                  $buttonSize="default"
                  $buttonStyle="buttonGreenLight"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Cadastre-se
                </StyledButton>
              </div>
            </section>
            <section className="container__desktop"></section>
          </section>
        </StyledFormLoginUser>
      </StyledColorBackground>
    );
  }
  if (typeofRoute === "companyLogin") {
    return (
      <StyledColorBackground>
        <StyledFormLoginCompany>
          <StyledLoginPageHeaderCompany>
            <StyledTitleGreen tag="h1" $fontSize="logo" textAlign="center">
              Eat<span>Smart</span>
            </StyledTitleGreen>
            <StyledButton
              $buttonSize="default"
              $buttonStyle="buttonGreenLight"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </StyledButton>
          </StyledLoginPageHeaderCompany>
          <section className="container__principal">
            <section>
              <LoginForm />
              <div className="container_nav">
                <StyledTitleGreen tag="h1" $fontSize="small">
                  Ainda não é cadastrado?
                </StyledTitleGreen>
                <StyledButton
                  $buttonSize="default"
                  $buttonStyle="buttonGreenLight"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Cadastre-se
                </StyledButton>
              </div>
            </section>
            <section className="container__desktop">
              <StyledTitleGreen tag="h1" $fontSize="logo" textAlign="center">
                Bom para os <br />
                <span>Negócios</span>,<br /> Melhor ainda <br /> para o<span> Planeta</span>
              </StyledTitleGreen>
            </section>
          </section>
        </StyledFormLoginCompany>
      </StyledColorBackground>
    );
  }
  return null;
>>>>>>> d235a65c4032b9bf16b198a37dfb143b83946d24
};
