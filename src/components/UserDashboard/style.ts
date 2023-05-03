import styled from "styled-components";
import arrow from "../../assets/icons/arrow.svg";

export const StyledUserDashboard = styled.main`
  /* border: 1px solid red; */
  background-color: #efe9e8;
  height: 100%;
  width: 100%;

  .categories__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .categories__container > div {
    display: flex;
    align-items: center;
    height: 2.9375rem;
    width: 100%;
    margin: 1rem 0;
    display: none;
  }

  .categories__container > div > h1 {
    font-size: 22px;
    font-weight: 600;
    cursor: pointer;
  }

  .categories__container > nav {
    display: none;
  }

  .categories__container > form {
    display: flex;
    align-items: center;
    height: 2.9375rem;
    width: 100%;
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.greenPrimary};
    border-radius: 0.75rem;
  }

  .categories__container > form > select {
    font-family: "Poppins";
    height: 2.1875rem;
    width: 100%;
    background: url ${{ arrow }} no-repeat right;
    border: none;
    font-size: 22px;
    font-weight: 600;
    padding: 0rem 1rem;
    outline: none;
    webkit-appearance: none;
  }

  .offers__container{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
    /* border: 1px solid red; */
  }

  .offers__container > h1 {
    /* border: 1px solid red; */
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.25rem;
    color: #2e2e2e;
    cursor: pointer;
    width: 100px;
  }

  .offers__container > div {
    display: flex;
    align-items: center;
  }

  .offers__container > div > h2 {
    margin: 0 0 1rem 1rem;
    display: flex;
    color: #2e2e2e;
    font-size: 1rem;
  }

  @media (min-width: 375px) {
  }

  @media (min-width: 425px) {
  }

  @media (min-width: 768px) {
    .categories__container > div {
      display: flex;
      margin-bottom: 0;
    }

    .categories__container > form {
      display: none;
    }

    .categories__container > nav {
      width: 100%;
      /* border: 1px solid red; */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 0.5em;
    }

    .categories__container > nav > button {
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
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
      cursor: pointer;
    }

    .categories__container > nav > button:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

    .categories__container > nav > img {
      object-fit: cover;
    }

    .categories__container > nav > button > p {
      font-size: 1.125rem;
      font-weight: 400;
      color: #a098ae;
    }
  }

  @media (min-width: 768px) {
    .offers__container {
      margin: 1rem 0;
    }

    .offers__container > h1 {
      margin-bottom: 0;
    }

    .offers__container > div {
      display: flex;
      /* border: 2px solid green; */
      height: 50vh;
    }
  }

  @media (min-width: 1024px) {
  }
`;
