import styled from 'styled-components';

export const StyledCartProductList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .container__total {
    width: 95%;
    max-height: 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
  }

  div > p {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #2e2e2e;
  }

  div > small {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: #2e2e2e;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
  }

  div:last-child > img {
    position: absolute;
    gap: 1rem;
    left: 40px;
    top: 9px;
  }

  div > button {
    width: 100%;
    height: 45px;
    border-radius: 16px;
    background-color: #ff543d;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  div > button:last-child {
    width: 100%;
    height: 45px;
    border-radius: 16px;
    background-color: #056365;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
`;
