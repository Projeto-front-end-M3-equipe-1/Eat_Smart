import styled from 'styled-components';

/* export const StyledColorBackground = styled.body`
  @media (min-width: 1024px) {
    background-color: black;
    margin: -3%;
  }
`; */

export const StyledFormRegisterCompany = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.greenPrimary};
  margin: 0 auto;
  max-width: 95%;
  .container_nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      width: 90%;
      max-width: 95%;
    }
  }
  .container__desktop {
    display: none;
  }

  @media (min-width: 425px) {
    align-items: center;
    .container__desktop {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    max-width: 1440px;
    .container__principal {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      max-width: 1440px;
      section {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        button {
          width: 300px;
          max-width: 300px;
          margin: 0;
        }
      }
    }
    .container__desktop {
      margin: 0;
      display: block;
    }
  }
`;

export const StyledRegisterPageHeader = styled.header`
  z-index: 1;
  width: 100%;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  justify-content: space-between;

  font-family: ${({ theme }) => theme.fonts.primaryPoppins};

  h1 {
    color: ${({ theme }) => theme.colors.orangePrimary};
    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (min-width: 1024px) {
    max-width: 1440px;
    display: flex;
    width: 100%;
    max-width: 1440px;
    justify-content: space-between;
    margin: 1rem;
  }
`;
