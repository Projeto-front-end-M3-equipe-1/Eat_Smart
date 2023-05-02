import styled from 'styled-components';
import arrow from '../../assets/icons/arrow.svg';

// background-color: ${({ theme }) => theme.colors.white};
export const StyledUserDashboard = styled.main`
  border: 1px solid red;
  background-color: #efe9e8;
  height: 100%;
  width: 100%;

  section:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  section:first-child > div {
    display: flex;
    align-items: center;
    height: 2.9375rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.greenPrimary};
    border-radius: 0.75rem;
    margin: 1rem 0;
    display: none;
  }

  section:first-child > div > h1 {
    font-size: 22px;
    font-weight: 600;
    padding-left: 1rem;
  }

  section:first-child > nav {
    display: none;
  }

  section:first-child > form {
    display: flex;
    align-items: center;
    height: 2.9375rem;
    width: 100%;
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.greenPrimary};
    border-radius: 0.75rem;
  }

  section:first-child > form > select {
    font-family: 'Poppins';
    height: 2.1875rem;
    width: 100%;
    background: url ${{ arrow }} no-repeat right;
    border: none;
    font-size: 22px;
    font-weight: 600;
    padding: 0rem 1rem;
    outline: none;
    // overflow-x: hidden;
    webkit-appearance: none;
  }

  section:last-child {
    // margin-left: 14px;
  }

  section:last-child > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #2e2e2e;
  }

  section:last-child > div {
  }

  section:last-child > div > h2 {
  }

  @media (min-width: 375px) {
  }

  @media (min-width: 425px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }
`;

// section:first-child > form > select {
//     // display: none;
//   }
