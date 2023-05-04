import styled from "styled-components";
import backgroundImage from "../../assets/images/backgroundCart.svg";

export const StyledCartModalBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background: rgba(51, 51, 51, 0.5);
  z-index: 1001;

  div {
    width: 360px;
    background-color: #ffffff;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 0 14px 0 14px;
  }

  div > header > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #2e2e2e;
  }

  div > header > button {
    background-color: transparent;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #2e2e2e;
    cursor: pointer;
  }

  div > section {
    background-image: url(${backgroundImage});
    width: 332px;
    height: 90px;
    display: flex;
    align-items: center;
    margin-left: 14px;
  }

  div > section > div {
    border-radius: 16px;
    width: 283px;
    height: 53px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 14px;
  }

  div > section > div > p {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #2e2e2e;
  }

  div > section > div > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #056365;
  }

  .cartList__container {
  }

  .cartList__container > h1 {
    margin-left: 14px;
  }

  .cartList__container > div {
  }

  .cartList__container > div > h2 {
    margin-left: 14px;
  }

  .cartList__container > div > h3 {
    margin-left: 14px;
  }
`;

export const StyledCartModalBoxContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(51, 51, 51, 0.5);
  z-index: 1001;

  div {
    width: 360px;
    background-color: #ffffff;
    border-radius: 2rem 0rem 0rem 2rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 0 14px 0 14px;
  }

  div > header > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #2e2e2e;
  }

  div > header > button {
    background-color: transparent;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #2e2e2e;
    cursor: pointer;
  }

  div > section {
    background-image: url(${backgroundImage});
    width: 332px;
    height: 90px;
    display: flex;
    align-items: center;
    margin-left: 14px;
  }

  div > section > div {
    border-radius: 16px;
    width: 283px;
    height: 53px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 14px;
  }

  div > section > div > p {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #2e2e2e;
  }

  div > section > div > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #056365;
  }

  .cartList__container > h1 {
    margin-left: 14px;
  }

  .cartList__container > div > h2 {
    margin-left: 14px;
  }

  .cartList__container > div > h3 {
    margin-left: 14px;
  }
`;
