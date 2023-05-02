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
};
