import { useNavigate } from 'react-router-dom';
import { RegisterCommerceForm } from '../../components/Form/RegisterCommerceForm';
import { RegisterUserForm } from '../../components/Form/RegisterUserForm';
import { StyledButton } from '../../styles/button';
import companyRegister from '../../assets/images/companyRegister.svg';
import {
  StyledColorBackground,
  StyledFormRegisterCompany,
  StyledRegisterPageHeader,
} from './style';
import { StyledTitleGreen } from '../../styles/typography';

export const RegisterPage = () => {
  const typeofRoute = localStorage.getItem('@handle:typUser');
  const typeNav = localStorage.getItem('@handle:nav');
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeofRoute === 'userRegister' && typeNav === 'register') {
      localStorage.setItem('@handle:typUser', 'userLogin');
      localStorage.setItem('@handle:nav', 'login');
      navigate('/login');
    }
    if (typeofRoute === 'companyRegister' && typeNav === 'register') {
      localStorage.setItem('@handle:typUser', 'companyLogin');
      localStorage.setItem('@handle:nav', 'login');
      navigate('/signin');
    }
  };
  if (typeofRoute === 'userRegister') {
    return (
      <div>
        <div>
          {/* Lógica: Se consumidor, renderizar formulario de registro para este perfil */}
          <RegisterUserForm />
        </div>
        <div>
          <p>Fatos, coisas bonitinhas</p>
        </div>
        <div>
          <p>Já é cadastrado?</p>
          <StyledButton
            $buttonSize='default'
            $buttonStyle='buttonGreenLight'
            onClick={() => {
              handleClick();
            }}
          >
            Login
          </StyledButton>
        </div>
      </div>
    );
  }
  if (typeofRoute === 'companyRegister') {
    return (
      <StyledColorBackground>
        <StyledFormRegisterCompany>
          <StyledRegisterPageHeader>
            <h1>
              Eat<span>Smart</span>
            </h1>
            <StyledButton
              $buttonSize='default'
              $buttonStyle='buttonGreenLight'
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </StyledButton>
          </StyledRegisterPageHeader>
          <section>
            <RegisterCommerceForm />
            <div className='container_nav'>
              <StyledTitleGreen tag='h1' $fontSize='small'>
                Já é cadastrado?
              </StyledTitleGreen>
              <StyledButton
                $buttonSize='default'
                $buttonStyle='buttonGreenLight'
                onClick={() => {
                  handleClick();
                }}
              >
                Login
              </StyledButton>
            </div>
          </section>
          <section className='container__Img'>
            <p className='container__desktop'>Logo</p>
            <img
              className='container__desktop'
              src={companyRegister}
              alt='cadastro'
            />
          </section>
        </StyledFormRegisterCompany>
      </StyledColorBackground>
    );
  }
  return null;
};
