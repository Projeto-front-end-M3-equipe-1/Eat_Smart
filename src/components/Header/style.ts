import styled from 'styled-components';

export const StyledColorBackground = styled.body`
  @media (min-width: 1024px) {
    background-color: black;
  }
`;

export const StyledLoginPageHeaderCompany = styled.header`
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
    padding: 1rem 0;
    span {
      color: ${({ theme }) => theme.colors.greenPrimary};
    }
  }

  @media (min-width: 425px) {
    position: absolute;
    display: flex;
    flex-direction: column;

    div {
      width: 80%;
      flex-direction: column;
      button {
        width: 100%;
      }
    }
  }
  @media (min-width: 768px) {
    display: flex;
    padding: 1rem;
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    z-index: 1;
    width: 100%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    padding: 1rem 3rem;
  }
`;

export const StyledUserPageHeader = styled.header`
  list-style-type: none;
  z-index: 1;
  width: 100%;
  position: fixed;
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

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h1 {
      color: ${({ theme }) => theme.colors.orangePrimary};
      padding: 1rem 0;
      font-size: 24px;
      margin: 0 1rem;
      span {
        color: ${({ theme }) => theme.colors.greenPrimary};
      }
    }
    nav {
      margin: 0 1rem;
      button {
        cursor: pointer;
        background-color: transparent;
        i {
          color: ${({ theme }) => theme.colors.greenPrimary};
          font-size: 1.275rem;
          padding: 0.275rem;
        }
      }
    }
  }
  section {
    display: flex;
    justify-content: center;
    width: 100%;

    form {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: flex-end;
      border-radius: 1rem;
      height: 2.7rem;
      width: 90%;
      max-width: 421px;
      font-size: 0.875rem;
      padding: 0.9375rem;
      color: ${({ theme }) => theme.colors.gray600};
      background-color: ${({ theme }) => theme.colors.white};
      input {
        width: 100%;
      }
      button {
        padding: 0 0.575rem 0 0.275rem;
        background-color: transparent;
        i {
          color: ${({ theme }) => theme.colors.greenPrimary};
          font-size: 1.5rem;

          ::placeholder {
            font-size: 0.875rem;
          }
        }
      }
    }
  }
  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.greenPrimary};
    width: 100%;
    padding: 1.275rem 1rem;
  }

  .container__reverse {
    display: none;
  }

  @media (min-width: 768px) {
    form {
      min-width: 421px;
    }
  }

  @media (min-width: 1024px) {
    z-index: 1;
    width: 100%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    padding: 1rem 0;
    .container__mobile {
      display: none;
    }
    .container__reverse {
      display: flex;
    }
    h1 {
      color: ${({ theme }) => theme.colors.orangePrimary};
      padding: 1rem 0;
      font-size: 36px;
      margin: 0 1rem;
      span {
        color: ${({ theme }) => theme.colors.greenPrimary};
      }
    }
    li {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: row-reverse;

      div {
        display: flex;
        justify-content: flex-end;
        nav {
          display: flex;
          flex-direction: row;
          margin: 0;
        }
      }
      section {
        text-align: right;
      }
    }
  }
`;
