import { StyledTitleWhite } from '../../styles/typography';
import { StyledButton } from '../../styles/button';
import { useNavigate } from 'react-router-dom';
import { StyledCartModalBox } from './style';

type TNave = {
  typeNav: string;
};

export const LoginModal = ({ typeNav }: TNave) => {
  const navigate = useNavigate();

  const handleClick = (type: string) => {
    if (type === 'user' && typeNav === 'register') {
      console.log(type);
      console.log(typeNav);
      navigate('/register');
    }

    if (type === 'user' && typeNav === 'login') {
      console.log(type);
      console.log(typeNav);
      navigate('/login');
    }

    if (type === 'company' && typeNav === 'register') {
      console.log(type);
      console.log(typeNav);
      navigate('/signup');
    }

    if (type === 'company' && typeNav === 'login') {
      console.log(type);
      console.log(typeNav);
      navigate('/signin');
    }
  };

  return (
    <StyledCartModalBox>
      <div>
        <StyledTitleWhite tag='h1' $fontSize='logo' textAlign='center'>
          Você é?
        </StyledTitleWhite>
        <span>
          <StyledButton
            id='company'
            value='company'
            $buttonSize='default'
            $buttonStyle='buttonGreenDark'
            onClick={() => handleClick('company')}
          >
            Empresa
          </StyledButton>
          <StyledButton
            id='user'
            value='user'
            $buttonSize='default'
            $buttonStyle='buttonGreenDark'
            onClick={() => handleClick('user')}
          >
            Consumidor
          </StyledButton>
        </span>
      </div>
    </StyledCartModalBox>
  );
};
