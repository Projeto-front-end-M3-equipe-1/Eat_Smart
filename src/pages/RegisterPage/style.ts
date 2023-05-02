import styled from 'styled-components';

export const StyledColorBackground = styled.body`
  background-color: ${({ theme }) => theme.colors.greenPrimary};
  margin: -3%;
`;

export const StyledFormRegisterCompany = styled.main`
  @media (max-width: 375px) {
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
        margin-bottom: 200px;
      }
    }
    .container__desktop {
      display: none;
    }
  }

  /*   @media (max-width: 425px) {
  }

  @media (max-width: 768px) {
    background-image: none;
    background-color: ${({ theme }) => theme.colors.greenPrimary};
    width: 100%;
    height: 100%;
    margin-top: -225px;
    section:first-child > p {
      margin: 10px;
    }
    section:first-child > small {
      margin: 10px;
    }
    section:last-child {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    div {
      padding-top: 0%;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    } */
`;

export const StyledRegisterPageHeader = styled.header`
  @media (max-width: 375px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.greenPrimary};
    font-family: ${({ theme }) => theme.fonts.primaryPoppins};

    h1 {
      color: ${({ theme }) => theme.colors.orangePrimary};
      span {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
