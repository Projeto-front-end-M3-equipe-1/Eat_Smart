import styled from 'styled-components';
import arrow from '../../assets/icons/arrow.svg';

export const StyledUserDashboard = styled.main`
  /* border: 1px solid red; */
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
    /*  margin: 1rem 0; */
    display: none;
  }

  section:first-child > div > h1 {
    font-size: 22px;
    font-weight: 600;
    cursor: pointer;
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
    /*   -webkit-backdrop-filter: none; */
  }

  /*   section:last-child {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
  } */

  /*   section:last-child > h1 {
    border: 1px solid red;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.25rem;
    color: #2e2e2e;
  } */
  /* 
  section:last-child > div {
    display: flex;
    align-items: center;
  } */

  /*  section:last-child > div > h2 {
    margin: 0 0 1rem 1rem;
    display: flex;
    color: #2e2e2e;
    font-size: 1rem;
  } */

  @media (min-width: 375px) {
  }

  @media (min-width: 425px) {
  }

  @media (min-width: 768px) {
    section:first-child > div {
      display: flex;
      margin-bottom: 0;
    }

    section:first-child > form {
      display: none;
    }

    section:first-child > nav {
      width: 100%;
      /* border: 1px solid red; */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 0.5em;
    }

    section:first-child > nav > button {
      display: flex;
      flex-direction: column;
      width: 10.625rem;
      height: 8.75rem;
      background-color: rgb(255, 255, 255);
      align-items: center;
      justify-content: center;
      border: 1px solid white;
      border-radius: 16px;
      padding: 0;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
        rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
      cursor: pointer;
    }

    section:first-child > nav > button:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

    section:first-child > nav > img {
      object-fit: cover;
    }

    section:first-child > nav > button > p {
      font-size: 1.125rem;
      font-weight: 400;
      color: #a098ae;
    }
  }

  @media (min-width: 768px) {
    /*   section:last-child {
      margin: 1rem 0;
    }
 */
    /*   section:last-child > h1 {
      margin-bottom: 0;
    } */

    section:last-child > div {
      display: flex;
      height: 50vh;
    }
  }

  @media (min-width: 1024px) {
  }
`;
