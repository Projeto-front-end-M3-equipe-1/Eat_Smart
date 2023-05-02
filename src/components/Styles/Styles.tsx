import { StyledButton } from '../../styles/button';
import { StyledContainer, StyledCartSale } from './containerStyles';
import {
  StyledFormUserDark,
  StyledFormUserLight,
  StyledInputContainerDark,
  StyledInputContainerLight,
} from '../../styles/form';
import {
  StyledParagraph,
  StyledTitleGreen,
  StyledTitleWhite,
} from './../../styles/typography';

const Styles = () => {
  return (
    <StyledContainer>
      <section>
        <StyledButton $buttonSize='default' $buttonStyle='buttonGreenDark'>
          Button Color 1
        </StyledButton>
        <StyledButton $buttonSize='default' $buttonStyle='buttonGreenLight'>
          Button Color 2
        </StyledButton>
        <StyledButton $buttonSize='default' $buttonStyle='buttonOrange'>
          Button Color 3
        </StyledButton>
        <StyledButton $buttonSize='default' $buttonStyle='buttonGreenDark'>
          Button Size 1
        </StyledButton>
        <StyledButton $buttonSize='medium' $buttonStyle='buttonGreenDark'>
          Button Size 2
        </StyledButton>
      </section>
      <section>
        <StyledFormUserDark>
          <StyledTitleGreen tag='h1' $fontSize='titleForm'>
            Titulo
          </StyledTitleGreen>
          <StyledInputContainerDark>
            <label htmlFor=''>Label</label>
            <input type='text' placeholder='Input' />
          </StyledInputContainerDark>
          <p>Error</p>
          <StyledButton $buttonSize='default' $buttonStyle='buttonGreenLight'>
            Button Color 2
          </StyledButton>
          <StyledParagraph
            className='category'
            textAlign='center'
            fontColor='white'
          >
            Error
          </StyledParagraph>
          <StyledButton $buttonSize='default' $buttonStyle='buttonGreenLight'>
            Button Color 2
          </StyledButton>
        </StyledFormUserDark>
      </section>
      <section>
        <StyledFormUserLight>
          <StyledTitleWhite tag='h1' $fontSize='titleForm'>
            Titulo
          </StyledTitleWhite>
          <StyledInputContainerLight>
            <label htmlFor=''>Label</label>

            <input type='text' placeholder='Input' />
          </StyledInputContainerLight>
          <p>Error</p>
          <StyledButton $buttonSize='default' $buttonStyle='buttonGreenDark'>
            Button Color 2
          </StyledButton>
          <StyledParagraph
            className='category'
            textAlign='center'
            fontColor='black'
          >
            Error
          </StyledParagraph>
          <StyledButton $buttonSize='default' $buttonStyle='buttonGreenDark'>
            Button Color 2
          </StyledButton>
        </StyledFormUserLight>
      </section>
      <StyledCartSale>
        <div>
          <section className='img'>
            <span>
              <p className='info'>2 Sacolas</p>
              <i className='fa-solid fa-heart'></i>
            </span>
            <h1 className='name'>Padaria</h1>
          </section>
          <section className='description'>
            <h4>Paragrafo</h4>
            <h5>Horario</h5>
            <span>
              <p>
                <i className='fa-solid fa-star'></i>
                <small>4.2</small>
              </p>
              <p>R$20.00</p>
            </span>
          </section>
        </div>
      </StyledCartSale>
    </StyledContainer>
  );
};

export default Styles;
