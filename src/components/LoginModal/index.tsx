import { StyledTitleWhite } from '../../styles/typography';
import { StyledButton } from '../../styles/button';

export const LoginModal = () => {
  const handleClick = () => {
    const typeNav = localStorage.getItem('@handle:nav');
    console.log(typeNav);
  };

  return (
    <div>
      <StyledTitleWhite tag='h1' $fontSize='logo' textAlign='center'>
        Vocè é ?
      </StyledTitleWhite>
      di
      <StyledButton
        id='company'
        value='company'
        $buttonSize='default'
        $buttonStyle='buttonGreenLight'
        onClick={handleClick}
      >
        Empresa
      </StyledButton>
      <StyledButton
        id='user'
        value='user'
        $buttonSize='default'
        $buttonStyle='buttonGreenLight'
        onClick={handleClick}
      >
        Consumidor
      </StyledButton>
    </div>
  );
};
